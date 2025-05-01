import "@/styles/style.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSlider from "@/components/ContactSlider";
import ContactLocations from "@/components/ContactLocations";
import ContactForm from "@/components/ContactForm";




const Contact = () => {
  

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Navbar />
      <ContactSlider />
      <ContactLocations />
      <ContactForm />
      
      





      <Footer />
    </div>
  );
};

export default Contact;    