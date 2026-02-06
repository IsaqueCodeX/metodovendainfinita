import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ModulesSection } from "@/components/ModulesSection";
import { BonusSection } from "@/components/BonusSection";
import { PriceSection } from "@/components/PriceSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <TestimonialsSection />
        <ModulesSection />
        <BonusSection />
        <PriceSection />
        <GuaranteeSection />
        <FAQSection />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
