import { ScrollReveal } from "../ScrollReveal";

const skills = [
  {
    icon: "javascript",
    label: "Languages",
    name: "C++ • Java • Python",
  },
  {
    icon: "layers",
    label: "Frameworks",
    name: "React • Next.js • Spring Boot",
  },
  {
    icon: "palette",
    label: "Frontend",
    name: "React Native • Electron JS",
  },
  {
    icon: "speed",
    label: "Backend",
    name: "Express.js • Node.js",
  },
  {
    icon: "database",
    label: "Databases",
    name: "MySQL • MongoDB",
  },
  {
    icon: "tools",
    label: "Tools",
    name: "Docker • AWS • Selenium",
  },
];

const IconComponent = ({ type }: { type: string }) => {
  switch (type) {
    case "javascript":
      return (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M7 8L3 12m0 0l4 4m-4-4h18M17 8l4 4m0 0l-4 4m4-4H3"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "layers":
      return (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path d="M12 2L2 7v5h20V7L12 2z" strokeWidth="2" />
          <path d="M2 12l10 5 10-5" strokeWidth="2" />
          <path d="M2 17l10 5 10-5" strokeWidth="2" />
        </svg>
      );
    case "palette":
      return (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <circle cx="8" cy="8" r="2" fill="currentColor" />
          <circle cx="16" cy="8" r="2" fill="currentColor" />
          <circle cx="8" cy="16" r="2" fill="currentColor" />
          <circle cx="16" cy="16" r="2" fill="currentColor" />
        </svg>
      );
    case "speed":
      return (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "database":
      return (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M12 3c-4.97 0-9 1.79-9 4v2c0 2.21 4.03 4 9 4s9-1.79 9-4V7c0-2.21-4.03-4-9-4z"
            strokeWidth="2"
          />
          <path d="M3 9v5c0 2.21 4.03 4 9 4s9-1.79 9-4V9" strokeWidth="2" />
          <path d="M3 14v5c0 2.21 4.03 4 9 4s9-1.79 9-4v-5" strokeWidth="2" />
        </svg>
      );
    case "tools":
      return (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 1 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
};

export function Skills() {
  return (
    <section className="py-24 bg-zinc-900" id="skills">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-heading font-bold mb-16">
            The Toolstack
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className={`bg-zinc-800 p-8 flex flex-col justify-between aspect-square group hover:bg-zinc-700 transition-colors rounded ${
                  idx % 2 === 1 ? "md:translate-y-8" : ""
                }`}
              >
                <div className="text-zinc-600 group-hover:text-emerald-400 transition-colors">
                  <IconComponent type={skill.icon} />
                </div>
                <div>
                  <p className="font-mono text-xs text-zinc-500 mb-1 uppercase tracking-widest">
                    {skill.label}
                  </p>
                  <h4 className="font-heading font-bold text-lg">
                    {skill.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
