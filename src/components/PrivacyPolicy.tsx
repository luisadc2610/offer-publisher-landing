import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyPolicyProps {
  children: React.ReactNode;
}

const PrivacyPolicy = ({ children }: PrivacyPolicyProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Política de Privacidad
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm text-muted-foreground">
            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                1. Información que Recopilamos
              </h3>
              <p>
                Recopilamos información que nos proporcionas directamente, incluyendo:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Nombre completo</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Información sobre tu audiencia y negocio</li>
                <li>Cualquier otra información que elijas proporcionar</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                2. Cómo Utilizamos tu Información
              </h3>
              <p>Utilizamos la información recopilada para:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Procesar y evaluar tu aplicación</li>
                <li>Comunicarnos contigo sobre tu aplicación y servicios</li>
                <li>Mejorar nuestros servicios y experiencia del usuario</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                3. Compartir Información
              </h3>
              <p>
                No vendemos, alquilamos ni compartimos tu información personal con
                terceros, excepto cuando:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Tenemos tu consentimiento explícito</li>
                <li>Es necesario para proporcionar nuestros servicios</li>
                <li>Es requerido por ley</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                4. Seguridad de los Datos
              </h3>
              <p>
                Implementamos medidas de seguridad técnicas y organizativas
                apropiadas para proteger tu información personal contra el acceso no
                autorizado, alteración, divulgación o destrucción.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                5. Cookies y Tecnologías Similares
              </h3>
              <p>
                Utilizamos cookies y tecnologías similares para mejorar tu
                experiencia en nuestro sitio web, analizar el tráfico y personalizar
                el contenido.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                6. Tus Derechos
              </h3>
              <p>Tienes derecho a:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Acceder a tu información personal</li>
                <li>Corregir información inexacta</li>
                <li>Solicitar la eliminación de tu información</li>
                <li>Oponerte al procesamiento de tu información</li>
                <li>Retirar tu consentimiento en cualquier momento</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                7. Retención de Datos
              </h3>
              <p>
                Conservamos tu información personal solo durante el tiempo necesario
                para cumplir con los propósitos descritos en esta política o según
                lo requiera la ley.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                8. Cambios a esta Política
              </h3>
              <p>
                Podemos actualizar esta política de privacidad periódicamente.
                Te notificaremos sobre cambios significativos publicando la nueva
                política en esta página.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                9. Contacto
              </h3>
              <p>
                Si tienes preguntas sobre esta política de privacidad, contáctanos en:
                luis@aceleradoradecreadores.com
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicy;
