
import { Database, TrendingUp, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-40 w-24 h-24 bg-cyan-400 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-blue-300 rounded-full blur-xl"></div>
        {/* Chart-like decorative elements */}
        <div className="absolute bottom-20 right-20 flex space-x-2">
          <div className="w-4 h-16 bg-blue-400 rounded opacity-60"></div>
          <div className="w-4 h-24 bg-cyan-400 rounded opacity-60"></div>
          <div className="w-4 h-20 bg-blue-300 rounded opacity-60"></div>
          <div className="w-4 h-32 bg-cyan-300 rounded opacity-60"></div>
        </div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-white text-2xl md:text-3xl font-light mb-2 tracking-wide">
            NEWTON MARQUES
          </h1>
          <p className="text-blue-200 text-lg md:text-xl font-light tracking-wider">
            SOLUÇÕES EM TECNOLOGIA
          </p>
        </div>
        
        <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          CONSULTORIA<br />
          EM BI, DADOS E IA
        </h2>
        
        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Transformamos dados brutos em decisões automáticas – com escala e inteligência.
        </p>
        
        <div className="flex justify-center space-x-8 mt-12 opacity-60">
          <div className="flex flex-col items-center">
            <Database className="w-8 h-8 text-blue-300 mb-2" />
            <span className="text-blue-200 text-sm">Dados</span>
          </div>
          <div className="flex flex-col items-center">
            <TrendingUp className="w-8 h-8 text-cyan-300 mb-2" />
            <span className="text-blue-200 text-sm">Analytics</span>
          </div>
          <div className="flex flex-col items-center">
            <Zap className="w-8 h-8 text-blue-300 mb-2" />
            <span className="text-blue-200 text-sm">IA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
