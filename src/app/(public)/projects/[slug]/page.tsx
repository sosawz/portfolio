import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ProjectArchitecture } from "@/components/sections/Projects";
import { getProject, projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return { title: "Project not found" };
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return (
    <article className="detail-section px-6 project-detail">
      <div className="mx-auto max-w-6xl">
        <Link href="/projects" className="text-link project-back">
          <ArrowLeft size={15} /> All projects
        </Link>
        <header className="detail-heading mb-12">
          <span className="text-primary-text">{project.category}</span>
          <h1>{project.title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
            {project.summary}
          </p>
        </header>
        <div className="project-detail-grid">
          <div>
            <section className="project-story">
              <h2>The challenge</h2>
              <p>{project.problem}</p>
            </section>
            <section className="project-story">
              <h2>My contribution</h2>
              <p className="project-role">{project.role}</p>
              <ul>
                {project.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section className="project-story project-scope">
              <h2>Project scope</h2>
              <p>{project.scope}</p>
            </section>
          </div>
          <aside aria-label="Project architecture and technologies">
            <ProjectArchitecture project={project} />
            <h2 className="mt-8 text-sm font-medium">Built with</h2>
            <ul className="project-tags">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </aside>
        </div>
        <div className="projects-contact">
          <p>Let’s talk about building your next application.</p>
          <Link href="/contact" className="button-primary">
            Get in touch <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
