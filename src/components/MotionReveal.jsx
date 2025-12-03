import { motion } from "framer-motion";

export default function MotionReveal({
  children,
  type = "fade",     // fade, slide-left, slide-right, scale, bounce, blur
  delay = 0,
}) {
  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },

    "slide-left": {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },

    "slide-right": {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },

    scale: {
      hidden: { opacity: 0, scale: 0.85 },
      visible: { opacity: 1, scale: 1 },
    },

    bounce: {
      hidden: { opacity: 0, y: 60 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 120,
          damping: 12,
        },
      },
    },

    blur: {
      hidden: { opacity: 0, filter: "blur(8px)" },
      visible: {
        opacity: 1,
        filter: "blur(0px)",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      variants={variants[type]}
    >
      {children}
    </motion.div>
  );
}
