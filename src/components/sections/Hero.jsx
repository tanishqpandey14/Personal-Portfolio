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
      className="scroll-mt-24 min-h-[calc(100vh-160px)] flex flex-col justify-center items-center py-6 px-4"
    >
      {/* ==========================================
        COMPACT HERO CARD
        ========================================== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-4xl mx-auto rounded-4xl bg-bg-card border border-border-light shadow-md px-6 pt-8 pb-5 sm:px-10 sm:pt-10 sm:pb-6 text-center space-y-5 sm:space-y-6 relative overflow-hidden transition-all duration-300"
      >
        {/* Soft Background Accent Glow inside the card */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-linear-to-b from-brand-primary/10 via-brand-secondary/5 to-transparent blur-2xl pointer-events-none rounded-full" />

        {/* Main Title & Headline */}
        <div className="relative z-10 space-y-2">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-text-primary leading-tight">
            Hello, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-primary via-brand-secondary to-brand-accent">
              {personal.name}
            </span>
          </h1>
          <p className="text-lg sm:text-xl font-bold text-brand-secondary">
            {personal.tagline || "Full Stack Developer"}
          </p>
        </div>

        {/* Bio Paragraph */}
        <p className="relative z-10 text-text-secondary text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          {personal.bio}
        </p>

        {/* Action Buttons */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
          {/* View My Work Button */}
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-primary hover:bg-brand-primary/90 text-white font-medium text-sm transition-all shadow-sm flex items-center justify-center gap-2 group"
          >
            <span>View My Work</span>
            <span className="text-base transition-transform group-hover:translate-x-0.5">→</span>
          </a>

          {/* Download Resume Button */}
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-bg-primary hover:bg-bg-primary/80 text-text-primary border border-border-medium font-medium text-sm transition-all shadow-2xs flex items-center justify-center gap-2"
          >
            <span>Download Resume</span>
            {getIcon("download", "w-4 h-4 text-brand-secondary")}
          </a>
        </div>

        {/* Social Links Row (Compact Padding) */}
        <div className="relative z-10 flex items-center justify-center gap-3.5 pt-4 pb-1 border-t border-border-light/60">
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-full bg-bg-primary hover:bg-bg-primary/80 text-text-primary border border-border-light shadow-2xs hover:scale-110 transition-all duration-200"
          >
            {getIcon("github", "w-4 h-4")}
          </a>

          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-full bg-bg-primary hover:bg-bg-primary/80 text-[#0A66C2] border border-border-light shadow-2xs hover:scale-110 transition-all duration-200"
          >
            {getIcon("linkedin", "w-4 h-4")}
          </a>

          <a
            href={`mailto:${personal.email}`}
            aria-label="Email Me"
            className="p-2.5 rounded-full bg-bg-primary hover:bg-bg-primary/80 text-brand-secondary border border-border-light shadow-2xs hover:scale-110 transition-all duration-200"
          >
            {getIcon("email", "w-4 h-4")}
          </a>
        </div>
      </motion.div>
    </section>
  );
};