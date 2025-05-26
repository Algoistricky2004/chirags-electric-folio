
import HeroSection from '@/components/HeroSection';
import ExperienceCarousel from '@/components/ExperienceCarousel';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-black font-sans">
      <HeroSection />
      <ExperienceCarousel />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Chirag Chawla. Built with passion for AI and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
