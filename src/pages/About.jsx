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

const certifications = [
  {
    title: "Certificate of Recognition",
    issuer: "The Robotics Club & College of Technology, Pantnagar",
    issued: "2025 – 2026",
    detail: "Vice-Chairperson — outstanding contributions & exemplary leadership",
    image: "/certs/robotics.jpg",
    driveUrl: "https://drive.google.com/file/d/17LvYLy5o4FOVOCq0kMvzKYuZttTVD18-/view?usp=sharing",
  },
  {
    title: "NPTEL Elite Certification",
    issuer: "IIT Roorkee / NPTEL / SWAYAM",
    issued: "Jan – Apr 2024",
    detail: "Data Analytics with Python · Score: 73% · 12-week course",
    image: "/certs/nptel.jpg",
    driveUrl: "https://drive.google.com/file/d/1_5puRtFcl2UFdmmLl-jr38IzZ2M5FYdl/view?usp=sharing",
  },
  {
    title: "Foundational Level Certificate",
    issuer: "IIT Madras — Centre for Outreach and Digital Education",
    issued: "15 September 2024",
    detail: "Programming and Data Science — Foundational Level",
    image: "/certs/iitm.jpg",
    driveUrl: "https://drive.google.com/file/d/1pFBHbo1hHMcnpnOdU_6Ek7NwQqR17LIN/view?usp=sharing",
  },
];

function CertCard({ cert }) {
  return (
    <div className="group flex gap-5 border border-[#1f1f1f] rounded-xl overflow-hidden hover:border-[#c9a96e]/40 transition-all duration-300 bg-[#0d0d0d] hover:bg-[#0f0f0f]">

      {/* Left — certificate image with Full View overlay */}
      <div className="relative flex-shrink-0 w-36 h-full min-h-[120px] bg-[#111] overflow-hidden">
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = "none";
          }}
        />
        {/* Overlay button */}
        <a
          href={cert.driveUrl}
          target="_blank"
          rel="noreferrer"
          className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          title="View full certificate"
        >
          <span className="flex flex-col items-center gap-1">
            <svg className="w-5 h-5 text-[#c9a96e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span className="font-mono text-[9px] text-[#c9a96e] tracking-widest uppercase">Full View</span>
          </span>
        </a>
      </div>

      {/* Right — details */}
      <div className="flex flex-col justify-center gap-2 py-5 pr-5 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[#e8e0d4] font-semibold text-sm leading-snug">{cert.title}</h3>
          <a
            href={cert.driveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-shrink-0 flex items-center gap-1 font-mono text-[10px] text-[#c9a96e] border border-[#c9a96e]/30 px-2 py-0.5 rounded hover:bg-[#c9a96e] hover:text-[#0d0d0d] transition-all uppercase tracking-widest"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View
          </a>
        </div>

        <p className="text-[#c9a96e] font-mono text-xs">{cert.issuer}</p>
        <p className="text-[#8a8a8a] text-xs leading-relaxed">{cert.detail}</p>
        <span className="font-mono text-[10px] text-[#555]">Issued {cert.issued}</span>
      </div>

    </div>
  );
}

function EduCard({ item }) {
  return (
    <div className="flex gap-6 items-start group border border-[#1f1f1f] rounded-xl p-5 hover:border-[#c9a96e]/30 transition-all bg-[#0d0d0d] hover:bg-[#111]">
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
          <div className="flex-1">
            <SectionLabel>About</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-[#e8e0d4] mb-3 leading-tight">
              ML & Data Science<br />
              <span className="text-[#c9a96e]">Practitioner.</span>
            </h2>
            <p className="text-[#8a8a8a] text-base leading-relaxed mt-6 max-w-xl">
              I&rsquo;m {personal.name}. I&rsquo;ve completed my B.Tech in Electrical Engineering from the College of Technology at G. B. Pant University of Agriculture and Technology, Pantnagar. I work at the intersection of machine learning, data engineering, and product analytics, building systems that solve real problems end-to-end — from raw data to deployed model.
            </p>
            <p className="text-[#8a8a8a] text-base leading-relaxed mt-4 max-w-xl">
              So far I&rsquo;ve done two internships in the field of Data Analytics. In my recent internship at Interviewkit.ai I worked as a Product Analyst Intern, and previously at Sapienplus AI Research &amp; Analytics LLP as an ML Analytics Intern. Through these internships I have gained hands-on experience in Data Analytics technologies like MS Excel, Power BI, SQL, Python and its libraries (Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn etc.)
            </p>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-end mt-2">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <div className="absolute -inset-1 rounded-2xl border border-[#c9a96e]/15" />
              <img
                src="/about.jpg"
                alt="Keshav Gairola"
                onError={(e) => { e.target.onerror = null; e.target.src = "/profile.jpg"; }}
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

        {/* Certifications */}
        <div className="mb-16">
          <SectionLabel>Certifications</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {certifications.map((cert, i) => (
              <CertCard key={i} cert={cert} />
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
