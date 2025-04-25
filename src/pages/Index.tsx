import "@/styles/style.css";

// Components
import Navbar from "@/components/Navbar";
import HeroVideoSection from "@/components/HeroVideoSection";
import WhatsNewSlider from "@/components/WhatsNewSlider";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import ValuesAndVision from "@/components/ValuesAndVision";
import Career from "@/components/career";
import HexagonHeroSection from "@/components/HexagonHeroSection";

const Index = () => {
  

  return (
    <div className="min-h-screen flex flex-col bg-black overflow-hidden">
      <Navbar />
      <HeroVideoSection />
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