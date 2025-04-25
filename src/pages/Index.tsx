import "@/styles/style.css";

// Components
import HeroSection from "@/components/HeroSection";
import HexagonGrid from "@/components/HexagonGrid";
import Navbar from "@/components/Navbar";
import StatItem from "@/components/StatItem";
import WhatsNewSlider from "@/components/WhatsNewSlider";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import ValuesAndVision from "@/components/ValuesAndVision";
import Career from "@/components/career";
import HexagonHeroSection from "./HexagonHeroSection";

const Index = () => {
  

  return (
    <div className="min-h-screen flex flex-col bg-black overflow-hidden">
      <Navbar />
      <HeroSection />
      <HexagonHeroSection />
      
      <main className="flex-1 bg-white">
        
        {/* Main Sections */}
        <WhatsNewSlider />
        <ServicesSection />
        <IndustriesSection />
        <ValuesAndVision />
        <Career />
      </main>
    </div>
  );
};

export default Index;