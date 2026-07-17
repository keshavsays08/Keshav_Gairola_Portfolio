// src/pages/Projects.jsx
import { projects } from "../data/resume";

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="font-mono text-[#c9a96e] text-xs tracking-[0.3em] uppercase">{children}</span>
      <span className="flex-1 h-px bg-[#1f1f1f]" />
    </div>
  );
}

// Maps project index to image in /public/projects/
const projectImages = ["/projects/p1.jpeg", "/projects/p2.png", "/projects/p3.png"];

function ProjectCard({ project, index }) {
  return (
    <div className="group border border-[#1f1f1f] rounded-2xl overflow-hidden hover:border-[#c9a96e]/40 transition-all duration-300 bg-[#0d0d0d] hover:bg-[#0f0f0f] flex flex-col md:flex-row">

      {/* Left — project image */}
      <div className="md:w-64 md:flex-shrink-0 h-48 md:h-auto overflow-hidden bg-[#111]">
        <img
          src={projectImages[index] || "/projects/p1.jpeg"}
          alt={project.title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = "none";
          }}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
        />
      </div>

      {/* Right — content */}
      <div className="flex-1 p-7 flex flex-col gap-4">

        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[#e8e0d4] font-bold text-xl leading-snug group-hover:text-[#c9a96e] transition-colors">
            {project.title}
          </h3>
          <span className="font-mono text-xs text-[#555] whitespace-nowrap flex-shrink-0 mt-1">
            {project.period}
          </span>
        </div>

        {/* Summary */}
        <p className="text-[#8a8a8a] text-sm leading-relaxed">{project.summary}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full text-xs font-mono text-[#555]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Single action — View Project on GitHub */}
        <div className="mt-auto flex justify-end pt-3 border-t border-[#1a1a1a]">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-[#c9a96e] border border-[#c9a96e]/40 px-4 py-2 rounded-lg hover:bg-[#c9a96e] hover:text-[#0d0d0d] transition-all uppercase tracking-widest"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            View Project on GitHub
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#0d0d0d] px-6 py-28 max-w-5xl mx-auto">
      <SectionLabel>Projects</SectionLabel>
      <p className="text-[#555] text-sm font-mono mb-12">
        End-to-end builds — from raw data to deployed systems.
      </p>
      <div className="flex flex-col gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}