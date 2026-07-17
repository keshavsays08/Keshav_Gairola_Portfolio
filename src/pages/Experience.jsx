// src/pages/Experience.jsx
import { experience, achievements } from "../data/resume";

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="font-mono text-[#c9a96e] text-xs tracking-[0.3em] uppercase">{children}</span>
      <span className="flex-1 h-px bg-[#1f1f1f]" />
    </div>
  );
}
const por = [
  {
    org: "The Robotics Club, Pantnagar",
    roles: [
      {
        title: "Vice Chairperson",
        period: "May 2025 – Jun 2026",
        bullets: [
          "Directed club operations across cross-functional teams, driving on-time event delivery and resolving bottlenecks to maintain execution quality across all initiatives.",
          "Designed and delivered technical workshops via our club to 500+ sophomore students, covering core AI algorithms and modern robotics applications.",
          "Led design reviews and material selection for club projects, cutting manufacturing inefficiencies and strengthening collaboration between technical departments.",
        ],
      },
      {
        title: "Executive Member",
        period: "Aug 2024 – May 2025",
        bullets: [
          "Delivered a session on \"AI in Robotics\" to college freshmen at the Inbotics workshop, covering AI history milestones — Expert Systems, DARPA Challenge, AlphaGo vs Lee Sedol.",
        ],
      },
      {
        title: "Member",
        period: "Oct 2023 – Aug 2024",
        bullets: [],
      },
    ],
  },
];
export default function Experience() {
  return (
    <section className="min-h-screen bg-[#0d0d0d] px-6 py-28 max-w-3xl mx-auto">

      {/* Experience */}
      <SectionLabel>Experience</SectionLabel>
      <div className="relative pl-7 border-l border-[#1f1f1f] flex flex-col gap-14 mb-24">
        {experience.map((exp, i) => (
          <div key={i} className="relative">
            <span className="absolute -left-[29px] top-2 w-2.5 h-2.5 rounded-full bg-[#c9a96e]" />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
              <div>
                <h3 className="text-[#e8e0d4] font-bold text-xl">{exp.role}</h3>
                <p className="text-[#c9a96e] font-mono text-sm mt-0.5">{exp.company}</p>
              </div>
              <span className="font-mono text-xs text-[#555] whitespace-nowrap">{exp.period}</span>
            </div>

            <ul className="flex flex-col gap-3 mt-4">
              {exp.bullets.map((b, j) => (
                <li key={j} className="text-[#8a8a8a] text-sm leading-relaxed flex gap-2.5">
                  <span className="text-[#c9a96e] mt-1 flex-shrink-0">▸</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Position of Responsibility */}
      <SectionLabel>Position of Responsibility</SectionLabel>
      <div className="mb-24">
        {por.map((org, i) => (
          <div key={i} className="mb-8">
            <h3 className="text-[#e8e0d4] font-bold text-xl mb-6">{org.org}</h3>
            <div className="relative pl-7 border-l border-[#1f1f1f] flex flex-col gap-10">
              {org.roles.map((role, j) => (
                <div key={j} className="relative">
                  <span className="absolute -left-[29px] top-2 w-2.5 h-2.5 rounded-full border-2 border-[#c9a96e] bg-[#0d0d0d]" />
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                    <p className="text-[#e8e0d4] font-semibold text-base">{role.title}</p>
                    <span className="font-mono text-xs text-[#555] whitespace-nowrap">{role.period}</span>
                  </div>
                  {role.bullets.length > 0 && (
                    <ul className="flex flex-col gap-2.5 mt-3">
                      {role.bullets.map((b, k) => (
                        <li key={k} className="text-[#8a8a8a] text-sm leading-relaxed flex gap-2.5">
                          <span className="text-[#c9a96e] mt-1 flex-shrink-0">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <SectionLabel>Achievements</SectionLabel>
      <div className="flex flex-col gap-4">
        {achievements.map((a, i) => (
          <div key={i} className="flex gap-5 items-start border border-[#1f1f1f] rounded-xl p-5 hover:border-[#c9a96e]/30 transition-colors">
            <span className="font-mono text-[#c9a96e] text-2xl font-bold flex-shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h4 className="text-[#e8e0d4] text-base font-semibold">{a.title}</h4>
              <p className="text-[#8a8a8a] text-sm mt-1">{a.desc}</p>
              <span className="font-mono text-xs text-[#555]">{a.year}</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}