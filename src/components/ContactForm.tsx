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
    <section id="contact-form" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto p-8 md:p-12 shadow-elegant animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Recupera tu libertad creativa
            </h2>
            <p className="text-lg text-muted-foreground">
              Deja de correr tras el algoritmo y empieza a vivir de tu pasión
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
              aria-label="Solicitar consultoría gratuita"
            >
              {isSubmitting ? "Enviando..." : "Solicitar consultoría gratuita"}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Al enviar este formulario, aceptas que te contactemos para ofrecerte nuestra consultoría gratuita.
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;
