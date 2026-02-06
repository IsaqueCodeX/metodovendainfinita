import { Star, Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    name: "Mariana Santos",
    role: "Empreendedora Digital",
    image: testimonial1,
    content: "Em 3 meses saí de R$0 para R$15.000/mês. O método é simplesmente incrível! Nunca imaginei que conseguiria viver de marketing digital.",
    revenue: "R$ 15.000/mês",
    highlight: "3 meses",
  },
  {
    name: "Lucas Oliveira",
    role: "Ex-CLT",
    image: testimonial2,
    content: "Larguei meu emprego depois de 6 meses aplicando o método. Hoje faturo mais do que o dobro do meu antigo salário trabalhando de casa.",
    revenue: "R$ 22.000/mês",
    highlight: "6 meses",
  },
  {
    name: "Amanda Costa",
    role: "Mãe & Empreendedora",
    image: testimonial3,
    content: "Consegui conciliar maternidade e trabalho. O método me deu liberdade para estar com meus filhos e ainda construir meu negócio.",
    revenue: "R$ 8.500/mês",
    highlight: "4 meses",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 section-alt relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <Reveal>
          <div className="text-center mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-primary">
              <Star className="w-4 h-4 fill-current" />
              Histórias Reais de Sucesso
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-center mb-4 tracking-tight">
            Veja quem já <span className="gradient-text">transformou</span> sua vida
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Pessoas comuns que decidiram agir e hoje vivem do digital
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Reveal key={index} delay={0.3 + index * 0.15} direction="scale">
              <motion.div
                className="card-glow p-6 h-full flex flex-col"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                
                {/* Testimonial text */}
                <p className="text-foreground/90 leading-relaxed flex-grow mb-6">
                  "{testimonial.content}"
                </p>

                {/* Revenue badge */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-success/20 text-success text-sm font-bold">
                    {testimonial.revenue}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    em {testimonial.highlight}
                  </span>
                </div>

                {/* Profile */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/30"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-success-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-warning fill-current" />
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Social proof stats */}
        <Reveal delay={0.8}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="px-6">
              <p className="text-3xl md:text-4xl font-display font-black gradient-text">+2.400</p>
              <p className="text-muted-foreground text-sm">Alunos Ativos</p>
            </div>
            <div className="w-px h-12 bg-border hidden md:block" />
            <div className="px-6">
              <p className="text-3xl md:text-4xl font-display font-black gradient-text">4.9/5</p>
              <p className="text-muted-foreground text-sm">Avaliação Média</p>
            </div>
            <div className="w-px h-12 bg-border hidden md:block" />
            <div className="px-6">
              <p className="text-3xl md:text-4xl font-display font-black gradient-text">94%</p>
              <p className="text-muted-foreground text-sm">Taxa de Aprovação</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
