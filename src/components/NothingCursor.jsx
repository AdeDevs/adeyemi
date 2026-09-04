import { useEffect, useRef, useState } from "react";

export default function NothingCursor({ isTheme }) {
  const cursorDotRef = useRef(null);
  const cursorReticleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Only run on desktop/fine-pointer devices
    if (typeof window === "undefined") return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    setIsVisible(true);
    document.documentElement.classList.add("nothing-cursor-enabled");

    let mouseX = -100;
    let mouseY = -100;
    let reticleX = -100;
    let reticleY = -100;
    let animationFrameId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check for interactive targets
      const target = e.target;
      if (
        target &&
        target.closest &&
        target.closest(
          'a, button, [role="button"], input, textarea, select, label, .cursor-pointer, [data-interactive="true"]'
        )
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    const render = () => {
      // Smooth lerp for outer reticle
      reticleX += (mouseX - reticleX) * 0.22;
      reticleY += (mouseY - reticleY) * 0.22;

      if (cursorReticleRef.current) {
        cursorReticleRef.current.style.transform = `translate3d(${reticleX}px, ${reticleY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    render();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
      document.documentElement.classList.remove("nothing-cursor-enabled");
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Precision Core Point */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 -ml-[2px] -mt-[2px] w-[5px] h-[5px] rounded-full pointer-events-none transition-opacity duration-150"
        style={{
          backgroundColor: isTheme ? "#0f172a" : "#f1f5f9",
          boxShadow: isTheme
            ? "0 0 6px rgba(16, 185, 129, 0.6)"
            : "0 0 8px rgba(52, 211, 153, 0.8)",
        }}
      />

      {/* Nothing OS Target Reticle [ · ] */}
      <div
        ref={cursorReticleRef}
        className={`fixed top-0 left-0 pointer-events-none transition-all duration-200 ease-out flex items-center justify-center ${
          isHovered
            ? "-ml-5 -mt-5 w-10 h-10 scale-105"
            : "-ml-3.5 -mt-3.5 w-7 h-7 scale-100"
        } ${isClicking ? "scale-90" : ""}`}
      >
        {/* Top-Left Bracket */}
        <span
          className={`absolute top-0 left-0 w-2 h-2 border-t-[1.5px] border-l-[1.5px] transition-colors duration-150 ${
            isHovered
              ? "border-emerald-500"
              : isTheme
              ? "border-neutral-800/80"
              : "border-neutral-200/80"
          }`}
        />

        {/* Top-Right Bracket */}
        <span
          className={`absolute top-0 right-0 w-2 h-2 border-t-[1.5px] border-r-[1.5px] transition-colors duration-150 ${
            isHovered
              ? "border-emerald-500"
              : isTheme
              ? "border-neutral-800/80"
              : "border-neutral-200/80"
          }`}
        />

        {/* Bottom-Left Bracket */}
        <span
          className={`absolute bottom-0 left-0 w-2 h-2 border-b-[1.5px] border-l-[1.5px] transition-colors duration-150 ${
            isHovered
              ? "border-emerald-500"
              : isTheme
              ? "border-neutral-800/80"
              : "border-neutral-200/80"
          }`}
        />

        {/* Bottom-Right Bracket */}
        <span
          className={`absolute bottom-0 right-0 w-2 h-2 border-b-[1.5px] border-r-[1.5px] transition-colors duration-150 ${
            isHovered
              ? "border-emerald-500"
              : isTheme
              ? "border-neutral-800/80"
              : "border-neutral-200/80"
          }`}
        />

        {/* Micro status dot in reticle corner when target locked */}
        {isHovered && (
          <span className="absolute -top-1 -right-1 w-1 h-1 bg-emerald-500 rounded-full" />
        )}
      </div>
    </div>
  );
}
