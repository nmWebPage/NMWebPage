
const ContactSection = () => {
  return (
    <section className="bg-slate-800 p-8 lg:p-12 min-h-[60vh] flex flex-col justify-center border-t border-slate-600">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-white text-2xl md:text-3xl font-light mb-6 leading-relaxed">
            Pronto para transformar<br />
            seus dados em decisões<br />
            estratégicas?
          </h2>
          
          <p className="text-blue-300 text-xl md:text-2xl font-semibold mb-8">
            Vamos conversar.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span className="text-gray-300 text-sm">https://www.linkedin.com/in/newton-marques/</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
              <span className="text-gray-300 text-sm">newton.osvaldo.jr@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
