import { motion } from "framer-motion";

export default function Footer({ isTheme }) {
  return (
    <motion.footer
      id="portfolio-footer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={`relative z-10 border-t transition-colors ${
        isTheme
          ? "border-neutral-300/80 text-neutral-800 bg-white/40 backdrop-blur-xs"
          : "border-neutral-800/80 text-neutral-200 bg-[#090b0e]/40 backdrop-blur-xs"
      }`}
    >
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech text-xs text-neutral-500">
          <div className="flex items-center">
            <span>© {new Date().getFullYear()} ADEYEMI AKINYEMI. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="flex items-center gap-3">
            <div className={`text-[11px] font-mono-tech ${isTheme ? "text-neutral-800" : "text-neutral-400"}`}>
              BUILT WITH SWEAT, TEARS AND $GIRAN
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
