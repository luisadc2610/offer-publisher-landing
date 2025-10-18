import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-hero opacity-20 animate-pulse" />
        
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-primary opacity-20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-accent opacity-20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        </div>
        
        {/* Hero Image */}
        <div className="absolute inset-0 opacity-15">
          <img 
            src={heroImage} 
            alt="Content creator working successfully" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Social Proof Badge */}
        <div className="absolute top-20 md:top-24 left-1/2 -translate-x-1/2 z-20 animate-fade-in">
          <div className="bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 shadow-elegant flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-gradient-primary border-2 border-background" />
              <div className="w-6 h-6 rounded-full bg-gradient-accent border-2 border-background" />
              <div className="w-6 h-6 rounded-full bg-gradient-primary border-2 border-background" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-foreground">
              🔥 15 socios activos generando $500K+/mes
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 bg-gradient-primary bg-clip-text text-transparent leading-tight">
              Para el Creador de Contenido que está listo para construir un Imperio Digital.
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-10 text-foreground leading-tight">
              Has construido una audiencia que confía en ti. Nos asociamos 50/50 para transformar tu experiencia en un producto digital premium y escalarlo a millones.
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed">
              aceleradoradecreadores.com no es una agencia. No te cobramos. Somos tu socio "Publisher". Nosotros construimos toda la maquinaria de negocio (tecnología, marketing y ventas) y cubrimos todos los costos. Tú solo te enfocas en crear.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="default" 
                size="xl" 
                onClick={() => setIsVideoOpen(true)}
                className="group w-full sm:w-auto bg-gradient-primary hover:opacity-90 transition-opacity"
                aria-label="Ver Video de 3 Minutos"
              >
                <Play className="mr-2 w-5 h-5" />
                Ver Video de 3 Minutos
              </Button>
              
              <Button 
                variant="outline" 
                size="xl" 
                onClick={scrollToForm}
                className="group w-full sm:w-auto border-2"
                aria-label="Aplica para Nuestra Asociación"
              >
                Aplica para Nuestra Asociación
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Cómo Funciona Nuestra Asociación 50/50</DialogTitle>
            <DialogDescription>
              Descubre cómo transformamos creadores de contenido en dueños de negocios digitales de 7-8 cifras
            </DialogDescription>
          </DialogHeader>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center space-y-4 p-8">
              <Play className="w-16 h-16 mx-auto text-muted-foreground" />
              <p className="text-muted-foreground">
                Video explicativo próximamente
              </p>
              <p className="text-sm text-muted-foreground">
                Mientras tanto, aplica abajo para recibir una consultoría personalizada
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Hero;
