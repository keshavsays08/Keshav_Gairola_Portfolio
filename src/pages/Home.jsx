// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";
import { personal } from "../data/resume";
import useTypingEffect from "../hooks/useTypingEffect";

const SocialIcon = ({ href, label, children }) =>
  href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded border border-[#2a2a2a] flex items-center justify-center text-[#8a8a8a] hover:text-[#c9a96e] hover:border-[#c9a96e] transition-all duration-200"
    >
      {children}
    </a>
  ) : null;

export default function Home() {
  const typed = useTypingEffect(personal.typingRoles);
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0d0d0d] px-6 pt-16">
      {/* Subtle grid background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,110,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-5xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        {/* LEFT — text */}
        <div className="flex-1 text-left">
          <p className="font-mono text-sm text-[#c9a96e] tracking-[0.3em] uppercase mb-6 animate-fade-in">
            Hello, World
          </p>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight text-[#e8e0d4] mb-2">
            Keshav
          </h1>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight text-[#c9a96e] mb-8 font-mono">
            Gairola
          </h1>

          {/* Typing effect line */}
          <div className="flex items-center gap-2 mb-5 h-10">
            <span className="text-[#8a8a8a] font-mono text-lg">I&rsquo;m into</span>
            <span className="text-[#e8e0d4] font-mono text-lg font-semibold">
              {typed}
            </span>
            <span className="inline-block w-0.5 h-5 bg-[#c9a96e] animate-pulse" />
          </div>

          {/* Quote */}
          <p className="text-[#666] font-mono text-sm italic mb-10 border-l-2 border-[#c9a96e]/30 pl-3">
            &ldquo;{personal.quote}&rdquo;
          </p>

          {/* CTA */}
          <div className="flex items-center gap-4 mb-10 flex-wrap">
            <a
              href={personal.cvPath}
              download
              className="px-7 py-3 bg-[#c9a96e] text-[#0d0d0d] font-mono text-sm font-bold tracking-widest uppercase rounded hover:bg-[#e8c87f] transition-colors duration-200"
            >
              Download CV
            </a>
            <button
              onClick={() => navigate("/projects")}
              className="px-7 py-3 border border-[#2a2a2a] text-[#8a8a8a] font-mono text-sm font-bold tracking-widest uppercase rounded hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors duration-200"
            >
              See Projects
            </button>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <SocialIcon href={personal.socials.linkedin} label="LinkedIn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452H17.21v-5.569c0-1.327-.027-3.037-1.851-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.987V9h3.112v1.561h.046c.434-.82 1.492-1.684 3.07-1.684 3.283 0 3.889 2.161 3.889 4.972v6.603zM5.337 7.433a1.804 1.804 0 110-3.608 1.804 1.804 0 010 3.608zM6.951 20.452H3.723V9h3.228v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </SocialIcon>

            {/* GitHub */}
            <SocialIcon href={personal.socials.github} label="GitHub">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </SocialIcon>

            {/* Twitter */}
            <SocialIcon href={personal.socials.twitter} label="Twitter">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </SocialIcon>

            {/* Medium */}
            <SocialIcon href={personal.socials.medium} label="Medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
            </SocialIcon>
          </div>
        </div>

        {/* RIGHT — profile image */}
        <div className="flex-shrink-0">
  <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl ring-1 ring-[#c9a96e]/20">
    
    {/* Image */}
    <img
      src={personal.profileImage}
      alt={personal.name}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = `https://api.dicebear.com/7.x/initials/svg?seed=KG&backgroundColor=1f1f1f&textColor=c9a96e`;
      }}
      className="w-full h-full object-cover rounded-2xl"
    />

    {/* Status dot */}
    <span className="absolute bottom-3 right-3 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#0d0d0d]" />
  </div>
</div>
        
      </div>
    </section>
  );
}
