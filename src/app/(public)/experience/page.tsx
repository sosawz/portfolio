import type { Metadata } from "next";
import { Experience } from "@/components/sections/Experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "My development journey from frontend and mobile applications to full-stack project contributions.",
};

export default function ExperiencePage() {
  return <Experience />;
}
