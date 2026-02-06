import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Funciona para quem está começando do zero?",
    answer: "Sim! O curso foi desenvolvido para iniciantes. Começamos do básico absoluto e vamos avançando gradualmente. Você não precisa ter nenhuma experiência prévia com marketing digital.",
  },
  {
    question: "Quanto tempo preciso para ver resultados?",
    answer: "Isso depende da sua dedicação, mas alunos que aplicam o método corretamente costumam ver os primeiros resultados entre 30 a 60 dias. O importante é seguir o passo a passo e não pular etapas.",
  },
  {
    question: "Preciso de muito dinheiro para começar?",
    answer: "Não! Ensinamos estratégias que funcionam com orçamentos a partir de R$10/dia. O mais importante é entender a lógica por trás das campanhas antes de escalar o investimento.",
  },
  {
    question: "O curso tem suporte?",
    answer: "Sim! Você terá acesso à nossa comunidade VIP no Discord onde pode tirar dúvidas diretamente com a equipe e outros alunos. Além disso, respondemos emails em até 24 horas úteis.",
  },
  {
    question: "Por quanto tempo terei acesso ao curso?",
    answer: "O acesso é vitalício! Você pode assistir quantas vezes quiser, no seu ritmo. Além disso, todas as atualizações futuras do curso são incluídas gratuitamente.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-24 section-alt">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="flex justify-center mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-center mb-12 tracking-tight">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
        </Reveal>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <Reveal key={index} delay={0.1 + index * 0.1}>
                <AccordionItem
                  value={`faq-${index}`}
                  className="card-dark px-6 border-border data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="hover:no-underline py-6 text-left">
                    <span className="text-lg font-display font-bold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
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
