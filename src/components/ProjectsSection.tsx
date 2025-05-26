
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "MRI→CT Image Translation",
    description: "Advanced medical imaging translation using VAE-CycleGAN architecture for cross-modal medical image synthesis.",
    tech: ["PyTorch", "VAE", "CycleGAN", "Medical Imaging"],
    github: "#",
    demo: "#"
  },
  {
    title: "DistilBERT Q&A Fine-tuning",
    description: "Fine-tuned DistilBERT on SQuAD dataset for high-performance question answering with optimized inference speed.",
    tech: ["DistilBERT", "SQuAD", "Transformers", "NLP"],
    github: "#",
    demo: "#"
  },
  {
    title: "Custom Generative LLM",
    description: "Built a custom large language model leveraging Gemini API for specialized text generation tasks.",
    tech: ["Gemini API", "LLM", "Python", "API Integration"],
    github: "#",
    demo: "#"
  },
  {
    title: "Image Captioning System",
    description: "Deep learning model combining VGG16 feature extraction with SimpleRNN for automatic image description generation.",
    tech: ["VGG16", "SimpleRNN", "Computer Vision", "TensorFlow"],
    github: "#",
    demo: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-neon-blue">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Innovative AI solutions and research implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-neon-blue/50 transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-400 hover:text-neon-blue transition-colors"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-400 hover:text-neon-blue transition-colors"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-neon-blue/10 text-neon-blue border border-neon-blue/30 rounded-full"
                    >
                      {tech}
                    </span>
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

export default ProjectsSection;
