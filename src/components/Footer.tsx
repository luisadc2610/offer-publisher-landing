const Footer = () => {
  return (
    <footer className="bg-secondary py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">
                Offer Publisher
              </h3>
              <p className="text-sm text-muted-foreground">
                Tu socio estratégico para monetizar tu audiencia sin sacrificar tu creatividad.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">
                Enlaces
              </h4>
              <nav aria-label="Footer navigation">
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Política de Privacidad
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Términos y Condiciones
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">
                Contacto
              </h4>
              <address className="not-italic text-sm text-muted-foreground space-y-2">
                <p>
                  <a
                    href="mailto:hola@offerpublisher.com"
                    className="hover:text-primary transition-colors"
                  >
                    hola@offerpublisher.com
                  </a>
                </p>
              </address>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Offer Publisher. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
