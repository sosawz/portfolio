import type { Metadata } from "next";
import { About } from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about so.sawz — a Software Engineer working across React and Next.js interfaces, Go and TypeScript APIs, and PostgreSQL databases.",
};

export default function AboutPage() {
  return <About />;
}
