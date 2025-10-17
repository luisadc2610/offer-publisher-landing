import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      {/* Hero Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Content creator working successfully" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32 lg:py-40">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 md:mb-8 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Para el Creador de Contenido que está listo para construir un Imperio Digital.
          </h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-10 text-foreground leading-tight">
            Has construido una audiencia que confía en ti. Nos asociamos 50/50 para transformar tu experiencia en un producto digital premium y escalarlo a millones.
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed">
            aceleradoradecreadores.com no es una agencia. No te cobramos. Somos tu socio "Publisher". Nosotros construimos toda la maquinaria de negocio (tecnología, marketing y ventas) y cubrimos todos los costos. Tú solo te enfocas en crear.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={scrollToForm}
              className="group w-full sm:w-auto"
              aria-label="Aplica para Nuestra Asociación"
            >
              Aplica para Nuestra Asociación
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
