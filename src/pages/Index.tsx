import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Process />
      <Testimonial />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
