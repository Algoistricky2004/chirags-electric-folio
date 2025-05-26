
import { useState } from 'react';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-neon-blue">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's collaborate on the next big AI innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-transparent"></div>
            
            <div className="relative p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-neon-blue"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-neon-blue"
                    required
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-neon-blue"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-neon-blue text-black hover:bg-electric-blue-400 font-semibold py-3 animate-glow"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-transparent"></div>
              
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
                
                <div className="space-y-4">
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
                  
                  <a
                    href="https://surenoobster.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-neon-blue transition-colors duration-300"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span>Portfolio Website</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button className="bg-transparent border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black font-semibold px-8 py-3 transition-all duration-300">
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
