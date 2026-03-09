import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with so.sawz — let's discuss your next project or collaboration.",
};

export default function ContactPage() {
  return (
    <section className="min-h-screen px-6 pt-24">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="mt-4 text-muted">Contact form will be here</p>
      </div>
    </section>
  );
}
