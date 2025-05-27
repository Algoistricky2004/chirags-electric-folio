import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Connect <span className="text-neon-blue">With Me</span>
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-transparent"></div>

          <div className="relative space-y-6">
            <a
              href="mailto:chiragchawla2021@gmail.com"
              className="flex items-center space-x-3 text-gray-300 hover:text-neon-blue transition-colors duration-300"
            >
              <Mail className="h-5 w-5" />
              <span>chiragchawla2021@gmail.com</span>
            </a>

            <a
              href="https://github.com/Algoistricky2004"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-300 hover:text-neon-blue transition-colors duration-300"
            >
              <Github className="h-5 w-5" />
              <span>GitHub Profile</span>
            </a>

            <a
              href="https://www.linkedin.com/in/chirag-chawla-888025254/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-300 hover:text-neon-blue transition-colors duration-300"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="https://drive.google.com/file/d/1d5XUf6wxQeKu3WuW-PT_jLSWhR7gvZMn/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-transparent border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black font-semibold px-8 py-3 transition-all duration-300 flex items-center space-x-2">
              <span>Download Resume</span>
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
