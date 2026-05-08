// src/pages/About.jsx
import { personal, education, skills } from "../data/resume";

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="font-mono text-[#c9a96e] text-xs tracking-[0.3em] uppercase">{children}</span>
      <span className="flex-1 h-px bg-[#1f1f1f]" />
    </div>
  );
}

function EduCard({ item }) {
  return (
    <div className="flex gap-5 items-start group">
      {/* Institution image */}
      <div className="flex-shrink-0 w-16 h-16 rounded overflow-hidden border border-[#1f1f1f] bg-[#111]">
        <img
          src={item.image}
          alt={item.institution}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(item.institution)}&backgroundColor=111111&textColor=c9a96e`;
          }}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        />
      </div>
      <div>
        <h3 className="text-[#e8e0d4] text-sm font-semibold leading-snug">{item.degree}</h3>
        <p className="text-[#8a8a8a] text-xs mt-0.5">{item.institution}</p>
        <div className="flex gap-3 mt-1">
          <span className="font-mono text-[10px] text-[#c9a96e]">{item.year}</span>
          <span className="font-mono text-[10px] text-[#555]">{item.score}</span>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="min-h-screen bg-[#0d0d0d] px-6 py-28 max-w-3xl mx-auto">
      <SectionLabel>About</SectionLabel>

      {/* Bio */}
      <div className="mb-14">
        <h2 className="text-3xl font-bold text-[#e8e0d4] mb-4">
          ML & Data Science<br />
          <span className="text-[#c9a96e]">Practitioner.</span>
        </h2>
        <p className="text-[#8a8a8a] text-sm leading-relaxed max-w-xl">
          I&rsquo;m {personal.name}, currently pursuing dual degrees — B.Tech in Electrical Engineering from GBPUAT Pantnagar and B.S. in Data Science from IIT Madras. I work at the intersection of machine learning, data engineering, and product analytics, building systems that solve real problems end-to-end — from raw data to deployed model.
        </p>
        <p className="text-[#8a8a8a] text-sm leading-relaxed max-w-xl mt-4">
          I&rsquo;ve interned at product-stage AI startups, published educational ML content, and shipped everything from computer vision pipelines on Raspberry Pi to data warehousing solutions on Snowflake. I care about clean architecture, reproducible experiments, and systems that actually work.
        </p>
      </div>

      {/* Skills */}
      <div className="mb-14">
        <SectionLabel>Skills</SectionLabel>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="px-3 py-1 border border-[#2a2a2a] rounded text-[11px] font-mono text-[#8a8a8a] hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <SectionLabel>Education</SectionLabel>
        <div className="flex flex-col gap-8">
          {education.map((item, i) => (
            <EduCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
