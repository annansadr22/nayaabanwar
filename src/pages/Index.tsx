
import { Navigation } from "@/components/Navigation";
import { TechBackground } from "@/components/TechBackground";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 relative">
      <TechBackground animated={true} />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
