
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <AboutSection />
        <DifferentialsSection />
        <SuccessCasesSection />
        <ServicesSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
