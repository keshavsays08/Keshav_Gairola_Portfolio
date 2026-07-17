// src/pages/About.jsx
import { personal, education, skills } from "../data/resume";

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="font-mono text-[#c9a96e] text-xs tracking-[0.3em] uppercase">{children}</span>
      <span className="flex-1 h-px bg-[#1f1f1f]" />
    </div>
  );
}

function EduCard({ item }) {
  return (
    <div className="flex gap-6 items-start group border border-[#1f1f1f] rounded-xl p-5 hover:border-[#c9a96e]/30 transition-all bg-[#0d0d0d] hover:bg-[#111]">
      {/* Institution image — bigger */}
      <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border border-[#2a2a2a] bg-[#111]">
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
      <div className="flex-1">
        <h3 className="text-[#e8e0d4] text-base font-semibold leading-snug">{item.degree}</h3>
        <p className="text-[#8a8a8a] text-sm mt-1">{item.institution}</p>
        <div className="flex gap-4 mt-2">
          <span className="font-mono text-xs text-[#c9a96e]">{item.year}</span>
          <span className="font-mono text-xs text-[#555]">{item.score}</span>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="min-h-screen bg-[#0d0d0d] px-6 py-28">
      <div className="max-w-5xl mx-auto">

        {/* Top: bio left, photo right */}
        <div className="flex flex-col md:flex-row gap-16 items-start mb-20">

          {/* Left — bio */}
          <div className="flex-1">
            <SectionLabel>About</SectionLabel>

            <h2 className="text-4xl md:text-5xl font-bold text-[#e8e0d4] mb-3 leading-tight">
              ML & Data Science<br />
              <span className="text-[#c9a96e]">Practitioner.</span>
            </h2>

            <p className="text-[#8a8a8a] text-base leading-relaxed mt-6 max-w-xl">
              I&rsquo;m {personal.name}, I&rsquo;ve completed my B.Tech in Electrical Engineering from College of Technology at G. B. Pant University of Agriculture and Technology, Pantnagar. I work at the intersection of machine learning, data engineering, and product analytics, building systems that solve real problems end-to-end — from raw data to deployed model.
            </p>
            <p className="text-[#8a8a8a] text-base leading-relaxed mt-4 max-w-xl">
              So far I&rsquo;ve done two internships in the field of Data Analytics, in my recent internship at Interviewkit.ai I worked as a Product Analyst Intern and previously at Sapienplus AI Research & Analytics LLP as an ML Analytics Intern, through these internships I have gained hands on experience in Data Analytics related technologies like MS Excel, Power BI, SQL, Python & its Libraries like (Pandas, Numpy, Scikit-learn ,Matplotlib, Seaborn etc.)
            </p>
          </div>

          {/* Right — photo */}
          <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-end mt-2">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <div className="absolute -inset-1 rounded-2xl border border-[#c9a96e]/15" />
              <img
                src="/about.jpg"
                alt="Keshav Gairola"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/profile.jpg";
                }}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <SectionLabel>Skills</SectionLabel>
          <div className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <span
                key={s}
                className="px-4 py-1.5 border border-[#2a2a2a] rounded-full text-sm font-mono text-[#8a8a8a] hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <SectionLabel>Education</SectionLabel>
          <div className="flex flex-col gap-5">
            {education.map((item, i) => (
              <EduCard key={i} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}