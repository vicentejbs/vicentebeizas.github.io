import { ArrowDown, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/vicente-profile.png";

export const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse animation-delay-200" />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-up">
              <p className="text-primary font-medium mb-4 tracking-wide">
                Estudiante de Ingeniería Civil Telemática
              </p>
            </div>

            <h1 className="animate-fade-up animation-delay-100">
              <span className="block text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                Vicente Jesús
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient leading-tight mt-2">
                Beiza Silva
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-up animation-delay-200">
              Ingeniería, tecnología y personas: construyendo soluciones con impacto real en el bienestar humano.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start animate-fade-up animation-delay-300">
              <Button variant="hero" size="lg" asChild>
                <a href="#sobre-mi">Sobre mí</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#proyectos">Ver proyectos</a>
              </Button>
            </div>

            <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start animate-fade-up animation-delay-400">
              <a
                href="https://www.linkedin.com/in/vicentebeizas"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:vicente.beiza@usm.cl"
                className="p-2 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
              >
                <Mail className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-up animation-delay-200">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-elevated">
                <img
                  src={profileImage}
                  alt="Vicente Beiza - Foto de perfil"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#sobre-mi" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
