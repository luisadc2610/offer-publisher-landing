import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      revenue: "$127K en 90 días",
      quote: "Pasé de cobrar $200 por consultoría a generar más de $127,000 en mi primer trimestre. El equipo manejó TODO el marketing y tecnología, yo solo me enfoqué en crear el mejor contenido posible.",
    },
    {
      revenue: "$285K en 6 meses",
      quote: "Intenté lanzar un curso solo 3 veces y fracasé. Con Aceleradora de Creadores, en 6 meses generamos casi $300K. La diferencia es tener un equipo de expertos que sabe exactamente qué hacer en cada paso.",
    },
    {
      revenue: "$195K en 120 días",
      quote: "Cero riesgo de mi parte, ellos invirtieron más de $40K en anuncios, y ahora tengo un negocio digital real que genera ingresos mientras duermo.",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 md:mb-6">
              Creadores Reales. Resultados Reales.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Estos son algunos de nuestros socios que transformaron su audiencia en un negocio digital escalable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="p-6 md:p-8 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-card border-border animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Revenue Badge */}
                <div className="mb-4 inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-bold">{testimonial.revenue}</span>
                </div>

                {/* Quote */}
                <blockquote className="text-sm md:text-base text-card-foreground leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 md:mt-16 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-4 md:gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm md:text-base font-semibold">$10M+ generados para socios</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm md:text-base font-semibold">15 creadores activos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm md:text-base font-semibold">Modelo de asociación</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
