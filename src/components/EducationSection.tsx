
const EducationSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Academic <span className="text-neon-blue">Background</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Strong foundation in engineering and technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-neon-blue/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-electric-blue-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-black font-bold text-xl">IIT</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">
                Dual Degree (B.Tech + M.Tech)
              </h3>
              <p className="text-neon-blue font-semibold mb-2">
                Industrial Chemistry
              </p>
              <p className="text-gray-400 mb-4">
                IIT BHU (2022–2027)
              </p>
              <p className="text-gray-300 text-sm">
                Pursuing integrated dual degree program combining undergraduate and postgraduate studies in chemical engineering with focus on AI applications.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-neon-blue/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-electric-blue-500 to-electric-blue-700 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">12th</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">
                Senior Secondary
              </h3>
              <p className="text-neon-blue font-semibold mb-2">
                CBSE Board
              </p>
              <p className="text-gray-400 mb-4">
                92% Score
              </p>
              <p className="text-gray-300 text-sm">
                Exceptional performance in science and mathematics, laying strong foundation for engineering studies.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-neon-blue/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-electric-blue-600 to-electric-blue-800 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">10th</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">
                Secondary Education
              </h3>
              <p className="text-neon-blue font-semibold mb-2">
                CBSE Board
              </p>
              <p className="text-gray-400 mb-4">
                90% Score
              </p>
              <p className="text-gray-300 text-sm">
                Strong academic foundation with excellent performance across all subjects, particularly in STEM fields.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
