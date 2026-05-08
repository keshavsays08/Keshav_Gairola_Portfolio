// src/pages/Contact.jsx
import { personal } from "../data/resume";

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="font-mono text-[#c9a96e] text-xs tracking-[0.3em] uppercase">{children}</span>
      <span className="flex-1 h-px bg-[#1f1f1f]" />
    </div>
  );
}

export default function Contact() {
  return (
    <section className="min-h-screen bg-[#0d0d0d] px-6 py-28 max-w-3xl mx-auto">
      <SectionLabel>Contact</SectionLabel>

      <h2 className="text-3xl font-bold text-[#e8e0d4] mb-4">
        Let&rsquo;s <span className="text-[#c9a96e]">connect.</span>
      </h2>
      <p className="text-[#8a8a8a] text-sm leading-relaxed max-w-lg mb-12">
        Whether it&rsquo;s a collaboration, freelance project, internship, or just a conversation about ML — I&rsquo;m open. Reach out directly and I&rsquo;ll get back within 24 hours.
      </p>

      <div className="flex flex-col gap-4 mb-14">
        <a
          href={`mailto:${personal.email}`}
          className="flex items-center gap-4 border border-[#1f1f1f] rounded p-4 hover:border-[#c9a96e]/40 transition-colors group"
        >
          <div className="w-9 h-9 border border-[#2a2a2a] rounded flex items-center justify-center text-[#8a8a8a] group-hover:text-[#c9a96e] group-hover:border-[#c9a96e] transition-colors flex-shrink-0">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
          <div>
            <p className="font-mono text-[10px] text-[#555] uppercase tracking-widest">Email</p>
            <p className="text-[#e8e0d4] text-sm">{personal.email}</p>
          </div>
        </a>

        {personal.socials.linkedin && (
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 border border-[#1f1f1f] rounded p-4 hover:border-[#c9a96e]/40 transition-colors group"
          >
            <div className="w-9 h-9 border border-[#2a2a2a] rounded flex items-center justify-center text-[#8a8a8a] group-hover:text-[#c9a96e] group-hover:border-[#c9a96e] transition-colors flex-shrink-0">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452H17.21v-5.569c0-1.327-.027-3.037-1.851-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.987V9h3.112v1.561h.046c.434-.82 1.492-1.684 3.07-1.684 3.283 0 3.889 2.161 3.889 4.972v6.603zM5.337 7.433a1.804 1.804 0 110-3.608 1.804 1.804 0 010 3.608zM6.951 20.452H3.723V9h3.228v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div>
              <p className="font-mono text-[10px] text-[#555] uppercase tracking-widest">LinkedIn</p>
              <p className="text-[#e8e0d4] text-sm">linkedin.com/in/keshav-gairola</p>
            </div>
          </a>
        )}

        {personal.socials.github && (
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 border border-[#1f1f1f] rounded p-4 hover:border-[#c9a96e]/40 transition-colors group"
          >
            <div className="w-9 h-9 border border-[#2a2a2a] rounded flex items-center justify-center text-[#8a8a8a] group-hover:text-[#c9a96e] group-hover:border-[#c9a96e] transition-colors flex-shrink-0">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </div>
            <div>
              <p className="font-mono text-[10px] text-[#555] uppercase tracking-widest">GitHub</p>
              <p className="text-[#e8e0d4] text-sm">github.com/keshavgairola</p>
            </div>
          </a>
        )}
      </div>

      <p className="font-mono text-[10px] text-[#333] text-center">
        {personal.location}
      </p>
    </section>
  );
}
