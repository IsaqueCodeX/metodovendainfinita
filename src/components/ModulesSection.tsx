import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen, BarChart3, MessageSquare, Bot, Check, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

const modules = [
  {
    id: "1",
    icon: BookOpen,
    title: "Módulo 1: Fundamentos do Marketing Digital",
    lessons: [
      "Mindset do empreendedor digital de sucesso",
      "Como escolher o nicho mais lucrativo para você",
      "Entendendo o funil de vendas completo",
      "Plataformas e ferramentas essenciais",
      "Criando sua estrutura do zero",
    ],
    color: "text-primary",
    bg: "bg-primary/20",
  },
  {
    id: "2",
    icon: BarChart3,
    title: "Módulo 2: Facebook Ads Avançado",
    lessons: [
      "Configuração completa do Business Manager",
      "Pixel, CAPI e rastreamento avançado",
      "Estrutura de campanhas que escalam",
      "Públicos personalizados e Lookalike",
      "Otimização e análise de métricas",
    ],
    color: "text-secondary",
    bg: "bg-secondary/20",
  },
  {
    id: "3",
    icon: MessageSquare,
    title: "Módulo 3: Copywriting Persuasivo",
    lessons: [
      "A estrutura AIDA para vendas",
      "Headlines que capturam atenção",
      "Gatilhos mentais mais poderosos",
      "Scripts de VSL comprovados",
      "Páginas de vendas de alta conversão",
    ],
    color: "text-accent",
    bg: "bg-accent/20",
  },
  {
    id: "4",
    icon: Bot,
    title: "Módulo 4: Automação com IA (2026)",
    lessons: [
      "Usando ChatGPT para criar copies em minutos",
      "Automação de atendimento com chatbots",
      "Geração de criativos com IA",
      "Análise preditiva de campanhas",
      "Ferramentas de IA para escala",
    ],
    color: "text-warning",
    bg: "bg-warning/20",
  },
];

export const ModulesSection = () => {
  return (
    <section className="py-24 section-alt relative overflow-hidden">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="flex justify-center mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-center mb-4 tracking-tight">
            O Que Você Vai <span className="gradient-text">Aprender</span>
          </h2>
        </Reveal>
        
        <Reveal delay={0.1}>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            +40 aulas práticas divididas em 4 módulos estratégicos
          </p>
        </Reveal>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {modules.map((module, index) => (
              <Reveal key={module.id} delay={0.15 + index * 0.1}>
                <AccordionItem
                  value={module.id}
                  className="card-dark px-6 border-border data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <motion.div
                        className={`w-12 h-12 rounded-xl ${module.bg} flex items-center justify-center flex-shrink-0`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <module.icon className={`w-6 h-6 ${module.color}`} />
                      </motion.div>
                      <span className="text-lg font-display font-bold">{module.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="pl-16 space-y-3">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <motion.div
                          key={lessonIndex}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: lessonIndex * 0.05 }}
                        >
                          <Check className="w-5 h-5 text-success flex-shrink-0" />
                          <span className="text-muted-foreground">{lesson}</span>
                        </motion.div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Reveal>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
