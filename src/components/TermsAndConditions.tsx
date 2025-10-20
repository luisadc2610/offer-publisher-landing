import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TermsAndConditionsProps {
  children: React.ReactNode;
}

const TermsAndConditions = ({ children }: TermsAndConditionsProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Términos y Condiciones
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm text-muted-foreground">
            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                1. Aceptación de los Términos
              </h3>
              <p>
                Al acceder y utilizar este sitio web, aceptas estar sujeto a estos
                términos y condiciones de uso. Si no estás de acuerdo con alguna
                parte de estos términos, no debes utilizar nuestro sitio web.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                2. Proceso de Aplicación
              </h3>
              <p>
                La presentación de una aplicación no garantiza la aceptación en el
                programa. Aceleradora de Creadores se reserva el derecho de aceptar
                o rechazar cualquier aplicación a su discreción.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                3. Modelo de Asociación
              </h3>
              <p>
                El modelo de asociación implica una división de las ganancias netas
                generadas por los productos digitales desarrollados conjuntamente.
                Los términos específicos de la asociación se establecerán en un
                acuerdo separado una vez aceptada la aplicación.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                4. Propiedad Intelectual
              </h3>
              <p>
                Todo el contenido original creado por el creador mantiene su
                propiedad intelectual. Los materiales de marketing, funnels y otros
                recursos desarrollados por Aceleradora de Creadores se regirán por
                el acuerdo de asociación específico.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                5. Confidencialidad
              </h3>
              <p>
                Toda la información compartida durante el proceso de aplicación y la
                asociación será tratada con estricta confidencialidad y no será
                compartida con terceros sin consentimiento expreso.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                6. Limitación de Responsabilidad
              </h3>
              <p>
                Aceleradora de Creadores no garantiza resultados específicos. Los
                resultados pueden variar según múltiples factores incluyendo, pero
                no limitado a, el nicho, la audiencia y las condiciones del mercado.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                7. Modificaciones
              </h3>
              <p>
                Nos reservamos el derecho de modificar estos términos en cualquier
                momento. Las modificaciones entrarán en vigor inmediatamente después
                de su publicación en el sitio web.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                8. Contacto
              </h3>
              <p>
                Para cualquier pregunta sobre estos términos y condiciones, por
                favor contacta a: luis@aceleradoradecreadores.com
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TermsAndConditions;
