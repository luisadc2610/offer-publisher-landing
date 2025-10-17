import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Partnership from "@/components/Partnership";
import Authority from "@/components/Authority";
import Filter from "@/components/Filter";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Partnership />
      <Authority />
      <Filter />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
