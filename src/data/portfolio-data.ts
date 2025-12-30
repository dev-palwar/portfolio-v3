import finocoLogo from "@/assets/Finoco Blue Icon.png";
import lumaraLogo from "@/assets/lumara-jewels.jpeg";
import type { PortfolioData } from "@/types/portfolio";

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
      id: "reelink",
      title: "Reelink",
      description:
        "Created this app as a to-do list but for movies. Use it to create your watchlist instead of writing them in your note-taking apps. Revisit the app whenever you need to pick a show to watch! Clean and minimalistic.",
      imageUrl:
        "https://i.ibb.co/C3nwcMQk/Chat-GPT-Image-Dec-30-2025-06-49-24-PM.png",
      techStack: ["react", "sass", "expressjs", "mongodb", "nodejs"],
      links: [
        { label: "Live", url: "https://reelink.vercel.app/" },
        { label: "GitHub", url: "https://github.com/dev-palwar/Movie-app" },
      ],
      featured: true,
      metadata: {
        timeline: "2 months",
        role: "Full Stack Developer",
        team: "Solo",
        status: "Completed",
      },
      details: {
        overview:
          "A modern movie discovery and watchlist management platform that transforms how users track and organize their entertainment. Built as a personal project to solve the problem of scattered movie recommendations across different note-taking apps, this application provides a centralized, beautiful interface for discovering movies, TV shows, and anime. The app integrates seamlessly with The Movie Database (TMDb) API to provide real-time movie data, ratings, and detailed information, while offering a personalized experience through user authentication and persistent watchlists.",
        whyBuilt: [
          "I was tired of writing movie recommendations in random note-taking apps that weren't designed for this purpose.",
          "Wanted a clean, dedicated space to manage my watchlist without the clutter of other notes.",
          "Needed a solution that works across devices and syncs my watchlist automatically.",
          "Wanted to learn full-stack development by building something I'd actually use daily.",
          "The design inspiration came from vitordino's aesthetic - wanted to create something minimalistic yet powerful.",
        ],
        features: [
          "Advanced search functionality that queries movies, TV shows, and anime from TMDb API",
          "Personalized watchlist management with persistent storage in MongoDB",
          "Google OAuth authentication for secure user accounts",
          "Responsive design that works seamlessly on mobile, tablet, and desktop",
          "Real-time movie data including ratings, release dates, genres, and synopsis",
          "Beautiful, minimalistic UI built with React and Sass",
          "Backend API built with Express.js for scalable architecture",
          "User-specific watchlists that sync across devices",
          "Movie detail pages with comprehensive information",
          "Clean navigation and intuitive user experience",
        ],
        techStack: {
          frontend: ["React", "Sass", "JavaScript"],
          backend: ["Node.js", "Express.js"],
          database: ["MongoDB"],
          tools: ["TMDb API", "Google OAuth", "Vercel"],
          other: ["RESTful API", "JWT Authentication"],
        },
        challenges: [
          "Integrating TMDb API efficiently while managing rate limits and API costs",
          "Designing a responsive UI that maintains aesthetic appeal across all screen sizes",
        ],
        solutions: [
          "Implemented intelligent API caching to reduce redundant TMDb requests and stay within rate limits",
          "Leveraged Sass mixins and responsive design patterns for consistent UI across devices",
        ],
        impact: {
          achievements: [
            "This was my first successfully deployed and maintained production-ready full-stack application",
            "A tool that I personally use daily for managing my entertainment watchlist",
          ],
        },
        futurePlans: [
          "Add social features like sharing watchlists with friends",
          "Implement movie recommendations based on user preferences",
          "Add rating and review functionality for watched content",
          "Create collections and custom categories for better organization",
          "Add calendar integration for release date tracking",
          "Implement dark mode toggle for better user experience",
          "Add export functionality to download watchlist as CSV or JSON",
        ],
      },
    },
    {
      id: "recode",
      title: "Recode",
      description:
        "A simple LeetCode solved problems tracker. I kept forgetting which problems I'd already done, and opening LeetCode to scroll through submissions felt like too much effort. So I built this clean, minimal tracker that just works.",
      imageUrl:
        "https://i.ibb.co/5hkwwHQq/Chat-GPT-Image-Dec-30-2025-06-29-28-PM.png",
      techStack: [
        "nextjs",
        "react",
        "typescript",
        "tailwindcss",
        "mongodb",
        "prisma",
      ],
      links: [
        { label: "Live", url: "https://recode-leetcode.vercel.app/" },
        { label: "GitHub", url: "https://github.com/dev-palwar/Recode" },
      ],
      featured: true,
      metadata: {
        timeline: "1 month",
        role: "Full Stack Developer",
        team: "Solo",
        status: "Completed",
      },
      details: {
        overview:
          "Recode is a straightforward Next.js application that helps developers track which LeetCode problems they've already solved. Born out of frustration with forgetting solved problems and the tedious process of scrolling through LeetCode submissions, this tool provides a clean, organized way to keep track of your coding practice. It's intentionally simple - no fancy features, just something that works and looks decent while doing it.",
        whyBuilt: [
          "I kept forgetting which LeetCode problems I'd already solved, and my memory is terrible.",
          "Opening LeetCode and scrolling through my submissions felt like too much effort sometimes.",
          "Wanted something cleaner than a text file for tracking solved problems.",
          "Spreadsheets felt too corporate for tracking coding problems.",
          "Figured I might as well make it look decent while I'm at it.",
        ],
        features: [
          "<a href='/projects/recode-leetcode-extension' target='_blank' rel='noopener noreferrer' class='font-medium text-primary hover:text-primary/80 underline decoration-primary/30 underline-offset-2 hover:decoration-primary/60 transition-colors'>Browser extension integration</a> for easy problem fetching",
          "MongoDB database with Prisma ORM for reliable data storage",
          "Personal problem tracking that syncs across devices",
          "Filtering and search functionality for tracked problems",
          "Problem difficulty and topic categorization",
        ],
        techStack: {
          frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
          backend: ["Next.js API Routes"],
          database: ["MongoDB", "Prisma ORM"],
          tools: ["Clerk", "Vercel"],
          other: ["Browser Extension Integration"],
        },
        challenges: ["Fetching solved problems from LeetCode's website"],
        solutions: [
          "Leetcode does not have an official API, so I tried to scrape the solved problems from the website but its not reliable and can break anytime. So I built a browser extension that can fetch the solved problems from Leetcode's website using user cookies and sync them with the web app",
        ],
        impact: {
          achievements: [
            "Built a tool that solves a real problem I face daily",
            "Successfully integrated browser extension with web application",
          ],
        },
        futurePlans: [
          "Add statistics and progress visualization",
          "Support for multiple problem sources beyond LeetCode",
          "Export functionality to download problem lists",
        ],
      },
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
      featured: false,
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
        "A simple command-line program for downloading animes. Built while learning web scraping - enter an anime name, and it fetches relevant results, allowing you to download your choice. Easy to use and perfect for anime enthusiasts who prefer the terminal.",
      imageUrl:
        "https://nooblinux.com/wp-content/uploads/2023/03/anipy-cli-WatchDownload-Anime-Free-via-Terminal-in-Linux-1-768x432.png",
      techStack: ["nodejs", "javascript"],
      links: [
        { label: "GitHub", url: "https://github.com/dev-palwar/Anime-cli" },
      ],
      featured: true,
      metadata: {
        timeline: "2 weeks",
        role: "Developer",
        team: "Solo",
        status: "Completed",
      },
      details: {
        overview:
          "Anime CLI is a straightforward command-line tool that simplifies downloading anime episodes directly from your terminal. Built as a learning project to understand web scraping techniques, this tool demonstrates how to interact with web APIs and scrape data programmatically. It provides an interactive interface where users can search for anime, view available episodes, and download their preferred content with just a few commands.",
        whyBuilt: [
          "Wanted to learn web scraping and understand how to extract data from websites programmatically.",
          "Needed a practical project to apply Node.js skills in a real-world scenario.",
          "Wanted to create something useful for anime enthusiasts who prefer command-line tools.",
          "Wanted to contribute to the open-source community with a tool others might find useful.",
        ],
        features: [
          "Interactive command-line interface for searching and downloading anime",
          "Web scraping functionality to fetch anime data and episode information",
          "Search functionality that returns relevant anime results based on user input",
          "Episode selection and download capabilities",
          "Simple installation process with npm",
          "Terminal-based workflow that's fast and efficient",
          "Supports multiple video quality options",
          "Easy-to-follow instructions and user-friendly prompts",
        ],
        techStack: {
          frontend: [],
          // backend: ["Node.js"],
          database: [],
          tools: ["Node.js", "Puppeteer", "Axios"],
          // other: ["npm"],
        },
        challenges: [
          "Understanding web scraping techniques and handling different website structures",
          "Handling network requests and managing download processes",
        ],
        solutions: [
          "Used Node.js library called puppeteer for web scraping and browser inspection tool to extract anime titles, episodes, and download links",
          "Used Axios streams with proper error handling, retries, progress tracking, and controlled resource management.",
        ],
        impact: {
          achievements: [
            "Successfully learned web scraping techniques through hands-on implementation",
            "Created a functional tool that solves a real problem for anime enthusiasts",
            "Demonstrated ability to build practical CLI applications with Node.js",
            "Open-sourced the project and received positive feedback from users who found it useful",
          ],
        },
        futurePlans: [
          "None. Because this is illegal and I don't have time to maintain it or deal with the legal issues. I purely built this for fun and to learn web scraping.",
        ],
      },
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
      featured: false,
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
    {
      id: "yt-ext",
      title: "YouTube Comments Sidebar Extension",
      description:
        "A simple Chrome extension that moves YouTube comments to a sidebar above the recommended videos section. All comment features work - likes, replies, posting, everything! Clean UI that matches YouTube's design.",
      imageUrl:
        "https://i.ibb.co/tpqTh6RN/Chat-GPT-Image-Dec-30-2025-07-35-41-PM.png",
      techStack: ["javascript", "html", "css"],
      links: [{ label: "GitHub", url: "https://github.com/dev-palwar/yt-ext" }],
      featured: true,
      metadata: {
        timeline: "1 week",
        role: "Developer",
        team: "Solo",
        status: "Completed",
      },
      details: {
        overview:
          "YouTube Comments Sidebar Extension is a Chrome browser extension that enhances the YouTube viewing experience by relocating the comments section into a convenient sidebar. Instead of scrolling past recommended videos to find comments, users can now access them in a dedicated sidebar that appears above the recommended section. The extension preserves all native YouTube comment functionality - users can like, reply, post new comments, and load more comments, all while maintaining YouTube's original design aesthetic and supporting both dark and light modes.",
        whyBuilt: [
          "Got tired of scrolling past recommended videos every time I wanted to read or interact with comments",
          "Wanted to improve the YouTube viewing experience by making comments more accessible",
          "Wanted to learn Chrome extension development and understand how browser extensions work",
          "Saw an opportunity to create a simple, focused tool that solves a real UX problem",
          "Wanted to practice DOM manipulation and CSS styling in a real-world project",
        ],
        features: [
          "Moves YouTube comments to a dedicated sidebar on the right side of the page",
          "Preserves all native YouTube comment functionality (like, reply, post, load more)",
          "Clean UI that seamlessly matches YouTube's original design",
          "Supports both dark and light mode themes",
          "Refresh button to reload comments",
          "Toggle button to show/hide the sidebar",
          "Works by physically relocating the actual comments section (not copying)",
          "Maintains all YouTube comment features and interactions",
        ],
        techStack: {
          frontend: ["HTML", "CSS", "JavaScript"],
          backend: [],
          database: [],
          tools: ["Chrome Extension API", "Manifest V3"],
          other: ["DOM Manipulation", "Content Scripts", "Browser Extension"],
        },
        challenges: [
          "Understanding Chrome extension architecture and manifest configuration",
          "Finding and relocating YouTube's comments section without breaking functionality",
          "Ensuring all comment features continue to work after moving the DOM element",
          "Matching YouTube's design aesthetic for seamless integration",
          "Handling dynamic content loading when switching between videos",
          "Making the extension work with YouTube's dark/light mode",
        ],
        solutions: [
          "Used Chrome's content scripts to inject JavaScript into YouTube pages",
          "Leveraged DOM manipulation to physically move the comments section rather than copying it",
          "Preserved all event listeners and functionality by moving the actual element",
          "Matched YouTube's CSS styling and design patterns for seamless integration",
          "Implemented refresh functionality to handle dynamic content loading",
          "Used CSS variables and media queries to support both dark and light themes",
        ],
        impact: {
          achievements: [
            "Successfully learned Chrome extension development and Manifest V3",
            "Created a functional tool that improves YouTube UX for users",
            "Demonstrated ability to manipulate DOM while preserving functionality",
            "Built a clean, focused extension that solves a real problem",
            "Open-sourced the project for others to use and learn from",
          ],
        },
        futurePlans: [
          "Add keyboard shortcuts for common actions",
          "Implement customizable sidebar width",
          "Add option to remember sidebar visibility state",
          "Support for YouTube's comment filters and sorting options",
          "Add smooth animations for sidebar show/hide",
          "Improve handling of dynamic content updates",
          "Add support for YouTube Shorts comments",
          "Create options page for user preferences",
        ],
      },
    },
    {
      id: "recode-leetcode-extension",
      title: "Recode LeetCode Extension",
      description:
        "A browser extension that integrates with <a href='/projects/recode' target='_blank' rel='noopener noreferrer' class='font-medium text-primary hover:text-primary/80 underline decoration-primary/30 underline-offset-2 hover:decoration-primary/60 transition-colors'>Recode</a> to seamlessly track solved LeetCode problems. Mark problems as solved directly from LeetCode's website and sync them with your Recode account. Works with both Chrome and Firefox.",
      imageUrl:
        "https://i.ibb.co/xStyDQKS/Chat-GPT-Image-Dec-30-2025-08-08-14-PM.png",
      techStack: ["javascript", "html"],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/dev-palwar/recode-leetcode-extension",
        },
      ],
      featured: false,
      metadata: {
        timeline: "1 week",
        role: "Developer",
        team: "Solo",
        status: "Completed",
      },
      details: {
        overview:
          "Recode LeetCode Extension is a browser extension that bridges the gap between LeetCode and the Recode tracking platform. Instead of manually adding solved problems to Recode, users can mark problems as solved directly from LeetCode's website, and the extension automatically syncs this information with their Recode account. This seamless integration eliminates the need to switch between tabs and manually track progress, making the coding practice workflow much more efficient.",
        whyBuilt: [
          "Wanted to eliminate the friction of manually tracking solved problems in Recode",
          "Saw an opportunity to integrate Recode directly with LeetCode for seamless workflow",
          "Wanted to learn browser extension development and understand content script injection",
          "Needed a way to automatically sync solved problems from LeetCode to Recode",
          "Wanted to create a companion tool that enhances the Recode experience",
        ],
        features: [
          "Mark LeetCode problems as solved directly from the problem page",
          "Automatic synchronization with Recode account",
          "Works seamlessly with both Chrome and Firefox browsers",
          "Content script injection to interact with LeetCode's DOM",
          "Popup interface for extension controls",
          "Simple installation process for both browsers",
          "No need to manually switch between LeetCode and Recode",
          "Real-time problem tracking integration",
        ],
        techStack: {
          frontend: ["HTML", "JavaScript"],
          backend: [],
          database: [],
          tools: [
            "Chrome Extension API",
            "Firefox WebExtensions API",
            "Manifest V3",
          ],
          other: ["Content Scripts", "DOM Manipulation", "Browser Extension"],
        },
        challenges: [
          "Understanding LeetCode's DOM structure to identify problem elements",
          "Implementing content scripts that work reliably on LeetCode pages",
          "Creating a seamless integration between the extension and Recode's API",
          "Ensuring the extension works on both Chrome and Firefox",
          "Handling dynamic content loading on LeetCode's single-page application",
          "Managing authentication and API communication with Recode",
        ],
        solutions: [
          "Used content scripts to inject JavaScript into LeetCode pages",
          "Leveraged DOM manipulation to detect and interact with problem elements",
          "Implemented API calls to sync solved problems with Recode backend",
          "Created browser-agnostic code that works with both Chrome and Firefox extension APIs",
          "Used event listeners to handle dynamic content updates on LeetCode",
          "Designed a simple popup interface for user controls and status",
        ],
        impact: {
          achievements: [
            "Successfully created a seamless integration between LeetCode and Recode",
            "Eliminated manual tracking workflow, saving users significant time",
            "Demonstrated ability to build browser extensions for multiple platforms",
            "Enhanced the Recode platform with a practical companion tool",
            "Open-sourced the extension for others to use and contribute to",
          ],
        },
        futurePlans: [
          "Add support for tracking problem difficulty and topics automatically",
          "Implement batch marking for multiple problems",
          "Add notification when problems are successfully synced",
          "Support for tracking submission status and acceptance rate",
          "Add option to sync problem notes and solutions",
          "Implement offline mode with sync when online",
          "Add keyboard shortcuts for quick marking",
          "Create options page for user preferences and settings",
        ],
      },
    },
    // {
    //   id: "dmbro",
    //   title: "DMBro",
    //   description:
    //     "A command-line interface tool for downloading music from the DMB (Dave Matthews Band) website. Built with Python, it provides a simple way to access and download music files directly from the band's official site through the terminal.",
    //   imageUrl: "https://i.ibb.co/placeholder/dmbro.png",
    //   techStack: ["python"],
    //   links: [{ label: "GitHub", url: "https://github.com/dev-palwar/dmbro" }],
    //   featured: false,
    //   metadata: {
    //     timeline: "Ongoing",
    //     role: "Developer",
    //     team: "Solo",
    //     status: "Under Construction",
    //   },
    //   details: {
    //     overview:
    //       "DMBro is a Python-based CLI tool that simplifies downloading music from the Dave Matthews Band website. Built as a practical utility for fans who want to access their music collection through the command line, this tool demonstrates web scraping techniques and HTTP request handling. It provides an efficient way to interact with the DMB website programmatically, making it easier to download and organize music files.",
    //     whyBuilt: [
    //       "Wanted to learn web scraping with Python and BeautifulSoup",
    //       "Needed a practical project to understand HTTP requests and HTML parsing",
    //       "Wanted to create a useful tool for DMB fans who prefer command-line interfaces",
    //       "Saw an opportunity to automate a repetitive task (downloading music)",
    //       "Wanted to practice Python development outside of web development",
    //     ],
    //     features: [
    //       "Command-line interface for easy terminal-based interaction",
    //       "Web scraping functionality to extract music information from DMB website",
    //       "HTTP request handling using Python's requests library",
    //       "HTML parsing with BeautifulSoup to extract download links",
    //       "Simple installation and setup process",
    //       "User authentication support for accessing protected content",
    //       "Direct music file downloading capabilities",
    //       "Terminal-based workflow that's fast and efficient",
    //     ],
    //     techStack: {
    //       frontend: [],
    //       backend: ["Python"],
    //       database: [],
    //       tools: ["BeautifulSoup", "Requests Library"],
    //       other: ["Web Scraping", "Command-Line Interface", "HTTP Requests"],
    //     },
    //     challenges: [
    //       "Understanding the DMB website structure and authentication mechanisms",
    //       "Parsing HTML content to extract relevant music and download information",
    //       "Handling authentication and session management for protected content",
    //       "Creating a user-friendly CLI interface with clear instructions",
    //       "Dealing with potential website changes that could break scraping functionality",
    //     ],
    //     solutions: [
    //       "Used BeautifulSoup to parse HTML and extract music metadata and download links",
    //       "Implemented proper HTTP session handling to maintain authentication state",
    //       "Created clear command-line prompts and error messages for better user experience",
    //       "Designed the tool to be modular so scraping logic can be updated if the website changes",
    //       "Focused on simplicity - keeping the codebase clean and easy to understand",
    //     ],
    //     impact: {
    //       achievements: [
    //         "Successfully learned web scraping techniques with Python",
    //         "Created a functional tool that solves a real problem for DMB fans",
    //         "Demonstrated ability to build practical CLI applications",
    //         "Gained experience with HTTP requests and HTML parsing",
    //         "Open-sourced the project for others to learn from and use",
    //       ],
    //     },
    //     futurePlans: [
    //       "Add support for batch downloading multiple tracks",
    //       "Implement progress bars for download status",
    //       "Add support for different audio formats and quality options",
    //       "Create configuration file support for user preferences",
    //       "Add resume functionality for interrupted downloads",
    //       "Improve error handling and user feedback",
    //       "Add metadata tagging for downloaded files",
    //       "Support for playlist downloading",
    //     ],
    //   },
    // },
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
