import { motion } from "framer-motion";

export default function Reveal({ children, direction = "left", delay = 0 }) {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -60 : 60, // offset from the side
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}