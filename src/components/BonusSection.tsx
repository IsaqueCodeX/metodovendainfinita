import { Users, Palette, FileText, Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

const bonuses = [
  {
    icon: Users,
    title: "Comunidade VIP",
    description: "Acesso exclusivo ao grupo fechado no Discord com +2.000 alunos ativos. Networking, dúvidas e parcerias.",
    originalPrice: "R$ 297,00",
    badge: "GRÁTIS",
    color: "text-primary",
    bg: "bg-primary/20",
    borderHover: "hover:border-primary/50",
  },
  {
    icon: Palette,
    title: "Pack de Criativos Editáveis",
    description: "+150 templates de anúncios no Canva prontos para usar. Carrosséis, stories, vídeos e mais.",
    originalPrice: "R$ 197,00",
    badge: "GRÁTIS",
    color: "text-secondary",
    bg: "bg-secondary/20",
    borderHover: "hover:border-secondary/50",
  },
  {
    icon: FileText,
    title: "Swipe File de Copies",
    description: "Biblioteca com +50 headlines, scripts de vendas e emails que já converteram milhões.",
    originalPrice: "R$ 147,00",
    badge: "GRÁTIS",
    color: "text-accent",
    bg: "bg-accent/20",
    borderHover: "hover:border-accent/50",
  },
];

export const BonusSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="flex justify-center mb-4">
            <Star className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-center mb-4 tracking-tight">
            + Bônus <span className="gradient-text-accent">Exclusivos</span>
          </h2>
        </Reveal>
        
        <Reveal delay={0.1}>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Materiais extras que valem mais que o próprio curso
          </p>
        </Reveal>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {bonuses.map((bonus, index) => (
            <Reveal key={index} delay={0.2 + index * 0.15} direction="scale">
              <motion.div
                className={`card-dark p-6 h-full relative overflow-hidden group ${bonus.borderHover} transition-colors`}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-success text-success-foreground uppercase tracking-wider">
                    {bonus.badge}
                  </span>
                </div>
                
                <motion.div
                  className={`w-14 h-14 rounded-xl ${bonus.bg} flex items-center justify-center mb-4`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <bonus.icon className={`w-7 h-7 ${bonus.color}`} />
                </motion.div>
                
                <h3 className="text-xl font-display font-bold mb-2">{bonus.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {bonus.description}
                </p>
                
                <p className="text-muted-foreground">
                  <span className="line-through">De {bonus.originalPrice}</span>
                  <span className="text-success font-bold ml-2">por GRÁTIS</span>
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
