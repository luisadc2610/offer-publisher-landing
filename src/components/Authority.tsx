import { Card } from "@/components/ui/card";
import { PenTool, Target, Workflow, Settings } from "lucide-react";

const Authority = () => {
  const team = [
    {
      icon: PenTool,
      title: "Copywriters obsesionados con la psicología del comprador",
    },
    {
      icon: Target,
      title: "Media Buyers que gestionan millones en inversión publicitaria",
    },
    {
      icon: Workflow,
      title: "Estrategas de Funnels que viven y respiran tasas de conversión",
    },
    {
      icon: Settings,
      title: "Expertos en Operaciones que automatizan negocios para que funcionen sin fricción",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-8">
              No somos "Gurús". Somos Operadores.
            </h2>
          </div>

          <div className="space-y-6 md:space-y-8 text-base sm:text-lg md:text-xl text-muted-foreground mb-12 md:mb-16 leading-relaxed">
            <p>
              Aceleradora de Creadores fue fundada por expertos en marketing de respuesta directa y operaciones de negocio digital.
            </p>
            
            <p>
              Nuestro equipo no está formado por influencers. Está formado por <span className="font-semibold text-foreground">especialistas en la trinchera</span>:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {team.map((member, index) => {
              const Icon = member.icon;
              return (
                <Card
                  key={index}
                  className="p-6 md:p-8 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-card border-border animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 md:p-4 rounded-xl bg-gradient-primary">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" aria-hidden="true" />
                    </div>
                    <p className="text-base md:text-lg font-semibold text-card-foreground leading-relaxed pt-2">
                      {member.title}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="space-y-6 md:space-y-8 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              Vimos a cientos de creadores increíbles quemarse en la rueda de contenido, mientras "gurús" sin experiencia real vendían cursos mediocres. Decidimos cambiar eso.
            </p>
            
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-foreground my-8 md:my-12">
              No queremos ser la cara del negocio. Queremos ser el motor. Tu cara es la marca. Nuestro trabajo es hacer que esa marca facture millones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
