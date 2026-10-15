export const siteConfig = {
  name: "so.sawz",
  title: "sosawz",
  role: "Software Engineer",
  currentEmployer: "Multi Innovation Engineering",
  description:
    "Software Engineer building full-stack web applications with React, Next.js, TypeScript, Go, and PostgreSQL. Explore selected projects across interfaces, APIs, and databases.",
  url: "https://sosawz.dev",
  ogImage: "https://sosawz.dev/og.png",
  author: {
    name: "so.sawz",
    email: "sosawz.sng@gmail.com",
    github: "https://github.com/sosawz",
    linkedin: "https://linkedin.com/in/so-sawz-4392703a5",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },

  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
] as const;

export const socialLinks = [
  {
    label: "GitHub",
    href: siteConfig.author.github,
    icon: "Github" as const,
  },
  {
    label: "LinkedIn",
    href: siteConfig.author.linkedin,
    icon: "Linkedin" as const,
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.author.email}`,
    icon: "Mail" as const,
  },
] as const;
