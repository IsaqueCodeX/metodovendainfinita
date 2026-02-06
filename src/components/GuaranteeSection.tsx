import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import shieldImg from "@/assets/shield-guarantee.png";

export const GuaranteeSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              className="w-32 h-32 mx-auto mb-8"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={shieldImg}
                alt="Garantia de 7 dias"
                className="w-full h-full object-contain drop-shadow-[0_0_30px_hsl(142_76%_45%/0.5)] rounded-[3rem] [mask-image:radial-gradient(circle,black_60%,transparent_100%)]"
              />
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-display font-black mb-6 tracking-tight">
              Garantia <span className="text-success">Incondicional</span> de 7 Dias
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Acesse o curso, assista às aulas, aplique as estratégias.
              Se em <span className="text-foreground font-semibold">7 dias</span> você não ficar 100% satisfeito,
              devolvemos <span className="text-success font-semibold">100% do seu dinheiro</span>.
              Sem perguntas, sem burocracia.
            </p>

            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              Basta enviar um email para suporte@vendainfinita.com.br
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
