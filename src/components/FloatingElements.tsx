import { motion } from "framer-motion";

export const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating orbs */}
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-primary/60"
        style={{ top: "20%", left: "10%" }}
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-3 h-3 rounded-full bg-secondary/60"
        style={{ top: "40%", right: "15%" }}
        animate={{
          y: [15, -25, 15],
          x: [5, -15, 5],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-accent/70"
        style={{ top: "60%", left: "20%" }}
        animate={{
          y: [-30, 10, -30],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute w-5 h-5 rounded-full bg-primary/40"
        style={{ bottom: "30%", right: "10%" }}
        animate={{
          y: [10, -30, 10],
          x: [-5, 10, -5],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute w-6 h-6 rounded-full bg-secondary/30"
        style={{ top: "15%", right: "30%" }}
        animate={{
          y: [-15, 25, -15],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Glowing lines */}
      <motion.div
        className="absolute h-px w-32 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        style={{ top: "35%", left: "5%" }}
        animate={{
          x: [0, 100, 0],
          opacity: [0, 0.6, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute h-px w-24 bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        style={{ bottom: "25%", right: "5%" }}
        animate={{
          x: [0, -80, 0],
          opacity: [0, 0.5, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
};
