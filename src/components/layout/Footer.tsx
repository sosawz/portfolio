import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="site-footer"><div className="page-shell footer-inner"><div><Link href="/" className="wordmark">so<span>.</span>sawz</Link><p>Thoughtfully built. Always evolving.</p></div><div className="footer-links">{socialLinks.map((link) => <a key={link.label} href={link.href} target={link.icon === "Mail" ? undefined : "_blank"} rel="noopener noreferrer">{link.label}<ArrowUpRight size={13} /></a>)}</div><span className="copyright">© {new Date().getFullYear()} so.sawz</span></div></footer>
  );
}
