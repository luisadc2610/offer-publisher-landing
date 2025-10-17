const Footer = () => {
  return (
    <footer className="bg-secondary py-12 md:py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
            <div>
              <h3 className="font-bold text-xl md:text-2xl mb-4 text-foreground">
                Aceleradora de Creadores
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Tu socio Publisher para construir un imperio digital. No te cobramos. Nos asociamos 50/50 en las ganancias.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-base md:text-lg mb-4 text-foreground">
                Enlaces
              </h4>
              <nav aria-label="Footer navigation">
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                    >
                      Política de Privacidad
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                    >
                      Términos y Condiciones
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <h4 className="font-semibold text-base md:text-lg mb-4 text-foreground">
                Contacto
              </h4>
              <address className="not-italic text-sm md:text-base text-muted-foreground space-y-2">
                <p>
                  <a
                    href="mailto:hola@aceleradoradecreadores.com"
                    className="hover:text-primary transition-colors"
                  >
                    hola@aceleradoradecreadores.com
                  </a>
                </p>
              </address>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center">
            <p className="text-sm md:text-base text-muted-foreground">
              © {new Date().getFullYear()} Aceleradora de Creadores. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
