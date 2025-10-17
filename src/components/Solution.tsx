import { Card } from "@/components/ui/card";
import { CheckCircle2, Shield, Zap } from "lucide-react";

const Solution = () => {
  const benefits = [
    {
      icon: CheckCircle2,
      title: "Nos Asociamos 50/50 en las Ganancias",
      description: "No hay honorarios, ni facturas, ni costos ocultos.",
    },
    {
      icon: Shield,
      title: "Invertimos NUESTRO Dinero",
      description: "Cubrimos el 100% de los costos de software, diseño, equipo de soporte y, lo más importante, el tráfico pagado (anuncios).",
    },
    {
      icon: Zap,
      title: "Tú No Arriesgas Absolutamente Nada",
      description: "Solo tu tiempo para grabar el contenido.",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8">
              El Modelo de Asociación "Publisher"
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-4 md:mb-6">
              (Cómo las estrellas de la información construyen negocios de 8 cifras)
            </p>
          </div>

          <div className="space-y-6 md:space-y-8 text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 md:mb-16 leading-relaxed">
            <p>
              Los creadores más exitosos del mundo no lo hacen solos. Tienen un socio estratégico en la sombra: un <span className="font-semibold text-foreground">"Publisher"</span>.
            </p>
            
            <p>
              Un Publisher es un equipo de expertos en respuesta directa que maneja todo el "trabajo pesado" del negocio, permitiendo al Creador (tú) centrarse al 100% en su genialidad.
            </p>
            
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground my-8 md:my-12">
              Nosotros somos ese socio.
            </p>

            <p>
              <span className="font-semibold text-foreground">Aceleradora de Creadores</span> opera con un modelo de riesgo-cero para ti:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="p-6 md:p-8 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-card border-border animate-fade-in-up group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-gradient-primary group-hover:animate-glow-pulse">
                    <Icon className="w-8 h-8 text-primary-foreground" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-card-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
