![Server Actions Backdoor](server-actions-backdoor-16-3.png)

# Server Actions Are Public Endpoints — Your Middleware Was Never Involved

So I was doing a security audit on a Next.js 14 booking app a while back — real production app, real money moving through it, Zoom meetings getting scheduled, the whole deal. And I found something that honestly made me pause for a sec, because the app was *not* sloppy. Whoever built it actually knew what they were doing (and ofc I know him. He’s me).

Had this solid Edge middleware sitting in front of `/admin/*`. No valid signed JWT admin cookie? Straight to the login page, no exceptions. On paper, the admin panel was locked down tight.

And yet I still had to flag a HIGH severity bug: **the admin Server Actions had zero authentication.** `createOffering`, `updateOffering`, `deleteOffering`, `setAvailabilityOverride` — anyone on the internet could call these. Not "anyone who's logged in." Anyone. As in, some random person with curl.

Let’s get into it.

### Wait, hold on — doesn’t that break normal bookings?

This was literally the first pushback I got when I brought it up. “If we lock these down to admins only, won’t regular customers get blocked from booking?”

Totally fair question, and it points at something a lot of people get fuzzy on with the App Router.

Turns out, no — customer bookings never touched these Server Actions in the first place. That flow went through a normal API route (`/api/bookings/create-order`), which was wired up to a Razorpay webhook. Completely separate path.

The Server Actions I flagged were purely the backend for the admin dashboard buttons. `deleteOffering` was quite literally what fires when an admin clicks "Delete" on the admin UI. That's it. Nothing to do with customers.

Which is where it gets interesting.

### The “bouncer” that isn’t actually watching every door

Here’s the assumption basically every dev makes without realizing it:

> *“My middleware blocks people from even* seeing *the admin page. So they can’t click Delete. So `deleteOffering` is safe."*
>

That logic feels airtight. It is not airtight. It’s actually completely wrong, and here’s why.

The second you slap `'use server'` at the top of a function, Next.js quietly turns it into its own standalone, publicly reachable endpoint. It doesn't care whether anyone ever loaded the admin page. It doesn't care about your middleware config. It just... exists, out there, waiting for a request.

Think of your middleware as a bouncer standing at the front door of a club, checking IDs. Solid setup. Except the club also has a back door around the side that the bouncer has literally never been told about. Server Actions are that back door.

## How someone would actually exploit this

No admin login required. No visiting `/admin` at all. Here's the walkthrough:

### Step 1 — grab the Action ID

Every Server Action gets an encrypted ID baked in at build time (something like `7f3a8b`). Worth being accurate here — Next.js deliberately makes these IDs non-deterministic and rotates them on every new build specifically so nobody can predict them ahead of time. So no, cloning the repo and
building it locally will *not* hand you production's exact ID. That's a common misconception, and it's not how current Next.js actually works.

But here’s the thing — none of that matters, because the ID doesn’t need to be *predicted*. It just needs to be *read*, and it’s sitting in plain view the whole time:

- Whatever ID the live site is currently using gets shipped straight into the public JS bundle, because that’s literally how the browser knows what to call. Open dev tools, trigger the action once as a legit admin (or just watch any admin button click in the Network tab), and the `Next-Action` header is right there on the request.
- Even without triggering it yourself, poking around the downloaded `.js` chunks near Next's `callServer` internals will usually surface it too.

So the “unguessable, rotating ID” protection doesn’t actually buy you as much as it sounds like. It stops someone from *guessing* an ID cold. It does nothing to stop someone who just watches how your own site talks to your own server for five minutes.

### Step 2 — fire the request, no UI involved

Server Actions run off a POST request carrying a special `Next-Action` header. So the attacker just... does this:

```
curl -X POST "https://yourdomain.com/" \
  -H "Next-Action: 7f3a8b" \
  -H "Content-Type: text/plain;charset=UTF-8" \
  -d '["<id-of-the-offering>"]'
```

And here’s the chain reaction on your server:

1. Request lands on `/` — a totally normal, public route.
2. Middleware checks it: “not `/admin`, carry on" — waves it right through.
3. Next.js notices the `Next-Action: 7f3a8b` header.
4. It routes the payload directly into `deleteOffering`.
5. `deleteOffering` has no auth check inside it, so it just... does what it's told. Record gone.

That’s the whole attack. No login, no admin panel, no middleware bypass trickery even needed — because the middleware was never in the request’s path to begin with.

## The actual fix: put a bouncer *inside* the room

The lesson here isn’t “middleware is bad.” Middleware is fine, it’s just doing a job it was never designed to do for this case — it protects *page rendering*, not the Server Actions themselves.

So the fix is simple in concept: stop trusting the front door, and put a check right inside the function that can actually cause damage.

```
// src/actions/offering.ts
'use server'

export async function deleteOffering(id: string) {
  // 1. The Internal Bouncer — is this really an admin?
  await requireAdmin()

  // 2. Only runs if that check passes
  await prisma.offering.delete({ where: { id } })
}
```

That’s it. Now even if someone pulls the Action ID straight out of the Network tab and crafts the perfect curl request — `requireAdmin()` throws before Prisma ever gets touched.

## The takeaway

If your app uses Server Actions for anything remotely sensitive — deleting data, changing prices, admin-only operations — don’t assume that hiding the button behind a login screen is the same as securing the function behind it. It’s not. Every `'use server'` function is its own quiet little public endpoint whether you meant it to be or not.

Middleware protects what people *see*. Auth checks inside the action protect what people can *do*. You need both, and it’s really easy to only build one and think you’re covered.

Worth going and grepping your codebase for `'use server'` right now, just saying.