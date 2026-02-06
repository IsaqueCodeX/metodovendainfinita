import { useState, useEffect } from "react";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector("section");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsVisible(heroBottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 sticky-bar py-4 px-4 md:hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <motion.a
            href="#comprar"
            className="btn-glow flex items-center justify-center gap-2 w-full py-4 rounded-xl text-base font-black text-primary-foreground"
            whileTap={{ scale: 0.97 }}
          >
            <ShoppingCart className="w-5 h-5" />
            Comprar Agora
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
