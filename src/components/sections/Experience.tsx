"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, Download, GraduationCap } from "lucide-react";
import Link from "next/link";
import { experiences } from "@/lib/experience";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export function Experience() {
  return (
    <section id="experience" className="detail-section px-6">
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true, margin: "-100px" }}
          className="detail-heading mb-16"
        >
          <span className="text-sm font-medium text-primary-text">
            Experience
          </span>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Where I&apos;ve worked
          </h1>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4.75 top-2 hidden h-[calc(100%-16px)] w-px bg-border md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15, ease }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative md:pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 hidden md:block">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-primary-text">
                    {exp.type === "work" ? (
                      <Briefcase size={18} />
                    ) : (
                      <GraduationCap size={18} />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className="group rounded-2xl border border-border p-6 transition-colors duration-300 hover:border-primary/50 hover:bg-surface">
                  {/* Header */}
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.title}</h3>
                      <p className="text-sm text-primary-text">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-block rounded-full border border-border px-3 py-1 text-xs text-muted">
                        {exp.type === "work" ? "Full-time" : "Internship"}
                      </span>
                      <span className="text-sm text-muted">{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="mt-4 space-y-2">
                    {exp.description.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-primary/20 bg-primary-light px-3 py-1 text-xs text-primary-text"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <section className="experience-project-focus">
          <p className="eyebrow">Beyond the job title</p>
          <h2>Full-stack project contributions</h2>
          <p>
            My recent project work spans Next.js interfaces, Go API changes,
            database query improvements, reporting exports, and regression tests
            within a team-built operations platform. Personal projects extend
            that work into Hono, Supabase, and Spring Boot.
          </p>
          <Link href="/projects" className="text-link">
            Explore the projects <ArrowUpRight size={16} />
          </Link>
        </section>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 mt-24"
        >
          <span className="text-sm font-medium text-primary-text">
            Education
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Where I&apos;ve studied
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative md:pl-14"
        >
          {/* Timeline dot */}
          <div className="absolute left-0 top-1 hidden md:block">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-primary-text">
              <GraduationCap size={18} />
            </div>
          </div>

          <div className="group rounded-2xl border border-border p-6 transition-colors duration-300 hover:border-primary/50 hover:bg-surface">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold">
                  Bachelor of Engineering
                </h3>
                <p className="text-sm text-primary-text">Walailak University</p>
              </div>
              <span className="text-sm text-muted">2021 - 2024</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Computer Engineering and Artificial Intelligence
            </p>
            <p className="mt-1 text-sm text-muted">
              GPA: <span className="font-medium text-foreground">3.72</span> /
              4.00
            </p>
          </div>
        </motion.div>

        {/* Download Resume */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-black transition-colors duration-300 hover:bg-primary-hover"
          >
            <Download size={16} />
            Download Resume
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
