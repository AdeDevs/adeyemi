import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { featuredProjects } from "../data/projectsData";
import { ArrowUpRight, GitBranch, Globe, Plus, Minus } from "lucide-react";

export default function ProjectsSection({ isTheme }) {
  const [previewModal, setPreviewModal] = useState(null); // { title: string, url: string }
  const [expandedProjectId, setExpandedProjectId] = useState("directrent"); // Project 01 open by default

  const toggleProject = (id) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  const flagshipProjects = featuredProjects.slice(0, 3);
  const utilityProjects = featuredProjects.slice(3);

  // Close modal with ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setPreviewModal(null);
      }
    };
    if (previewModal) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [previewModal]);

  const openPreview = (project) => {
    setPreviewModal({
      title: project.title,
      url: project.liveUrl,
    });
  };

  const closePreview = () => {
    setPreviewModal(null);
  };

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-24 border-b border-inherit">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 sm:mb-14"
      >
        <div className="font-mono-tech text-xs tracking-widest uppercase mb-2 flex items-center gap-2">
          <span className="text-neutral-500 font-bold">[02]</span>
          <span className={isTheme ? "text-neutral-800" : "text-neutral-300"}>
            SELECTED WORKS
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2
              className={`text-3xl sm:text-4xl font-extrabold uppercase tracking-tight ${
                isTheme ? "text-neutral-950" : "text-neutral-100"
              }`}
            >
              Featured Projects
            </h2>
            <div className="flex items-center gap-2 mt-1.5 font-mono-tech text-[10px] sm:text-xs text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>CARTRIDGE ARCH // TAP ANY PROJECT TO EXPAND SPEC</span>
            </div>
          </div>
          <p className={`font-mono-tech text-xs max-w-md ${isTheme ? "text-neutral-700" : "text-neutral-400"}`}>
            Production marketplaces, verified rental networks, and web utilities engineered with modern React, strict RBAC, and zero bloat.
          </p>
        </div>
      </motion.div>

      {/* Part 1: Flagship Showcase - Expandable Hardware Cartridge Accordion (Single-Active) */}
      <div className="space-y-3 sm:space-y-4 mb-16 sm:mb-20">
        {flagshipProjects.map((project, index) => {
          const isEven = index % 2 === 1;
          const isExpanded = expandedProjectId === project.id;

          return (
            <motion.article
              key={project.id}
              id={`project-${project.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`group border transition-all duration-300 overflow-hidden ${
                isExpanded
                  ? isTheme
                    ? "bg-white border-neutral-400 shadow-md ring-1 ring-neutral-400/20"
                    : "bg-[#0d1015] border-neutral-700 shadow-lg ring-1 ring-neutral-700/30"
                  : isTheme
                  ? "bg-white border-neutral-300/90 hover:border-neutral-400 shadow-xs"
                  : "bg-[#0d1015] border-neutral-800 hover:border-neutral-700"
              }`}
            >
              {/* Cartridge Header Bar - Click to Toggle */}
              <button
                type="button"
                onClick={() => toggleProject(project.id)}
                aria-expanded={isExpanded}
                className={`w-full text-left p-3.5 sm:p-5 flex items-center justify-between gap-3 transition-colors cursor-pointer select-none ${
                  isTheme
                    ? isExpanded
                      ? "bg-neutral-50/90 border-b border-neutral-200"
                      : "bg-white hover:bg-neutral-50/70"
                    : isExpanded
                    ? "bg-[#121620] border-b border-neutral-800"
                    : "bg-[#0d1015] hover:bg-[#11151c]"
                }`}
              >
                {/* Left: Project Number + Title + Category Pill */}
                <div className="flex items-center gap-2.5 sm:gap-4 min-w-0">
                  <span
                    className={`font-mono-tech text-xs sm:text-sm font-bold transition-colors ${
                      isExpanded
                        ? "text-emerald-500"
                        : isTheme
                        ? "text-neutral-500"
                        : "text-neutral-400"
                    }`}
                  >
                    [{project.number}]
                  </span>
                  <h3
                    className={`text-base sm:text-xl font-bold uppercase tracking-tight truncate transition-colors ${
                      isTheme ? "text-neutral-950" : "text-neutral-50"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <span
                    className={`hidden md:inline-block font-mono-tech text-[10px] uppercase tracking-wider px-2 py-0.5 border ${
                      isTheme
                        ? "bg-neutral-100 border-neutral-300 text-neutral-700"
                        : "bg-neutral-900 border-neutral-800 text-neutral-400"
                    }`}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Right: Glyph LED matrix rail + Tap to Expand/Collapse Affordance Pill */}
                <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
                  {/* Glyph LEDs */}
                  <div className="hidden sm:flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                    {[0, 1, 2, 3, 4, 5].map((dotIdx) => (
                      <span
                        key={dotIdx}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                          isExpanded
                            ? "bg-emerald-500"
                            : isTheme
                            ? "bg-neutral-300 group-hover:bg-neutral-400"
                            : "bg-neutral-700 group-hover:bg-neutral-600"
                        }`}
                        style={{ transitionDelay: `${dotIdx * 25}ms` }}
                      />
                    ))}
                  </div>

                  {/* Hardware Toggle Indicator Button */}
                  <div
                    className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 font-mono-tech text-[10px] sm:text-xs uppercase tracking-wider border transition-all duration-200 ${
                      isExpanded
                        ? "bg-emerald-500/10 border-emerald-500/70 text-emerald-500 font-bold"
                        : isTheme
                        ? "bg-neutral-100 border-neutral-300 text-neutral-700 group-hover:border-neutral-500 group-hover:text-black"
                        : "bg-neutral-900 border-neutral-800 text-neutral-400 group-hover:border-neutral-600 group-hover:text-white"
                    }`}
                  >
                    <span className="font-semibold">
                      {isExpanded ? "COLLAPSE" : "TAP TO EXPAND"}
                    </span>
                    <span className="inline-flex items-center justify-center">
                      {isExpanded ? <Minus size={13} className="text-emerald-500" /> : <Plus size={13} />}
                    </span>
                  </div>
                </div>
              </button>

              {/* Animated Expandable Body */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    key={`content-${project.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start p-4 sm:p-6 md:p-8">
                      {/* Media Column (Alternates order on desktop) */}
                      <div
                        className={`lg:col-span-6 ${
                          isEven ? "lg:order-2" : "lg:order-1"
                        }`}
                      >
                        <div
                          className={`border transition-all overflow-hidden ${
                            isTheme
                              ? "border-neutral-300 bg-neutral-100"
                              : "border-neutral-800 bg-neutral-950"
                          }`}
                        >
                          {/* Browser chrome header bar with Red, Yellow, Green macOS-style window controls */}
                          <div
                            className={`flex items-center justify-between px-3 py-2 border-b font-mono-tech text-[11px] ${
                              isTheme
                                ? "bg-neutral-100 border-neutral-300 text-neutral-700"
                                : "bg-neutral-900 border-neutral-800 text-neutral-400"
                            }`}
                          >
                            {/* Red, Yellow, Green macOS-style controls */}
                            <div className="flex items-center gap-1.5">
                              <span
                                className="w-2.5 h-2.5 rounded-full bg-[#ef4444] border border-red-600/40 inline-block"
                                title="Close window"
                              ></span>
                              <span
                                className="w-2.5 h-2.5 rounded-full bg-neutral-400/40 dark:bg-neutral-600/50 border border-neutral-500/30 inline-block cursor-default"
                                title="Minimize disabled"
                              ></span>
                              <button
                                type="button"
                                onClick={() => openPreview(project)}
                                className="w-2.5 h-2.5 rounded-full bg-[#22c55e] border border-green-600/40 inline-block hover:scale-125 transition-transform cursor-pointer"
                                title="Click green dot to preview website"
                                aria-label="Preview website"
                              ></button>
                            </div>

                            <span className="truncate max-w-[200px] sm:max-w-[240px] text-[10px] text-neutral-500">
                              {project.liveUrl.replace("https://", "").replace("http://", "")}
                            </span>

                            <span className="w-4"></span>
                          </div>

                          {/* Project image anchored to top with interactive click */}
                          <div
                            onClick={() => openPreview(project)}
                            className="block group/preview overflow-hidden relative aspect-[16/10] cursor-pointer bg-neutral-900"
                          >
                            <img
                              src={project.image}
                              alt={project.title}
                              loading="lazy"
                              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/preview:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover/preview:bg-black/35 transition-colors duration-300 flex items-center justify-center">
                              <span className="opacity-0 group-hover/preview:opacity-100 group-hover/preview:translate-y-0 translate-y-2 transition-all duration-300 px-3 py-1.5 bg-neutral-950/95 text-white font-mono-tech text-xs uppercase tracking-wider font-bold border border-emerald-500/70 flex items-center gap-1.5 shadow-xl">
                                <span>Preview Website</span>
                                <ArrowUpRight size={13} className="text-emerald-400" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Narrative & Details Column */}
                      <div
                        className={`lg:col-span-6 flex flex-col justify-start ${
                          isEven ? "lg:order-1" : "lg:order-2"
                        }`}
                      >
                        {/* Micro meta header */}
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="font-mono-tech text-xs font-bold text-neutral-500">
                            [{project.number}]
                          </span>
                          <span
                            className={`font-mono-tech text-xs px-2 py-0.5 border ${
                              isTheme
                                ? "bg-neutral-100 border-neutral-300 text-neutral-800 font-medium"
                                : "bg-neutral-900 border-neutral-800 text-neutral-300"
                            }`}
                          >
                            {project.role}
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          className={`text-2xl sm:text-3xl font-extrabold uppercase tracking-tight mb-1.5 ${
                            isTheme ? "text-neutral-950" : "text-neutral-50"
                          }`}
                        >
                          {project.title}
                        </h3>

                        {/* Tagline */}
                        <div className={`font-mono-tech text-xs uppercase tracking-wider mb-3.5 ${isTheme ? "text-neutral-700 font-medium" : "text-neutral-400"}`}>
                          {project.tagline}
                        </div>

                        {/* Description in mono tech font */}
                        <p
                          className={`font-mono-tech text-xs sm:text-sm leading-relaxed mb-6 ${
                            isTheme ? "text-neutral-800 font-normal" : "text-neutral-200"
                          }`}
                        >
                          {project.description}
                        </p>

                        {/* Pure Tech Stack Pills (3-4 essential tech stacks) */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.tags.map((t) => (
                            <span
                              key={t}
                              className={`px-2 py-1 font-mono-tech text-[11px] border transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-500 hover:border-emerald-500 hover:text-white cursor-default ${
                                isTheme
                                  ? "bg-neutral-100 border-neutral-300 text-neutral-900 font-medium"
                                  : "bg-neutral-900 border-neutral-800 text-neutral-300"
                              }`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Clean Primary Action: Live Website with hover invert */}
                        <div className="flex items-center">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={`group/btn px-4 sm:px-5 py-2.5 border font-mono-tech text-xs uppercase tracking-wider font-bold flex items-center gap-2 transition-all duration-200 hover:bg-emerald-500 hover:border-emerald-500 hover:text-black active:scale-[0.98] ${
                              isTheme
                                ? "bg-neutral-950 border-neutral-950 text-white"
                                : "bg-neutral-100 border-neutral-100 text-neutral-950"
                            }`}
                          >
                            <Globe size={14} />
                            <span>Live Website</span>
                            <ArrowUpRight size={14} className="transition-transform duration-200 group-hover/btn:rotate-45" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>

      {/* Part 2: Specialized Utilities with Desktop Unified Title/Number and Right-Pinned Category */}
      <div className="mt-12 sm:mt-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b pb-3 border-inherit"
        >
          <h3
            className={`text-xl font-bold uppercase tracking-tight ${
              isTheme ? "text-neutral-950" : "text-neutral-100"
            }`}
          >
            Specialized Utilities & Experiments
          </h3>
          <span className={`font-mono-tech text-xs ${isTheme ? "text-neutral-700" : "text-neutral-400"}`}>
            [INDEX 04 — 06]
          </span>
        </motion.div>

        {/* Ledger List */}
        <div className="divide-y border border-inherit">
          {utilityProjects.map((util) => (
            <motion.div
              key={util.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4 }}
              className={`group p-4 sm:p-5 md:p-6 transition-all duration-200 flex flex-col gap-4 ${
                isTheme
                  ? "bg-white hover:bg-neutral-50/90"
                  : "bg-[#0d1015] hover:bg-neutral-900/50"
              }`}
            >
              {/* Row 1: Header - Desktop has unified [Number] Title on left, Category and Glyph on far right */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 w-full">
                {/* Unified Title & Number */}
                <div className="flex items-baseline gap-2.5">
                  <span className={`font-mono-tech text-xs font-bold ${isTheme ? "text-neutral-500" : "text-neutral-400"}`}>
                    [{util.number}]
                  </span>
                  <h4
                    className={`text-lg sm:text-xl font-bold uppercase tracking-tight ${
                      isTheme ? "text-neutral-950" : "text-neutral-100"
                    }`}
                  >
                    {util.title}
                  </h4>
                </div>

                {/* Category & Micro Glyph Rail */}
                <div className="flex items-center gap-3 sm:justify-end">
                  <div className="flex items-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
                    {[0, 1, 2, 3].map((dotIdx) => (
                      <span
                        key={dotIdx}
                        className="w-1.5 h-1.5 rounded-full transition-all duration-200 bg-neutral-400/50 dark:bg-neutral-600/50 group-hover:bg-emerald-500"
                        style={{ transitionDelay: `${dotIdx * 30}ms` }}
                      />
                    ))}
                  </div>
                  <div className={`font-mono-tech text-[11px] uppercase tracking-wider ${isTheme ? "text-neutral-700 font-medium" : "text-neutral-400"}`}>
                    {util.category}
                  </div>
                </div>
              </div>

              {/* Row 2: Description and Tags */}
              <div className="max-w-3xl">
                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-3 ${
                    isTheme ? "text-neutral-800" : "text-neutral-300"
                  }`}
                >
                  {util.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {util.tags.map((t) => (
                    <span
                      key={t}
                      className={`px-2 py-0.5 font-mono-tech text-[10px] border transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500 hover:text-emerald-500 cursor-default ${
                        isTheme
                          ? "bg-neutral-100 border-neutral-300 text-neutral-800"
                          : "bg-neutral-900 border-neutral-800 text-neutral-300"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Row 3: Action Buttons (Launch & Code only, no preview button) */}
              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href={util.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`group px-3.5 py-1.5 border font-mono-tech text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-all duration-200 hover:bg-emerald-500 hover:border-emerald-500 hover:text-black active:scale-[0.98] ${
                    isTheme
                      ? "bg-neutral-900 border-neutral-900 text-white"
                      : "bg-neutral-100 border-neutral-100 text-neutral-950"
                  }`}
                >
                  <span>Launch</span>
                  <ArrowUpRight size={13} className="transition-transform duration-200 group-hover:rotate-45" />
                </a>

                {util.githubUrl && (
                  <a
                    href={util.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 border border-transparent font-mono-tech text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all duration-200 hover:text-emerald-500 active:scale-[0.98]"
                    title="View GitHub Repository"
                  >
                    <GitBranch size={13} />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Enlarged Dismissible Preview Window Modal with AnimatePresence */}
      <AnimatePresence>
        {previewModal && (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closePreview}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className={`w-[96vw] max-w-7xl h-[92vh] flex flex-col border shadow-2xl ${
                isTheme
                  ? "bg-white border-neutral-300 text-neutral-900"
                  : "bg-[#0c0f14] border-neutral-800 text-neutral-100"
              }`}
            >
              {/* Window Header Titlebar with Red (close), Yellow (grayed out), Green (interactive) */}
              <div
                className={`flex items-center justify-between px-3 sm:px-4 py-2.5 border-b font-mono-tech text-xs select-none ${
                  isTheme
                    ? "bg-neutral-100 border-neutral-300 text-neutral-700"
                    : "bg-neutral-900 border-neutral-800 text-neutral-300"
                }`}
              >
                {/* macOS Window Controls */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={closePreview}
                    className="w-3 h-3 rounded-full bg-[#ef4444] border border-red-600/50 hover:opacity-80 transition-opacity cursor-pointer"
                    title="Close Window (Esc)"
                    aria-label="Close Preview"
                  ></button>
                  <span
                    className="w-3 h-3 rounded-full bg-neutral-400/30 dark:bg-neutral-600/40 border border-neutral-400/30 cursor-default"
                    title="Minimize disabled"
                  ></span>
                  <span
                    className="w-3 h-3 rounded-full bg-[#22c55e] border border-green-600/50 cursor-default"
                    title="Enlarged window mode active"
                  ></span>
                  <span className="font-bold ml-2 uppercase text-[11px] truncate hidden sm:inline">
                    {previewModal.title}
                  </span>
                </div>

                {/* URL Address Bar */}
                <div
                  className={`px-3 py-1 border text-[11px] truncate max-w-xs sm:max-w-md font-mono-tech flex items-center gap-1.5 ${
                    isTheme
                      ? "bg-white border-neutral-300 text-neutral-700"
                      : "bg-neutral-950 border-neutral-800 text-neutral-300"
                  }`}
                >
                  <Globe size={11} className="text-emerald-500 shrink-0" />
                  <span className="truncate">{previewModal.url}</span>
                </div>

                {/* Open in tab action - borderless: icon-only on mobile, full text on desktop */}
                <div className="flex items-center gap-1">
                  <a
                    href={previewModal.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-500 hover:text-emerald-500 transition-colors p-1 flex items-center gap-1 font-mono-tech text-[11px] uppercase"
                    title="Open in new tab"
                    aria-label="Open in new tab"
                  >
                    <span className="hidden sm:inline">Open in New Tab</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>

              {/* Window Content: Live Interactive Iframe */}
              <div className="relative flex-1 w-full bg-white overflow-hidden">
                <iframe
                  src={previewModal.url}
                  title={`${previewModal.title} Live Preview`}
                  className="w-full h-full border-0"
                  loading="eager"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              </div>

              {/* Bottom Status Bar: Desktop shows Press Esc to dismiss on right; Mobile shows Close Window on bottom right */}
              <div
                className={`px-4 py-2 border-t font-mono-tech text-xs flex items-center justify-end select-none ${
                  isTheme
                    ? "bg-neutral-100 border-neutral-300 text-neutral-700"
                    : "bg-neutral-900 border-neutral-800 text-neutral-400"
                }`}
              >
                {/* Desktop: Press Esc to dismiss */}
                <div className="hidden sm:block text-[11px] text-neutral-500 font-mono-tech">
                  Press Esc or click outside to dismiss
                </div>

                {/* Mobile: Touch-friendly Close button on the right */}
                <button
                  type="button"
                  onClick={closePreview}
                  className="sm:hidden py-1 px-3 font-mono-tech text-xs uppercase tracking-wider font-bold hover:text-emerald-500 transition-colors text-right"
                >
                  [ Close Window ]
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
