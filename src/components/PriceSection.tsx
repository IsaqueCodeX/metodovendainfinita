import { useState, useEffect } from "react";
import { Check, CreditCard, ArrowRight, Flame } from "lucide-react";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import trophyImg from "@/assets/trophy-3d.png";

export const PriceSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 23,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          hours = 3;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, "0");

  return (
    <section id="comprar" className="py-24 section-alt relative overflow-hidden">
      {/* Floating trophy */}
      <div className="hidden lg:block">
        <motion.div
          className="absolute -right-4 top-20 w-48 h-48 opacity-40"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={trophyImg} alt="" className="w-full h-full object-contain rounded-[3rem] [mask-image:radial-gradient(circle,black_60%,transparent_100%)]" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-center mb-4 tracking-tight">
            Garanta Sua Vaga <span className="gradient-text">Agora</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-xl text-muted-foreground text-center mb-8">
            Oferta especial por tempo limitado
          </p>
        </Reveal>

        {/* Countdown Timer */}
        <Reveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <span className="text-muted-foreground flex items-center gap-2">
              <Flame className="w-5 h-5 text-destructive animate-pulse" />
              Oferta encerra em:
            </span>
            <div className="flex gap-2">
              <motion.div
                className="bg-destructive/20 border border-destructive/40 rounded-lg px-3 py-2 min-w-[60px] text-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <span className="text-2xl font-black text-destructive font-display">{formatTime(timeLeft.hours)}</span>
                <p className="text-xs text-muted-foreground">horas</p>
              </motion.div>
              <span className="text-2xl font-bold text-destructive self-start mt-2">:</span>
              <div className="bg-destructive/20 border border-destructive/40 rounded-lg px-3 py-2 min-w-[60px] text-center">
                <span className="text-2xl font-black text-destructive font-display">{formatTime(timeLeft.minutes)}</span>
                <p className="text-xs text-muted-foreground">min</p>
              </div>
              <span className="text-2xl font-bold text-destructive self-start mt-2">:</span>
              <div className="bg-destructive/20 border border-destructive/40 rounded-lg px-3 py-2 min-w-[60px] text-center">
                <span className="text-2xl font-black text-destructive font-display">{formatTime(timeLeft.seconds)}</span>
                <p className="text-xs text-muted-foreground">seg</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="price-box max-w-lg mx-auto text-center relative">
            {/* Best seller badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="px-6 py-1.5 rounded-full text-xs font-black bg-accent text-accent-foreground uppercase tracking-wider flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5" />
                Mais Vendido
              </span>
            </div>

            <p className="text-muted-foreground text-lg mb-2 mt-4">
              <span className="line-through">De R$ 997,00</span>
            </p>

            <div className="mb-6">
              <p className="text-foreground text-sm mb-1">Por apenas</p>
              <p className="text-5xl md:text-7xl font-display font-black gradient-text leading-none">
                12x de R$ 29,90
              </p>
              <p className="text-muted-foreground mt-2">
                ou R$ 297,00 à vista
              </p>
            </div>

            <motion.a
              href="#"
              className="btn-glow-accent animate-pulse-glow inline-flex items-center justify-center gap-3 w-full py-6 rounded-xl text-lg font-black text-accent-foreground mb-4"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Garantir Minha Vaga Agora
              <ArrowRight className="w-6 h-6" />
            </motion.a>

            {/* Payment Methods */}
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <CreditCard className="w-5 h-5" />
              <span className="text-sm">Pix • Cartão • Boleto</span>
            </div>

            {/* Included Items */}
            <div className="mt-8 text-left space-y-3">
              {[
                "Acesso vitalício ao curso completo",
                "+40 aulas práticas e objetivas",
                "Comunidade VIP no Discord",
                "Pack de +150 criativos editáveis",
                "Swipe File com +50 copies",
                "Suporte direto com a equipe",
                "Atualizações gratuitas para sempre",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.08 }}
                >
                  <Check className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
