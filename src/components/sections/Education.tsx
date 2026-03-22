import { ScrollReveal } from "../ScrollReveal";

export function Education() {
  return (
    <section className="py-24 bg-zinc-900" id="education">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-heading font-bold mb-12">Education</h2>

          <div className="bg-zinc-800 p-8 rounded-lg hover:bg-zinc-700 transition-all">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-heading font-bold">
                  Bachelor of Engineering in Computer Science
                </h3>
                <p className="text-emerald-400 font-medium text-sm mt-2">
                  Sri Krishna College of Technology
                </p>
                <p className="text-zinc-500 text-sm">Coimbatore, Tamil Nadu</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                  NOV 2022 — MAR 2026
                </span>
                <p className="text-sm font-heading font-bold text-emerald-400 mt-2">
                  CGPA: 8.07
                </p>
              </div>
            </div>
          </div>
          <div className="bg-zinc-800 p-8 rounded-lg hover:bg-zinc-700 transition-all mt-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-heading font-bold">
                  Higher Secondary School
                </h3>
                <p className="text-emerald-400 font-medium text-sm mt-2">
                  Ryan International School
                </p>
                <p className="text-zinc-500 text-sm">Mumbai,Maharashtra</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                  APRIL 2021 — MAY 2022
                </span>
                <p className="text-sm font-heading font-bold text-emerald-400 mt-2">
                  Percentage: 85.6%
                </p>
              </div>
            </div>
          </div>
          <div className="bg-zinc-800 p-8 rounded-lg hover:bg-zinc-700 transition-all mt-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-heading font-bold">
                  Secondary School
                </h3>
                <p className="text-emerald-400 font-medium text-sm mt-2">
                  Atomic Energy Central School
                </p>
                <p className="text-zinc-500 text-sm">Mumbai, Maharashtra</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                  APRIL 2019 — MAY 2020
                </span>
                <p className="text-sm font-heading font-bold text-emerald-400 mt-2">
                  Percentage: 87.8%
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
