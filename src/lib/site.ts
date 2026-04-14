export const siteConfig = {
  name: "Service Platform Showcase",
  legalName: "Service Platform Showcase",
  tagline: "Frontend and API Demo",
  defaultTitle: "Service Platform Showcase | Frontend and API Portfolio Demo",
  description:
    "A public-safe portfolio project that demonstrates a responsive frontend, typed forms, API routes, and a simplified backend example.",
  primaryPath: "/request",
  email: "hello@example.com",
  phoneDisplay: "(555) 010-2026",
  phoneHref: "+15550102026",
  responsePromise: "Clear request handling and clean code structure",
};

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Request", href: "/request" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];

export const trustHighlights = [
  "Responsive frontend",
  "Typed forms",
  "API routes",
  "FastAPI backend example",
];

export const featureCards = [
  {
    title: "Frontend architecture",
    description:
      "A practical Next.js App Router setup with reusable components, typed props, and readable page composition.",
  },
  {
    title: "Form handling",
    description:
      "Client-side request and contact forms backed by shared schema validation and simple error states.",
  },
  {
    title: "API patterns",
    description:
      "Minimal request intake endpoints that show clean parsing, validation, and response handling without production-only logic.",
  },
  {
    title: "Backend example",
    description:
      "A separate FastAPI project that demonstrates PostgreSQL-ready models, CRUD helpers, and clear folder structure.",
  },
];

export const engineeringHighlights = [
  {
    title: "Readable over clever",
    description:
      "The code is intentionally kept at a beginner-to-semi-mid level: understandable, modular, and easy to review.",
  },
  {
    title: "Public-safe by design",
    description:
      "Sensitive business workflows and internal logic were removed so the repo can be shared publicly.",
  },
  {
    title: "Frontend and backend in one portfolio",
    description:
      "The repo shows both UI implementation and a clean backend API example without overcomplicating either side.",
  },
];

export const requestTypeOptions = [
  "Frontend Work",
  "Backend API",
  "Full-Stack Build",
  "UI Cleanup",
  "General Inquiry",
] as const;

export const faqItems = [
  {
    question: "What is this project meant to show?",
    answer:
      "It is a portfolio-safe demo meant to show practical frontend structure, typed form handling, simple API routes, and a separate backend example.",
  },
  {
    question: "Is this a production application?",
    answer:
      "No. It is a simplified demonstration project derived from a larger real-world system, with sensitive and production-only logic removed.",
  },
  {
    question: "Why is the backend in a separate folder?",
    answer:
      "That keeps the frontend repo easy to scan while still showing backend fundamentals in a recruiter-friendly way.",
  },
];
