import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Partnership from "@/components/Partnership";
import Testimonials from "@/components/Testimonials";
import Authority from "@/components/Authority";
import Filter from "@/components/Filter";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Partnership />
      <Testimonials />
      <Authority />
      <Filter />
      <FAQ />
      <ContactForm />
      <Footer />
      <StickyBar />
    </div>
  );
};

export default Index;
