import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of projects I've built — from full-stack web apps to open source contributions.",
};

export default function ProjectsPage() {
  return (
    <section className="min-h-screen px-6 pt-24">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="mt-4 text-muted">All my projects will be displayed here</p>
      </div>
    </section>
  );
}
