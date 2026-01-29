import finocoLogo from "@/assets/icons/Finoco Blue Icon.png";
import lumaraLogo from "@/assets/icons/lumara-jewels.jpeg";

export const experience = [
  {
    id: "exp-1",
    company: "Finoco AI",
    role: "Frontend Developer",
    period: "June 2025 - Present",
    highlights: [
      "Built and maintained the frontend of an Excel Add-in that integrates AI capabilities directly into Microsoft Excel using Office.js",
      "Developed UI components for Excel task panes using React and TypeScript, ensuring smooth performance within Excel’s webview environment",
      "Implemented global state management using Redux to handle complex UI state, async AI responses, and user interactions.",
      "Built real-time features using WebSockets to stream AI responses and updates directly into Excel workflows.",
      "Implemented Markdown rendering to display AI responses in a structured and readable format.",
      "Worked closely with backend and AI teams to translate AI outputs into usable Excel actions (cell updates, formulas, data transformations).",
    ],
    logoUrl: finocoLogo.src,
    techStack: [
      "react",
      "nextjs",
      "tailwindcss",
      "typescript",
      "redux",
      "websocket",
      "Office.js",
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
];
