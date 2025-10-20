import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const ComparisonTable = () => {
  const features = [
    {
      name: "Costo inicial",
      agency: "5.000€ - 50.000€",
      solo: "0€",
      accelerator: "0€",
      acceleratorHighlight: true,
    },
    {
      name: "Tu tiempo requerido",
      agency: "Alto (reuniones constantes)",
      solo: "Muy Alto (100+ horas)",
      accelerator: "Bajo (1-3 días grabación)",
      acceleratorHighlight: true,
    },
    {
      name: "Gestión de tráfico pagado",
      agency: false,
      solo: false,
      accelerator: "Equipo dedicado",
      acceleratorHighlight: true,
    },
    {
      name: "Equipo completo de expertos",
      agency: false,
      solo: false,
      accelerator: true,
      acceleratorHighlight: true,
    },
    {
      name: "Copywriting profesional",
      agency: "Depende (extra costo)",
      solo: false,
      accelerator: true,
      acceleratorHighlight: true,
    },
    {
      name: "Diseño y desarrollo técnico",
      agency: "Básico",
      solo: "DIY (plantillas)",
      accelerator: "Premium personalizado",
      acceleratorHighlight: true,
    },
    {
      name: "Gestión de campañas publicitarias",
      agency: false,
      solo: false,
      accelerator: "Equipo dedicado",
      acceleratorHighlight: true,
    },
    {
      name: "Soporte y operaciones",
      agency: "Limitado",
      solo: "Tú mismo",
      accelerator: "Equipo 24/7",
      acceleratorHighlight: true,
    },
    {
      name: "Riesgo financiero",
      agency: "Alto",
      solo: "Medio-Bajo",
      accelerator: "Cero",
      acceleratorHighlight: true,
    },
    {
      name: "Alineación de incentivos",
      agency: "No (te cobran igual)",
      solo: "N/A",
      accelerator: "100% (solo ganamos si ganas)",
      acceleratorHighlight: true,
    },
    {
      name: "Escalado más allá de tu audiencia",
      agency: false,
      solo: "Muy difícil",
      accelerator: "Garantizado con anuncios",
      acceleratorHighlight: true,
    },
    {
      name: "Tu porcentaje de ganancias",
      agency: "100% (después de pagar)",
      solo: "100%",
      accelerator: "50%",
      acceleratorHighlight: false,
    },
  ];

  const renderCell = (value: boolean | string, highlight = false) => {
    if (typeof value === "boolean") {
      return value ? (
        <div className={`inline-flex items-center justify-center p-2 rounded-full ${highlight ? "bg-primary/20" : "bg-accent"}`}>
          <Check className={`w-5 h-5 ${highlight ? "text-primary" : "text-foreground"}`} />
        </div>
      ) : (
        <div className="inline-flex items-center justify-center p-2 rounded-full bg-destructive/10">
          <X className="w-5 h-5 text-destructive" />
        </div>
      );
    }
    return (
      <span className={`${highlight ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
        {value}
      </span>
    );
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 md:mb-6">
              Cómo es Diferente a Todo lo Demás
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Compara nuestra asociación 50/50 con las alternativas tradicionales
            </p>
          </div>

          {/* Mobile View - Cards */}
          <div className="lg:hidden space-y-6 animate-fade-in-up">
            {features.map((feature, idx) => (
              <Card key={idx} className="p-6 border-border">
                <h3 className="font-bold text-lg mb-4 text-foreground">{feature.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-border">
                    <span className="text-sm text-muted-foreground">Agencia</span>
                    <div className="text-sm">{renderCell(feature.agency)}</div>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-border">
                    <span className="text-sm text-muted-foreground">Curso Solo</span>
                    <div className="text-sm">{renderCell(feature.solo)}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary">Aceleradora</span>
                    <div className="text-sm">{renderCell(feature.accelerator, feature.acceleratorHighlight)}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Desktop View - Table */}
          <Card className="hidden lg:block overflow-hidden border-border animate-fade-in-up">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-6 font-bold text-foreground bg-accent/30">
                      Característica
                    </th>
                    <th className="text-center p-6 font-bold text-foreground bg-accent/10">
                      Contratar Agencia
                    </th>
                    <th className="text-center p-6 font-bold text-foreground bg-accent/10">
                      Hacerlo Solo
                    </th>
                    <th className="text-center p-6 font-bold text-primary bg-primary/10 relative">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full whitespace-nowrap">
                        Mejor Opción
                      </div>
                      Aceleradora
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-border transition-colors hover:bg-accent/50 ${
                        idx % 2 === 0 ? "bg-background" : "bg-accent/20"
                      }`}
                    >
                      <td className="p-4 font-semibold text-foreground">
                        {feature.name}
                      </td>
                      <td className="p-4 text-center">
                        {renderCell(feature.agency)}
                      </td>
                      <td className="p-4 text-center">
                        {renderCell(feature.solo)}
                      </td>
                      <td className="p-4 text-center bg-primary/5">
                        {renderCell(feature.accelerator, feature.acceleratorHighlight)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* CTA at bottom */}
          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
            <Card className="inline-block p-6 md:p-8 bg-gradient-primary border-primary/20">
              <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">
                ¿Listo para la mejor opción?
              </h3>
              <p className="text-primary-foreground/80">
                Zero riesgo. Máximo potencial. Socio alineado al 100% con tu éxito.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
