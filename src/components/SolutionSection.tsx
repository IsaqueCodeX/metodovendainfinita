import { Target, Pen, Gift } from "lucide-react";
import { Reveal } from "./Reveal";
import { ParallaxImage } from "./ParallaxImage";
import { motion } from "framer-motion";
import rocketImg from "@/assets/rocket-3d.png";
import growthImg from "@/assets/growth-chart.png";

const pillars = [
  {
    icon: Target,
    title: "Tráfego Pago",
    description: "Aprenda a criar anúncios que convertem de verdade usando Facebook Ads, Instagram e TikTok com orçamentos a partir de R$10/dia.",
    gradient: "neon-icon",
    color: "text-primary",
    borderColor: "border-primary/30",
    bgGlow: "bg-primary/10",
  },
  {
    icon: Pen,
    title: "Copywriting",
    description: "Domine a arte de escrever textos que vendem. Headlines, gatilhos mentais e estruturas validadas para qualquer nicho.",
    gradient: "neon-icon-secondary",
    color: "text-secondary",
    borderColor: "border-secondary/30",
    bgGlow: "bg-secondary/10",
  },
  {
    icon: Gift,
    title: "Oferta Irresistível",
    description: "Construa ofertas que as pessoas não conseguem recusar. Stack de valor, ancoragem de preço e urgência real.",
    gradient: "neon-icon-accent",
    color: "text-accent",
    borderColor: "border-accent/30",
    bgGlow: "bg-accent/10",
  },
];

export const SolutionSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Floating images */}
      <div className="hidden lg:block">
        <ParallaxImage
          src={rocketImg}
          alt="Rocket"
          className="absolute -left-10 top-20 w-48 h-48 opacity-60 rounded-[3rem] [mask-image:radial-gradient(circle,black_60%,transparent_100%)]"
          speed={0.5}
          rotate
        />
        <ParallaxImage
          src={growthImg}
          alt="Growth"
          className="absolute -right-10 bottom-10 w-56 h-40 opacity-50 rounded-[3rem] [mask-image:radial-gradient(circle,black_60%,transparent_100%)]"
          speed={0.4}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-center mb-4 tracking-tight">
            O <span className="gradient-text">Método Venda Infinita</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Um sistema completo baseado em 3 pilares que já gerou mais de <span className="text-foreground font-bold">R$ 2 milhões</span> em vendas.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <Reveal key={index} delay={0.2 + index * 0.15} direction="scale">
              <motion.div
                className={`card-glow p-8 h-full flex flex-col items-center text-center group ${pillar.borderColor}`}
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={`w-20 h-20 rounded-2xl ${pillar.bgGlow} flex items-center justify-center mb-6 ${pillar.gradient}`}>
                  <pillar.icon className={`w-10 h-10 ${pillar.color}`} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
