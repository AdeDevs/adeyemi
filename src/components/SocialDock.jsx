import { useState, useEffect, useRef } from "react";
import { GitBranch, Send, MessageSquare, MessageCircle, X } from "lucide-react";

export default function SocialDock({ isTheme }) {
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const dockRef = useRef(null);

  const socials = [
    {
      label: "GitHub: @AdeDevs",
      href: "https://github.com/AdeDevs",
      icon: GitBranch,
    },
    // LinkedIn profile temporarily disabled/blocked
    // {
    //   label: "LinkedIn: /in/adeyemiakinyemi",
    //   href: "https://www.linkedin.com/in/adeyemiakinyemi/",
    //   icon: Globe,
    // },
    {
      label: "Twitter/X: @iamadedevs",
      href: "https://x.com/iamadedevs",
      icon: Send,
    },
    {
      label: "WhatsApp: +234 707 999 2561",
      href: "https://wa.me/2347079992561?text=Hello%20Adeyemi%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.",
      icon: MessageSquare,
    },
  ];

  // Close collapsible tray when clicking outside on mobile
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dockRef.current && !dockRef.current.contains(e.target)) {
        setIsOpenMobile(false);
      }
    };
    if (isOpenMobile) {
      document.addEventListener("pointerdown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [isOpenMobile]);

  return (
    <aside
      ref={dockRef}
      aria-label="Social connections dock"
      style={{ WebkitTransform: "translateZ(0)" }}
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-auto sm:right-6 z-[9990] flex flex-col items-start sm:flex-row sm:items-center pointer-events-auto"
    >
      {/* Expanded Tray on Mobile / Natural Inline Dock on Desktop */}
      <div
        className={`flex flex-col sm:flex-row items-center w-10 sm:w-auto p-1 sm:p-1.5 transition-all duration-300 ease-out backdrop-blur-xl backdrop-saturate-180 origin-bottom-left ${
          isOpenMobile
            ? "opacity-100 scale-100 translate-y-0 mb-1.5 pointer-events-auto border shadow-2xl"
            : "opacity-0 scale-90 translate-y-2 mb-0 pointer-events-none sm:opacity-100 sm:scale-100 sm:translate-y-0 sm:pointer-events-auto h-0 sm:h-auto overflow-hidden sm:overflow-visible sm:border p-0 sm:p-1.5"
        } ${
          isTheme
            ? "bg-white/90 border-neutral-300 text-neutral-900 shadow-sm"
            : "bg-[#090b0e]/90 border-neutral-800 text-neutral-100 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]"
        }`}
      >
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-1.5 w-full">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
                onClick={() => setIsOpenMobile(false)}
                className="w-8 h-8 sm:w-8 sm:h-8 sm:p-1.5 flex items-center justify-center transition-colors hover:text-emerald-500 active:text-emerald-400 cursor-pointer shrink-0"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>

      {/* Mobile Collapsible Toggle Trigger (Hidden on Desktop) */}
      <button
        type="button"
        onClick={() => setIsOpenMobile((prev) => !prev)}
        aria-expanded={isOpenMobile}
        aria-label={isOpenMobile ? "Close social connections dock" : "Open social connections dock"}
        className={`sm:hidden flex items-center justify-center w-10 h-10 border shadow-lg backdrop-blur-xl backdrop-saturate-180 transition-all duration-200 active:scale-95 cursor-pointer ${
          isTheme
            ? "bg-white/90 border-neutral-300 text-neutral-900 shadow-xs"
            : "bg-[#090b0e]/90 border-neutral-800 text-neutral-100 shadow-[0_4px_20px_0_rgba(0,0,0,0.45)]"
        }`}
      >
        {isOpenMobile ? (
          <X size={17} className="text-emerald-500 transition-transform duration-200" />
        ) : (
          <MessageCircle size={18} className="text-neutral-400 hover:text-neutral-100 transition-colors duration-200" />
        )}
      </button>
    </aside>
  );
}
