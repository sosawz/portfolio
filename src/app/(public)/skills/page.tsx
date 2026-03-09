import type { Metadata } from "next";
import { Skills } from "@/components/sections/Skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technologies and tools I work with — React, Next.js, TypeScript, Node.js, Docker, and more.",
};

export default function SkillsPage() {
  return <Skills />;
}
