import { Card } from "@/components/ui/card";
import { Search, Wrench, Rocket, TrendingUp } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: "Auditoría exprés y estrategia personalizada",
      description: "Analizamos tu audiencia y diseñamos un plan de monetización a medida.",
    },
    {
      icon: Wrench,
      title: "Implementación técnica y creativa",
      description: "Creamos todo el embudo: landing pages, automatizaciones y contenido persuasivo.",
    },
    {
      icon: Rocket,
      title: "Lanzamiento y optimización continua",
      description: "Ejecutamos tu campaña y ajustamos en tiempo real para maximizar resultados.",
    },
    {
      icon: TrendingUp,
      title: "Reparto de beneficios a éxito",
      description: "Solo ganamos cuando tú ganas. Sin riesgos, sin costos ocultos.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Cómo lo hacemos realidad
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un proceso probado que transforma tu pasión en rentabilidad
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-card transition-all duration-300 bg-card border-border animate-fade-in relative overflow-hidden group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-secondary group-hover:bg-gradient-primary transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" aria-hidden="true" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-bold text-primary">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-lg font-bold text-card-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
