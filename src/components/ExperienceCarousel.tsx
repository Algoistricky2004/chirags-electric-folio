
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const experiences = [
  {
    title: "Chief Technology Officer",
    company: "21 Spheres",
    period: "Dec 2024–Present (6 mos)",
    location: "Remote (Bhuj, Gujarat)",
    bullets: [
      "Promoted to CTO; lead AI & blockchain R&D, cloud infra, and secure transaction systems.",
      "Architecting scalable technology solutions for enterprise blockchain applications.",
      "Building cross-functional teams and establishing engineering best practices."
    ]
  },
  {
    title: "AI Research Intern",
    company: "Artificial Intelligence Institute of South Carolina",
    period: "Mar 2025–Present (3 mos)",
    location: "Remote",
    bullets: [
      "Research MMKG architectures; build transformers for knowledge-aware tasks.",
      "Developing novel approaches for multimodal knowledge graph integration.",
      "Publishing research on transformer-based knowledge representation."
    ]
  },
  {
    title: "AI Researcher",
    company: "University of Illinois Chicago",
    period: "Dec 2024–Present (6 mos)",
    location: "Remote",
    bullets: [
      "Fine-tune LLMs with PPO for readability control; customize GenerationMixin.",
      "Implementing reinforcement learning techniques for language model optimization.",
      "Contributing to open-source AI research and development initiatives."
    ]
  },
  {
    title: "Research Assistant",
    company: "University of Louisiana at Lafayette (AICSIL)",
    period: "Dec 2024–Mar 2025 (4 mos)",
    location: "Remote",
    bullets: [
      "AI-driven Windows security hardening; adversarial defense & benchmarking.",
      "Developing ML models for cybersecurity threat detection and prevention.",
      "Creating comprehensive security assessment frameworks."
    ]
  },
  {
    title: "Research Assistant",
    company: "IIT BHU NLP Lab",
    period: "Oct 2024–Mar 2025 (6 mos)",
    location: "On-site (Varanasi)",
    bullets: [
      "Study gender in Hindi grammar; develop SMT/DL translation for low-resource languages.",
      "Building neural machine translation systems for Indian languages.",
      "Contributing to linguistic research and computational language models."
    ]
  },
  {
    title: "AI Software Developer",
    company: "ExcelGens, Inc.",
    period: "Sep 2024–Dec 2024 (4 mos)",
    location: "Remote",
    bullets: [
      "Built AI modules and integrations for enterprise analytics and automation.",
      "Developed scalable machine learning pipelines for business intelligence.",
      "Implemented real-time data processing and AI-driven insights platforms."
    ]
  },
  {
    title: "AI/ML Intern",
    company: "Anguliyam",
    period: "Sep 2024–Nov 2024 (3 mos)",
    location: "Remote",
    bullets: [
      "Developed prompt-engineered apps with Nhost; managed API workflows.",
      "Created intelligent chatbot systems with advanced natural language processing.",
      "Optimized API performance and implemented scalable backend architectures."
    ]
  },
  {
    title: "Data Science Intern",
    company: "TVARIT Solutions",
    period: "May 2024–Jul 2024 (3 mos)",
    location: "On-site (Pune)",
    bullets: [
      "Automated scrap reduction via Python & AI; deployed MLOps pipelines on AWS.",
      "Implemented computer vision solutions for quality control and defect detection.",
      "Built end-to-end machine learning workflows with automated deployment."
    ]
  }
];

const ExperienceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % experiences.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
    setIsAutoPlay(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-neon-blue">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A journey through cutting-edge technology and AI research
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-transparent"></div>
          
          <div className="relative p-8 md:p-12">
            <div className="flex items-center justify-between mb-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                className="text-neon-blue hover:bg-neon-blue/10 border border-neon-blue/30"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <div className="flex space-x-2">
                {experiences.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsAutoPlay(false);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-neon-blue' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="text-neon-blue hover:bg-neon-blue/10 border border-neon-blue/30"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            <div className="min-h-[300px]">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-electric-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-black font-bold text-xl">
                      {experiences[currentIndex].company.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {experiences[currentIndex].title}
                  </h3>
                  <p className="text-neon-blue font-semibold mb-2">
                    {experiences[currentIndex].company}
                  </p>
                  <p className="text-gray-400 text-sm mb-1">
                    {experiences[currentIndex].period}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {experiences[currentIndex].location}
                  </p>
                </div>
                
                <div className="md:col-span-2">
                  <ul className="space-y-4">
                    {experiences[currentIndex].bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-neon-blue rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <p className="text-gray-300 leading-relaxed">{bullet}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceCarousel;
