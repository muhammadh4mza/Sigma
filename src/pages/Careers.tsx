import "@/styles/style.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroWithAwards from "@/components/HeroWithAwards";
import FlexibleAccordion from "@/components/FlexibleAccordion";
import SectionWeProvide from "@/components/SectionWeProvide";
import FlexibleInsights from "@/components/FlexibleInsights";
import EducationTabs from "@/components/EducationTabs";
import VideoSlider from "@/components/VideoSlider";
import TimelineSection from "@/components/TimelineSection";
import JobListings from "@/components/JobListings";
const Careers = () => {
  

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Navbar />
      <HeroWithAwards />
      <FlexibleAccordion />
      <SectionWeProvide />
      <FlexibleInsights />
      <EducationTabs />
      <VideoSlider />
      <TimelineSection />
      <JobListings />





      <Footer />
    </div>
  );
};

export default Careers;    