"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Wrench } from "lucide-react";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const skillCategories = [
  {
    icon: Monitor,
    title: "Frontend",
    description: "Building responsive web and mobile interfaces with React ecosystem and consistent design systems.",
    skills: [
      "React.js",
      "React Native",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "HTML / CSS",
    ],
  },
  {
    icon: Server,
    title: "API & Database",
    description: "Integrating REST APIs with authentication handling and managing serverless databases.",
    skills: ["REST API", "Axios", "Firebase Auth", "NeonDB", "PostgreSQL"],
  },
  {
    icon: Wrench,
    title: "Tools & Services",
    description: "Using cloud services and developer tools to ship and maintain production applications.",
    skills: ["Git", "Vercel", "Google Cloud Storage", "Figma", "FTP Deploy"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-primary-text">Skills</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Technologies I work with</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
            A collection of tools, frameworks, and technologies I use to build web and mobile applications from end to
            end.
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="grid gap-6 md:grid-cols-3">
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
              <p className="mb-5 text-sm leading-relaxed text-muted">{category.description}</p>

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

        {/* Currently learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-6 rounded-2xl border border-border p-6 transition-colors duration-300 hover:border-primary/50 hover:bg-surface"
        >
          <p className="mb-3 text-sm font-medium text-primary-text">Currently exploring</p>
          <div className="flex flex-wrap gap-2">
            {["Go", "tRPC", "Playwright"].map((tech, i) => (
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
