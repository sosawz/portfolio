export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Highlight {
  icon: string;
  title: string;
  description: string;
}
