# If the browser can see it, it’s not a secret

![API keys](apikey.png)

### A practical guide to handling `.env` files in frontend & backend apps

Had a small panic moment today.

I was checking a frontend request in DevTools and noticed something I really shouldn’t have.

The bearer token.

The same API key I’m paying for. Just sitting there in the headers.

Felt dumb for a minute — but honestly this is one of those lessons you only learn the hard way.

Takeaway:

> If your API key is in the frontend, it’s already public.
>

Doesn’t matter if it’s hidden in code, env files, minified bundles, or request headers.

If it ships to the browser, the browser can read it.

If the browser can read it — so can anyone else.

This post isn’t just about that mistake though. It’s a complete mental model for handling `.env` files across frontend and backend — what they actually do, what they don’t do, and the traps people fall into.

---

## First — what `.env` files actually are (and aren’t)

A `.env` file is **not security**.

It’s just configuration.

All it does is let your runtime inject values into your application environment. That’s it.

It does NOT:

- Encrypt values
- Hide secrets
- Prevent exposure
- Protect keys

It simply avoids hardcoding values in source.

Whether those values stay private depends entirely on **where they’re used**.

That distinction matters more than anything else in this article.

---

## The core rule

### Backend environment variables → private

### Frontend environment variables → public

That’s the whole game.

If code runs:

- On a server → variables stay server-side
- In a browser → variables are bundled and exposed

There’s no middle ground here.

---

## Why frontend env vars are always exposed

Modern frontend apps bundle everything.

Webpack

Vite

Parcel

Next.js build step

They replace environment variables at **build time**, not runtime.

So this:

```jsx
process.env.API_KEY
```

Becomes this:

```jsx
"sk_live_abc123"
```

Inside your JS bundle.

Anyone can:

- View source
- Inspect network requests
- Check DevTools
- Decompile bundles

Even if:

- Code is minified
- Variables are “hidden”
- `.env` isn’t committed

None of that matters.

You shipped the secret.

It’s public now.

---

## The correct architecture

Frontend should never talk to third-party APIs using secrets.

Instead:

```
Browser
   ↓
Your Backend
   ↓
Third-Party Service
```

Backend adds:

- Bearer tokens
- API keys
- Auth headers

Because backend env vars aren’t exposed.

---

## “I don’t have a backend”

You probably do.

### If you use Next.js

API routes already exist.

```
/app/api/*
/pages/api/*
```

They run server-side.

Secrets are safe there.

---

### If you deploy static frontend

Use lightweight middle layers:

- Cloudflare Workers
- Vercel Edge Functions
- Netlify Functions
- AWS Lambda

You don’t need a monolith server.

Just a secure hop.

---

## Frontend env vars that ARE okay

Not everything is forbidden.

Safe examples:

- Public analytics keys
- Feature flags
- Public base URLs
- Sentry public DSN
- Firebase public config

Rule of thumb:

> If leaking it costs money or grants access — don’t expose it.
>

---

## Framework-specific gotchas

### Next.js

Anything prefixed with:

```
NEXT_PUBLIC_
```

Is exposed to the browser.

People forget this constantly.

This is public:

```
NEXT_PUBLIC_API_KEY=hello_world
```

This is private:

```
SECRET_KEY=hello_world
```

Unless you reference it in client code — then you just exposed it anyway.

---

### Vite

Same idea:

```
VITE_
```

Prefix means public.

---

### Create React App

```
REACT_APP_
```

Public.

---

### Pattern you should internalize

Public prefix = bundled

Bundled = exposed

---

## The `.env` Git mistake everyone makes

`.env` pushed once → forever compromised.

Even if you delete it.

Git history remembers.

Bots scrape GitHub continuously for:

- AWS keys
- Stripe keys
- OpenAI tokens

Best practice:

1️⃣ Revoke immediately

2️⃣ Rotate keys

3️⃣ Remove from history (optional but good)

Tools:

- `git filter-repo`
- BFG Repo Cleaner

But rotation is the real fix.

---

## Production env handling (another common gap)

Local `.env` isn’t production.

Use platform secret managers:

- Vercel env dashboard
- Render secrets
- AWS Parameter Store
- Docker secrets
- GitHub Actions secrets

Never:

- Commit `.env.production`
- Upload secrets to CI logs
- Print them for debugging

Yes — people do this.

---

## Runtime vs Build-time confusion

Huge source of bugs.

### Frontend

Env read during build

Changing value requires rebuild

---

### Backend

Env read at runtime

Changing value requires restart

---

People often change `.env` and wonder why frontend didn’t update.

Because the value is baked into the bundle already.

---

## Personal mental checklist now

Before adding any env var I ask:

1️⃣ Where does this code run?

2️⃣ Could this key cost money?

3️⃣ Could it grant access?

4️⃣ Would I post this on Twitter?

If answer isn’t yes — backend only.

---

## Final takeaway

This whole thing taught me something simple:

The frontend is not trusted.

It’s not private.

It’s not secure.

It’s just a UI running on someone else’s machine.

Treat it that way and your architecture decisions get easier.

Let frontend:

- Collect input
- Render UI
- Call your backend

Let backend:

- Hold secrets
- Sign requests
- Enforce access
- Talk to paid APIs

And remember:

> If the browser can see it, it’s not a secret.
>

Sharing this so someone else doesn’t learn it the expensive way