
import { FileText, Database, MessageSquare } from "lucide-react";

const SuccessCasesSection = () => {
  const cases = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "APP ESCALÁVEL",
      subtitle: "300 agustos em 300 + unidades",
      description: "20 ERPs - como ades naquavictor"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "DATA LAKE CENTRALIZADO",
      subtitle: "Ano lemri de osterolles em 100 colon uma gensorelonas"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "IA VIA WHATSAPP",
      subtitle: "Decidcs co alassos de galmis designs éla raguidos"
    }
  ];

  return (
    <section className="bg-slate-800 p-8 lg:p-12 h-full flex flex-col justify-center border-r border-slate-600">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">
        CASES DE SUCESSO
      </h2>
      
      <div className="space-y-8">
        {cases.map((caseItem, index) => (
          <div key={index} className="flex items-start space-x-4 group cursor-pointer">
            <div className="text-blue-400 mt-1 group-hover:text-cyan-400 transition-colors duration-300">
              {caseItem.icon}
            </div>
            <div>
              <h3 className="text-white font-bold text-sm mb-2">
                {caseItem.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {caseItem.subtitle}
              </p>
              {caseItem.description && (
                <p className="text-gray-400 text-xs mt-1">
                  {caseItem.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessCasesSection;
