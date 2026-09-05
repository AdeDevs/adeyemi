import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Sun, Moon, FileText, ArrowUpRight } from "lucide-react";

export default function Navbar({ isTheme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navRef = useRef(null);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  // Real-time smooth scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scrolled = (totalScroll / windowHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, scrolled)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // Close mobile menu when clicking or tapping outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      ref={navRef}
      id="main-navbar"
      className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 w-[95%] sm:w-[92%] max-w-6xl z-50 transition-all duration-300"
    >
      <div
        className={`relative border px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between transition-all duration-200 backdrop-blur-xl backdrop-saturate-180 overflow-hidden ${
          isTheme
            ? "bg-white/60 border-white/60 text-neutral-900 shadow-[0_8px_32px_0_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.85)]"
            : "bg-[#090b0e]/60 border-white/10 text-neutral-100 shadow-[0_8px_32px_0_rgba(0,0,0,0.45),inset_0_1px_0_0_rgba(255,255,255,0.08)]"
        }`}
      >
        {/* Hardware Telemetry Scroll Buffer Track (1.5px high along bottom rim) */}
        <div
          className="absolute bottom-0 left-0 h-[1.5px] bg-emerald-500 transition-[width] duration-150 ease-out will-change-[width]"
          style={{ width: `${scrollProgress}%` }}
          role="progressbar"
          aria-valuenow={Math.round(scrollProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Page reading buffer progress"
        />
        {/* Brand Logo */}
        <div className="flex items-center gap-4">
          <NavLink
            to="/"
            id="brand-logo"
            className="font-mono-tech text-base tracking-tight font-bold flex items-center gap-1.5 transition-colors hover:text-emerald-500"
          >
            <span className="text-neutral-400 font-normal">[</span>
            <span>ADEDEVS</span>
            <span className="text-neutral-400 font-normal">]</span>
          </NavLink>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 font-mono-tech text-xs tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={`px-3 py-1.5 uppercase transition-colors hover:text-emerald-500 ${
                isTheme ? "text-neutral-700" : "text-neutral-300"
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Resume button with button hover styling (green bg, black text) */}
          <a
            href="/resume.pdf"
            download="Adeyemi_Akinyemi_Resume.pdf"
            id="nav-resume-btn"
            className={`group ml-2 px-3 py-1.5 border flex items-center gap-1.5 uppercase font-semibold transition-all duration-200 hover:bg-emerald-500 hover:border-emerald-500 hover:text-black hover:font-bold ${
              isTheme
                ? "border-neutral-900 bg-neutral-900 text-white"
                : "border-neutral-200 bg-neutral-100 text-neutral-950"
            }`}
          >
            <FileText size={13} />
            <span>Resume</span>
            <ArrowUpRight size={13} className="transition-transform duration-200 group-hover:rotate-45" />
          </a>

          {/* Theme Toggle Button - Borderless, blends in */}
          <button
            onClick={toggleTheme}
            id="theme-toggle-btn"
            aria-label="Toggle Theme"
            className={`ml-1 w-9 h-9 box-border flex items-center justify-center p-0 transition-colors hover:text-emerald-500 ${
              isTheme ? "text-neutral-800" : "text-neutral-200"
            }`}
          >
            {isTheme ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </nav>

        {/* Mobile controls - Symmetrically sized w-9 h-9 box-border buttons without borders */}
        <div className="flex md:hidden items-center gap-1">
          <button
            onClick={toggleTheme}
            id="theme-toggle-btn-mobile"
            aria-label="Toggle Theme"
            className={`w-9 h-9 box-border flex items-center justify-center p-0 transition-colors hover:text-emerald-500 ${
              isTheme ? "text-neutral-800" : "text-neutral-200"
            }`}
          >
            {isTheme ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          {/* Liquid Glass Hamburger Toggler - Exactly identical 19px lines & no border */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            aria-label="Toggle Navigation Menu"
            className={`w-9 h-9 box-border flex flex-col items-center justify-center gap-[5px] p-0 transition-colors hover:text-emerald-500 ${
              isTheme ? "text-neutral-900" : "text-neutral-100"
            }`}
          >
            {/* Top morphing line: exactly 19px wide, 2px thick */}
            <span
              className={`w-[19px] h-[2px] transition-all duration-300 ease-in-out ${
                isTheme ? "bg-neutral-900" : "bg-neutral-100"
              } ${
                mobileMenuOpen
                  ? "transform rotate-45 translate-y-[3.5px]"
                  : ""
              }`}
            />
            {/* Bottom morphing line: exactly 19px wide, 2px thick */}
            <span
              className={`w-[19px] h-[2px] transition-all duration-300 ease-in-out ${
                isTheme ? "bg-neutral-900" : "bg-neutral-100"
              } ${
                mobileMenuOpen
                  ? "transform -rotate-45 -translate-y-[3.5px]"
                  : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu - Identical liquid glassmorphism recipe as the navbar */}
      <div
        id="mobile-menu-drawer"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out mt-1.5 border backdrop-blur-xl backdrop-saturate-180 ${
          mobileMenuOpen
            ? "max-h-96 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2 pointer-events-none border-t-0"
        } ${
          isTheme
            ? "bg-white/60 border-white/60 text-neutral-900 shadow-[0_8px_32px_0_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.85)]"
            : "bg-[#090b0e]/60 border-white/10 text-neutral-100 shadow-[0_8px_32px_0_rgba(0,0,0,0.45),inset_0_1px_0_0_rgba(255,255,255,0.08)]"
        }`}
      >
        <div className="p-4 flex flex-col gap-2 font-mono-tech text-xs">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className={`py-2 px-3 border border-transparent transition-all duration-200 uppercase tracking-wider hover:bg-emerald-500 hover:border-emerald-500 hover:text-black hover:font-bold ${
                isTheme ? "text-neutral-800" : "text-neutral-200"
              }`}
            >
              {`// ${link.label.toUpperCase()}`}
            </a>
          ))}

          <a
            href="/resume.pdf"
            download="Adeyemi_Akinyemi_Resume.pdf"
            onClick={handleLinkClick}
            className={`group mt-1 py-2 px-3 border text-center flex items-center justify-center gap-2 uppercase tracking-wider font-semibold transition-all duration-200 hover:bg-emerald-500 hover:border-emerald-500 hover:text-black hover:font-bold ${
              isTheme
                ? "bg-neutral-900 border-neutral-900 text-white"
                : "bg-neutral-100 border-neutral-100 text-neutral-950"
            }`}
          >
            <FileText size={14} />
            <span>Download Resume</span>
            <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:rotate-45" />
          </a>
        </div>
      </div>
    </header>
  );
}
