import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import mariaImage from "@/assets/maria-lopez.jpg";

const Testimonial = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-success/5 border-success/20 shadow-card animate-fade-in">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30" />
                <img
                  src={mariaImage}
                  alt="María López - Cliente satisfecha"
                  className="relative w-32 h-32 rounded-full object-cover ring-4 ring-success/30"
                />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <Quote className="w-12 h-12 text-success mb-4 mx-auto md:mx-0" aria-hidden="true" />
              
              <blockquote className="text-xl md:text-2xl font-medium text-card-foreground mb-6 leading-relaxed">
                "Gracias a Offer Publisher, dejé de depender del algoritmo y tripliqué mis ingresos mensuales con mi primer curso online. Ahora facturo de forma estable y puedo desconectar sin miedo."
              </blockquote>

              <footer className="flex flex-col gap-1">
                <cite className="not-italic font-bold text-lg text-success">
                  María López
                </cite>
                <p className="text-sm text-muted-foreground">
                  Creadora de contenido • 150K seguidores
                </p>
              </footer>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Testimonial;
