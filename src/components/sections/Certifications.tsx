import { ScrollReveal } from "../ScrollReveal";

const certifications = [
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    year: "2026",
  },
  {
    title: "Smart India Hackathon 2024 (SIH) – Software Edition",
    issuer: "Ministry of Education, India",
    year: "2024",
    badge: "🏆 Winner",
  },
  {
    title: "Bit n Build – Tamil Nadu Regionals",
    issuer: "GDSE, CRCE, Mumbai",
    year: "2024",
    badge: "🥈 Runner-Up",
  },
  {
    title: "AI/ML Hackathon on National Road Safety",
    issuer: "NSS IIT Roorkee",
    year: "2024",
    badge: "🥈 Runner-Up",
  },
];

export function Certifications() {
  return (
    <section className="py-24 bg-zinc-950" id="certifications">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-4xl font-heading font-bold tracking-tight">
                Accredited <br />
                <span className="text-emerald-400">Achievements</span>
              </h2>
              <p className="mt-6 text-zinc-500 text-sm">
                Certifications, awards, and recognition in competitive
                programming and hackathons.
              </p>
            </div>

            <div className="md:col-span-2 space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-6 bg-zinc-800 rounded group hover:bg-zinc-700 transition-all"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <span className="text-emerald-400 text-2xl">✓</span>
                    <div className="flex-1">
                      <h4 className="font-heading font-bold text-sm">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-zinc-600">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {cert.badge && (
                      <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded">
                        {cert.badge}
                      </span>
                    )}
                    <span className="font-mono text-[10px] text-zinc-500 whitespace-nowrap">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
