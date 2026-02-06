import { X, AlertTriangle } from "lucide-react";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

const frustrations = [
  "Já tentou dropshipping e só perdeu dinheiro com anúncios?",
  "Comprou cursos de PLR e nunca conseguiu vender?",
  "Se cadastrou como afiliado mas não fez nenhuma comissão?",
  "Gastou em tráfego pago sem ter retorno?",
  "Sente que está sempre começando do zero?",
];

export const ProblemSection = () => {
  return (
    <section className="py-24 section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="flex justify-center mb-6">
              <motion.div
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <AlertTriangle className="w-16 h-16 text-destructive" />
              </motion.div>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-center mb-4 tracking-tight">
              Você já tentou <span className="text-destructive">de tudo</span>...
            </h2>
          </Reveal>
          
          <Reveal delay={0.1}>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Dropshipping, PLR, afiliados... e nada funciona?
            </p>
          </Reveal>
          
          <div className="space-y-4">
            {frustrations.map((frustration, index) => (
              <Reveal key={index} delay={0.2 + index * 0.1} direction="left">
                <motion.div
                  className="flex items-start gap-4 p-5 rounded-xl bg-destructive/10 border border-destructive/20"
                  whileHover={{ x: 8, borderColor: "hsl(0 85% 55% / 0.5)" }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                    <X className="w-5 h-5 text-destructive" />
                  </div>
                  <p className="text-foreground text-lg">{frustration}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
          
          <Reveal delay={0.8}>
            <p className="text-center text-xl text-muted-foreground mt-12">
              O problema <span className="text-foreground font-semibold">não é você</span>. 
              É que ninguém te ensinou o <span className="gradient-text font-display font-bold">método certo</span>.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
