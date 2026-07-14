import { useState, useEffect } from "react";
import { useLenis } from "./GsapProvider.jsx";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleScroll = ({ scroll }) => {
      setScrolled(scroll > 80);

      const sections = ["beranda", "tentang", "proyek", "kontak"];
      const scrollPos = scroll + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    lenis.on("scroll", handleScroll);
    return () => lenis.off("scroll", handleScroll);
  }, [lenis]);

  const navLinks = [
    { href: "#beranda", label: "Beranda", id: "beranda" },
    { href: "#tentang", label: "Tentang", id: "tentang" },
    { href: "#proyek", label: "Portofolio", id: "proyek" },
    { href: "#kontak", label: "Kontak", id: "kontak" },
  ];

  return (
    <nav
      data-nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-zinc-800/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#beranda"
          className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          Alia<span className="gradient-text">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeSection === link.id
                    ? "text-white bg-zinc-800/80"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/40"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <a href="#kontak" className="btn-primary text-sm !py-2 !px-4" data-magnetic>
              Hubungi
              <i className="ri-send-plane-line"></i>
            </a>
          </li>
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-zinc-800/60 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-4 pt-2 bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/60">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-2.5 px-3 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === link.id
                    ? "text-white bg-zinc-800"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#kontak"
              onClick={() => setMenuOpen(false)}
              className="btn-primary w-full justify-center text-sm"
            >
              Hubungi Saya
              <i className="ri-send-plane-line"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
