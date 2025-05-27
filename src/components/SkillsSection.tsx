const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C++", "JavaScript", "SQL"]
  },
  {
    title: "Frameworks",
    skills: ["PyTorch", "TensorFlow", "Keras", "Flask", "Django", "Langchain"]
  },
  {
    title: "Tools",
    skills: ["Docker", "Airflow", "AWS", "GCP", "Huggingface", "Tableau"]
  },
  {
    title: "Specializations",
    skills: ["MLOps", "Knowledge Graphs", "NLP Security", "Computer Vision", "ROS"]
  }
];

const SkillsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-neon-blue">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm particularly passionate about AI research, collaboration on impactful ideas, and contributing to open-source or cutting-edge tech. <br />
            Feel free to reach out for freelance opportunities or collaborations:{" "}
            <a href="mailto:chiragchawla2021@gmail.ocvm" className="text-neon-blue underline">
              chiragchawla2021@gmail.com
            </a>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-neon-blue/50 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative p-6">
                <h3 className="text-xl font-bold text-neon-blue mb-6 text-center">
                  {category.title}
                </h3>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group/skill p-3 rounded-lg bg-gray-800/50 hover:bg-neon-blue/10 border border-gray-700 hover:border-neon-blue/30 transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-gray-300 group-hover/skill:text-neon-blue transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
