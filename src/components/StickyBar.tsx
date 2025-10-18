import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";

const StickyBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setIsVisible(scrollPercentage > 30 && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-in-bottom">
      <div className="bg-gradient-primary shadow-elegant border-t border-primary/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
              <span className="text-sm md:text-base font-bold text-primary-foreground">
                🚀 Plazas limitadas para Q1 2025
              </span>
            </div>
            <span className="sm:hidden text-sm font-bold text-primary-foreground">
              Plazas limitadas Q1 2025
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              onClick={scrollToForm}
              size="sm"
              variant="secondary"
              className="group font-semibold"
            >
              Aplica Ahora
              <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <button
              onClick={handleDismiss}
              className="p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-4 h-4 text-primary-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBar;
