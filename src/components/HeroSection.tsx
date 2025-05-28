
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_50%)]"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 animate-slide-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Chirag <span className="text-neon-blue animate-glow">Chawla</span>
          </h1>
          <div className="text-lg md:text-xl text-gray-300 mb-4 space-y-2">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              <span className="text-neon-blue font-semibold">CTO</span>
              <span className="text-gray-500">•</span>
              <span className="text-neon-blue font-semibold">Stealth Startup</span>
              <span className="text-gray-500">•</span>
              <span className="text-neon-blue font-semibold">Founding Engineer</span>
              <span className="text-gray-500">•</span>
              <span className="text-neon-blue font-semibold">AI Researcher</span>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            "Building secure, intelligent and scalable AI systems"
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300" asChild>
            <a href="https://github.com/Algoistricky2004" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300" asChild>
            <a href="https://www.linkedin.com/in/chirag-chawla-888025254/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300" asChild>
            <a href="mailto:chiragchawla2021@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </a>
          </Button>
        </div>

        {/* CTA Button */}
        <Button className="bg-neon-blue text-black hover:bg-electric-blue-400 font-semibold px-8 py-3 text-lg animate-glow">
          Download Resume
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
