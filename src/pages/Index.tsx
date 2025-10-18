import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Partnership from "@/components/Partnership";
import Testimonials from "@/components/Testimonials";
import Authority from "@/components/Authority";
import ComparisonTable from "@/components/ComparisonTable";
import ROICalculator from "@/components/ROICalculator";
import Filter from "@/components/Filter";
import FAQ from "@/components/FAQ";
import MultiStepForm from "@/components/MultiStepForm";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Partnership />
      <ComparisonTable />
      <ROICalculator />
      <Testimonials />
      <Authority />
      <Filter />
      <FAQ />
      <section id="contact-form" className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-12 md:mb-16">
            <div className="text-center mb-8 md:mb-12 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-8 bg-gradient-primary bg-clip-text text-transparent">
                Es hora de construir tu verdadero Activo Digital.
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                Si estás listo para dejar de ser solo un "creador de contenido" y convertirte en el dueño de un negocio digital real, queremos conocerte.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-semibold text-foreground">
                Estamos seleccionando a nuestros próximos socios para 2025. Completa la aplicación en 10 minutos:
              </p>
            </div>
          </div>
          <MultiStepForm />
        </div>
      </section>
      <Footer />
      <StickyBar />
    </div>
  );
};

export default Index;
