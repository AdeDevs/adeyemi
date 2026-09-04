import { useState, useEffect } from "react";
import PageLoader from "./PageLoader";
import Navbar from "./Navbar";
import InteractiveDotBackground from "./InteractiveDotBackground";
import NothingCursor from "./NothingCursor";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import SocialDock from "./SocialDock";

export default function HomePage() {
  const [isTheme, setIsTheme] = useState(() => {
    const storedTheme = localStorage.getItem("lulu");
    // false = Dark Mode (default engineering look), true = Light Mode
    return storedTheme ? JSON.parse(storedTheme) : false;
  });

  const [contactPrefill, setContactPrefill] = useState({
    subject: "",
    message: "",
  });

  useEffect(() => {
    localStorage.setItem("lulu", JSON.stringify(isTheme));
    if (!isTheme) {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#090b0e";
      document.body.style.color = "#f1f5f9";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "#fafafa";
      document.body.style.color = "#0f172a";
    }
  }, [isTheme]);

  const toggleTheme = () => {
    setIsTheme((prev) => !prev);
  };

  const handleSelectService = ({ subject, message }) => {
    setContactPrefill({ subject, message });
    // Smoothly scroll directly to the contact form on both mobile and desktop
    setTimeout(() => {
      const formElem = document.getElementById("portfolio-contact-form");
      if (formElem) {
        formElem.scrollIntoView({ behavior: "smooth", block: "center" });
        const nameInput = document.getElementById("contact-name");
        if (nameInput) {
          nameInput.focus({ preventScroll: true });
        }
      } else {
        const contactElem = document.getElementById("contact");
        if (contactElem) {
          contactElem.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 50);
  };

  return (
    <div
      id="portfolio-root"
      className={`min-h-screen w-full transition-colors duration-200 ${
        isTheme
          ? "bg-[#fafafa] text-neutral-900 tech-grid-light"
          : "bg-[#090b0e] text-neutral-100 tech-grid-dark"
      }`}
    >
      {/* Technical Modernist Interactive Preloader */}
      <PageLoader isTheme={isTheme} />

      {/* Living Ambient LED Dot Matrix Substrate */}
      <InteractiveDotBackground isTheme={isTheme} />

      {/* Nothing OS Custom Hardware Reticle Cursor (Desktop) */}
      <NothingCursor isTheme={isTheme} />

      {/* Floating Centered Navigation */}
      <Navbar isTheme={isTheme} toggleTheme={toggleTheme} />

      {/* Main Content Sections - Using full available screen width */}
      <main className="w-full px-4 sm:px-8 md:px-12 lg:px-16 pt-20 sm:pt-22 md:pt-24">
        <Hero isTheme={isTheme} />
        <AboutSection isTheme={isTheme} />
        <ProjectsSection isTheme={isTheme} />
        <ServicesSection isTheme={isTheme} onSelectService={handleSelectService} />
        <ContactSection isTheme={isTheme} prefill={contactPrefill} />
      </main>

      {/* Comprehensive Full-Width Footer */}
      <Footer isTheme={isTheme} />

      {/* Quick Access Floating Social Dock */}
      <SocialDock isTheme={isTheme} />
    </div>
  );
}
