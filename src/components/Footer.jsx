export default function Footer({ isTheme }) {
  return (
    <footer
      id="portfolio-footer"
      className={`relative z-10 border-t transition-colors ${
        isTheme
          ? "border-neutral-300/80 text-neutral-800 bg-white/40 backdrop-blur-xs"
          : "border-neutral-800/80 text-neutral-200 bg-[#090b0e]/40 backdrop-blur-xs"
      }`}
    >
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
            <span>© {new Date().getFullYear()} ADEYEMI AKINYEMI. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-[10px] tracking-widest text-neutral-400 dark:text-neutral-600 uppercase">
              [ ADEDEVS // 6°27&apos;N 3°23&apos;E ]
            </span>
            <span className="text-neutral-300 dark:text-neutral-700">|</span>
            <div className={`text-[11px] font-mono-tech ${isTheme ? "text-neutral-800" : "text-neutral-400"}`}>
              BUILT WITH SWEAT, TEARS AND ASAKE MUSIC
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
