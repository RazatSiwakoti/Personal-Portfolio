// Navbar.tsx: the bar shown at the top of every page
// Colours come from globals.css (.navbar and .nav-link)
import Link from "next/link";
import ThemeToggle from "./Themetoggle";

// All navbar links live here. Each href must match a section id in page.tsx
const NavLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    // "navbar" = colours from globals.css
    // sticky top-0 z-50 = stays at the top while scrolling, above other content
    <header className="navbar sticky top-0 z-50">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Name logo */}
        <Link href="/" className="text-lg font-bold">
          RS
        </Link>

        {/* map() loops over NavLinks and creates one link per item */}
        <ul className="flex gap-6 text-sm">
          {NavLinks.map((link) => (
            <li key={link.href}>
              {/* "nav-link" = hover colour from globals.css
                  transition-colors = colour fades smoothly instead of snapping */}
              <Link href={link.href} className="nav-link transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <span aria-hidden="true" className="mx-8 opacity-50">
          {" "}
          |{" "}
        </span>

        {/*Toggle Button */}
        <ThemeToggle />
      </nav>
    </header>
  );
}
