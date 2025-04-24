import "@/styles/style.css";

// Components
import HeroSection from "@/components/HeroSection";
import HexagonGrid from "@/components/HexagonGrid";
import Navbar from "@/components/Navbar";
import StatItem from "@/components/StatItem";
import WhatsNew from "@/components/WhatsNew";
import HexagonCard from '@/components/HexagonCard';
import ServicesList from '@/components/ServicesList';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { IndustryCard } from '../components/IndustryCard';
import IndustriesCarousel from '@/components/IndustriesCarousel';

const Index = () => {
  const industries = [
    {
      title: "LOGISTICS",
      description: "We support logistics companies with digital solutions to make operation management leaner, smarter and more cost-efficient.",
      isActive: true,
      image: "/src/assets/industry/logistics-1.png"
    },
    { title: "AUTOMOTIVE",
      description: "We support logistics companies with digital solutions to make operation management leaner, smarter and more cost-efficient.",
      isActive: true,
      image: "/src/assets/industry/automotive-1.png"
     },
    { title: "FINTECH AND BANKING",
      description: "We support logistics companies with digital solutions to make operation management leaner, smarter and more cost-efficient.",
      isActive: true,
      image: "/src/assets/industry/image-9.png"
     },
    { title: "DEFENSE",
      description: "We support logistics companies with digital solutions to make operation management leaner, smarter and more cost-efficient.",
      isActive: true,
      image: "/src/assets/industry/Defence-1.png"
     },
    { title: "PUBLIC SECTOR",
      description: "We support logistics companies with digital solutions to make operation management leaner, smarter and more cost-efficient.",
      isActive: true,
      image: "/src/assets/industry/Public-sector-1.png"
     },
    { title: "MEDTECH",
      description: "We support logistics companies with digital solutions to make operation management leaner, smarter and more cost-efficient.",
      isActive: true,
      image: "/src/assets/industry/image-10.png"
     },
    { title: "GAMING",
      description: "We support logistics companies with digital solutions to make operation management leaner, smarter and more cost-efficient.",
      isActive: true,
      image: "/src/assets/industry/Games-1.png"
     },
    { title: "TELECOM",
      description: "We support logistics companies with digital solutions to make operation management leaner, smarter and more cost-efficient.",
      isActive: true,
      image: "/src/assets/industry/telecom-1.png"
     },
    { title: "RETAIL",
      description: "We support logistics companies with digital solutions to make operation management leaner, smarter and more cost-efficient.",
      isActive: true,
      image: "/src/assets/industry/Retail-1.png"
     },
    { title: "HIGH TECH",
      description: "We support logistics companies with digital solutions to make operation management leaner, smarter and more cost-efficient.",
      isActive: true,
      image: "/src/assets/industry/High-tech-1.png"
     },
    { title: "MANUFACTURING",
      description: "We support logistics companies with digital solutions to make operation management leaner, smarter and more cost-efficient.",
      isActive: true,
      image: "/src/assets/industry/Manufacturing-1.png"
     }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black overflow-hidden">
      <Navbar />
      <HeroSection />
      
      <main className="flex-1 bg-white">
        {/* About Section */}
        <div className="main-container">
          <div className="content-grid">
            {/* Left side - Hexagon grid */}
            <div>
              <HexagonGrid />
            </div>
            
            {/* Right side - Text content */}
            <div className="space-y-8">
              <h1 className="main-heading">
                A <span className="heading-highlight">GLOBAL</span><br />
                <span className="heading-highlight">COMPANY</span> WITH<br />
                FAMILY <span className="heading-highlight">SPIRIT</span>
              </h1>
              
              <div className="space-y-6 text-gray-600">
                <p className="text-lg">
                  Sigma Technology was started with a mission to make tomorrow's technology usable today. 
                  Our vision is to become the leading tech consulting company where people are in 
                  focus, helping our clients innovate and our people grow. Our consultants and 
                  development teams provide cutting-edge expertise in software engineering, embedded 
                  systems, IT infrastructure, product information, and digital solutions.
                </p>
                
                <p className="text-lg">
                  We are committed to contributing to a better tomorrow, delivering superior value to our 
                  customers and employees.
                </p>
              </div>
              
              {/* Stats */}
              <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <StatItem
                  number="12 YEARS"
                  description={["AMONG SWEDEN'S", "BEST EMPLOYERS"]}
                />
                <StatItem
                  number="TOP 1"
                  description={["MOST RECOMMENDED", "EMPLOYER SWEDEN"]}
                />
                <StatItem
                  number="200+"
                  description={["JOBS ARE OUR", "GOAL THIS YEAR"]}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* What's New Section - Full Width */}
        <div className="w-full">
          <div className="pt-16">
            <WhatsNew />
          </div>
        </div>

        {/* Services Section */}
        <div className="services-section">
          <div className="services-container">
            <h1 className="services-title">OUR SERVICES</h1>
            <h2 className="services-subtitle">
              FROM VISION TO INNOVATION—POWER YOUR IDEAS WITH OUR EXPERT DIGITAL AND ENGINEERING SOLUTIONS.
            </h2>

            <div className="hexagon-grid">
              <HexagonCard 
                title="DIGITAL & ENGINEERING"
                isHighlighted={true}
              />
              <HexagonCard 
                title="BUSINESS SOLUTIONS"
                className="md:translate-y-16"
              />
              <HexagonCard 
                title="PRODUCT INFORMATION"
              />
            </div>
            
            <div className="services-list-container">
              <ServicesList />
            </div>
          </div>
        </div>

        {/* Industries Section */}
        <IndustriesCarousel industries={industries} />
      </main>
    </div>
  );
};

export default Index;
