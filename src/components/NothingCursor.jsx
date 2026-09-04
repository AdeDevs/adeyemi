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
      {/* Precision Core Point - Mathematically centered */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 -ml-[3px] -mt-[3px] w-1.5 h-1.5 rounded-full pointer-events-none transition-opacity duration-150 will-change-transform"
        style={{
          backgroundColor: isHovered
            ? "#10b981"
            : isTheme
            ? "#0f172a"
            : "#f1f5f9",
          boxShadow: isHovered
            ? "0 0 8px rgba(16, 185, 129, 0.9)"
            : isTheme
            ? "0 0 4px rgba(15, 23, 42, 0.4)"
            : "0 0 6px rgba(241, 245, 249, 0.6)",
        }}
      />

      {/* Nothing OS Target Reticle [ · ] - Separated positional translate (ref) from responsive scale wrapper */}
      <div
        ref={cursorReticleRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform"
      >
        <div
          className={`w-8 h-8 -ml-4 -mt-4 transition-all duration-200 ease-out ${
            isHovered ? "scale-140" : "scale-100"
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
        </div>
      </div>
    </div>
  );
}
