"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/constants";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        menuButton.current?.focus();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header className="site-header">
      <nav className="page-shell nav-inner" aria-label="Main navigation">
        <Link href="/" className="wordmark" aria-label="so.sawz home" onClick={() => setIsOpen(false)}>so<span>.</span>sawz<span className="wordmark-star" aria-hidden="true">✳</span></Link>
        <ul className="desktop-nav">{navLinks.map((link) => <li key={link.href}><Link href={link.href} aria-current={pathname === link.href ? "page" : undefined} className={pathname === link.href ? "nav-link active" : "nav-link"}>{link.label}</Link></li>)}</ul>
        <div className="nav-actions"><ThemeToggle /><Link href="/contact" className="nav-contact">Let’s talk <ArrowUpRight size={15} /></Link><button ref={menuButton} type="button" className="mobile-menu-button" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} aria-controls="mobile-navigation">{isOpen ? <X size={22} /> : <Menu size={22} />}</button></div>
      </nav>
      {isOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-navigation">{navLinks.map((link) => <Link href={link.href} key={link.href} aria-current={pathname === link.href ? "page" : undefined} onClick={() => setIsOpen(false)}>{link.label}<ArrowUpRight size={17} /></Link>)}</nav>}
    </header>
  );
}
