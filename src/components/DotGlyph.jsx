import { motion } from "framer-motion";

// 5x7 Dot-Matrix Font Definitions (rows represented as binary strings)
const FONT_MAP = {
  "0": ["01110", "10001", "10011", "10101", "11001", "10001", "01110"],
  "1": ["00100", "01100", "00100", "00100", "00100", "00100", "01110"],
  "2": ["01110", "10001", "00001", "00010", "00100", "01000", "11111"],
  "3": ["01110", "10001", "00001", "00110", "00001", "10001", "01110"],
  "4": ["00010", "00110", "01010", "10010", "11111", "00010", "00010"],
  "5": ["11111", "10000", "11110", "00001", "00001", "10001", "01110"],
  "6": ["01110", "10001", "10000", "11110", "10001", "10001", "01110"],
  "7": ["11111", "00001", "00010", "00100", "01000", "01000", "01000"],
  "8": ["01110", "10001", "10001", "01110", "10001", "10001", "01110"],
  "9": ["01110", "10001", "10001", "01111", "00001", "10001", "01110"],
  "%": ["11001", "11010", "00100", "01000", "01011", "10011", "00000"],
};

export function DotChar({
  char,
  dotColor = "currentColor",
  isExiting = false,
  charIndex = 0,
}) {
  const pattern = FONT_MAP[char.toUpperCase()] || FONT_MAP["0"];

  return (
    <div className="grid grid-cols-5 gap-[3.2px] sm:gap-[3.5px] md:gap-[5px]">
      {pattern.map((row, rIdx) =>
        row.split("").map((val, cIdx) => {
          const isLit = val === "1";
          const randomX = isLit ? ((rIdx * 7 + cIdx * 13 + charIndex * 19) % 31 - 15) * 4 : 0;
          const randomY = isLit ? ((rIdx * 11 + cIdx * 5 + charIndex * 23) % 31 - 15) * 4 : 0;
          const randomDelay = rIdx * 0.02 + cIdx * 0.02 + charIndex * 0.035;

          return (
            <motion.span
              key={`${rIdx}-${cIdx}`}
              animate={
                isExiting && isLit
                  ? {
                      opacity: 0,
                      x: randomX,
                      y: randomY,
                      scale: 0.1,
                    }
                  : {
                      opacity: isLit ? 1 : 0,
                      x: 0,
                      y: 0,
                      scale: 1,
                    }
              }
              transition={{
                duration: 0.6,
                delay: isExiting ? randomDelay : 0,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-[8.5px] h-[8.5px] sm:w-[9.5px] sm:h-[9.5px] md:w-[13px] md:h-[13px] lg:w-[16px] lg:h-[16px] rounded-full"
              style={{
                backgroundColor: isLit ? dotColor : "transparent",
              }}
            />
          );
        })
      )}
    </div>
  );
}
