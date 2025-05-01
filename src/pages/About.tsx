import "@/styles/style.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroAbout from "@/components/HeroAbout";
import TextWithVideo from "@/components/TextWithVideo";
import Achievements from "@/components/Achievements";
import CountTextSection from "@/components/CountTextSection";
import HexAreaText from "@/components/HexAreaText";
import ImageGallery from "@/components/ImageGallery";
import BackgroundSliderSection from "@/components/BackgroundSliderSection";
import PortfolioSliderSection from "@/components/PortfolioSliderSection";
import HeroSectionAbout from "@/components/HeroSectionAbout";



const About = () => {
  

  return (
    <div className="min-h-screen flex flex-col bg-black overflow-hidden">
      <Navbar />

      <HeroAbout  />
      <TextWithVideo />
      <Achievements />
      <CountTextSection />
      <HexAreaText  />
      <ImageGallery />
      <BackgroundSliderSection />
      <PortfolioSliderSection />
      <HeroSectionAbout />

      <Footer />
    </div>
  );
};

export default About;      