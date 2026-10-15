import type { Metadata } from "next";
import { Skills } from "@/components/sections/Skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technologies and tools I work with — React, Next.js, TypeScript, Go, Hono, PostgreSQL, Supabase, Docker, Spring Boot, and Three.js.",
};

export default function SkillsPage() {
  return <Skills />;
}
