import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(1, { message: "El nombre es requerido" })
    .max(100, { message: "El nombre debe tener menos de 100 caracteres" }),
  email: z.string()
    .trim()
    .email({ message: "Correo electrónico inválido" })
    .max(255, { message: "El correo debe tener menos de 255 caracteres" }),
});

type ContactForm = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      const validatedData = contactSchema.parse(formData);
      setIsSubmitting(true);

      // Simulated submission - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast.success("¡Solicitud enviada!", {
        description: "Nos pondremos en contacto contigo pronto.",
      });

      setFormData({ name: "", email: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactForm] = err.message;
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

  return (
    <section id="contact-form" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto mb-12 md:mb-16">
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 bg-gradient-primary bg-clip-text text-transparent">
              Es hora de construir tu verdadero Activo Digital.
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Si estás listo para dejar de ser solo un "creador de contenido" y convertirte en el dueño de un negocio digital real, queremos conocerte.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8 text-lg sm:text-xl text-muted-foreground mb-12 md:mb-16 leading-relaxed max-w-3xl mx-auto">
            <p className="text-center font-semibold text-foreground text-xl md:text-2xl">
              Estamos seleccionando a nuestros próximos socios para 2024. El proceso es simple:
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg md:text-xl">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg md:text-xl mb-2">
                    Completa la Aplicación (10 min)
                  </h3>
                  <p className="text-base md:text-lg">
                    Cuéntanos sobre ti, tu audiencia y tu experiencia. Esto nos permite ver si somos un buen socio potencial.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg md:text-xl">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg md:text-xl mb-2">
                    Llamada de Estrategia (30 min)
                  </h3>
                  <p className="text-base md:text-lg">
                    Si tu perfil encaja, agendaremos una llamada de Zoom. Auditaremos tu marca y te presentaremos 2-3 ideas de ofertas de producto que podríamos construir juntos.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg md:text-xl">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg md:text-xl mb-2">
                    Decisión Mutua
                  </h3>
                  <p className="text-base md:text-lg">
                    Si ambos sentimos que la asociación es perfecta, firmamos el acuerdo 50/50 y comenzamos a construir tu imperio en 48 horas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Card className="max-w-2xl mx-auto p-6 md:p-10 lg:p-12 shadow-elegant animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Aplica Ahora para la Aceleradora
            </h3>
            <p className="text-base md:text-lg text-muted-foreground">
              Completa el formulario y nos pondremos en contacto contigo pronto
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base font-semibold">
                Nombre completo
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-12"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                maxLength={100}
                required
              />
              {errors.name && (
                <p id="name-error" className="text-sm text-destructive" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-semibold">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-12"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                maxLength={255}
                required
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-destructive" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <Button
              type="submit"
              variant="cta"
              size="xl"
              className="w-full"
              disabled={isSubmitting}
              aria-label="Aplicar Ahora"
            >
              {isSubmitting ? "Enviando..." : "Aplicar Ahora para la Aceleradora"}
            </Button>

            <p className="text-xs sm:text-sm text-center text-muted-foreground">
              Al enviar este formulario, aceptas que te contactemos para evaluar tu aplicación a nuestra asociación 50/50.
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;
