import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../constants/portfolioData";
import { HiOutlineFolder, HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="scroll-mt-24 lg:min-h-[calc(100vh-160px)] lg:flex lg:flex-col lg:justify-center py-6 sm:py-10">
      <div className="text-center mb-8 space-y-2">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
          My Projects
        </h2>
        <p className="text-text-secondary text-xs sm:text-base max-w-xl mx-auto px-2">
          A showcase of my recent full-stack web applications and AI-powered tools.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-stretch">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-bg-card rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-border-light shadow-card flex flex-col justify-between"
          >
            <div className="space-y-3.5 sm:space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-brand-badge text-brand-secondary">
                  <HiOutlineFolder className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-bg-secondary text-text-muted text-[10px] sm:text-xs font-semibold">
                  {project.period}
                </span>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-text-primary leading-snug">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                {project.tech.map((techItem) => (
                  <span
                    key={techItem}
                    className="px-2.5 py-0.5 rounded-lg sm:rounded-xl bg-bg-secondary text-text-primary text-[11px] sm:text-xs font-medium border border-border-light/40"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-border-light/60">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl bg-bg-secondary text-text-primary font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 border border-border-light"
              >
                <FaGithub className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl bg-brand-primary text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 shadow-subtle"
              >
                <HiOutlineExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};