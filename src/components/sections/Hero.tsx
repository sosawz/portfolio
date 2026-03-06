"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const socialLinks = [
  { icon: Github, href: "https://github.com/sosawz", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/so-sawz-4392703a5",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:sosawz.sng@gmail.com", label: "Email" },
];

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
          Full-Stack Developer
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
          full-stack.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
        >
          <a
            href="#projects"
            className="rounded-full bg-primary px-8 py-3 text-sm font-medium text-black transition-colors duration-300 hover:bg-primary-hover"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-8 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary/50 hover:bg-primary-light"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="mt-10 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="rounded-lg p-2.5 text-muted transition-colors duration-300 hover:bg-surface hover:text-primary"
            >
              <link.icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted transition-colors duration-300 hover:text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 0.8, ease },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
          aria-label="Scroll to about"
        >
          <ArrowDown size={20} />
        </motion.a>
      </div>
    </section>
  );
}
