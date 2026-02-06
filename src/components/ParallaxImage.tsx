import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  rotate?: boolean;
}

export const ParallaxImage = ({ src, alt, className = "", speed = 0.3, rotate = false }: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  const rotation = useTransform(scrollYProgress, [0, 1], [0, rotate ? 15 : 0]);

  return (
    <motion.div ref={ref} style={{ y, rotate: rotation }} className={className}>
      <img src={src} alt={alt} className="w-full h-full object-contain" />
    </motion.div>
  );
};
