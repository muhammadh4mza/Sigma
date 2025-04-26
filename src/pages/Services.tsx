import "@/styles/style.css";
import Navbar from "@/components/Navbar";
import ServicesHeroSection from "@/components/ServicesHeroSection";
import GlobalLocalSection from "@/components/GlobalLocalSection";
import StrategicPlanSection from "@/components/StrategicPlanSection";
import Footer from "@/components/Footer";


const Services = () => {
  

  return (
    <div className="min-h-screen flex flex-col bg-black overflow-hidden">
      <Navbar />
      <ServicesHeroSection />
      <GlobalLocalSection />
      <StrategicPlanSection />
      <Footer />
    </div>
  );
};

export default Services;      