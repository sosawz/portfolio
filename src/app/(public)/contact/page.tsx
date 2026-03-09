import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with so.sawz — let&apos;s discuss your next collaboration.",
};

export default function ContactPage() {
  return <Contact />;
}
