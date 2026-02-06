import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import logoV from "@/assets/logo-v.svg";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo only */}
        <a href="/" className="hover:opacity-80 transition-opacity">
          <img src={logoV} alt="Venda Infinita" className="w-14 h-14" />
        </a>

        {/* Centered title */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center leading-none">
          <a href="/" className="flex flex-col items-center hover:scale-105 transition-transform">
            <span className="text-2xl font-display font-bold gradient-text tracking-tight">VENDA</span>
            <span className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">Infinita</span>
          </a>
        </div>

        <motion.a
          href="#comprar"
          className="btn-glow px-6 py-2.5 rounded-full text-sm font-bold text-primary-foreground transition-all flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ShoppingCart className="w-4 h-4" />
          <span className="hidden sm:inline">Comprar Agora</span>
        </motion.a>
      </div>
    </header>
  );
};
