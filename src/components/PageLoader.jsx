import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DotChar } from "./DotGlyph";

export default function PageLoader({ isTheme, onLoaded }) {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [lagosTime, setLagosTime] = useState("");

  // Hard scroll lock on html and body
  useEffect(() => {
    if (!isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  // Live Lagos, Nigeria Clock (WAT / UTC+1)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-GB", {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setLagosTime(`LAGOS ${timeStr} WAT`);
    };

    updateTime();
    const clockInterval = setInterval(updateTime, 1000);
    return () => clearInterval(clockInterval);
  }, []);

  // Measured, rhythmic progression (~3.2s total runtime)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        let jump = 2;
        if (prev < 40) {
          jump = Math.floor(Math.random() * 4) + 3;
        } else if (prev < 80) {
          jump = Math.floor(Math.random() * 3) + 2;
        } else if (prev < 96) {
          jump = Math.floor(Math.random() * 2) + 1;
        } else {
          jump = 1;
        }

        const next = Math.min(prev + jump, 100);
        if (next === 100) {
          setIsReady(true);
        }
        return next;
      });
    }, 85);

    return () => clearInterval(interval);
  }, []);

  const handleOpen = () => {
    if (!isReady || isExiting || isOpen) return;
    setIsExiting(true);

    // Trigger Dot Dissolve & Scatter sequence, then seamlessly unveil page
    setTimeout(() => {
      setIsOpen(true);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      if (onLoaded) onLoaded();
    }, 700);
  };

  // Keyboard shortcut (Enter / Space)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isReady && !isExiting && !isOpen && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        handleOpen();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isReady, isExiting, isOpen]);

  const formattedProgress = String(progress).padStart(3, "0");
  const digits = formattedProgress.split("");
  const dotColor = isTheme ? "#171717" : "#f5f5f5";

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          key="dot-matrix-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          }}
          onClick={isReady ? handleOpen : undefined}
          style={{ cursor: isReady ? "pointer" : "default" }}
          className={`fixed inset-0 z-[100] flex flex-col justify-between p-4 sm:p-6 md:p-8 select-none ${
            isTheme ? "bg-[#f5f5f5] text-neutral-900" : "bg-[#090b0e] text-neutral-100"
          }`}
        >
          {/* Top Bar: Unified 4-Corner Ledger Typography */}
          <div className="flex items-center justify-between font-mono-tech text-[11px] sm:text-xs text-neutral-500 tracking-widest uppercase">
            <span>[ ADEDEVS ]</span>
            <span>{lagosTime || "LAGOS 00:00:00 WAT"}</span>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col justify-end items-end w-full py-2 sm:py-4 md:py-6">
            {/* Right-Aligned Stack: Counter + Click to Open */}
            <div className="flex flex-col items-end justify-end gap-3 sm:gap-4 md:gap-5">
              {/* Responsive Dot Matrix Counter */}
              <div className="flex items-center justify-end gap-1.5 sm:gap-2.5 md:gap-4 lg:gap-5">
                {digits.map((digit, idx) => (
                  <DotChar
                    key={`digit-${idx}`}
                    char={digit}
                    charIndex={idx}
                    isExiting={isExiting}
                    dotColor={dotColor}
                  />
                ))}
                <DotChar
                  char="%"
                  charIndex={3}
                  isExiting={isExiting}
                  dotColor={dotColor}
                />
              </div>

              {/* Mobile "CLICK TO OPEN" placed directly beneath counter in bottom-right */}
              <div className="block md:hidden mt-1">
                {isReady ? (
                  <button
                    type="button"
                    id="loader-mobile-click-to-open"
                    onClick={handleOpen}
                    className="font-mono-tech text-[11px] text-neutral-500 hover:text-emerald-500 uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    [ CLICK TO OPEN ]
                  </button>
                ) : (
                  <span className="font-mono-tech text-[11px] text-neutral-500 uppercase tracking-widest">
                    INITIALIZING...
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Desktop Bottom Bar: Unified Corners (Hidden on Mobile) */}
          <div className="hidden md:flex items-center justify-between font-mono-tech text-[11px] sm:text-xs text-neutral-500 tracking-widest uppercase">
            <div>LAGOS // GLOBAL</div>
            <div>
              {isReady ? (
                <button
                  type="button"
                  id="loader-click-to-open-text"
                  onClick={handleOpen}
                  className="font-mono-tech text-[11px] sm:text-xs text-neutral-500 hover:text-emerald-500 uppercase tracking-widest transition-colors cursor-pointer"
                >
                  [ CLICK TO OPEN ]
                </button>
              ) : (
                <span>INITIALIZING...</span>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
