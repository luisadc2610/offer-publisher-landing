import { Card } from "@/components/ui/card";
import { User, Building2 } from "lucide-react";

const Partnership = () => {
  const creatorTasks = [
    "Aportar tu Experiencia: Eres el experto. Tienes el conocimiento y la credibilidad que tu audiencia valora.",
    "Grabar el Contenido: Siguiendo nuestra estrategia y guion (que creamos juntos), grabas el contenido de la masterclass o curso (normalmente en 1-3 días).",
    "Promocionar a tu Audiencia: Compartes la oferta con tu audiencia existente a través de tus canales (email, redes sociales).",
  ];

  const publisherTasks = [
    "Estrategia de Oferta: Investigamos el mercado y diseñamos una oferta irresistible que tu audiencia realmente quiera comprar.",
    "Copywriting y Guiones: Escribimos cada palabra: los guiones de venta (VSL), las páginas de venta, las secuencias de email y los anuncios.",
    "Construcción de Funnels: Diseñamos y programamos todo el embudo de ventas de alta conversión (landing pages, checkout, upsells).",
    "Configuración Técnica: Integramos el área de miembros, la pasarela de pagos, el software de email marketing y el seguimiento de métricas.",
    "Gestión de Tráfico Pagado: Creamos, gestionamos e invertimos nuestro capital en campañas de anuncios (Facebook, Instagram, YouTube) para escalar la oferta más allá de tu audiencia.",
    "Operaciones y Soporte: Gestionamos todo el servicio al cliente y las operaciones diarias del negocio.",
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 md:mb-6">
              Nuestra Asociación 50/50: Claridad Total
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Creemos en la alineación total de intereses. Solo ganamos dinero si tú ganas dinero. Por eso, la división de tareas es simple.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Creador Column */}
            <Card className="p-6 md:p-10 bg-card border-border shadow-elegant">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="p-3 md:p-4 rounded-xl bg-gradient-primary">
                  <User className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-card-foreground">
                    TÚ - EL CREADOR
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground font-semibold">
                    Tu Zona de Genialidad
                  </p>
                </div>
              </div>

              <ul className="space-y-4 md:space-y-6">
                {creatorTasks.map((task, index) => (
                  <li key={index} className="flex gap-3 md:gap-4">
                    <span className="text-primary font-bold text-xl flex-shrink-0">✅</span>
                    <span className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {task}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Publisher Column */}
            <Card className="p-6 md:p-10 bg-card border-border shadow-elegant">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="p-3 md:p-4 rounded-xl bg-gradient-primary">
                  <Building2 className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-card-foreground">
                    NOSOTROS - EL PUBLISHER
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground font-semibold">
                    Todo lo Demás
                  </p>
                </div>
              </div>

              <ul className="space-y-4 md:space-y-6">
                {publisherTasks.map((task, index) => (
                  <li key={index} className="flex gap-3 md:gap-4">
                    <span className="text-primary font-bold text-xl flex-shrink-0">✅</span>
                    <span className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {task}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12 md:mt-16">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
              En resumen: Tú creas. Nosotros construimos el imperio a tu alrededor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
