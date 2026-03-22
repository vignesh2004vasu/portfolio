import { ScrollReveal } from "../ScrollReveal";

const projects = [
  {
    title: "Health Foundary (goML)",
    description:
      "A personal health assessment platform enabling organizations to integrate SQL databases and FHIR systems (Epic, Cerner) for unified healthcare data access. Developed intelligent modules for Patient Summary, Medications, Conditions, Allergies, and Diet Planning with a conversational chatbot for personalized health insights.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBY7vL17k25QIVRJPkfolMLZ8uOEDTqgto1LWYYWvzAXVMx4SF710fXGyVf7LInkbvWjKiVQUkLz8e7nCMMCXi1A1If1o0L4AwtyjPahko7X5yfe7Qg_6Sna6VMDPzd-sRMg3vt7SBpA_ltf41ikVPoNn1ABRAI-7rM7Ny51p67J1qMbgcQw4VquFsXD9wd28hcY4JaWkiW7E-NrNbkUCxBWcHnLSthfy-_iN-fnS7I1cF9-rlz6VGX0ZiGnhyuF0bnksSdBb9ZR8Y",
    tags: ["React", "Node.js", "Healthcare APIs"],
  },
  {
    title: "Fleetfare – AI Travel Booking Assistant",
    description:
      "An AI-powered travel booking assistant enabling users to search and book flights and hotels through conversational chat. Integrated Amadeus and Sabre APIs with MCP-based backend for orchestrated tool calls, real-time Socket.IO communication, and intelligent intent handling for multi-step booking confirmations.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAtszA4S5GT7SH-ilC3k6M7bk81VJWIXZvu_ayCPX_Avq9xZAPdM1DgQXYVMMfIy_XPBtl6BnwqFTMLNkXoXLeMKCd3q1dSCZx4FsfdRyPZUvse5wONssWh0LZKznVXV7xnP7L3gwbHkqYWBAad0S8X2ndFbFt1yUagUShbcclF4rjO4m91UTxyCkd7kMwb4OU6_87S526uAzi9gPQp0cjK7g6QY3LBi0BT74fA7NzoUeYJlASiNbE9vFufQRW65i4uJ1ZHb6bIfzQ",
    tags: ["Next.js", "Socket.IO", "Amadeus API"],
  },
  {
    title: "Limoni – Speed & Location Tracking",
    description:
      "A real-time speed and location tracking system with 95% accuracy to enforce zone-wise speed limits. Integrated GPS-based geofencing with 50+ unique boundaries, automated alert systems for overspeeding violations notifying authorities in under 2 seconds. Reduced road fatalities by 40% during testing.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBY7vL17k25QIVRJPkfolMLZ8uOEDTqgto1LWYYWvzAXVMx4SF710fXGyVf7LInkbvWjKiVQUkLz8e7nCMMCXi1A1If1o0L4AwtyjPahko7X5yfe7Qg_6Sna6VMDPzd-sRMg3vt7SBpA_ltf41ikVPoNn1ABRAI-7rM7Ny51p67J1qMbgcQw4VquFsXD9wd28hcY4JaWkiW7E-NrNbkUCxBWcHnLSthfy-_iN-fnS7I1cF9-rlz6VGX0ZiGnhyuF0bnksSdBb9ZR8Y",
    tags: ["GPS/Geofencing", "Real-time Systems", "IoT"],
  },
];

export function Projects() {
  return (
    <section className="py-24 bg-zinc-950" id="projects">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20">
            <h2 className="text-4xl font-heading font-bold tracking-tight mb-4">
              Selected Works
            </h2>
            <div className="h-1 w-20 bg-emerald-400"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`flex flex-col gap-8 ${idx === 1 ? "md:mt-32" : ""}`}
              >
                <div className="aspect-[16/10] bg-zinc-800 rounded-lg overflow-hidden relative group">
                  <img
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    alt={project.title}
                    src={project.image}
                  />
                  <div className="absolute inset-0 bg-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] uppercase tracking-tighter bg-zinc-800 px-3 py-1 rounded text-zinc-400 hover:text-emerald-400 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-heading font-bold">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm">{project.description}</p>
                  <a
                    className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest hover:gap-4 transition-all"
                    href="#"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
