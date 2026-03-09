"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Database } from "lucide-react";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const highlights = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Building web applications with React.js, Next.js, and Tailwind CSS with component libraries like shadcn/ui",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps with React Native, integrating Firebase Auth and cloud storage",
  },
  {
    icon: Database,
    title: "API & Integration",
    description:
      "REST API integration with Axios interceptors for authentication, error handling, and database management",
  },
];

export function About() {
  return (
    <section id="about" className="flex min-h-screen items-center px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-primary">About me</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Get to know me
          </h2>
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
              Hi! I&apos;m <span className="font-medium text-foreground">so.sawz</span>,
              a frontend developer who graduated in Computer Engineering and
              Artificial Intelligence from Walailak University.
            </p>
            <p className="leading-relaxed">
              I&apos;ve built cross-platform mobile apps with React Native at
              ThaiDotRun and currently develop frontend applications with
              React.js and Tailwind CSS at 11-Infotech System. I focus on
              writing clean, maintainable code with great user experience.
            </p>
            <p className="leading-relaxed">
              My day-to-day involves building reusable UI components, integrating
              REST APIs, and working with design systems like shadcn/ui to
              deliver consistent, production-ready applications.
            </p>

            {/* Quick stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-2xl font-bold text-foreground">1+</p>
                <p className="text-sm text-muted">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">2</p>
                <p className="text-sm text-muted">Companies</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">7+</p>
                <p className="text-sm text-muted">Tech Stacks</p>
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
                  <div className="rounded-lg bg-primary-light p-2.5 text-primary">
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
