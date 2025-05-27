
import { CheckCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    "Consultoria técnica e projetos porta-a-porta",
    "Apoio estratégico e mentoring de equips interna", 
    "Treinamentos e estruturação de govêrnança BI",
    "Implementação de IA com dados reais"
  ];

  const additionalServices = [
    { title: "Consultoria técnica", subtitle: "e projetos porta-a-porta" },
    { title: "Apoio estratégico", subtitle: "mentoria de sitpemarina" },
    { title: "Treinamentos e", subtitle: "gestão on a 10 de govêrnança BI" },
    { title: "Implementação de IA", subtitle: "com dados reats" }
  ];

  return (
    <section className="bg-slate-900 p-8 lg:p-12 min-h-[50vh] flex flex-col justify-between">
      <div>
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">
          COMO PODEMOS<br />AJUDAR SUA EMPRESA
        </h2>
        
        <div className="space-y-4 mb-8">
          {services.map((service, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <p className="text-gray-300 text-sm leading-relaxed">
                {service}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        {additionalServices.map((service, index) => (
          <div key={index} className="text-left">
            <h3 className="text-white font-semibold text-sm mb-1">
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm">
              {service.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
