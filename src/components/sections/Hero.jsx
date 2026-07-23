import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../constants/portfolioData";
import { getIcon } from "../../utils/iconUtils";

export const Hero = () => {
  const { personal } = PORTFOLIO_DATA;

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="scroll-mt-24 min-h-[calc(100vh-160px)] flex flex-col justify-center items-center text-center py-6 sm:py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto space-y-6 sm:space-y-8"
      >
        {/* Main Title & Headline */}
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-text-primary leading-tight">
            Hello, I'm{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-primary via-brand-secondary to-brand-accent">
              {personal.name}
            </span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-secondary">
            {personal.tagline}
          </p>
        </div>

        {/* Bio Paragraph */}
        <p className="text-text-secondary text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed px-2">
          {personal.bio}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="px-6 py-3 rounded-xl bg-[#700c32] hover:bg-[#8a103e] text-white font-medium text-sm transition-all shadow-sm"
          >
            <span>View My Work </span>
            <span className="text-lg">→</span>
          </a>

          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-white hover:bg-neutral-50 text-[#700c32] border border-[#700c32]/20 font-medium text-sm transition-all shadow-xs flex items-center gap-2"
          >
            <span>Download Resume</span>
            {getIcon("download", "w-4 h-4 text-brand-secondary")}
          </a>
        </div>

        {/* Social Buttons Container */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3.5 rounded-full bg-bg-card hover:bg-bg-cardHover text-text-primary border border-border-light shadow-subtle hover:border-brand-secondary/40 hover:scale-110 transition-all duration-200"
          >
            {getIcon("github", "w-5 h-5")}
          </a>

          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3.5 rounded-full bg-bg-card hover:bg-bg-cardHover text-[#0A66C2] border border-border-light shadow-subtle hover:border-brand-secondary/40 hover:scale-110 transition-all duration-200"
          >
            {getIcon("linkedin", "w-5 h-5")}
          </a>

          <a
            href={`mailto:${personal.email}`}
            aria-label="Email Me"
            className="p-3.5 rounded-full bg-bg-card hover:bg-bg-cardHover text-brand-secondary border border-border-light shadow-subtle hover:border-brand-secondary/40 hover:scale-110 transition-all duration-200"
          >
            {getIcon("email", "w-5 h-5")}
          </a>
        </div>
      </motion.div>
    </section>
  );
};
