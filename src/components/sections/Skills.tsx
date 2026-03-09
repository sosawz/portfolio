"use client";

import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML/CSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "REST API",
      "GraphQL",
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      "Git",
      "Docker",
      "Bun",
      "Vercel",
      "Figma",
      "Linux",
    ],
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
          <span className="text-sm font-medium text-primary">Skills</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Technologies I work with
          </h2>
        </motion.div>

        {/* Skill categories */}
        <div className="grid gap-10 md:grid-cols-3">
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
              className="rounded-2xl border border-border p-6"
            >
              <h3 className="mb-5 text-lg font-semibold">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.04,
                      ease,
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="rounded-full border border-primary/20 bg-primary-light px-3 py-1.5 text-sm text-primary transition-colors duration-300 hover:border-primary/50 hover:bg-primary/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
