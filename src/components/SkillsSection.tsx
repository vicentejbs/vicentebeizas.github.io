const technicalSkills = [
  "Python", "C", "C++", "MATLAB", "SQL"
];

const tools = [
  "Linux", "Git", "Arduino", "GNU Radio", "FPGA", "VS Code"
];

const softSkills = [
  "Trabajo en equipo", "Liderazgo", "Comunicación efectiva", 
  "Resolución de problemas", "Adaptabilidad", "Empatía"
];

const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "Intermedio" },
];

export const SkillsSection = () => {
  return (
    <section id="proyectos" className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Habilidades y Tecnologías
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Technical Skills */}
          <div className="card-glass p-6">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Lenguajes
            </h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <span key={skill} className="badge-skill">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="card-glass p-6">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Herramientas
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className="badge-skill">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="card-glass p-6">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Habilidades Blandas
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span key={skill} className="badge-skill">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="card-glass p-6">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Idiomas
            </h3>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div key={lang.name} className="flex justify-between items-center">
                  <span className="text-foreground">{lang.name}</span>
                  <span className="text-sm text-muted-foreground">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Areas of Interest */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-display font-semibold text-foreground mb-8">
            Áreas de Interés
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {[
              "Telecomunicaciones",
              "Neurociencia y Tecnología",
              "Bienestar Humano",
              "Inteligencia Artificial",
              "IoT y Sistemas Embebidos",
              "Salud Digital"
            ].map((interest) => (
              <span
                key={interest}
                className="px-6 py-3 rounded-full bg-primary/5 text-foreground border border-primary/20 font-medium hover:bg-primary/10 transition-colors cursor-default"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
