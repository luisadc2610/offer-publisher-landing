import { Card } from "@/components/ui/card";
import { AlertCircle, DollarSign, Clock, Zap } from "lucide-react";

const Problem = () => {
  const falseObstacles = [
    {
      icon: Zap,
      title: 'El "Monstruo" Tecnológico',
      description: '¿Qué plataforma usar? ¿Cómo configurar los pagos? ¿Y los funnels?',
    },
    {
      icon: AlertCircle,
      title: 'El Miedo a Vender',
      description: 'No quieres sonar como un "vendehúmos" y perder la confianza de tu audiencia.',
    },
    {
      icon: DollarSign,
      title: 'El Marketing',
      description: '¿Cómo escribir emails que vendan? ¿Cómo hacer anuncios en Facebook o YouTube?',
    },
    {
      icon: Clock,
      title: 'El Tiempo',
      description: 'Simplemente no tienes 300 horas extra para construir un negocio completo desde cero.',
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-8">
              ¿Atrapado en la "Rueda del Creador"?
            </h2>
            
            <div className="space-y-4 md:space-y-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              <p>
                Te suena familiar. Creas contenido increíble todos los días. Persigues al algoritmo, luchas por alcance y te agotas intentando mantenerte relevante.
              </p>
              
              <p>
                Tu "monetización" depende de patrocinios de marcas que pagan poco, menciones que no te entusiasman y un enlace de afiliados que te deja céntimos.
              </p>
              
              <p className="font-semibold text-foreground">
                Estás trabajando más que nunca, pero no estás construyendo un activo propio. Tu influencia es poderosa, pero tu modelo de negocio es frágil.
              </p>
            </div>
          </div>

          <div className="mb-12 md:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 text-foreground">
              Has pensado en lanzar un curso, pero te frena...
            </h3>

            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {falseObstacles.map((obstacle, index) => {
                const Icon = obstacle.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 md:p-8 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-card border-border animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="mb-4 inline-flex p-3 md:p-4 rounded-xl bg-gradient-primary">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" aria-hidden="true" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-card-foreground">
                      {obstacle.title}
                    </h4>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {obstacle.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground leading-relaxed max-w-3xl mx-auto">
              Tu experiencia vale más que un post patrocinado. El problema no es tu contenido, es tu modelo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
