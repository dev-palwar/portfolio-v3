import finocoLogo from "@/assets/Finoco Blue Icon.png";
import lumaraLogo from "@/assets/lumara-jewels.jpeg";
import type { PortfolioData } from "@/types/portfolio";

/**
 * Portfolio data configuration.
 * Exports typed data that can easily be swapped with CMS fetch later.
 */
export const portfolioData: PortfolioData = {
  name: "Dev Palwar",
  tagline: "Full Stack Developer",
  bannerText: "curious.",
  bio: `Hey there! I'm Dev - and yes, that's my real name! In what might be the universe's most fitting coincidence, I also happen to be a developer. Talk about destiny, right?. Well I'm currently pursuing my Master's in Computer Applications. My aim is to learn everything quickly and graduate at a senior level that's why I like to work with startups. I also do freelance work when I have nothing to do or just build cool stuff and share it on twt to impress those cool anime dp anons. So far I have worked with Javascript, on both frontend and backend. Right now, I'm learning Devops and advanced backends.`,

  socials: [
    {
      platform: "github",
      url: "https://github.com/dev-palwar",
      label: "GitHub",
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/dev-palwar",
      label: "LinkedIn",
    },
    {
      platform: "twitter",
      url: "https://x.com/dev_palwar2",
      label: "Twitter",
    },
    {
      platform: "email",
      url: "mailto:devpalwar06@gmail.com",
      label: "Email",
    },
  ],

  projects: [
    {
      id: "1",
      title: "Movies App",
      description:
        "Created this app as a to-do list but for movies. Use it to create your watchlist instead of writing them in your note-taking apps. Revisit the app whenever you need to pick a show to watch! Clean and minimalistic.",
      imageUrl: "https://i.ibb.co/ypgLYpg/Screenshot-2024-07-26-185750.png",
      techStack: ["react", "sass", "expressjs", "mongodb", "nodejs"],
      links: [
        { label: "Live", url: "https://reelink.vercel.app/" },
        { label: "GitHub", url: "https://github.com/dev-palwar/Movie-app" },
      ],
      featured: true,
      details: [
        {
          features: [
            "Mobile-friendly",
            "Works with movies, TV shows, and anime",
            "Login to save your favorites for later",
          ],
        },
      ],
    },
    {
      id: "2",
      title: "Bloggy",
      description:
        "A clean and minimalistic blogging application designed for simplicity. At its core, the backend is powered by GraphQL, providing a flexible and efficient API for social media interactions. The backend is designed to be easily deployable on platforms like Vercel or Netlify, making it simple to integrate into your own application.",
      imageUrl: "https://i.ibb.co/k6QcvMJ/image.png",
      techStack: [
        "nextjs",
        "tailwindcss",
        "mongodb",
        "graphql",
        "typescript",
        "react",
      ],
      links: [
        { label: "Live", url: "https://blogyapp.vercel.app/" },
        {
          label: "GitHub",
          url: "https://github.com/dev-palwar/Blogging-application-frontend",
        },
      ],
      featured: true,
      details: [
        {
          features: [
            "Scalable GraphQL backend for efficient API handling",
            "User authentication, post creation, upvotes, comments, and followers",
            "Easily deployable on platforms like Vercel or Netlify",
            "Uses MongoDB for efficient data management",
          ],
        },
      ],
    },
    {
      id: "3",
      title: "Anime CLI",
      description:
        "Built while learning web scraping. Enter an anime name, and it fetches relevant results, allowing you to download your choice. Planning to add more features in the future. PRs are welcome!",
      imageUrl:
        "https://nooblinux.com/wp-content/uploads/2023/03/anipy-cli-WatchDownload-Anime-Free-via-Terminal-in-Linux-1-768x432.png",
      techStack: ["nodejs"],
      links: [
        { label: "GitHub", url: "https://github.com/dev-palwar/Anime-cli" },
      ],
      details: [
        {
          features: [
            "Web scraping for anime data",
            "Download anime episodes",
            "Plan to add more features in the future",
            "Terminal-based application",
            "Supports multiple video sizes",
            "Easy af to use",
          ],
        },
      ],
    },
    {
      id: "4",
      title: "Typing Speed Tester",
      description:
        "A simple yet effective typing speed tester built with JavaScript. It measures how fast you type and provides real-time feedback on your speed and accuracy.\n\nPerfect for practicing and improving your typing skills!",
      imageUrl: "https://i.ibb.co/Jky0TYy/Typing.png",
      techStack: ["javascript"],
      links: [
        { label: "Live", url: "https://typing-tester-rho.vercel.app" },
        { label: "GitHub", url: "https://github.com/dev-palwar/Typing-tester" },
      ],
      details: [
        {
          features: [
            "Simple and effective typing speed tester",
            "Real-time feedback on speed and accuracy",
            "Perfect for practicing and improving typing skills",
          ],
        },
      ],
    },
    {
      id: "5",
      title: "Brand Storm",
      description:
        "I built this website for a social media agency. The current content is just placeholder text.",
      imageUrl: "https://i.ibb.co/cSNB2Pm3/image.png",
      techStack: ["nextjs", "tailwindcss", "typescript"],
      links: [{ label: "Live", url: "https://brand-storm.vercel.app/" }],
      details: [],
    },
    {
      id: "6",
      title: "Audiophile E-commerce Website",
      description:
        "A solution to a project from [Frontend Mentor](https://www.frontendmentor.io/)",
      imageUrl:
        "https://i.ibb.co/K79tQjk/Screenshot-2023-11-30-at-21-01-17-Audiophile.png",
      techStack: ["react", "tailwindcss", "redux"],
      links: [
        { label: "Live", url: "https://audiophile-react.vercel.app" },
        {
          label: "GitHub",
          url: "https://github.com/dev-palwar/Audiophile-react",
        },
      ],
      details: [],
    },
    {
      id: "7",
      title: "Zentry Clone",
      description:
        "A project I put together to learn Framer Motion and experiment with animations in React apps.",
      imageUrl:
        "https://i.ibb.co/vxCg3Gj0/Screenshot-from-2025-01-29-22-46-51.png",
      techStack: ["nextjs", "tailwindcss", "typescript", "framer-motion"],
      links: [
        { label: "Live", url: "https://zentry-clone-wine.vercel.app/" },
        { label: "GitHub", url: "https://github.com/dev-palwar/zentry-clone" },
      ],
      details: [
        {
          features: [
            "Framer Motion for smooth animations",
            "Responsive design",
            "Uses Next.js for server-side rendering",
          ],
        },
      ],
    },
    {
      id: "8",
      title: "Old Portfolio Website",
      description:
        "My old portfolio website. Use it if you want but just star the repo :)",
      imageUrl: "https://i.ibb.co/3fxSH41/image.png",
      techStack: ["react", "sass", "framer-motion"],
      links: [
        { label: "Live", url: "https://devpalwarold.vercel.app/" },
        { label: "GitHub", url: "https://github.com/dev-palwar/Portfolio" },
      ],
      details: [],
    },
    {
      id: "9",
      title: "DCrypto",
      description:
        "A sleek and responsive cryptocurrency tracker built with React and Chakra UI. Get real-time price updates, market trends, and essential data on your favorite cryptocurrencies.",
      imageUrl:
        "https://i.ibb.co/Px0g6rn/Screenshot-2023-12-03-at-15-52-23-Crypto-app.png",
      techStack: ["react", "chakraui"],
      links: [
        { label: "Live", url: "https://react-crypto-app1.vercel.app" },
        {
          label: "GitHub",
          url: "https://github.com/dev-palwar/react-crypto-app",
        },
      ],
      featured: true,
      details: [
        {
          features: [
            "Live price tracking for various cryptocurrencies",
            "Real-time market data updates",
            "Dark mode support for better usability",
          ],
        },
      ],
    },
    {
      id: "10",
      title: "To-Do App",
      description:
        "Built this when I was learning JS and have been using it ever since. It's minimalistic and clutter-free, making it easy to keep track of tasks in the browser, where I spend most of my time",
      imageUrl:
        "https://i.ibb.co/m8tGb4X/Screenshot-2023-11-30-at-20-08-03-To-dos.png",
      techStack: ["javascript", "webpack"],
      links: [
        { label: "Live", url: "https://mytodolistapp0.vercel.app/" },
        {
          label: "GitHub",
          url: "https://github.com/dev-palwar/To-do_list-app",
        },
      ],
      details: [
        {
          features: [
            "Minimalistic and clutter-free to-do list app",
            "Easy to use and navigate",
          ],
        },
      ],
    },
    {
      id: "11",
      title: "Text Translator Extension",
      description:
        "A browser extension that provides the meaning of selected text on a webpage. Currently, it only works on certain websites due to Content Security Policies (CSP).",
      imageUrl:
        "https://i.ibb.co/jZ92qmPs/DALL-E-2025-03-12-17-53-57-A-modern-browser-window-with-a-magnifying-glass-hovering-over-highlighted.webp",
      techStack: ["javascript"],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/dev-palwar/translate-extension",
        },
      ],
      details: [],
    },
    {
      id: "12",
      title: "Telegram RSS Scraper & Notifier",
      description:
        "This was my first-ever freelance project! All you have to do is enter a channel name, and the website fetches the latest post, notifying all subscribed clients.\nIt consists of:\n\n\n **A Telegram bot** – Lets users update the channel name.\n\n **A website** – Pulls the latest posts from the channel’s RSS feed and sends notifications.\n\n The main feature of this project is that it works for **any channel** without needing bot admin access.\nIf you prefer the traditional method, check out this one: [here](https://github.com/dev-palwar/chunnilaal-bot).",
      imageUrl:
        "https://i.ibb.co/W4Tc1tjh/DALL-E-2025-03-11-20-35-37-A-futuristic-and-minimalistic-website-interface-displaying-a-Telegram-bot.webp",
      techStack: ["expressjs", "javascript", "nodejs", "firebase"],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/dev-palwar/telegram-rss-feed-scraper",
        },
      ],
      details: [
        {
          features: [
            "A Telegram bot to update the channel name",
            "Works for any channel",
            "Firebase-enabled push notification service",
          ],
        },
      ],
    },
    {
      id: "15",
      title: "Twitter follow-all extension",
      description:
        "Just one of the many assignment projects I worked on, but I found it cool enough to share here. It doesn’t have any useful features at the moment, but given its structure, it can be scaled to include things like posting tweets, liking, and auto-replying to comments",
      imageUrl: "https://i.ibb.co/2Ss63V9/twt-follow-all-ext.webp",
      techStack: ["typescript", "react"],
      links: [
        {
          label: "Live",
          url: "https://github.com/dev-palwar/twt-follow-all-extension",
        },
        {
          label: "GitHub",
          url: "https://github.com/dev-palwar/twt-follow-all-extension",
        },
      ],
      details: [
        {
          features: [
            "A Twitter extension to follow all users on the timeline",
            "Can be scaled to include things like posting tweets, liking, and auto-replying to comments",
          ],
        },
      ],
    },
  ],

  experience: [
    {
      id: "exp-1",
      company: "Finoco AI",
      role: "Frontend Developer Intern",
      period: "June 2025 - Present",
      highlights: [
        "Builds scalable, responsive interfaces using React and modern web tech.",
      ],
      logoUrl: finocoLogo.src,
      techStack: [
        "react",
        "nextjs",
        "tailwindcss",
        "typescript",
        "nodejs",
        "expressjs",
        "mongodb",
      ],
      place: "Bangalore, India | Remote",
    },
    {
      id: "exp-2",
      company: "Lumara Jewels",
      role: "Frontend Developer Intern",
      period: "Dec 2023 - May 2024",
      highlights: [
        "Translates Figma designs into a fully functional homepage using Sass.",
        "Implements a backend-driven UI.",
        "Implements authentication mechanisms, including manual and OTP-based login.",
        "Streamlines the flow from the product details page to the cart page.",
        "Develops a comprehensive product details page, fetching data from the backend and integrating components like carousels, image galleries, and product customization options for jewelry according to their metals, diamonds, and size.",
        "Creates a dynamic cart page with three subpages: cart details, address selection, and checkout, ensuring a smooth checkout process.",
      ],
      logoUrl: lumaraLogo.src,
      techStack: [
        "react",
        "nextjs",
        "tailwindcss",
        "typescript",
        "nodejs",
        "expressjs",
        "mongodb",
      ],
      place: "Delhi, India | Remote",
    },
  ],

  testimonials: [
    {
      id: "t-1",
      quote:
        "Dev stays super meticulous with his craft and responsibilities. His ability to quickly understand product requirements and translate them into clean, maintainable code consistently stands out in every project we ship together.",
      name: "Rahul Chakraborty",
      role: "Product Manager",
      avatarUrl:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=2",
    },
    {
      id: "t-2",
      quote:
        "He stays highly reliable, a great communicator, and consistently delivers quality work. Even under tight timelines, Dev keeps everyone aligned while still paying attention to the little details that make the experience feel polished.",
      name: "Artiom Dashinsky",
      role: "Founder",
      avatarUrl:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=2",
    },
    {
      id: "t-3",
      quote:
        "Dev stays pragmatic, curious, and quietly reliable. He raises the bar not with loud opinions, but with thoughtful problem‑solving and end‑to‑end ownership that makes the entire team’s work feel more confident.",
      name: "Sanket Chaudhari",
      role: "Engineering Lead",
      avatarUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=2",
    },
  ],

  writings: [
    {
      id: "windows-terminal",
      title: ">_ my windows terminal",
      date: "13 Jan, 2024",
      coverImageUrl: "windows-terminal.jpg",
      contentPath: "src/content/writings/windows-terminal.md",
    },
    {
      id: "firefox-custom-css",
      title: "Firefox custom CSS",
      date: "9 Jul, 2025",
      contentPath: "src/content/writings/firefox-custom-css.md",
    },
    {
      id: "kitty-zsh-guide",
      title: "Kitty + Zsh guide",
      date: "16 Mar, 2025",
      contentPath: "src/content/writings/kitty-zsh-guide.md",
    },
  ],
};
