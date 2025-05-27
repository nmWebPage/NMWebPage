
import { CheckCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    "Consultoria técnica e projetos porta-a-porta",
    "Apoio estratégico e mentoring de equips interna", 
    "Treinamentos e estruturação de govêrnança BI",
    "Implementação de IA com dados reais"
  ];

  return (
    <section className="bg-slate-900 p-8 lg:p-12 h-full flex flex-col justify-center">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">
        COMO PODEMOS<br />AJUDAR SUA EMPRESA
      </h2>
      
      <div className="space-y-4">
        {services.map((service, index) => (
          <div key={index} className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
            <p className="text-gray-300 text-sm leading-relaxed">
              {service}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
