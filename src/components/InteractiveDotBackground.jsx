import { useEffect, useRef } from "react";

export default function InteractiveDotBackground({ isTheme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let isRunning = false;

    // Pointer & grid state
    const state = {
      width: 0,
      height: 0,
      dpr: 1,
      spacing: 24,
      cols: 0,
      rows: 0,
      dots: [],
      pointer: {
        x: -2000,
        y: -2000,
        targetX: -2000,
        targetY: -2000,
        intensity: 0,
      },
      ripples: [],
    };

    const buildGrid = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      state.width = width;
      state.height = height;
      state.dpr = dpr;

      // Adaptive pitch: slightly tighter on mobile
      const spacing = width < 640 ? 20 : 24;
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;

      state.spacing = spacing;
      state.cols = cols;
      state.rows = rows;

      const dots = [];
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          dots.push({
            x: c * spacing,
            y: r * spacing,
            currentGlow: 0,
            baseRadius: width < 640 ? 1.25 : 1.45,
          });
        }
      }
      state.dots = dots;

      // Draw initial static frame
      renderFrame();
    };

    const startLoop = () => {
      if (!isRunning) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(loop);
      }
    };

    const renderFrame = () => {
      const { width, height, dots, pointer, ripples } = state;
      ctx.clearRect(0, 0, width, height);

      // Distinct, tactile dormant dots (authentic Nothing Phone glyph glass back)
      const dormantColor = isTheme
        ? "rgba(0, 0, 0, 0.085)"
        : "rgba(255, 255, 255, 0.095)";

      const maxDist = 155;
      const dotsLen = dots.length;

      for (let i = 0; i < dotsLen; i++) {
        const dot = dots[i];

        // Cursor proximity
        let boost = 0;
        if (pointer.intensity > 0.005) {
          const dx = dot.x - pointer.x;
          const dy = dot.y - pointer.y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxDist) {
            const factor = Math.pow(1 - dist / maxDist, 1.4);
            boost = factor * pointer.intensity;
          }
        }

        // Ripple influence
        for (let r = 0; r < ripples.length; r++) {
          const rip = ripples[r];
          const distToRip = Math.hypot(dot.x - rip.x, dot.y - rip.y);
          const ripDiff = Math.abs(distToRip - rip.radius);
          if (ripDiff < 28) {
            const ripFactor = (1 - ripDiff / 28) * rip.alpha;
            if (ripFactor > boost) boost = ripFactor;
          }
        }

        // Smoothly interpolate glow for gentle trailing
        dot.currentGlow += (boost - dot.currentGlow) * 0.28;

        // Draw dot with high-contrast Nothing OS illumination
        const isAwake = dot.currentGlow > 0.01;
        const radius = isAwake
          ? dot.baseRadius + dot.currentGlow * 1.5
          : dot.baseRadius;

        let fillStyle = dormantColor;
        if (isAwake) {
          if (dot.currentGlow > 0.45) {
            // Core illuminated zone: high-contrast white / charcoal
            fillStyle = isTheme
              ? `rgba(15, 23, 42, ${0.4 + dot.currentGlow * 0.55})`
              : `rgba(255, 255, 255, ${0.4 + dot.currentGlow * 0.55})`;
          } else {
            // Outer proximity halo: signature phosphor emerald
            fillStyle = isTheme
              ? `rgba(16, 185, 129, ${0.15 + dot.currentGlow * 0.75})`
              : `rgba(52, 211, 153, ${0.15 + dot.currentGlow * 0.75})`;
          }
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = fillStyle;
        ctx.fill();
      }
    };

    const loop = () => {
      const { pointer, ripples } = state;

      // Lerp pointer position
      pointer.x += (pointer.targetX - pointer.x) * 0.22;
      pointer.y += (pointer.targetY - pointer.y) * 0.22;
      pointer.intensity *= 0.982; // Gradual decay when pointer stops

      // Update shockwave ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rip = ripples[i];
        rip.radius += 4.5;
        rip.alpha *= 0.95;
        if (rip.radius > rip.maxRadius || rip.alpha < 0.02) {
          ripples.splice(i, 1);
        }
      }

      renderFrame();

      // Check if any dots are still settling
      let hasActiveEnergy = pointer.intensity > 0.005 || ripples.length > 0;
      if (!hasActiveEnergy) {
        for (let i = 0; i < state.dots.length; i++) {
          if (state.dots[i].currentGlow > 0.008) {
            hasActiveEnergy = true;
            break;
          }
        }
      }

      if (hasActiveEnergy) {
        animationFrameId = requestAnimationFrame(loop);
      } else {
        isRunning = false;
        // One clean final frame to ensure complete dormant state
        renderFrame();
      }
    };

    buildGrid();

    const handlePointerMove = (e) => {
      state.pointer.targetX = e.clientX;
      state.pointer.targetY = e.clientY;
      state.pointer.intensity = 1;
      startLoop();
    };

    const handlePointerDown = (e) => {
      state.pointer.targetX = e.clientX;
      state.pointer.targetY = e.clientY;
      state.pointer.intensity = 1;

      // Subtle touch/click ripple
      state.ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 180,
        alpha: 0.7,
      });

      startLoop();
    };

    const handlePointerLeave = () => {
      state.pointer.intensity = 0;
      startLoop();
    };

    const handleResize = () => {
      buildGrid();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    document.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("mouseleave", handlePointerLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
      aria-hidden="true"
    />
  );
}
