import { Mail, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section id="contacto" className="section-padding" style={{ background: "var(--gradient-hero)" }}>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Conectemos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg">
            Estoy abierto a nuevas oportunidades, colaboraciones y conversaciones.
            Si mi perfil te interesa, ¡conversemos!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Email */}
          <a
            href="mailto:vicente.beiza@usm.cl"
            className="card-glass card-hover p-8 text-center group"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground text-sm">vicente.beiza@usm.cl</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/vicentebeizas"
            target="_blank"
            rel="noopener noreferrer"
            className="card-glass card-hover p-8 text-center group"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Linkedin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">LinkedIn</h3>
            <p className="text-muted-foreground text-sm">@vicentebeizas</p>
          </a>

          {/* Location */}
          <div className="card-glass p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Ubicación</h3>
            <p className="text-muted-foreground text-sm">Chile</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button variant="hero" size="xl" asChild>
            <a href="mailto:vicente.beiza@usm.cl" className="gap-3">
              <Send className="w-5 h-5" />
              Enviar mensaje
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
