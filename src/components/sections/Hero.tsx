"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { socialLinks } from "@/lib/constants";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const iconMap = { Github, Linkedin, Mail } as const;

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 pt-16"
    >
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--primary-light)_0%,transparent_50%)]" />

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Greeting badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="inline-block rounded-full border border-primary/30 bg-primary-light px-4 py-1.5 text-sm font-medium text-primary">
            Open to new opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="mt-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
        >
          Hi, I&apos;m{" "}
          <span className="text-primary">so.sawz</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          className="mt-4 text-xl text-muted sm:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
        >
          Frontend Developer
        </motion.p>

        {/* Description */}
        <motion.p
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
        >
          I build modern web applications with clean code and great user
          experiences. Passionate about TypeScript, React, and everything
          frontend.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
        >
          <Link
            href="/projects"
            className="rounded-full bg-primary px-8 py-3 text-sm font-medium text-black transition-colors duration-300 hover:bg-primary-hover"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-border px-8 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary/50 hover:bg-primary-light"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="mt-10 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease }}
        >
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="rounded-lg p-2.5 text-muted transition-colors duration-300 hover:bg-surface hover:text-primary"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
