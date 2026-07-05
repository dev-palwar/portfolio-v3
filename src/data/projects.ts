import ReelinkCover from "@/assets/covers/reelink-cover.png";
import RecodeCover from "@/assets/covers/recode-gruv.png";
import RecodeLightCover from "@/assets/covers/recode-light.png";
import RecodeLeetcodeExtensionCover from "@/assets/covers/recode-ext.png";
import AnimeCliCover from "@/assets/covers/ani-cli-gruv.png";
import AnimeCliLightCover from "@/assets/covers/ani-cli-light.png";
import YtExtensionCover from "@/assets/covers/yt-ext-gruv.png";
import YtExtensionLightCover from "@/assets/covers/yt-ext-light.png";
import ZentryCover from "@/assets/covers/zentry-cover.png";
import DmBrooCover from "@/assets/covers/dmbroo.png";
import CutlineCover from "@/assets/covers/frameful-light.jpg";

import { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "dmbroo-instagram-automation",
    title: "DmBroo",
    description:
      'Developed at <a class="font-medium text-primary hover:text-primary/80 underline decoration-primary/30 underline-offset-2 hover:decoration-primary/60 transition-colors" href="https://www.dmbroo.com">DmBroo</a>. Began as a freelance contract that evolved into a full time engineering role.',
    imageUrl: DmBrooCover.src,
    techStack: [
      "bun",
      "react",
      "nextjs",
      "tailwindcss",
      "typescript",
      "nodejs",
      "mongodb",
      "redis",
      "bullmq",
      "prisma",
      "razorpay",
    ],
    links: [{ label: "Live", url: "https://www.dmbroo.com" }],
    featured: true,
    metadata: {
      timeline: "",
      role: "Full Stack Developer",
      team: "Solo",
      status: "Building",
    },
    details: {
      overview:
        "DmBroo is a creator-first Instagram automation SaaS that automates message replies and engagement based on user interactions. Built with Next.js, Node.js, and Redis, the platform listens to Meta webhook events to trigger automated comment replies, direct messages, and custom lead generation forms when users comment on a post, reply to a story, or send a DM. The application prioritizes account safety with custom queue rate-limiting, proactive long-lived token refreshing, and automatic user deauthorization syncing while It's frontend features a rich dashboard with widgets displaying key performance metrics like new followers gained, total outreach, and best time to post.",

      features: [
        "Automated responses triggered by Instagram comments on posts, story replies, or direct messages matching specific text, or phrases.",
        "Ask-to-Follow Gate: Gated delivery that checks if the interacting user follows the account, sending a customizable follow-request link before delivering the main payload.",
        "Opening Messages: Sends interactive, button-enabled ice-breaker messages to users before launching the full automation sequence.",
        "In-App Lead Gen Forms: Drag-and-drop custom forms supporting text, numbers, dropdowns, ratings, file uploads, and checkboxes to capture customer contact data.",
        "Analytics Dashboard: Rich widgets displaying key performance indicators, total automation executions, new followers gained, and best time to post.",
        "Meta OAuth & Token Lifecycle: Multi-account secure connection with cron-based 60-day token auto-refreshing and a deauthorization webhook listener to automatically disconnect revoked accounts.",
        "Redis/BullMQ Queue Worker: Dedicated background worker package with per-user concurrency limiting and rate-limiting controls to prevent Meta API blocks.",
        "Tiered Subscription System: Razorpay-integrated subscription plans (Free, Basic, Premium, Black) mapped to dynamic credit limits, usage ledgers, and automated email alerts.",
      ],

      techStack: {
        frontend: ["Bun", "React", "Next.Js", "Tailwind", "Typescript"],
        backend: ["Bun", "Node.js", "Redis", "BullMq"],
        database: ["MongoDB", "Prisma"],
        tools: [
          "META",
          "Vercel",
          "Upstash",
          "Razorpay",
          "Resend",
          "Clerk",
          "UploadThing",
        ],
      },

      challenges: [
        "Duplicate Webhook Deliveries from Meta",
        "Stateless State Management for Multi-Step Flows ('Ask-to-Follow')",
        "API Rate Limiting & Platform Safeguards",
        "Database Write Bottlenecks during Peak Load",
      ],

      solutions: [
        "Implemented a two-stage deduplication mechanism using Redis. </br> First checks a permanent 'already handled' event log in Redis to filter out duplicate webhook retries. </br> Second, acquires a temporary 30-second atomic processing lock (NX) in Redis to block concurrent worker threads from processing the same event.",
        "Created a Redis-backed state machine to track user opt-ins, follow gates, and opening messages across discrete webhooks. </br> Halts execution, registers a pending confirmation in Redis, and leverages Instagram Quick Replies as stateful callbacks to trigger the final payload delivery.",
        "Extracted Graph API rate limit usage headers in real-time on every outgoing request to keep a Redis tracking cache updated. </br> Enforced a 2-second account-level spam guard cooldown and built global panic thresholds that automatically throttle non-premium accounts when the app's overall API limits are threatened.",
        "Implemented a Write-Behind pattern using Redis lists (rpush) to buffer execution outcomes asynchronously. </br>w Built a background flusher interval that drains the buffer in batches of 500, bulk-deduplicates them, and performs a single transactional DB write every 5 seconds.",
      ],
    },
  },
  {
    id: "Cutline-browser-recorder",
    title: "Cutline",
    description:
      "A fast, browser-based screen recording tool that lets you record, customize with beautiful backgrounds, and export polished videos with no sign-up required.",
    imageUrl: CutlineCover.src,
    techStack: ["react", "typescript", "vite", "tailwindcss"],
    links: [{ label: "Live", url: "https://usecutline.devpalwar.me" }],
    featured: true,
    metadata: {
      timeline: "",
      role: "Founder & Lead Developer",
      team: "Solo",
      status: "Building",
    },
    details: {
      overview:
        "Cutline is a modern, privacy-first screen recording tool built entirely in the browser. It allows creators and educators to capture their screen, apply professional-grade backgrounds, and trim recordings without ever uploading data to a server. Designed with a sleek, minimalist aesthetic, Cutline focuses on speed and simplicity—eliminating the need for account creation or heavy software installations.",

      whyBuilt: [
        "Current screen recording tools are either too basic or overly complex and expensive.",
        "Creators want a way to make their screen captures look professional with minimal effort.",
        "Privacy is a major concern; users prefer tools that process sensitive screen data locally.",
      ],

      features: [
        "In-browser screen, window, and tab recording in HD",
        "No time limits or watermarks on recordings",
        "Customizable backgrounds (gallery or user-uploaded)",
        "Intuitive timeline trimming to cut unwanted segments",
        "Fast local rendering and .webm export",
        "Fully private: all processing happens on your device",
        "Advanced editing and auto-zoom effects (in development)",
      ],

      techStack: {
        frontend: ["React", "TypeScript", "Vite", "Tailwind CSS"],
        backend: ["Client-side only (Web APIs)"],
        database: ["None (Local processing)"],
        tools: ["Radix UI", "Lucide React", "Vercel"],
      },

      challenges: [
        "Implementing high-performance video recording and local editing using browser-native APIs while maintaining 60 FPS.",
      ],

      solutions: [
        "Utilized MediaStream and MediaRecorder APIs combined with efficient canvas manipulation for real-time background rendering.",
      ],
    },
  },
  {
    id: "reelink",
    title: "Reelink",
    description:
      "Created this app as a to-do list but for movies. Use it to create your watchlist instead of writing them in your note-taking apps. Revisit the app whenever you need to pick a show to watch! Clean and minimalistic.",
    imageUrl: ReelinkCover.src,
    techStack: ["react", "sass", "expressjs", "mongodb", "nodejs"],
    links: [
      { label: "Live", url: "https://reelink.devpalwar.me/" },
      { label: "GitHub", url: "https://github.com/dev-palwar/Movie-app" },
    ],
    featured: false,
    metadata: {
      timeline: "",
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
    imageUrl: RecodeCover.src,
    lightImageUrl: RecodeLightCover.src,
    techStack: [
      "nextjs",
      "react",
      "typescript",
      "tailwindcss",
      "mongodb",
      "prisma",
    ],
    links: [
      { label: "Live", url: "https://recode.devpalwar.me/" },
      { label: "GitHub", url: "https://github.com/dev-palwar/Recode" },
    ],
    featured: true,
    metadata: {
      timeline: "",
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
    id: "anime-cli",
    title: "Anime CLI",
    description:
      "A simple command-line program for downloading animes. Built while learning web scraping - enter an anime name, and it fetches relevant results, allowing you to download your choice. Easy to use and perfect for anime enthusiasts who prefer the terminal.",
    imageUrl: AnimeCliCover.src,
    lightImageUrl: AnimeCliLightCover.src,
    techStack: ["nodejs", "javascript"],
    links: [
      { label: "GitHub", url: "https://github.com/dev-palwar/Anime-cli" },
    ],
    featured: true,
    metadata: {
      timeline: "",
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
          "first CLI application I built",
          "Created a functional tool that solves a real problem for anime enthusiasts",
          "Open-sourced the project and received positive feedback from users who found it useful",
        ],
      },
      futurePlans: [
        "None. Because this is illegal and I don't have time to maintain it or deal with the legal issues. I purely built this for fun and to learn web scraping.",
      ],
    },
  },
  {
    id: "yt-ext",
    title: "YouTube Comments Sidebar Extension",
    description:
      "A simple Chrome extension that moves YouTube comments to a sidebar above the recommended videos section. All comment features work - likes, replies, posting, everything! Clean UI that matches YouTube's design.",
    imageUrl: YtExtensionCover.src,
    lightImageUrl: YtExtensionLightCover.src,
    techStack: ["javascript", "html", "css"],
    links: [{ label: "GitHub", url: "https://github.com/dev-palwar/yt-ext" }],
    featured: false,
    metadata: {
      timeline: "",
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
      ],
      features: [
        "Moves YouTube comments to a dedicated sidebar on the right side of the page",
        "Preserves all native YouTube comment functionality (like, reply, post, load more)",
        "Clean UI that seamlessly matches YouTube's original design",
        "Supports both dark and light mode themes",
        "Toggle button to show/hide the sidebar",
      ],
      techStack: {
        frontend: ["HTML", "CSS", "JavaScript"],
        backend: [],
        database: [],
        tools: ["Chrome Extension API", "Manifest V3"],
      },
      challenges: [
        "Understanding Chrome extension architecture and manifest configuration",
        "Finding and relocating YouTube's comments section without breaking functionality",
        "Ensuring all comment features continue to work after moving the DOM element",
        "Handling dynamic content loading when switching between videos",
      ],
      solutions: [
        "Used Chrome's content scripts to inject JavaScript into YouTube pages",
        "Leveraged DOM manipulation to physically move the comments section rather than copying it",
        "Preserved all event listeners and functionality by moving the actual element",
        "Implemented refresh functionality to handle dynamic content loading",
      ],
    },
  },
  {
    id: "recode-leetcode-extension",
    title: "Recode LeetCode Extension",
    description:
      "This is a browser extension that automates the process of fetching solved LeetCode problems and exporting them to a centralized backend system, <a href='/projects/recode' target='_blank' rel='noopener noreferrer' class='font-medium text-primary hover:text-primary/80 underline decoration-primary/30 underline-offset-2 hover:decoration-primary/60 transition-colors'>Recode</a>. The extension integrates seamlessly with LeetCode's platform and does not violate any of their terms and conditions.",
    imageUrl: RecodeLeetcodeExtensionCover.src,
    techStack: ["javascript", "html", "css"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/dev-palwar/recode-leetcode-extension",
      },
    ],
    featured: false,
    metadata: {
      timeline: "",
      role: "Developer",
      team: "Solo",
      status: "Completed",
    },
    details: {
      overview:
        "This is a browser extension that automates the process of fetching solved LeetCode problems and exporting them to a centralized backend system, <a href='/projects/recode' target='_blank' rel='noopener noreferrer' class='font-medium text-primary hover:text-primary/80 underline decoration-primary/30 underline-offset-2 hover:decoration-primary/60 transition-colors'>Recode</a>. The extension integrates seamlessly with LeetCode's platform and does not violate any of their terms and conditions.",
      whyBuilt: [
        "There's no official Leetcode API.",
        "Scraping the Leetcode website is not reliable and can break anytime.",
      ],
      features: [
        "Retrieves all solved problems from LeetCode API with a single click",
        "Stores fetched data locally to reduce API calls and improve performance",
        "Displays total solved problems and last fetch timestamp",
        "Sends formatted problem data to configurable backend API endpoints",
      ],
      techStack: {
        frontend: ["HTML", "JavaScript", "CSS"],
        backend: [],
        database: ["MongoDB"],
        other: ["Content Scripts", "DOM Manipulation", "Browser Extension"],
      },
      challenges: [
        "LeetCode API requires user authentication to fetch problem data",
        "Frequent API calls leading to rate limiting or slow user experience",
      ],
      solutions: [
        "Leveraged browser's credential management (`credentials: 'include'`) to use existing LeetCode session cookies, eliminating the need for separate authentication flow",
        "Implemented local storage caching mechanism that stores fetched data and only makes API calls when explicitly requested, reducing server load and improving response times",
      ],
      futurePlans: [
        "Support multiple export formats (CSV, JSON, PDF)",
        "Implement automatic background syncing at regular intervals",
        "Add local analytics for problem-solving patterns and trends",
        "Extend to other coding platforms (GFG, HackerRank, Codeforces)",
      ],
    },
  },
  {
    id: "zentry-clone",
    title: "Zentry Clone",
    description:
      "A project I put together to learn Framer Motion and experiment with animations in React apps.",
    imageUrl: ZentryCover.src,
    techStack: ["nextjs", "tailwindcss", "typescript", "framer-motion"],
    metadata: {
      status: "Completed",
    },
    links: [
      { label: "Live", url: "https://zentry-clone-wine.vercel.app/" },
      { label: "GitHub", url: "https://github.com/dev-palwar/zentry-clone" },
    ],
  },
  //   {
  //     id: "2",
  //     title: "Bloggy",
  //     description:
  //       "A clean and minimalistic blogging application designed for simplicity. At its core, the backend is powered by GraphQL, providing a flexible and efficient API for social media interactions. The backend is designed to be easily deployable on platforms like Vercel or Netlify, making it simple to integrate into your own application.",
  //     imageUrl: "https://i.ibb.co/k6QcvMJ/image.png",
  //     techStack: [
  //       "nextjs",
  //       "tailwindcss",
  //       "mongodb",
  //       "graphql",
  //       "typescript",
  //       "react",
  //     ],
  //     links: [
  //       { label: "Live", url: "https://blogyapp.vercel.app/" },
  //       {
  //         label: "GitHub",
  //         url: "https://github.com/dev-palwar/Blogging-application-frontend",
  //       },
  //     ],
  //     featured: false,
  //     details: [
  //       {
  //         features: [
  //           "Scalable GraphQL backend for efficient API handling",
  //           "User authentication, post creation, upvotes, comments, and followers",
  //           "Easily deployable on platforms like Vercel or Netlify",
  //           "Uses MongoDB for efficient data management",
  //         ],
  //       },
  //     ],
  //   },
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
];
