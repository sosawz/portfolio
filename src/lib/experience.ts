import { siteConfig } from "@/lib/constants";

export const experiences = [
  {
    type: "work" as const,
    title: siteConfig.role,
    company: siteConfig.currentEmployer,
    period: "Jul 2026 - Present",
    summaryPeriod: "Jul 2026 — Present",
    focus: "Full-stack development",
    description: [
      "Contributing to a team-built operations platform across Next.js interfaces and Go backend services",
      "Building search, filtering, reporting, and data export workflows",
      "Improving PostgreSQL queries and API behavior with regression tests",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Go",
      "Fiber",
      "PostgreSQL",
      "GORM",
      "Jest",
    ],
  },
  {
    type: "work" as const,
    title: "Frontend Developer",
    company: "11-Infotech System Co., Ltd.",
    period: "Jun 2025 - Jun 2026",
    summaryPeriod: "Jun 2025 — Jun 2026",
    focus: "Web development",
    description: [
      "Developed frontend applications with React.js and Tailwind CSS",
      "Built UI components with shadcn/ui for consistent design system",
      "Integrated REST APIs using Axios with interceptor for authentication and error handling",
      "Deployed production builds via FTP",
    ],
    tech: [
      "React.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Axios",
      "REST API",
      "FTP Deploy",
    ],
  },
  {
    type: "internship" as const,
    title: "Mobile Developer Intern",
    company: "ThaiDotRun Co., Ltd.",
    period: "Sep 2024 - Apr 2025",
    summaryPeriod: "2024 — 2025",
    focus: "Mobile development",
    description: [
      "Built cross-platform mobile applications using React Native",
      "Implemented user authentication with Firebase Auth",
      "Managed database with Neon (serverless PostgreSQL)",
      "Handled file uploads and media storage with Google Cloud Storage",
    ],
    tech: ["React Native", "Firebase Auth", "NeonDB", "Google Cloud Storage"],
  },
];
