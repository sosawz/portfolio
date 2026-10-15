"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Database, Monitor, Server, Wrench } from "lucide-react";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const skillCategories = [
  {
    icon: Monitor,
    title: "Frontend & Mobile",
    description:
      "Responsive interfaces, search and reporting workflows, and mobile application foundations.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "React Native",
      "Expo",
      "shadcn/ui",
    ],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description:
      "HTTP services, request validation, business logic, and API integration across the application stack.",
    skills: ["Go", "Fiber", "Hono", "Bun", "REST APIs", "Zod", "GORM"],
  },
  {
    icon: Database,
    title: "Databases & Auth",
    description:
      "Relational data, migrations, query improvements, authentication, and managed real-time updates.",
    skills: [
      "PostgreSQL",
      "SQL",
      "Supabase",
      "Schema migrations",
      "Row-level security",
      "Supabase Realtime",
      "Firebase Auth",
    ],
  },
  {
    icon: Wrench,
    title: "Delivery & Testing",
    description:
      "Version control, containerized development, and regression tests for application behavior.",
    skills: [
      "Git",
      "Docker",
      "Docker Compose",
      "Jest",
      "Go testing",
      "Node.js test runner",
      "Vercel",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="detail-section px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true, margin: "-100px" }}
          className="detail-heading mb-16"
        >
          <span className="text-sm font-medium text-primary-text">Skills</span>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Technologies I work with
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
            A collection of tools, frameworks, and technologies I use to build
            web and mobile applications from end to end.
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.1,
                ease,
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="group rounded-2xl border border-border p-6 transition-colors duration-300 hover:border-primary/50 hover:bg-surface"
            >
              {/* Icon + title */}
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-primary-light p-2.5 text-primary-text">
                  <category.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              {/* Description */}
              <p className="mb-5 text-sm leading-relaxed text-muted">
                {category.description}
              </p>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.04,
                      ease,
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="rounded-full border border-primary/20 bg-primary-light px-3 py-1.5 text-xs text-primary-text transition-colors duration-300 hover:border-primary/50 hover:bg-primary/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <section
          className="mt-6 rounded-2xl border border-border p-6"
          aria-labelledby="visualization-skills"
        >
          <h2 id="visualization-skills" className="text-lg font-semibold">
            Interactive 3D & Visualization
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            Building EQÜINA to explore GLB models through mesh selection, camera
            controls, visibility management, and imported annotations.
          </p>
          <ul
            className="project-tags"
            aria-label="3D visualization technologies"
          >
            {[
              "Three.js",
              "React Three Fiber",
              "Drei",
              "GLB / glTF",
              "Vite",
            ].map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <Link href="/projects/equine-atlas" className="text-link">
            Explore EQÜINA <ArrowUpRight size={16} />
          </Link>
        </section>

        {/* Currently learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-6 rounded-2xl border border-border p-6 transition-colors duration-300 hover:border-primary/50 hover:bg-surface"
        >
          <p className="mb-3 text-sm font-medium text-primary-text">
            Learning through projects
          </p>
          <p className="mb-4 text-sm leading-relaxed text-muted">
            Building a Task Manager API to practice layered services,
            validation, pagination, and relational persistence.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Java",
              "Spring Boot",
              "Spring Data JPA",
              "Bean Validation",
              "Maven",
            ].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.06, ease }}
                viewport={{ once: true }}
                className="rounded-full border border-border px-3 py-1.5 text-xs text-muted transition-colors duration-300 hover:border-primary/30 hover:text-foreground"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
