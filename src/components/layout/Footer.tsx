import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "@/lib/constants";

const iconMap = { Github, Linkedin, Mail } as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 p-6 md:flex-row md:justify-between">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} so.sawz All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="rounded-lg p-2 text-muted transition-colors hover:bg-surface hover:text-primary"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
