import { motion } from "framer-motion";

export default function AboutSection({ isTheme }) {
  // 12 Core Capabilities (Clean outline SVGs, optimized for high-density hardware grid)
  const techItems = [
    {
      name: "React",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4 shrink-0" aria-label="React">
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="1.6" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: "Next.js",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4 shrink-0" aria-label="Next.js">
          <circle cx="12" cy="12" r="9.5" />
          <path d="M16 16.5L8.5 7.5H7v9h1.6v-5.5l6.4 7.5H16z" fill="currentColor" stroke="none" />
          <path d="M14.5 7.5h1.6v5.5h-1.6z" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4 shrink-0" aria-label="TypeScript">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M8 8.5v7M5.5 8.5h5" strokeLinecap="round" />
          <path d="M14 15.5c2 0 3-1 3-2.2s-1.2-1.6-2.5-1.8c-1.3-.2-2-.6-2-1.5s1-2 2.5-2c1.2 0 2 .5 2.5 1.2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4 shrink-0" aria-label="Tailwind CSS">
          <path d="M6 8.5c1.2-1.8 3-2.5 5.5-2.2 2.2.3 3.5 1.8 4.8 3.1 1.4 1.4 2.5 2.6 4.7 2.6 2.5 0 4-1.2 5-3.5-1.2 1.8-3 2.5-5.5 2.2-2.2-.3-3.5-1.8-4.8-3.1-1.4-1.4-2.5-2.6-4.7-2.6-2.5 0-4 1.2-5 3.5z" />
          <path d="M1 15.5c1.2-1.8 3-2.5 5.5-2.2 2.2.3 3.5 1.8 4.8 3.1 1.4 1.4 2.5 2.6 4.7 2.6 2.5 0 4-1.2 5-3.5-1.2 1.8-3 2.5-5.5 2.2-2.2-.3-3.5-1.8-4.8-3.1-1.4-1.4-2.5-2.6-4.7-2.6-2.5 0-4 1.2-5 3.5z" />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4 shrink-0" aria-label="JavaScript">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M10 9v5a1.5 1.5 0 0 1-3 0" strokeLinecap="round" />
          <path d="M13.5 14.5c.8.6 1.8 1 2.8 1 1.5 0 2.2-.8 2.2-1.8 0-1.2-.8-1.7-2.2-2.2-1.4-.5-2.3-1-2.3-2.3 0-1.2.9-2.2 2.4-2.2 1 0 1.8.4 2.4.9" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "REST APIs",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4 shrink-0" aria-label="REST APIs">
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="18" cy="12" r="2.5" />
          <circle cx="6" cy="18" r="2.5" />
          <path d="M8.5 7.2l7 3.6M8.5 16.8l7-3.6" />
        </svg>
      ),
    },
    {
      name: "Supabase",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4 shrink-0" aria-label="Supabase">
          <path d="M13 2.5L4 13.5h7.5L11 21.5l9-11h-7.5L13 2.5z" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "Firebase",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4 shrink-0" aria-label="Firebase">
          <path d="M4.5 18L8.5 4l3 7.5L16.5 8l3 10-7.5 4-7.5-4z" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "Paystack",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4 shrink-0" aria-label="Paystack">
          <rect x="3" y="5" width="18" height="3" rx="1" />
          <rect x="3" y="10.5" width="12" height="3" rx="1" />
          <rect x="3" y="16" width="18" height="3" rx="1" />
        </svg>
      ),
    },
    {
      name: "Git & GitHub",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4 shrink-0" aria-label="Git">
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="18" cy="12" r="2.5" />
          <circle cx="6" cy="18" r="2.5" />
          <path d="M6 8.5v7M8.5 6h3.5a4 4 0 0 1 4 4v0" />
        </svg>
      ),
    },
    {
      name: "Vercel",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4 shrink-0" aria-label="Vercel">
          <path d="M12 3.5L21.5 20H2.5L12 3.5z" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "HTML5 / CSS3",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4 shrink-0" aria-label="HTML5/CSS3">
          <path d="M4 3l1.8 17.5L12 22l6.2-1.5L20 3H4z" />
          <path d="M16.5 7H7.5l.4 4.5h8l-.5 5-3.4 1-3.4-1-.2-2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 border-b border-inherit scroll-mt-20">
      {/* Anchor helper for backward compatibility */}
      <span id="skills" className="absolute -top-24 opacity-0 pointer-events-none" />
      <span id="tech-stack" className="absolute -top-24 opacity-0 pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4"
      >
        <div>
          <div className="font-mono-tech text-xs tracking-widest uppercase mb-2 flex items-center gap-2">
            <span className="text-neutral-500 font-bold">[01]</span>
            <span className={isTheme ? "text-neutral-800" : "text-neutral-300"}>
              ABOUT & TECH STACK
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold uppercase tracking-tight ${
              isTheme ? "text-neutral-950" : "text-neutral-100"
            }`}
          >
            Engineering & Perspective
          </h2>
        </div>

        <div className={`font-mono-tech text-xs max-w-xs ${isTheme ? "text-neutral-700" : "text-neutral-400"}`}>
          {"// BEYOND THE CODE: CRAFT, PURPOSE, AND MULTIDISCIPLINARY THOUGHT"}
        </div>
      </motion.div>

      {/* Narrative Story Container */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`group p-6 sm:p-8 md:p-10 border transition-all duration-300 mb-10 ${
          isTheme
            ? "bg-white border-neutral-300 shadow-xs hover:shadow-md"
            : "bg-[#0d1015] border-neutral-800 hover:border-neutral-700"
        }`}
      >
        <div className="flex items-center justify-between pb-3 mb-6 border-b border-inherit font-mono-tech text-xs">
          <span className={`font-bold uppercase tracking-wider ${isTheme ? "text-neutral-800" : "text-neutral-300"}`}>
            [PHILOSOPHY & EXPERIENCE]
          </span>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
              {[0, 1, 2, 3, 4].map((dotIdx) => (
                <span
                  key={dotIdx}
                  className="w-1.5 h-1.5 rounded-full bg-neutral-400/50 dark:bg-neutral-600/50 group-hover:bg-emerald-500 transition-all duration-200"
                  style={{ transitionDelay: `${dotIdx * 35}ms` }}
                />
              ))}
            </div>
            <span className={`${isTheme ? "text-neutral-700" : "text-neutral-400"} text-[11px]`}>LAGOS // GLOBAL</span>
          </div>
        </div>

        <div
          className={`space-y-4 text-xs sm:text-sm leading-relaxed font-mono-tech max-w-4xl ${
            isTheme ? "text-neutral-900" : "text-neutral-200"
          }`}
        >
          <p>
            I&apos;m a frontend engineer passionate about building products. Frontend development is where I shine—particularly with <span className={`font-bold ${isTheme ? "text-neutral-950" : "text-white"}`}>React, TypeScript, and Next.js</span>—but I&apos;m more than happy to go deeper into the backend when a project needs it.
          </p>
          <p>
            I&apos;ve had hands-on experience with <span className={`font-bold ${isTheme ? "text-neutral-950" : "text-white"}`}>REST APIs, Firebase, Supabase, and Paystack</span>, along with authentication flows and dashboards. I enjoy taking an idea from &ldquo;this could work&rdquo; to something people can actually use.
          </p>
          <p>
            What really excites me is everything beyond the code: understanding the problem, thinking about the people using the product, crafting meaningful experiences, and figuring out whether an idea actually makes sense.
          </p>
          <p className={`pt-3 text-xs sm:text-sm leading-relaxed border-t border-inherit italic ${isTheme ? "text-neutral-900" : "text-neutral-200"}`}>
            When I&apos;m not immersed in tech, you&apos;ll probably find me writing, researching, reading about history, or exploring art. I like falling down rabbit holes and finding connections between things that seem completely unrelated. Sometimes, that&apos;s where the best ideas come from.
          </p>
        </div>

        {/* Clean Keywords Strip */}
        <div className="mt-8 pt-4 border-t border-inherit flex flex-wrap gap-2 font-mono-tech text-xs">
          {[
            "Product Architecture",
            "React & Next.js",
            "TypeScript",
            "REST APIs",
            "Paystack Checkout",
            "Supabase & Firebase",
            "Writing & UX",
          ].map((pill) => (
            <span
              key={pill}
              className={`px-2.5 py-1 border transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500 hover:text-emerald-500 cursor-default ${
                isTheme
                  ? "bg-neutral-50 border-neutral-300 text-neutral-800"
                  : "bg-[#11161d] border-neutral-800 text-neutral-300"
              }`}
            >
              #{pill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* High-Density Responsive Glyph Hardware Register */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="pt-2"
      >
        <div
          className={`p-3 sm:p-4 border transition-colors ${
            isTheme
              ? "bg-white border-neutral-300 shadow-xs"
              : "bg-[#0d1015] border-neutral-800"
          }`}
        >
          {/* Hardware Register Header Bar */}
          <div className="group/reg flex items-center justify-between font-mono-tech text-[10px] sm:text-xs tracking-widest uppercase pb-2 sm:pb-2.5 mb-2.5 sm:mb-3 border-b border-inherit text-neutral-500">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-bold text-emerald-500">TECH STACK</span>
              <span className="text-neutral-400 dark:text-neutral-600">{"// REGISTER"}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 opacity-40 group-hover/reg:opacity-100 transition-opacity">
                {[0, 1, 2, 3, 4].map((dotIdx) => (
                  <span
                    key={dotIdx}
                    className="w-1.5 h-1.5 rounded-full bg-neutral-400/50 dark:bg-neutral-600/50 group-hover/reg:bg-emerald-500 transition-all duration-200"
                    style={{ transitionDelay: `${dotIdx * 35}ms` }}
                  />
                ))}
              </div>
              <span className="text-[10px] text-neutral-400 dark:text-neutral-500">
                12 UNITS
              </span>
            </div>
          </div>

          {/* High-Density Responsive Hardware Grid:
              Mobile: 2 columns (6 short rows, compact ~170px total)
              Tablet: 3-4 columns (~110px)
              Desktop: 6 columns (symmetrical 2 rows, ~76px) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1.5 sm:gap-2">
            {techItems.map((tech) => (
              <div
                key={tech.name}
                tabIndex={0}
                className={`group/chip flex items-center px-2.5 sm:px-3 py-1.5 sm:py-2 border transition-all duration-200 select-none cursor-default active:border-emerald-500 focus:border-emerald-500 outline-hidden ${
                  isTheme
                    ? "bg-neutral-50/70 border-neutral-200/90 hover:border-neutral-400 active:bg-neutral-100 text-neutral-800 hover:text-black hover:bg-white"
                    : "bg-[#11151c]/80 border-neutral-800/80 hover:border-neutral-700 active:bg-[#161c24] text-neutral-300 hover:text-white hover:bg-[#161c24]"
                }`}
              >
                <div className="flex items-center gap-2 min-w-0 w-full">
                  <div className="shrink-0 opacity-75 group-hover/chip:opacity-100 group-focus/chip:opacity-100 transition-opacity">
                    {tech.icon}
                  </div>
                  <span className="font-mono-tech text-[11px] sm:text-xs tracking-tight truncate font-medium">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
