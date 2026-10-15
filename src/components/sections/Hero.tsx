import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Github,
  Globe2,
} from "lucide-react";
import { SelectedProjects } from "@/components/sections/Projects";
import { siteConfig } from "@/lib/constants";
import { experiences } from "@/lib/experience";

const capabilities = [
  {
    number: "01",
    title: "Interfaces with intention.",
    description:
      "Responsive web experiences built with React, Next.js, and a considered approach to every component.",
    tags: "React · Next.js · TypeScript",
  },
  {
    number: "02",
    title: "Beyond the interface.",
    description:
      "Backend services, validated APIs, and business logic that connect the experience to the data behind it.",
    tags: "Go · Fiber · Hono · Spring Boot",
  },
  {
    number: "03",
    title: "Data with structure.",
    description:
      "Relational models, schema migrations, access policies, and query improvements for everyday application workflows.",
    tags: "PostgreSQL · Supabase · Docker",
  },
];

export function Hero() {
  return (
    <>
      <section id="home" className="hero-section page-shell">
        <div className="hero-topline">
          <span className="eyebrow">
            Independent perspective. Thoughtful development.
          </span>
          <span className="availability">
            <span /> Open to opportunities
          </span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-intro">
              <span className="small-rule" /> Hello, I’m so.sawz
            </p>
            <h1>
              Thoughtful <span className="serif-accent">by design.</span>
              <br />
              Precise <span className="serif-accent">by code.</span>
            </h1>
            <p className="hero-description">
              A full stack developer connecting thoughtful interfaces with
              reliable APIs and well-structured data. From React and Next.js to
              Go and PostgreSQL.
            </p>
            <div className="hero-actions">
              <Link href="/projects" className="button-primary">
                Explore my projects <ArrowUpRight size={17} />
              </Link>
              <Link href="/contact" className="text-link">
                Let’s talk <ArrowRight size={16} />
              </Link>
            </div>
            <div className="hero-person">
              <span className="monogram">s.</span>
              <div>
                <strong>so.sawz</strong>
                <span>{siteConfig.role} · Bangkok, TH</span>
              </div>
            </div>
          </div>
          <div
            className="art-panel"
            aria-label="Abstract golden orbital sculpture"
          >
            <div className="art-grid" aria-hidden="true" />
            <span className="art-coordinate" aria-hidden="true">
              FORM / FUNCTION
            </span>
            <span className="art-cross art-cross-one" aria-hidden="true">
              +
            </span>
            <span className="art-cross art-cross-two" aria-hidden="true">
              +
            </span>
            <div className="orbital-sculpture" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="orbit-core" />
            </div>
            <div className="art-caption">
              <span className="art-caption-icon">
                <Code2 size={17} />
              </span>
              <span>
                Where structure
                <br />
                <strong>meets possibility.</strong>
              </span>
              <span className="art-edition">
                EXPLORATION
                <br />
                001 — ∞
              </span>
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <span>
            <Globe2 size={14} /> Based in Bangkok. Building for the web.
          </span>
          <a href="#craft" className="scroll-link">
            A little more about me <ArrowDown size={14} />
          </a>
        </div>
      </section>
      <div className="tech-band">
        <div className="page-shell tech-band-inner">
          <span className="eyebrow">My everyday toolkit</span>
          <div>
            <span>React</span>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Go</span>
            <span>PostgreSQL</span>
          </div>
        </div>
      </div>
      <section id="craft" className="page-shell home-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / The craft</p>
            <h2>
              Good experiences.
              <br />
              <span className="serif-accent">Solid foundations.</span>
            </h2>
          </div>
          <p>
            I connect the experience people see with the services and data that
            make it work. Here’s what I bring to the build.
          </p>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className="capability" key={item.number}>
              <span className="eyebrow">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="capability-tags">{item.tags}</span>
            </article>
          ))}
        </div>
        <Link className="text-link section-link" href="/skills">
          Explore my toolkit <ArrowUpRight size={16} />
        </Link>
      </section>
      <SelectedProjects />
      <section className="experience-preview">
        <div className="page-shell home-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / The journey</p>
              <h2>
                Learning by building.
                <br />
                <span className="serif-accent">
                  Growing with every release.
                </span>
              </h2>
            </div>
            <Link href="/experience" className="text-link">
              Full experience <ArrowUpRight size={16} />
            </Link>
          </div>
          {experiences.map((experience) => (
            <Link
              className="experience-row"
              href="/experience"
              key={experience.company}
            >
              <span className="experience-period">
                {experience.summaryPeriod}
              </span>
              <div>
                <h3>{experience.title}</h3>
                <p>{experience.company}</p>
              </div>
              <span className="experience-type">{experience.focus}</span>
              <ArrowUpRight size={23} />
            </Link>
          ))}
          <div className="journey-note">
            <p>
              From Computer Engineering & AI at Walailak University
              <br className="hidden sm:block" /> to building experiences for the
              real world.
            </p>
            <Link className="text-link" href="/about">
              More about me <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <section className="page-shell home-cta">
        <p className="eyebrow">
          <span className="status-dot" /> Good things start with a conversation
        </p>
        <h2>
          Let’s build something
          <br />
          <span className="serif-accent">worth experiencing.</span>
        </h2>
        <div>
          <Link href="/contact" className="button-primary">
            Get in touch <ArrowUpRight size={17} />
          </Link>
          <a
            href={siteConfig.author.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            <Github size={17} /> Find me on GitHub <ArrowUpRight size={14} />
          </a>
        </div>
      </section>
    </>
  );
}
