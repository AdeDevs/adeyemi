import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import CurrentlyListening from "./CurrentlyListening";

export default function Hero({ isTheme }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="hero-section"
      className="relative pt-3 pb-12 sm:pt-6 sm:pb-16 md:pt-8 md:pb-20 border-b transition-colors border-inherit"
    >
      {/* Main Grid: Editorial Statement + Developer Portrait */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
      >
        {/* Left Column: Authentic Headline & Focus */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div variants={itemVariants} className="font-mono-tech text-xs tracking-widest uppercase mb-3 flex items-center gap-2">
            <span className="text-neutral-500 font-bold">[00]</span>
            <span className={isTheme ? "text-neutral-800" : "text-neutral-300"}>
              ADEYEMI AKINYEMI
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-[1.08] mb-3 ${
              isTheme ? "text-neutral-950" : "text-neutral-50"
            }`}
          >
            <span className="sr-only">Adeyemi Akinyemi, </span>
            Frontend Developer.
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className={`text-xl sm:text-2xl font-semibold tracking-tight mb-5 ${
              isTheme ? "text-neutral-900" : "text-neutral-200"
            }`}
          >
            React &amp; Next.js developer based in Lagos, Nigeria
          </motion.h2>

          <motion.div variants={itemVariants} className="text-base sm:text-lg leading-relaxed space-y-4 max-w-2xl mb-8">
            <p className={`font-bold text-base sm:text-lg leading-snug ${isTheme ? "text-neutral-950" : "text-white"}`}>
              Building thoughtful, high-performance web products with modern frontend architectures.
            </p>
            <p className={`text-sm sm:text-base leading-relaxed ${isTheme ? "text-neutral-900 font-medium" : "text-neutral-200"}`}>
              Frontend development is where I shine—particularly with <span className={`font-bold ${isTheme ? "text-black" : "text-white"}`}>React, TypeScript, and Next.js</span>—taking ideas from &ldquo;this could work&rdquo; to something people can actually use. Dedicated to crafting seamless, visually stunning interfaces and dependable user experiences.
            </p>
          </motion.div>

          {/* Single Focused Call to Action */}
          <motion.div variants={itemVariants}>
            <a
              href="#projects"
              id="hero-explore-projects-btn"
              className={`group inline-flex px-6 py-3.5 border font-mono-tech text-xs uppercase tracking-wider font-bold items-center gap-2 transition-all duration-200 hover:bg-emerald-500 hover:border-emerald-500 hover:text-black active:scale-[0.98] ${
                isTheme
                  ? "bg-neutral-950 border-neutral-950 text-white"
                  : "bg-neutral-100 border-neutral-100 text-neutral-950"
              }`}
            >
              <span>Explore Selected Works</span>
              <ArrowDown size={14} className="transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Sharp Clean Portrait Frame without Accreditation */}
        <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col items-center lg:items-end w-full">
          <div
            id="hero-portrait-frame"
            className={`relative w-full max-w-full sm:max-w-[340px] border p-2 transition-all duration-300 hover:border-neutral-500 ${
              isTheme
                ? "bg-white border-neutral-300 shadow-sm"
                : "bg-[#0e1218] border-neutral-800"
            }`}
          >
            {/* Minimal Header */}
            <div
              className={`flex items-center justify-between px-2 py-1 mb-2 border-b font-mono-tech text-[10px] uppercase tracking-wider ${
                isTheme ? "border-neutral-300 text-neutral-700" : "border-neutral-800 text-neutral-400"
              }`}
            >
              <span>ADEYEMI AKINYEMI</span>
              <span className="flex items-center">
                <span>LAGOS, NG</span>
              </span>
            </div>

            {/* Profile Image with Sharp Corners */}
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-neutral-300 dark:border-neutral-800 bg-neutral-900 group">
              <img
                src="/yemi.webp"
                alt="Portrait of Adeyemi Akinyemi"
                width={800}
                height={800}
                fetchPriority="high"
                className="w-full h-full object-cover object-center filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Minimal Clean Metadata strip */}
            <div
              className={`mt-2 pt-2 border-t font-mono-tech text-xs flex items-center justify-between px-1 ${
                isTheme ? "border-neutral-200 text-neutral-800" : "border-neutral-800 text-neutral-400"
              }`}
            >
              <span className="text-[11px] font-semibold uppercase">Product & Frontend</span>
              <span className="text-[10px] text-neutral-500 font-mono-tech">[INDEX // 00]</span>
            </div>
          </div>

          {/* Real-time Currently Listening to Spotify Widget */}
          <CurrentlyListening isTheme={isTheme} />
        </motion.div>
      </motion.div>
    </section>
  );
}
