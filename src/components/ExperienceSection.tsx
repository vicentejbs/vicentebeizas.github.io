import { Users, Rocket, Briefcase, GraduationCap, Trophy } from "lucide-react";

const experiences = [
  {
    icon: Users,
    title: "Delegado Deportivo Estudiantil",
    description: "Liderazgo, gestión de equipos y comunicación efectiva con estudiantes y autoridades.",
    tags: ["Liderazgo", "Gestión", "Comunicación"],
  },
  {
    icon: Rocket,
    title: "Cofundador - Muestra Tech",
    description: "Cofundador y organizador de feria académica tecnológica, coordinando equipos y logística.",
    tags: ["Organización", "Innovación", "Trabajo en equipo"],
  },
  {
    icon: Briefcase,
    title: "Emprendimiento Familiar",
    description: "Trabajo en operaciones y marketing digital, desarrollando habilidades prácticas de negocio.",
    tags: ["Marketing Digital", "Operaciones", "Emprendimiento"],
  },
  {
    icon: GraduationCap,
    title: "Tutor de Matemáticas y Física",
    description: "Enseñanza personalizada adaptando métodos según las necesidades de cada estudiante.",
    tags: ["Enseñanza", "Paciencia", "Adaptabilidad"],
  },
  {
    icon: Trophy,
    title: "Campeonato Internacional de Fútbol",
    description: "Participación en torneo internacional realizado en Pumanque, representando valores de disciplina y trabajo en equipo.",
    tags: ["Deporte", "Competencia", "Disciplina"],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experiencia" className="section-padding" style={{ background: "var(--gradient-hero)" }}>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Experiencia y Liderazgo
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground">
            Más allá de lo académico, mi crecimiento ha sido marcado por experiencias que forjaron mis habilidades blandas y mi visión de trabajo colaborativo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="card-glass card-hover p-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <exp.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-3">{exp.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="badge-skill text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlight: Orador en ceremonia */}
        <div className="mt-12 card-glass p-8 max-w-3xl mx-auto text-center">
          <blockquote className="text-lg text-foreground italic">
            "En la ceremonia de graduación de educación media, tuve el honor de ser elegido para dar las palabras finales, agradeciendo y motivando a mis compañeros a perseguir sus sueños."
          </blockquote>
          <p className="mt-4 text-primary font-medium">— Orador de Ceremonia de Graduación</p>
        </div>
      </div>
    </section>
  );
};
