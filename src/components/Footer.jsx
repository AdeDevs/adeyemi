export default function Footer({ isTheme }) {
  return (
    <footer
      id="portfolio-footer"
      className={`border-t transition-colors ${
        isTheme
          ? "bg-[#fafafa] border-neutral-300 text-neutral-800"
          : "bg-[#090b0e] border-neutral-800 text-neutral-200"
      }`}
    >
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} ADEYEMI AKINYEMI. ALL RIGHTS RESERVED.
          </div>
          <div className={`text-[11px] font-mono-tech ${isTheme ? "text-neutral-800" : "text-neutral-400"}`}>
            BUILT WITH SWEAT, TEARS AND ASAKE MUSIC
          </div>
        </div>
      </div>
    </footer>
  );
}
