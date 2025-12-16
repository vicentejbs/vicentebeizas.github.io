import { Heart, Brain, Users, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Empatía",
    description: "Creo firmemente en poner a las personas primero",
  },
  {
    icon: Brain,
    title: "Neurociencia",
    description: "Fascinado por la mente humana y las emociones",
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "El trabajo en equipo multiplica el impacto",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Tecnología al servicio del bienestar",
  },
];

export const AboutSection = () => {
  return (
    <section id="sobre-mi" className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Sobre mí
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Main text */}
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              Soy Vicente, estudiante de Ingeniería Civil Telemática en la Universidad Técnica Federico Santa María. Más allá de los circuitos y el código, me apasiona entender cómo la tecnología puede mejorar la vida de las personas.
            </p>
            <p>
              Desde pequeño me caracterizó mi lado artístico y creativo, dibujando y explorando diferentes formas de expresión. El fútbol se convirtió en una pasión que me enseñó disciplina, trabajo en equipo y perseverancia – valores que hoy aplico en cada proyecto.
            </p>
            <p>
              Lo que realmente me mueve es la <span className="text-foreground font-medium">neurociencia</span> y la <span className="text-foreground font-medium">mente humana</span>. No tanto su estructura física, sino los pensamientos, las emociones y cómo las personas experimentan el mundo. Sueño con aplicar la tecnología al bienestar humano y la salud.
            </p>
            <p>
              Me considero alguien introvertido pero con facilidad para conectar con otros. Soy empático, más de lo usual, y genuinamente me importan las personas. Creo que la ingeniería debe tener un propósito humano.
            </p>
          </div>

          {/* Values cards */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="card-glass card-hover p-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20">
          <h3 className="text-2xl font-display font-semibold text-foreground mb-8 text-center">
            Formación Académica
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card-glass p-6">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm text-primary font-medium">2022 - Presente</p>
                  <h4 className="font-semibold text-foreground mt-1">Ingeniería Civil Telemática</h4>
                  <p className="text-muted-foreground text-sm mt-1">Universidad Técnica Federico Santa María</p>
                </div>
              </div>
            </div>
            <div className="card-glass p-6">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-accent mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm text-accent font-medium">Educación Media</p>
                  <h4 className="font-semibold text-foreground mt-1">Técnico Profesional - Electricidad</h4>
                  <p className="text-muted-foreground text-sm mt-1">Base técnica y pensamiento práctico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
