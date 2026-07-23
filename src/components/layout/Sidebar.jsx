import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "../../constants/portfolioData";
import { useTheme } from "../../context/ThemeContext";
import { getIcon } from "../../utils/iconUtils";
import { HiX } from "react-icons/hi";

export const Sidebar = ({ isOpen, onClose }) => {
  const { personal } = PORTFOLIO_DATA;
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      <aside
        className={`w-72 sm:w-80 fixed top-0 left-0 h-screen z-50 bg-bg-card border-r border-border-light p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-card transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-2 rounded-full bg-bg-secondary text-text-primary hover:text-brand-primary transition-colors cursor-pointer"
          aria-label="Close Sidebar"
        >
          <HiX className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-brand-primary flex items-center justify-center bg-bg-primary/50 mb-3 sm:mb-4">
            <span className="text-3xl sm:text-4xl font-extrabold text-brand-primary tracking-tight">
              {personal.avatarInitials}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-text-primary tracking-tight">
            {personal.name}
          </h2>
          <span className="mt-1.5 sm:mt-2 inline-block px-3.5 py-0.5 text-xs font-semibold text-brand-secondary bg-brand-badge rounded-full">
            {personal.role}
          </span>

          <hr className="w-full border-border-light my-4 sm:my-5" />

          <div className="w-full space-y-3 sm:space-y-3.5 text-left">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-full bg-bg-secondary text-brand-secondary shrink-0">
                {getIcon("email", "w-4 h-4")}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-text-muted leading-tight">
                  EMAIL
                </p>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-xs font-bold text-text-primary hover:text-brand-primary transition-colors truncate block mt-0.5"
                >
                  {personal.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-full bg-bg-secondary text-brand-secondary shrink-0">
                {getIcon("phone", "w-4 h-4")}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-text-muted leading-tight">
                  PHONE
                </p>
                <p className="text-xs font-bold text-text-primary mt-0.5">
                  {personal.phone}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-full bg-bg-secondary text-brand-secondary shrink-0">
                {getIcon("location", "w-4 h-4")}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-text-muted leading-tight">
                  LOCATION
                </p>
                <p className="text-xs font-bold text-text-primary mt-0.5">
                  {personal.location}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-full bg-bg-secondary text-brand-secondary shrink-0">
                {getIcon("college", "w-4 h-4")}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-text-muted leading-tight">
                  COLLEGE
                </p>
                <p className="text-xs font-bold text-text-primary leading-snug mt-0.5">
                  {personal.college}
                </p>
              </div>
            </div>
          </div>

          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 sm:mt-6 w-full py-3 px-4 rounded-2xl bg-brand-primary hover:bg-brand-primaryHover text-white font-bold text-xs flex items-center justify-center gap-2 shadow-subtle transition-all duration-200 hover:-translate-y-0.5"
          >
            {getIcon("download", "w-4 h-4")}
            <span>Download Resume</span>
          </a>
        </div>

        {/* Updated Bottom Action Capsule with Circles */}
        <div className="mt-4 pt-4 border-t border-border-light">
          <div className="w-full bg-bg-secondary/80 rounded-full py-2 px-3 flex items-center justify-around">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-text-primary hover:scale-110 shadow-xs transition-all"
            >
              {getIcon("github", "w-4 h-4")}
            </a>

            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0A66C2] hover:scale-110 shadow-xs transition-all"
            >
              {getIcon("linkedin", "w-4 h-4")}
            </a>

            <a
              href={`mailto:${personal.email}`}
              aria-label="Send Email"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-secondary hover:scale-110 shadow-xs transition-all"
            >
              {getIcon("email", "w-4 h-4")}
            </a>

            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition-all hover:scale-110 cursor-pointer shadow-xs"
            >
              {theme === "dark" ? getIcon("sun", "w-4 h-4") : getIcon("moon", "w-4 h-4")}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};