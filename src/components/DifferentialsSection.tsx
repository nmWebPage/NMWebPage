
import { Network, Database, BarChart3, MessageSquare } from "lucide-react";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: <Network className="w-6 h-6" />,
      title: "Arquitetura padrão para BI multitenant",
      subtitle: "Mais de 40 ERPs integrados",
      description: "Escalabilidade garantida"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Lake estruturado",
      subtitle: "com prompts para IA"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics avançado",
      subtitle: "Unifique todos seus dados estratégicos",
      description: "Dashboards e relatórios personalizados"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Integração com IA generativa",
      subtitle: "Consulte seus dados via WhatsApp"
    }
  ];

  return (
    <section className="bg-slate-900 p-8 lg:p-12 h-full flex flex-col justify-center border-b border-slate-600">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">
        NOSSOS<br />DIFERENCIAIS
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {differentials.map((item, index) => (
          <div key={index} className="flex items-start space-x-4 group">
            <div className="text-blue-400 mt-1 group-hover:text-cyan-400 transition-colors duration-300">
              {item.icon}
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm mb-1 leading-tight">
                {item.title}
              </h3>
              <p className="text-blue-300 text-sm mb-1">
                {item.subtitle}
              </p>
              {item.description && (
                <p className="text-gray-400 text-xs">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DifferentialsSection;
