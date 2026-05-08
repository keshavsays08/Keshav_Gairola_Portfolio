// src/pages/Experience.jsx
import { experience, achievements } from "../data/resume";

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="font-mono text-[#c9a96e] text-xs tracking-[0.3em] uppercase">{children}</span>
      <span className="flex-1 h-px bg-[#1f1f1f]" />
    </div>
  );
}

export default function Experience() {
  return (
    <section className="min-h-screen bg-[#0d0d0d] px-6 py-28 max-w-3xl mx-auto">
      <SectionLabel>Experience</SectionLabel>

      {/* Timeline */}
      <div className="relative pl-6 border-l border-[#1f1f1f] flex flex-col gap-12 mb-20">
        {experience.map((exp, i) => (
          <div key={i} className="relative">
            {/* dot */}
            <span className="absolute -left-[25px] top-1.5 w-2 h-2 rounded-full bg-[#c9a96e]" />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <div>
                <h3 className="text-[#e8e0d4] font-semibold text-sm">{exp.role}</h3>
                <p className="text-[#c9a96e] font-mono text-xs">{exp.company}</p>
              </div>
              <span className="font-mono text-[10px] text-[#555] whitespace-nowrap">{exp.period}</span>
            </div>

            <ul className="flex flex-col gap-2 mt-3">
              {exp.bullets.map((b, j) => (
                <li key={j} className="text-[#8a8a8a] text-xs leading-relaxed flex gap-2">
                  <span className="text-[#c9a96e] mt-0.5 flex-shrink-0">▸</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <SectionLabel>Achievements</SectionLabel>
      <div className="flex flex-col gap-4">
        {achievements.map((a, i) => (
          <div key={i} className="flex gap-4 items-start border border-[#1f1f1f] rounded p-4 hover:border-[#c9a96e]/30 transition-colors">
            <span className="font-mono text-[#c9a96e] text-lg font-bold flex-shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h4 className="text-[#e8e0d4] text-sm font-semibold">{a.title}</h4>
              <p className="text-[#8a8a8a] text-xs mt-0.5">{a.desc}</p>
              <span className="font-mono text-[10px] text-[#555]">{a.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
