import { ArrowRight, TrendingUp, Users, DollarSign, Lock, ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";
import { FloatingElements } from "./FloatingElements";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg-new.jpg";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";

const stats = [
  { icon: Users, value: "+2.400", label: "Alunos Ativos" },
  { icon: DollarSign, value: "R$ 2M+", label: "Gerados" },
  { icon: TrendingUp, value: "94%", label: "Aprovação" },
];

// 🎨 CONFIGURAÇÃO DE CORES DO TÍTULO (Edite aqui)
const heroColors = {
  highlight: "gradient-text drop-shadow-md", // Gradiente Padrão ("Pare de Perder" igual "Não Convertem")
  money: "bg-clip-text text-transparent bg-gradient-to-r from-[#00b09b] to-[#96c93d] drop-shadow-md",             // Emerald (Verde Dinheiro Moderno)
  standard: "text-foreground font-medium opacity-80",                  // Texto menos chamativo
  size: "text-4xl sm:text-5xl md:text-7xl lg:text-[6.5rem]",          // Tamanho base
  glow: "drop-shadow-[0_0_15px_rgba(255,0,80,0.5)]",                   // Brilho extra (opcional)
};

export const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </motion.div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

      <FloatingElements />

      <motion.div className="container mx-auto px-4 relative z-10" style={{ opacity }}>
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <Reveal>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8"
              animate={{ boxShadow: ["0 0 20px hsl(270 100% 60% / 0.2)", "0 0 40px hsl(270 100% 60% / 0.4)", "0 0 20px hsl(270 100% 60% / 0.2)"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-sm font-semibold text-primary">+127 alunos entraram esta semana</span>
            </motion.div>
          </Reveal>

          <h1 className="font-display font-black leading-[0.9] mb-6 tracking-tight drop-shadow-2xl">
            <span className={`${heroColors.highlight} ${heroColors.size} ${heroColors.glow}`}>Pare de Perder</span>
            <br />
            <span className={`${heroColors.money} ${heroColors.size} ${heroColors.glow}`}>Dinheiro</span>{" "}
            <span className={`${heroColors.standard} ${heroColors.size} italic`}>com</span>
            <br />
            <span className={`${heroColors.standard} ${heroColors.size} italic`}>Anúncios Que </span>
            <br />
            <span className={`gradient-text ${heroColors.size} drop-shadow-lg`}>Não Convertem.</span>
          </h1>

          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Descubra o método validado para gerar <span className="text-foreground font-semibold">5 dígitos mensais</span> com marketing digital —
              <span className="text-primary font-semibold"> sem aparecer</span> e sem precisar de milhares de seguidores.
            </p>
          </Reveal>

          {/* Video placeholder with dashboard mockup */}
          <Reveal delay={0.3}>
            <div className="video-placeholder aspect-video max-w-3xl mx-auto mb-10 group cursor-pointer relative overflow-hidden rounded-2xl shadow-2xl">
              <video
                className="w-full h-full object-cover"
                poster={dashboardMockup}
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/vsl-video.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal delay={0.5}>
            <motion.a
              href="#comprar"
              className="btn-glow animate-pulse-glow inline-flex items-center gap-3 px-10 py-6 rounded-full text-lg md:text-xl font-black text-primary-foreground"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sim, Quero Dominar o Digital
              <ArrowRight className="w-6 h-6" />
            </motion.a>
            <p className="text-muted-foreground text-sm mt-4 flex items-center justify-center gap-4">
              <span className="flex items-center gap-1.5"><Lock className="w-4 h-4" /> Acesso imediato</span>
              <span className="flex items-center gap-1.5"><TrendingUp className="w-4 h-4" /> Garantia de 7 dias</span>
            </p>
          </Reveal>

          {/* Stats bar */}
          <Reveal delay={0.7}>
            <div className="flex flex-wrap items-center justify-center gap-8 mt-14">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 px-6 py-3 rounded-xl border border-border bg-card/50 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.15 }}
                >
                  <stat.icon className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <p className="text-lg font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>

          {/* Scroll indicator */}
          <Reveal delay={0.9}>
            <motion.div
              className="mt-16 flex flex-col items-center gap-2 cursor-pointer"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              onClick={() => document.getElementById('problema')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Descubra mais</span>
              <ChevronDown className="w-6 h-6 text-primary" />
            </motion.div>
          </Reveal>
        </div>
      </motion.div>
    </section>
  );
};
