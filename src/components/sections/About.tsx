"use client";

import { motion } from "framer-motion";
import { Code, Server, Database } from "lucide-react";

import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/constants";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const highlights = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "React and Next.js interfaces, reusable components, searchable dashboards, and responsive web experiences",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Go and Fiber services, Hono APIs with TypeScript, request validation, and Spring Boot learning projects",
  },
  {
    icon: Database,
    title: "Data & Application Infrastructure",
    description:
      "PostgreSQL data models, Supabase authentication and realtime, schema migrations, and Docker development workflows",
  },
];

export function About() {
  return (
    <section id="about" className="detail-section px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true, margin: "-100px" }}
          className="detail-heading mb-16"
        >
          <span className="text-sm font-medium text-primary-text">
            About me
          </span>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Get to know me
          </h1>
        </motion.div>

        <div className="grid gap-16 md:grid-cols-2">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-5 text-muted"
          >
            <p className="leading-relaxed">
              Hi! I&apos;m{" "}
              <span className="font-medium text-foreground">so.sawz</span>, a
              full stack developer based in Bangkok, with a degree in Computer
              Engineering and Artificial Intelligence from Walailak University.
            </p>
            <p className="leading-relaxed">
              I currently work at {siteConfig.currentEmployer}. I build across
              the stack: React and Next.js on the frontend, Go and TypeScript
              APIs on the backend, and PostgreSQL for application data. My work
              includes operational dashboards, a veterinary clinic workspace, a
              shared cat-care tracker, and an interactive 3D equine model
              explorer.
            </p>
            <p className="leading-relaxed">
              My background in frontend development and React Native shapes how
              I approach complete applications. I care about clear user flows,
              practical API design, and data that stays consistent across the
              system. I also explore Java and Spring Boot through a task
              management API.
            </p>

            <div className="flex flex-wrap gap-8 border-t border-border pt-6">
              <div>
                <p className="text-2xl font-medium text-foreground">
                  {projects.length}
                </p>
                <p className="text-sm text-muted">Selected projects</p>
              </div>
              <div>
                <p className="text-2xl font-medium text-foreground">UI → API</p>
                <p className="text-sm text-muted">Full-stack focus</p>
              </div>
              <div>
                <p className="text-2xl font-medium text-foreground">SQL</p>
                <p className="text-sm text-muted">Data foundations</p>
              </div>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <div className="space-y-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                viewport={{ once: true, margin: "-100px" }}
                className="group rounded-2xl border border-border p-6 transition-colors duration-300 hover:border-primary/50 hover:bg-surface"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary-light p-2.5 text-primary-text">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
