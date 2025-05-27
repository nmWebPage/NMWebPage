
const AboutSection = () => {
  const technologies = [
    { name: "QlikView", logo: "QV" },
    { name: "Qlik", logo: "QLK" },
    { name: "SAS", logo: "SAS" },
    { name: "Redinfra", logo: "RED" },
    { name: "AWS", logo: "AWS" }
  ];

  return (
    <section className="bg-slate-800 p-8 lg:p-12 min-h-[50vh] flex flex-col justify-center border-r border-slate-700">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">
        QUEM SOMOS
      </h2>
      
      <div className="space-y-6 mb-8">
        <p className="text-gray-300 text-base leading-relaxed">
          <span className="font-semibold text-blue-300">30 anos</span> de experiência com desenvolvimento de apps entregues e 
          <span className="font-semibold text-blue-300"> mais de 300 clientes</span>.
        </p>
        
        <p className="text-gray-300 text-base leading-relaxed">
          Unificamos organização e entendimento das bases reais dos seus dados.
        </p>
      </div>
      
      <div className="flex flex-wrap gap-4">
        {technologies.map((tech, index) => (
          <div 
            key={index}
            className="bg-slate-700 px-4 py-2 rounded-lg border border-slate-600 hover:border-blue-400 transition-colors duration-300"
          >
            <span className="text-white font-medium text-sm">{tech.logo}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
