"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const featuredProjects = [
  {
    title: "Portfolio Website",
    description: "Modern portfolio built with Next.js, TypeScript, and Tailwind CSS featuring smooth animations and responsive design.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/sosawz/portfolio",
    demo: "https://sosawz.dev",
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/sosawz/ecommerce",
    demo: "https://demo-ecommerce.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team features.",
    tech: ["Vue.js", "Firebase", "Vuex", "Vuetify"],
    github: "https://github.com/sosawz/task-manager",
    demo: "https://tasks-app.com",
    featured: true,
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-lg text-muted">
            Some of my recent work that I&apos;m proud of
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="p-6">
                {/* Project header */}
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    Featured
                  </span>
                </div>

                {/* Description */}
                <p className="mb-4 text-sm text-muted leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-background px-2 py-1 text-xs font-medium text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm text-muted transition-colors duration-300 hover:border-primary/50 hover:bg-primary-light hover:text-primary"
                  >
                    <Github size={14} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-black transition-colors duration-300 hover:bg-primary-hover"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        {/* View all projects CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
          viewport={{ once: true }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary/50 hover:bg-primary-light"
          >
            View All Projects
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
