import type { Metadata } from "next";
import { Experience } from "@/components/sections/Experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "My professional experience and career journey as a frontend developer.",
};

export default function ExperiencePage() {
  return <Experience />;
}
