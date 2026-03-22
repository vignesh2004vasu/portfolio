import { ScrollReveal } from "../ScrollReveal";

const experiences = [
  {
    period: "JUN 2025 — Present",
    title: "Frontend Engineer Intern",
    company: "goML",
    description:
      "Building Health Foundary, a Personal Health Assessment portal enabling organizations to integrate healthcare databases (SQL, FHIR systems like Epic and Cerner) for unified health data management.",
  },
  {
    period: "DEC 2024 — JAN 2025",
    title: "ASP .Net Web Developer Intern",
    company: "Bharat Petroleum Corporation Ltd",
    description:
      "Developed a web-based PPE management system using ASP.NET MVC and C#, enabling 40% faster equipment tracking across 3 refinery locations and processing 100+ daily visitor requests.",
  },
];

export function Experience() {
  return (
    <section className="py-24 bg-zinc-900" id="experience">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-4">
            <h2 className="text-4xl font-heading font-bold tracking-tight">
              Professional <br />
              <span className="text-emerald-400">Trajectory</span>
            </h2>
            <span className="text-zinc-500 text-xs uppercase tracking-[0.2em] font-medium pb-2">
              2019 — Present
            </span>
          </div>

          <div className="space-y-1">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="group grid grid-cols-1 md:grid-cols-12 py-12 border-t border-zinc-800 hover:bg-zinc-800/50 transition-colors px-4"
              >
                <div className="md:col-span-2 text-zinc-600 font-medium text-sm pt-1">
                  {exp.period}
                </div>
                <div className="md:col-span-5">
                  <h3 className="text-2xl font-heading font-bold mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-emerald-400 font-medium text-sm mb-4">
                    {exp.company}
                  </p>
                </div>
                <div className="md:col-span-5 text-zinc-400 text-sm leading-relaxed">
                  {exp.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
