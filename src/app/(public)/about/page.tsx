import type { Metadata } from "next";
import { About } from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about so.sawz — a frontend developer passionate about crafting clean, performant web applications with React and Next.js.",
};

export default function AboutPage() {
  return <About />;
}
