import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿De verdad no pago NADA? ¿Cuál es la trampa?",
      answer:
        "Cero. No hay trampa. Aceleradora de Creadores cubre todos los costos: software, personal, diseño y hasta 10.000€ - 50.000€+ en inversión publicitaria inicial para probar y escalar la oferta. Solo ganamos dinero después de que tú hayas ganado dinero.",
    },
    {
      question: "¿Cuánto tiempo me tomará?",
      answer:
        "Tu mayor inversión de tiempo es la grabación del contenido, que planificamos para que se complete en 1-3 días intensivos. Nosotros tardaremos de 4 a 8 semanas en construir toda la maquinaria de marketing y ventas antes del lanzamiento.",
    },
    {
      question: "¿Qué pasa si ya tengo un ebook o un curso pequeño?",
      answer:
        '¡Perfecto! Eso significa que ya tienes compradores validados. Podemos trabajar contigo para "acelerar" esa oferta existente, o construir una nueva oferta "premium" (High-Ticket) para vender a tus clientes actuales y al mercado frío.',
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 md:mb-6">
              Preguntas Frecuentes
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-border rounded-lg px-6 md:px-8 shadow-card hover:shadow-glow transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-base sm:text-lg md:text-xl font-bold text-card-foreground py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base md:text-lg text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
