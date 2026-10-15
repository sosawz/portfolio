export interface Project {
  slug: string;
  title: string;
  category: string;
  role: string;
  summary: string;
  problem: string;
  contributions: string[];
  stack: string[];
  layers: [string, string, string];
  scope: string;
}

// Public summaries only. Keep client identities, repository locations,
// internal infrastructure, and operational data out of portfolio content.
export const projects: Project[] = [
  {
    slug: "equine-atlas",
    title: "EQÜINA — Equine Atlas",
    category: "Personal project",
    role: "Frontend & interactive 3D development",
    summary:
      "An interactive equine model explorer with selectable 3D meshes, camera controls, and metadata-driven structure inspection.",
    problem:
      "Make detailed 3D assets easier to explore in a browser, with clear navigation between the model, its individual meshes, and any supplied anatomical annotations.",
    contributions: [
      "Built a React and TypeScript workspace with a searchable structure explorer, mesh inspector, and responsive mobile panels.",
      "Integrated Three.js, React Three Fiber, and Drei to render GLB assets with studio lighting, shadows, selection highlighting, and animated mesh visibility.",
      "Added orbit, pan, zoom, camera presets, reset, and controls to isolate, hide, or restore individual meshes.",
      "Implemented GLB upload and drag-and-drop, remote model loading with fallbacks, and JSON metadata import matched to actual mesh names.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Three.js",
      "React Three Fiber",
      "Drei",
      "Vite",
      "Tailwind CSS",
    ],
    layers: [
      "React explorer & inspector",
      "React Three Fiber / Three.js",
      "GLB meshes + JSON metadata",
    ],
    scope:
      "Browser-based visualization project. Available structures and system layers depend on the imported model and its annotations. Sample exterior models are not a clinically validated anatomy dataset; no backend or public deployment is claimed.",
  },
  {
    slug: "realtime-operations",
    title: "Real-time Operations Platform",
    category: "Professional contribution",
    role: "Full-stack contributor · Team project",
    summary:
      "An operational dashboard connecting real-time interfaces, searchable event data, reporting, and Go backend services.",
    problem:
      "Make complex operational data easier to explore, keep long-running workflows understandable, and improve the queries behind dashboard summaries.",
    contributions: [
      "Contributed Next.js interfaces for search, filters, event detail views, and real-time workflows.",
      "Implemented CSV and PDF report exports and improved upload validation and inline error feedback.",
      "Extended Go API filtering and event handling to support corresponding frontend workflows.",
      "Refactored database aggregation queries and added regression tests for reporting and data processing.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Go",
      "Fiber",
      "PostgreSQL",
      "GORM",
      "Jest",
    ],
    layers: ["Next.js interfaces", "Go / Fiber APIs", "PostgreSQL"],
    scope:
      "Selected contributions to a team-built system. The project name is a general description; client identity, source code, screenshots, and operational details are not shared.",
  },
  {
    slug: "vet-clinic",
    title: "Veterinary Clinic Workspace",
    category: "Personal project",
    role: "Full-stack development",
    summary:
      "A clinic management application bringing patient records, owners, visits, attachments, and appointments into one workspace.",
    problem:
      "Connect everyday clinic workflows across a web interface, authenticated APIs, and a relational data model with clinic-specific access.",
    contributions: [
      "Built React screens for patient and owner records, visit histories, appointment calendars, and search.",
      "Implemented Hono API routes with Zod request validation and Supabase authentication middleware.",
      "Added PostgreSQL schema migrations, row-level access policies, and attachment storage workflows.",
      "Organized a Bun workspace with shared types and Docker development configuration; added an Expo mobile foundation with sign-in and protected navigation.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Hono",
      "Bun",
      "Supabase",
      "PostgreSQL",
      "Docker",
      "Expo",
    ],
    layers: ["React web app", "Hono / Bun API", "Supabase / PostgreSQL"],
    scope:
      "Personal application with web and API implementation. The mobile app is an authentication and navigation foundation, not a complete clinic app. No public deployment is linked.",
  },
  {
    slug: "cat-potty-tracker",
    title: "Cat Potty Tracker",
    category: "Personal project",
    role: "Full-stack development · Managed backend",
    summary:
      "A shared cat-care log with real-time updates, searchable history, and activity summaries for multiple cats.",
    problem:
      "Help people caring for the same cats keep a consistent record across devices without maintaining separate logs.",
    contributions: [
      "Built a mobile-friendly Next.js interface for creating, editing, filtering, and reviewing cat-care logs.",
      "Connected Supabase authentication, PostgreSQL tables, and real-time subscriptions for shared updates.",
      "Defined row-level access policies and database migrations for approved account access.",
      "Implemented paginated history, date-range statistics, backup restoration, and tests for formatting, statistics, and pagination.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
    ],
    layers: [
      "Next.js static frontend",
      "Supabase Auth / Realtime",
      "PostgreSQL + RLS",
    ],
    scope:
      "Personal application using Supabase as its managed backend. Includes an installable web manifest and shared care-logging workflows.",
  },
  {
    slug: "task-manager-api",
    title: "Task Manager API",
    category: "Learning project",
    role: "Backend development",
    summary:
      "A Java backend exploring task management, relational persistence, validation, pagination, and user registration.",
    problem:
      "Practice a layered backend design by taking task and user data from validated HTTP requests through services to PostgreSQL.",
    contributions: [
      "Implemented task create, read, update, and delete endpoints with status, priority, and keyword query options.",
      "Added pagination and sorting with bounded page sizes and an explicit set of sortable fields.",
      "Separated controllers, request and response DTOs, services, entities, and Spring Data JPA repositories.",
      "Added user registration, password hashing, a basic login endpoint, and task-to-user relationships.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "PostgreSQL",
      "Bean Validation",
      "Maven",
    ],
    layers: ["REST controllers", "Spring Boot services", "JPA / PostgreSQL"],
    scope:
      "Backend learning project. The basic login endpoint is not presented as a complete session or authorization system. No frontend or public deployment is claimed.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
