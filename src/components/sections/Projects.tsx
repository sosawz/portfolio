import Link from "next/link";
import { ArrowDown, ArrowUpRight, Layers3 } from "lucide-react";
import { projects, type Project } from "@/lib/projects";

export function ProjectArchitecture({ project }: { project: Project }) {
  return (
    <div className="project-architecture">
      <div className="project-architecture-label">
        <Layers3 size={14} /> System overview
      </div>
      <ol>
        {project.layers.map((layer, index) => (
          <li key={layer}>
            <span className="architecture-node">
              <span>0{index + 1}</span>
              {layer}
            </span>
            {index < project.layers.length - 1 && (
              <ArrowDown size={14} aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ProjectCard({
  project,
  index,
  headingAs: Heading = "h3",
}: {
  project: Project;
  index: number;
  headingAs?: "h2" | "h3";
}) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="eyebrow">
          0{index + 1} / {project.category}
        </span>
        <ArrowUpRight size={18} aria-hidden="true" />
      </div>
      <ProjectArchitecture project={project} />
      <div className="project-card-content">
        <p className="project-role">{project.role}</p>
        <Heading>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </Heading>
        <p className="project-summary">{project.summary}</p>
        <ul className="project-tags" aria-label="Technologies">
          {project.stack.slice(0, 5).map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <Link
          href={`/projects/${project.slug}`}
          className="text-link"
          aria-label={`Read about ${project.title}`}
        >
          Explore project <ArrowUpRight size={15} />
        </Link>
      </div>
    </article>
  );
}

export function SelectedProjects() {
  return (
    <section className="selected-projects" id="projects">
      <div className="page-shell home-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / Selected work</p>
            <h2>
              From interface
              <br />
              <span className="serif-accent">to infrastructure.</span>
            </h2>
          </div>
          <Link href="/projects" className="text-link">
            All projects <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="project-grid project-grid-preview">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section className="detail-section px-6" id="projects">
      <div className="mx-auto max-w-6xl">
        <div className="detail-heading mb-16">
          <span className="text-sm font-medium text-primary-text">
            Selected projects
          </span>
          <h1>Built across the stack.</h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">
            Web interfaces, backend services, and the data that connects them. A
            selection of personal projects, hands-on learning, and contributions
            to a team-built platform.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              headingAs="h2"
            />
          ))}
        </div>
        <div className="projects-contact">
          <p>Interested in the thinking behind the implementation?</p>
          <Link href="/contact" className="text-link">
            Let’s talk <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
