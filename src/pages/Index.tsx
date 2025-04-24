import "@/styles/style.css";

// Components
import HeroSection from "@/components/HeroSection";
import HexagonGrid from "@/components/HexagonGrid";
import Navbar from "@/components/Navbar";
import StatItem from "@/components/StatItem";
import WhatsNew from "@/components/WhatsNew";

const Index = () => {
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
          <div className="py-16">
            <WhatsNew />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
