import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { TrendingUp, Users, DollarSign, Zap } from "lucide-react";

const ROICalculator = () => {
  const [followers, setFollowers] = useState(25000);
  const [engagement, setEngagement] = useState(3);
  const [niche, setNiche] = useState("medio");

  // Multipliers by niche
  const nicheMultipliers: Record<string, { name: string; multiplier: number }> = {
    bajo: { name: "Entretenimiento / Estilo de vida", multiplier: 0.8 },
    medio: { name: "Salud / Fitness / Productividad", multiplier: 1.0 },
    alto: { name: "Negocios / Finanzas / B2B", multiplier: 1.3 },
  };

  // Calculate potential revenue
  const calculateRevenue = () => {
    // Base calculation: engaged followers * average conversion rate * avg product price
    const engagedFollowers = followers * (engagement / 100);
    const conversionRate = 0.02; // 2% conversion rate
    const avgProductPrice = 497; // Average product price
    
    const baseRevenue = engagedFollowers * conversionRate * avgProductPrice;
    const adjustedRevenue = baseRevenue * nicheMultipliers[niche].multiplier;
    
    return Math.round(adjustedRevenue);
  };

  const potentialRevenue = calculateRevenue();
  const yourShare = Math.round(potentialRevenue * 0.5);
  const monthlyRecurring = Math.round(yourShare / 4); // Assuming quarterly launches

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 md:mb-6">
              Calcula tu Potencial de Ingresos
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubre cuánto podrías generar con tu audiencia actual usando nuestro modelo 50/50
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Calculator Inputs */}
            <Card className="p-6 md:p-8 border-border animate-fade-in-up">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground">
                Tu Audiencia
              </h3>

              <div className="space-y-8">
                {/* Followers Slider */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-base font-semibold flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Número de Seguidores
                    </Label>
                    <span className="text-lg font-bold text-primary">
                      {followers.toLocaleString('es-ES')}
                    </span>
                  </div>
                  <Slider
                    value={[followers]}
                    onValueChange={(val) => setFollowers(val[0])}
                    min={5000}
                    max={500000}
                    step={5000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>5K</span>
                    <span>500K</span>
                  </div>
                </div>

                {/* Engagement Slider */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-base font-semibold flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      Tasa de Engagement
                    </Label>
                    <span className="text-lg font-bold text-primary">
                      {engagement}%
                    </span>
                  </div>
                  <Slider
                    value={[engagement]}
                    onValueChange={(val) => setEngagement(val[0])}
                    min={0.5}
                    max={15}
                    step={0.5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>0.5%</span>
                    <span>15%</span>
                  </div>
                </div>

                {/* Niche Selector */}
                <div className="space-y-4">
                  <Label className="text-base font-semibold flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    Tu Nicho
                  </Label>
                  <RadioGroup value={niche} onValueChange={setNiche}>
                    {Object.entries(nicheMultipliers).map(([key, { name, multiplier }]) => (
                      <div
                        key={key}
                        className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent cursor-pointer border border-transparent hover:border-primary/20 transition-all"
                      >
                        <RadioGroupItem value={key} id={`niche-${key}`} />
                        <Label htmlFor={`niche-${key}`} className="cursor-pointer flex-1 flex items-center justify-between">
                          <span>{name}</span>
                          <span className="text-xs text-muted-foreground">
                            {multiplier === 1 ? "Base" : `${multiplier}x`}
                          </span>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </Card>

            {/* Results */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <Card className="p-6 md:p-8 bg-gradient-primary border-primary/20">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <TrendingUp className="w-6 h-6 text-primary-foreground" />
                    <h4 className="text-lg font-semibold text-primary-foreground">
                      Potencial del Primer Lanzamiento
                    </h4>
                  </div>
                  <div className="text-5xl md:text-6xl font-black text-primary-foreground mb-2">
                    {formatCurrency(potentialRevenue)}
                  </div>
                  <p className="text-primary-foreground/80 text-sm">
                    Ingresos totales estimados
                  </p>
                </div>
              </Card>

              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="p-6 bg-card border-border">
                  <h5 className="text-sm font-semibold text-muted-foreground mb-2">
                    Tu Parte (50%)
                  </h5>
                  <div className="text-3xl font-black text-foreground">
                    {formatCurrency(yourShare)}
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border">
                  <h5 className="text-sm font-semibold text-muted-foreground mb-2">
                    Mensual Recurrente
                  </h5>
                  <div className="text-3xl font-black text-foreground">
                    {formatCurrency(monthlyRecurring)}
                  </div>
                </Card>
              </div>

              <Card className="p-6 bg-accent/50 border-border">
                <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  ¿Qué incluye esta proyección?
                </h5>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Producto digital premium (497€ - 997€)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Lanzamiento optimizado a tu audiencia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Tráfico pagado escalado (30K€ - 50K€ inversión)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Funnel de alta conversión (3-5%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Sin costos ni riesgos de tu parte</span>
                  </li>
                </ul>
              </Card>

              <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  💡 <span className="font-semibold text-foreground">Nota:</span> Estas son proyecciones conservadoras basadas en nuestros datos históricos. Los resultados reales pueden variar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
