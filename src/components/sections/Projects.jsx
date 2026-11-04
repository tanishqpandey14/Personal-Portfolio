import { HiOutlineFolder, HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { PORTFOLIO_DATA } from "../../constants/portfolioData";
import { SectionHeader } from "../ui/SectionHeader";

export const Projects = () => {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="scroll-mt-28">
      <SectionHeader
        title="My Projects"
        subtitle="Recent full-stack web applications and AI-powered tools."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-stretch">
        {projects.map((project) => {
          const isOngoing = /present/i.test(project.period);
          return (
            <article
              key={project.id}
              className="glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="grid place-items-center w-11 h-11 rounded-xl bg-pink/10 border border-pink/30 text-pink">
                    <HiOutlineFolder className="w-5 h-5" />
                  </div>
                  <span className="glass-chip inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-text-secondary">
                    {isOngoing && <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-lime" />}
                    {project.period}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-normal text-text-primary leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tech.map((t) => (
                    <span key={t} className="glass-chip px-2.5 py-1 rounded-lg text-xs font-medium text-text-primary">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-white/10">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-chip py-2.5 px-4 rounded-xl text-text-primary font-bold text-sm flex items-center justify-center gap-2 hover:border-lime/50 hover:text-lime transition-colors duration-200"
                >
                  <FaGithub className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl bg-pink text-black font-bold text-sm flex items-center justify-center gap-2 hover:shadow-glow-pink hover:-translate-y-0.5 transition-all duration-200"
                >
                  <HiOutlineExternalLink className="w-4 h-4" />
                  Live demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
