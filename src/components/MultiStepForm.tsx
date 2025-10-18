import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { z } from "zod";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  // Step 1: Basic Info
  name: z.string()
    .trim()
    .min(1, { message: "El nombre es requerido" })
    .max(100, { message: "El nombre debe tener menos de 100 caracteres" }),
  email: z.string()
    .trim()
    .email({ message: "Correo electrónico inválido" })
    .max(255, { message: "El correo debe tener menos de 255 caracteres" }),
  phone: z.string()
    .trim()
    .min(1, { message: "El teléfono es requerido" })
    .max(20, { message: "El teléfono debe tener menos de 20 caracteres" }),
  
  // Step 2: Audience
  followers: z.string().min(1, { message: "Selecciona un rango" }),
  platform: z.string().min(1, { message: "Selecciona una plataforma" }),
  engagement: z.string().min(1, { message: "Selecciona un nivel de engagement" }),
  
  // Step 3: Experience
  niche: z.string()
    .trim()
    .min(1, { message: "El nicho es requerido" })
    .max(100, { message: "El nicho debe tener menos de 100 caracteres" }),
  hasResults: z.string().min(1, { message: "Selecciona una opción" }),
  hasSold: z.string().min(1, { message: "Selecciona una opción" }),
  
  // Step 4: Vision
  whyPartnership: z.string()
    .trim()
    .min(10, { message: "Por favor, comparte más detalles (mínimo 10 caracteres)" })
    .max(500, { message: "El texto debe tener menos de 500 caracteres" }),
  revenueGoal: z.string().min(1, { message: "Selecciona una meta" }),
  
  // Step 5: Availability
  startTime: z.string().min(1, { message: "Selecciona cuándo podrías empezar" }),
});

type FormData = z.infer<typeof formSchema>;

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    followers: "",
    platform: "",
    engagement: "",
    niche: "",
    hasResults: "",
    hasSold: "",
    whyPartnership: "",
    revenueGoal: "",
    startTime: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const validateStep = (step: number): boolean => {
    setErrors({});
    let stepFields: (keyof FormData)[] = [];

    switch (step) {
      case 1:
        stepFields = ["name", "email", "phone"];
        break;
      case 2:
        stepFields = ["followers", "platform", "engagement"];
        break;
      case 3:
        stepFields = ["niche", "hasResults", "hasSold"];
        break;
      case 4:
        stepFields = ["whyPartnership", "revenueGoal"];
        break;
      case 5:
        stepFields = ["startTime"];
        break;
    }

    const stepData = Object.fromEntries(
      stepFields.map(field => [field, formData[field]])
    );

    try {
      const stepSchema = formSchema.pick(
        Object.fromEntries(stepFields.map(f => [f, true])) as any
      );
      stepSchema.parse(stepData);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof FormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof FormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
      return false;
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(currentStep)) return;

    try {
      const validatedData = formSchema.parse(formData);
      setIsSubmitting(true);

      // Simulated submission - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast.success("¡Aplicación enviada exitosamente!", {
        description: "Revisaremos tu aplicación en 48-72 horas y te contactaremos.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        followers: "",
        platform: "",
        engagement: "",
        niche: "",
        hasResults: "",
        hasSold: "",
        whyPartnership: "",
        revenueGoal: "",
        startTime: "",
      });
      setCurrentStep(1);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof FormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof FormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast.error("Error al enviar", {
          description: "Por favor, intenta nuevamente.",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="max-w-3xl mx-auto p-6 md:p-10 lg:p-12 shadow-elegant animate-fade-in">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Aplicación para la Aceleradora
        </h3>
        <p className="text-base md:text-lg text-muted-foreground mb-6">
          Paso {currentStep} de {totalSteps}
        </p>
        <Progress value={progress} className="h-2" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-8" noValidate>
        {/* Step 1: Basic Info */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-6">
              <h4 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                Información Básica
              </h4>
              <p className="text-muted-foreground">Cuéntanos quién eres</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name" className="text-base font-semibold">
                Nombre completo *
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Tu nombre completo"
                value={formData.name}
                onChange={(e) => updateFormData("name", e.target.value)}
                className="h-12"
                aria-invalid={!!errors.name}
                maxLength={100}
              />
              {errors.name && (
                <p className="text-sm text-destructive" role="alert">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-semibold">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                className="h-12"
                aria-invalid={!!errors.email}
                maxLength={255}
              />
              {errors.email && (
                <p className="text-sm text-destructive" role="alert">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-base font-semibold">
                Teléfono / WhatsApp *
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+34 600 000 000"
                value={formData.phone}
                onChange={(e) => updateFormData("phone", e.target.value)}
                className="h-12"
                aria-invalid={!!errors.phone}
                maxLength={20}
              />
              {errors.phone && (
                <p className="text-sm text-destructive" role="alert">{errors.phone}</p>
              )}
            </div>
          </div>
        )}

        {/* Step 2: Audience */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-6">
              <h4 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                Tu Audiencia
              </h4>
              <p className="text-muted-foreground">Cuéntanos sobre tu comunidad</p>
            </div>

            <div className="space-y-2">
              <Label className="text-base font-semibold">
                ¿Cuántos seguidores tienes? *
              </Label>
              <RadioGroup value={formData.followers} onValueChange={(val) => updateFormData("followers", val)}>
                <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent cursor-pointer">
                  <RadioGroupItem value="5k-20k" id="followers-1" />
                  <Label htmlFor="followers-1" className="cursor-pointer flex-1">5,000 - 20,000</Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent cursor-pointer">
                  <RadioGroupItem value="20k-50k" id="followers-2" />
                  <Label htmlFor="followers-2" className="cursor-pointer flex-1">20,000 - 50,000</Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent cursor-pointer">
                  <RadioGroupItem value="50k-100k" id="followers-3" />
                  <Label htmlFor="followers-3" className="cursor-pointer flex-1">50,000 - 100,000</Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent cursor-pointer">
                  <RadioGroupItem value="100k+" id="followers-4" />
                  <Label htmlFor="followers-4" className="cursor-pointer flex-1">Más de 100,000</Label>
                </div>
              </RadioGroup>
              {errors.followers && (
                <p className="text-sm text-destructive" role="alert">{errors.followers}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-base font-semibold">
                ¿En qué plataforma principal? *
              </Label>
              <RadioGroup value={formData.platform} onValueChange={(val) => updateFormData("platform", val)}>
                {["Instagram", "YouTube", "TikTok", "LinkedIn", "Twitter/X", "Podcast", "Otra"].map((platform) => (
                  <div key={platform} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent cursor-pointer">
                    <RadioGroupItem value={platform} id={`platform-${platform}`} />
                    <Label htmlFor={`platform-${platform}`} className="cursor-pointer flex-1">{platform}</Label>
                  </div>
                ))}
              </RadioGroup>
              {errors.platform && (
                <p className="text-sm text-destructive" role="alert">{errors.platform}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-base font-semibold">
                ¿Cuál es tu engagement promedio? *
              </Label>
              <RadioGroup value={formData.engagement} onValueChange={(val) => updateFormData("engagement", val)}>
                <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent cursor-pointer">
                  <RadioGroupItem value="bajo" id="engagement-1" />
                  <Label htmlFor="engagement-1" className="cursor-pointer flex-1">Bajo (&lt;2%)</Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent cursor-pointer">
                  <RadioGroupItem value="medio" id="engagement-2" />
                  <Label htmlFor="engagement-2" className="cursor-pointer flex-1">Medio (2-5%)</Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent cursor-pointer">
                  <RadioGroupItem value="alto" id="engagement-3" />
                  <Label htmlFor="engagement-3" className="cursor-pointer flex-1">Alto (&gt;5%)</Label>
                </div>
              </RadioGroup>
              {errors.engagement && (
                <p className="text-sm text-destructive" role="alert">{errors.engagement}</p>
              )}
            </div>
          </div>
        )}

        {/* Step 3: Experience */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-6">
              <h4 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                Tu Experiencia
              </h4>
              <p className="text-muted-foreground">Tu expertise y trayectoria</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="niche" className="text-base font-semibold">
                ¿En qué nicho/industria? *
              </Label>
              <Input
                id="niche"
                type="text"
                placeholder="Ej: Finanzas personales, Productividad, Marketing, etc."
                value={formData.niche}
                onChange={(e) => updateFormData("niche", e.target.value)}
                className="h-12"
                maxLength={100}
              />
              {errors.niche && (
                <p className="text-sm text-destructive" role="alert">{errors.niche}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-base font-semibold">
                ¿Tienes resultados probados en tu nicho? *
              </Label>
              <RadioGroup value={formData.hasResults} onValueChange={(val) => updateFormData("hasResults", val)}>
                <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent cursor-pointer">
                  <RadioGroupItem value="si" id="results-yes" />
                  <Label htmlFor="results-yes" className="cursor-pointer flex-1">Sí, tengo resultados comprobables</Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent cursor-pointer">
                  <RadioGroupItem value="no" id="results-no" />
                  <Label htmlFor="results-no" className="cursor-pointer flex-1">Aún no, pero tengo mucha experiencia</Label>
                </div>
              </RadioGroup>
              {errors.hasResults && (
                <p className="text-sm text-destructive" role="alert">{errors.hasResults}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-base font-semibold">
                ¿Has vendido algo antes (curso, ebook, mentoría, etc.)? *
              </Label>
              <RadioGroup value={formData.hasSold} onValueChange={(val) => updateFormData("hasSold", val)}>
                <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent cursor-pointer">
                  <RadioGroupItem value="si" id="sold-yes" />
                  <Label htmlFor="sold-yes" className="cursor-pointer flex-1">Sí, he vendido productos digitales</Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent cursor-pointer">
                  <RadioGroupItem value="no" id="sold-no" />
                  <Label htmlFor="sold-no" className="cursor-pointer flex-1">No, nunca he vendido nada</Label>
                </div>
              </RadioGroup>
              {errors.hasSold && (
                <p className="text-sm text-destructive" role="alert">{errors.hasSold}</p>
              )}
            </div>
          </div>
        )}

        {/* Step 4: Vision */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-6">
              <h4 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                Tu Visión
              </h4>
              <p className="text-muted-foreground">Cuéntanos tus objetivos</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="whyPartnership" className="text-base font-semibold">
                ¿Por qué quieres este modelo 50/50? *
              </Label>
              <Textarea
                id="whyPartnership"
                placeholder="Comparte tu motivación y qué esperas de esta asociación..."
                value={formData.whyPartnership}
                onChange={(e) => updateFormData("whyPartnership", e.target.value)}
                className="min-h-32"
                maxLength={500}
              />
              <p className="text-xs text-muted-foreground text-right">
                {formData.whyPartnership.length}/500
              </p>
              {errors.whyPartnership && (
                <p className="text-sm text-destructive" role="alert">{errors.whyPartnership}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-base font-semibold">
                ¿Cuál es tu meta de ingresos anuales? *
              </Label>
              <RadioGroup value={formData.revenueGoal} onValueChange={(val) => updateFormData("revenueGoal", val)}>
                <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent cursor-pointer">
                  <RadioGroupItem value="100k-250k" id="goal-1" />
                  <Label htmlFor="goal-1" className="cursor-pointer flex-1">$100K - $250K</Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent cursor-pointer">
                  <RadioGroupItem value="250k-500k" id="goal-2" />
                  <Label htmlFor="goal-2" className="cursor-pointer flex-1">$250K - $500K</Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent cursor-pointer">
                  <RadioGroupItem value="500k-1m" id="goal-3" />
                  <Label htmlFor="goal-3" className="cursor-pointer flex-1">$500K - $1M</Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent cursor-pointer">
                  <RadioGroupItem value="1m+" id="goal-4" />
                  <Label htmlFor="goal-4" className="cursor-pointer flex-1">Más de $1M</Label>
                </div>
              </RadioGroup>
              {errors.revenueGoal && (
                <p className="text-sm text-destructive" role="alert">{errors.revenueGoal}</p>
              )}
            </div>
          </div>
        )}

        {/* Step 5: Availability */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-6">
              <h4 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                Disponibilidad
              </h4>
              <p className="text-muted-foreground">Último paso</p>
            </div>

            <div className="space-y-2">
              <Label className="text-base font-semibold">
                ¿Cuándo podrías empezar? *
              </Label>
              <RadioGroup value={formData.startTime} onValueChange={(val) => updateFormData("startTime", val)}>
                <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent cursor-pointer">
                  <RadioGroupItem value="inmediato" id="time-1" />
                  <Label htmlFor="time-1" className="cursor-pointer flex-1">Inmediatamente</Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent cursor-pointer">
                  <RadioGroupItem value="1mes" id="time-2" />
                  <Label htmlFor="time-2" className="cursor-pointer flex-1">En 1 mes</Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent cursor-pointer">
                  <RadioGroupItem value="2-3meses" id="time-3" />
                  <Label htmlFor="time-3" className="cursor-pointer flex-1">En 2-3 meses</Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent cursor-pointer">
                  <RadioGroupItem value="flexible" id="time-4" />
                  <Label htmlFor="time-4" className="cursor-pointer flex-1">Flexible / Solo explorando</Label>
                </div>
              </RadioGroup>
              {errors.startTime && (
                <p className="text-sm text-destructive" role="alert">{errors.startTime}</p>
              )}
            </div>

            <div className="bg-accent/50 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-semibold text-foreground mb-2">
                    ¡Casi listo!
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    Revisaremos tu aplicación en 48-72 horas. Si hay un buen fit, te contactaremos para agendar una llamada de estrategia donde auditaremos tu marca y te presentaremos 2-3 ideas de producto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-4 pt-6">
          {currentStep > 1 && (
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={handleBack}
              className="flex-1"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Anterior
            </Button>
          )}
          
          {currentStep < totalSteps ? (
            <Button
              type="button"
              variant="default"
              size="lg"
              onClick={handleNext}
              className="flex-1 bg-gradient-primary"
            >
              Siguiente
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              variant="cta"
              size="lg"
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar Aplicación"}
              <CheckCircle2 className="ml-2 w-4 h-4" />
            </Button>
          )}
        </div>

        <p className="text-xs sm:text-sm text-center text-muted-foreground pt-4">
          Al enviar este formulario, aceptas que te contactemos para evaluar tu aplicación a nuestra asociación 50/50.
        </p>
      </form>
    </Card>
  );
};

export default MultiStepForm;
