import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "My professional experience and career journey as a frontend developer.",
};

export default function ExperiencePage() {
  return (
    <section className="min-h-screen px-6 pt-24">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">Experience</h1>
        <p className="mt-4 text-muted">My work experience will be displayed here</p>
      </div>
    </section>
  );
}
