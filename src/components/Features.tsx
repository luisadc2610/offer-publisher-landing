import { Card } from "@/components/ui/card";
import { Briefcase, ShieldCheck, TrendingUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Briefcase,
      title: "Gestión integral llave en mano",
      description: "Construimos y operamos tu embudo de ventas, desde la captación de leads hasta el lanzamiento y la automatización.",
    },
    {
      icon: ShieldCheck,
      title: "Protege tu credibilidad",
      description: "Solo colaboramos con marcas sólidas y verificadas, curando cada oferta para que encaje con los valores de tu comunidad.",
    },
    {
      icon: TrendingUp,
      title: "Monetización inteligente",
      description: "Convierte cada seguidor en potencial comprador, dejando atrás la incertidumbre de AdSense y patrocinios esporádicos.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Por qué Offer Publisher es tu socio estratégico
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transformamos tu audiencia en un motor de ingresos sostenible
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-card border-border animate-fade-in-up group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-6 inline-flex p-4 rounded-xl bg-gradient-primary group-hover:animate-glow-pulse">
                  <Icon className="w-8 h-8 text-primary-foreground" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
