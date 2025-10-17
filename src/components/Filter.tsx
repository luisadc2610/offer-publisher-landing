import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";

const Filter = () => {
  const forYou = [
    "Tienes una Audiencia Comprometida: No nos importa si tienes 5,000 o 500,000 seguidores. Nos importa el engagement. Tu audiencia te escucha y confía en ti.",
    "Eres un Experto Real: Tienes un conocimiento profundo y resultados probados en tu nicho (negocios, finanzas, relaciones, salud, arte, productividad, etc.).",
    "Publicas Contenido de Valor: Estás creando activamente contenido (vídeos, hilos, posts, podcasts) y aportando valor de forma constante.",
    'Tienes Carisma y "Factor X": Te sientes cómodo frente a la cámara y puedes comunicar tus ideas con pasión.',
    "Valoras las Asociaciones a Largo Plazo: Entiendes que construir un activo real lleva tiempo y prefieres tener el 50% de algo GRANDE que el 100% de algo pequeño.",
  ];

  const notForYou = [
    'Estás Empezando de Cero: "Quieres" construir una audiencia pero aún no la tienes.',
    'No te Gusta "Vender": No estás dispuesto a promocionar activamente el producto que creamos juntos a tu propia audiencia.',
    'Buscas un "Pelotazo" Rápido: No estás interesado en construir un producto de calidad mundial y un negocio sostenible.',
    'No eres "Entrenable": Ya crees saberlo todo sobre marketing digital y no estás abierto a un modelo de socio estratégico.',
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-8">
              Buscamos Socios, no Clientes.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Este modelo no es para todos. Invertimos una cantidad significativa de tiempo y capital en cada socio, por lo que somos muy selectivos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* For You */}
            <Card className="p-6 md:p-10 bg-card border-2 border-success shadow-elegant">
              <div className="mb-6 md:mb-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-success">
                    <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-success-foreground" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-success">
                    Esto es para ti si:
                  </h3>
                </div>
              </div>

              <ul className="space-y-4 md:space-y-6">
                {forYou.map((item, index) => (
                  <li key={index} className="flex gap-3 md:gap-4">
                    <span className="text-success font-bold text-xl flex-shrink-0">✅</span>
                    <span className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Not For You */}
            <Card className="p-6 md:p-10 bg-card border-2 border-destructive shadow-elegant">
              <div className="mb-6 md:mb-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-destructive">
                    <XCircle className="w-6 h-6 md:w-8 md:h-8 text-destructive-foreground" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-destructive">
                    Esto NO es para ti si:
                  </h3>
                </div>
              </div>

              <ul className="space-y-4 md:space-y-6">
                {notForYou.map((item, index) => (
                  <li key={index} className="flex gap-3 md:gap-4">
                    <span className="text-destructive font-bold text-xl flex-shrink-0">❌</span>
                    <span className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
