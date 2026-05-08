// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { personal } from "../data/resume";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0d0d0d]/95 backdrop-blur-md shadow-md shadow-black/40" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="font-mono text-sm font-bold tracking-widest text-[#e8e0d4] uppercase hover:text-[#c9a96e] transition-colors"
        >
          <span className="text-[#c9a96e]">&gt;</span> {personal.name.split(" ")[0]}
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `text-xs font-mono tracking-widest uppercase transition-colors duration-200 ${
                  isActive
                    ? "text-[#c9a96e] border-b border-[#c9a96e] pb-0.5"
                    : "text-[#8a8a8a] hover:text-[#e8e0d4]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-5 bg-[#c9a96e] transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-px w-5 bg-[#c9a96e] transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-5 bg-[#c9a96e] transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d0d0d]/98 backdrop-blur-md border-t border-[#1f1f1f] px-6 py-4 flex flex-col gap-4">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-xs font-mono tracking-widest uppercase ${
                  isActive ? "text-[#c9a96e]" : "text-[#8a8a8a]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
