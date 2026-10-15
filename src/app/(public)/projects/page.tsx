import type { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full-stack projects by so.sawz: React and Next.js interfaces, interactive Three.js visualization, Go and Hono APIs, Supabase applications, and a Spring Boot backend.",
};

export default function ProjectsPage() {
  return <Projects />;
}
