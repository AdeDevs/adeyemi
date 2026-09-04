import { useEffect, useRef } from "react";

// 5x7 Dot-Matrix Font Definitions for "ADEDEVS"
const FONT_MAP = {
  A: ["01110", "10001", "10001", "11111", "10001", "10001", "10001"],
  D: ["11110", "10001", "10001", "10001", "10001", "10001", "11110"],
  E: ["11111", "10000", "10000", "11110", "10000", "10000", "11111"],
  V: ["10001", "10001", "10001", "10001", "10001", "01010", "00100"],
  S: ["01111", "10000", "10000", "01110", "00001", "00001", "11110"],
};

export default function LoaderCanvas({ progress, isReady, isExiting, isTheme }) {
  const canvasRef = useRef(null);
  const stateRef = useRef({
    progress: 0,
    targetProgress: 0,
    isReady: false,
    isExiting: false,
    pointer: { x: -1000, y: -1000, targetX: -1000, targetY: -1000, intensity: 0 },
    ripples: [],
    dots: [],
    width: 0,
    height: 0,
    cols: 0,
    rows: 0,
    spacing: 11.7,
    dotRadius: 4.25,
  });

  // Keep target progress, ready state, and exit state updated in ref to avoid re-binding loop
  useEffect(() => {
    stateRef.current.targetProgress = progress;
  }, [progress]);

  useEffect(() => {
    stateRef.current.isReady = isReady;
  }, [isReady]);

  useEffect(() => {
    stateRef.current.isExiting = isExiting;
  }, [isExiting]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let time = 0;

    const buildGrid = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // Exact 1:1 hardware match to the DotChar counter across all responsive tiers:
      // Mobile (<640px): 8.5px dot + 3.2px gap = 11.7px pitch
      // SM (640-767px): 9.5px dot + 3.5px gap = 13.0px pitch
      // MD (768-1023px): 13.0px dot + 5.0px gap = 18.0px pitch
      // LG (>=1024px): 16.0px dot + 5.0px gap = 21.0px pitch
      let dotRadius = 4.25;
      let spacing = 11.7;

      if (width < 640) {
        dotRadius = 4.25;
        spacing = 11.7;
      } else if (width < 768) {
        dotRadius = 4.75;
        spacing = 13.0;
      } else if (width < 1024) {
        dotRadius = 6.5;
        spacing = 18.0;
      } else {
        dotRadius = 8.0;
        spacing = 21.0;
      }

      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;

      stateRef.current.width = width;
      stateRef.current.height = height;
      stateRef.current.cols = cols;
      stateRef.current.rows = rows;
      stateRef.current.spacing = spacing;
      stateRef.current.dotRadius = dotRadius;

      // Determine Watermark Layout for "ADEDEVS":
      // A single line needs 41 columns (7 letters * 5 cols + 6 inter-letter cols = 41).
      // Only use single line if there is at least 60px of breathing room on both sides.
      const totalWordCols = 7 * 5 + 6 * 1; // 41
      const isSingleLine = cols >= 44 && (width - totalWordCols * spacing) >= 80;
      const watermarkSet = new Set();

      const stampWord = (word, startC, startR) => {
        let currentC = startC;
        for (let i = 0; i < word.length; i++) {
          const char = word[i];
          const pattern = FONT_MAP[char];
          if (pattern) {
            for (let rIdx = 0; rIdx < pattern.length; rIdx++) {
              const rowStr = pattern[rIdx];
              for (let cIdx = 0; cIdx < rowStr.length; cIdx++) {
                if (rowStr[cIdx] === "1") {
                  watermarkSet.add(`${currentC + cIdx},${startR + rIdx}`);
                }
              }
            }
          }
          currentC += 5 + 1; // 5 cols per glyph + 1 col spacing (identical to counter inter-char pitch)
        }
      };

      if (isSingleLine) {
        const startC = Math.floor((cols - totalWordCols) / 2);
        // Optical center for single line (~44% of height)
        const startR = Math.max(3, Math.floor(rows * 0.44 - 3.5));
        stampWord("ADEDEVS", startC, startR);
      } else {
        // Two-line layout for mobile/smaller screens: "ADE" stacked over "DEVS"
        const line1Cols = 3 * 5 + 2 * 1; // 17 ("ADE")
        const line2Cols = 4 * 5 + 3 * 1; // 23 ("DEVS")
        const startC1 = Math.floor((cols - line1Cols) / 2);
        const startC2 = Math.floor((cols - line2Cols) / 2);
        // Optical center for two-line stack (~41% of height)
        const startR1 = Math.max(3, Math.floor(rows * 0.41 - 8));
        const startR2 = startR1 + 9; // 7 rows glyph + 2 rows interline gap

        stampWord("ADE", startC1, startR1);
        stampWord("DEVS", startC2, startR2);
      }

      // Initialize Dot Matrix state
      const dots = [];
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const isWatermark = watermarkSet.has(`${c},${r}`);
          const originX = c * spacing;
          const originY = r * spacing;

          dots.push({
            c,
            r,
            originX,
            originY,
            x: originX,
            y: originY,
            isWatermark,
            activated: false,
            glow: 0,
            scatterVx: (Math.random() - 0.5) * 16,
            scatterVy: (Math.random() - 0.5) * 16,
            scatterOpacity: 1,
            seed: (c * 17 + r * 31) % 100,
          });
        }
      }

      stateRef.current.dots = dots;
    };

    buildGrid();

    const handleResize = () => {
      buildGrid();
    };

    const handlePointerMove = (e) => {
      stateRef.current.pointer.targetX = e.clientX;
      stateRef.current.pointer.targetY = e.clientY;
      stateRef.current.pointer.intensity = 1;
    };

    const handlePointerDown = (e) => {
      stateRef.current.pointer.targetX = e.clientX;
      stateRef.current.pointer.targetY = e.clientY;
      stateRef.current.pointer.intensity = 1;

      // Add interactive shockwave ripple on tap/click
      stateRef.current.ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: Math.min(window.innerWidth, window.innerHeight) * 0.5,
        alpha: 0.9,
      });
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        stateRef.current.pointer.targetX = e.touches[0].clientX;
        stateRef.current.pointer.targetY = e.touches[0].clientY;
        stateRef.current.pointer.intensity = 1;
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // Render loop
    const render = () => {
      time += 0.025;
      const { width, height, dots, ripples, pointer, isExiting, dotRadius } =
        stateRef.current;

      // Smooth progress interpolation
      stateRef.current.progress +=
        (stateRef.current.targetProgress - stateRef.current.progress) * 0.09;
      const currProgress = stateRef.current.progress;

      // Lerp pointer position
      pointer.x += (pointer.targetX - pointer.x) * 0.18;
      pointer.y += (pointer.targetY - pointer.y) * 0.18;
      pointer.intensity *= 0.985; // Decay when idle

      ctx.clearRect(0, 0, width, height);

      // Radar Wave Front (Sweeps horizontally from -80px to width + 80px)
      const waveWidth = Math.max(120, width * 0.24);
      const waveX = (currProgress / 100) * (width + waveWidth * 2) - waveWidth;

      // Colors based on theme
      const dormantColor = isTheme
        ? "rgba(0, 0, 0, 0.055)"
        : "rgba(255, 255, 255, 0.055)";

      const wavePassColor = isTheme
        ? "rgba(16, 185, 129, 0.85)" // Emerald bright
        : "rgba(52, 211, 153, 0.95)";

      const watermarkGlowColor = isTheme
        ? "rgba(16, 185, 129, 0.95)"
        : "rgba(52, 211, 153, 0.95)";

      // Update ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const ripple = ripples[i];
        ripple.radius += 5.5;
        ripple.alpha *= 0.96;
        if (ripple.radius > ripple.maxRadius || ripple.alpha < 0.02) {
          ripples.splice(i, 1);
        }
      }

      // Draw Dots
      const dotsLen = dots.length;
      for (let i = 0; i < dotsLen; i++) {
        const dot = dots[i];

        // Exit dispersion animation
        if (isExiting) {
          dot.x += dot.scatterVx;
          dot.y += dot.scatterVy;
          dot.scatterOpacity = Math.max(0, dot.scatterOpacity * 0.91);
          if (dot.scatterOpacity <= 0.01) continue;
        }

        // Radar Wave Front Calculation (with fluid organic vertical sine ripple)
        const organicWaveX = waveX + Math.sin(dot.originY * 0.018 + time * 2) * 18;
        const distToWave = dot.originX - organicWaveX;
        const inWaveBand = Math.abs(distToWave) < waveWidth;

        let waveIntensity = 0;
        if (inWaveBand) {
          // Cosine bell curve for smooth light crest
          waveIntensity = Math.cos((distToWave / waveWidth) * (Math.PI * 0.5));
          if (waveIntensity < 0) waveIntensity = 0;
        }

        // Check if wave has washed over this dot to permanently activate watermark
        if (dot.originX <= organicWaveX + 20) {
          dot.activated = true;
        }

        // Pointer proximity calculation
        let pointerBoost = 0;
        if (pointer.intensity > 0.01) {
          const pDist = Math.hypot(dot.originX - pointer.x, dot.originY - pointer.y);
          if (pDist < 140) {
            pointerBoost = (1 - pDist / 140) * pointer.intensity;
          }
        }

        // Ripple influence
        let rippleBoost = 0;
        for (let r = 0; r < ripples.length; r++) {
          const rip = ripples[r];
          const distToRip = Math.hypot(dot.originX - rip.x, dot.originY - rip.y);
          const ripDiff = Math.abs(distToRip - rip.radius);
          if (ripDiff < 32) {
            const ripFactor = (1 - ripDiff / 32) * rip.alpha;
            if (ripFactor > rippleBoost) rippleBoost = ripFactor;
          }
        }

        // Determine Dot Size and Fill Style
        let radius = Math.max(1.1, dotRadius * 0.22);
        let fill = dormantColor;

        if (dot.isWatermark) {
          if (dot.activated) {
            const watermarkBaseAlpha = isTheme ? 0.35 : 0.38;

            if (waveIntensity > 0.05) {
              // Wave crest is currently washing over this watermark dot!
              radius = dotRadius * (1 + waveIntensity * 0.15);
              fill = watermarkGlowColor;
            } else {
              // Awoken watermark dot: exact same physical diameter as counter dots, perfectly static
              radius = dotRadius;
              fill = isTheme
                ? `rgba(15, 23, 42, ${Math.min(1, watermarkBaseAlpha + pointerBoost * 0.55)})`
                : `rgba(241, 245, 249, ${Math.min(1, watermarkBaseAlpha + pointerBoost * 0.55)})`;
            }
          } else {
            // Dormant watermark dot waiting for the sweep to arrive
            if (waveIntensity > 0.05) {
              radius = dotRadius * (0.8 + waveIntensity * 0.25);
              fill = watermarkGlowColor;
            } else {
              radius = dotRadius * 0.75;
              fill = isTheme ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.09)";
            }
          }
        } else {
          // Regular background dot
          if (waveIntensity > 0.08) {
            radius = dotRadius * (0.25 + waveIntensity * 0.45);
            fill = wavePassColor;
          } else if (pointerBoost > 0.05 || rippleBoost > 0.05) {
            const totalBoost = Math.max(pointerBoost, rippleBoost);
            radius = dotRadius * (0.25 + totalBoost * 0.55);
            fill = isTheme
              ? `rgba(16, 185, 129, ${0.15 + totalBoost * 0.7})`
              : `rgba(52, 211, 153, ${0.15 + totalBoost * 0.75})`;
          } else {
            radius = Math.max(1.1, dotRadius * 0.22);
            fill = dormantColor;
          }
        }

        // Apply exit scatter opacity
        if (isExiting) {
          ctx.globalAlpha = dot.scatterOpacity;
        } else {
          ctx.globalAlpha = 1;
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, Math.max(0.4, radius), 0, Math.PI * 2);
        ctx.fillStyle = fill;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none w-full h-full"
    />
  );
}
