
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import SuccessCasesSection from "@/components/SuccessCasesSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <HeroSection />
      
      {/* Divisão da tela ao meio com quadros organizados */}
      <div className="min-h-screen flex">
        {/* Lado Esquerdo */}
        <div className="w-1/2 flex flex-col">
          <div className="flex-1">
            <AboutSection />
          </div>
          <div className="flex-1">
            <SuccessCasesSection />
          </div>
        </div>
        
        {/* Lado Direito */}
        <div className="w-1/2 flex flex-col">
          <div className="flex-1">
            <DifferentialsSection />
          </div>
          <div className="flex-1">
            <ServicesSection />
          </div>
        </div>
      </div>
      
      <ContactSection />
    </div>
  );
};

export default Index;
