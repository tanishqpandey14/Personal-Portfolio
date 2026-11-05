import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import { PORTFOLIO_DATA } from "../../constants/portfolioData";
import { getIcon } from "../../utils/iconUtils";

const ContactRow = ({ icon, label, children, align = "center" }) => (
  <div className={`flex ${align === "start" ? "items-start" : "items-center"} gap-3`}>
    <div className="glass-chip grid place-items-center w-9 h-9 rounded-full text-lime shrink-0">
      {getIcon(icon, "w-4 h-4")}
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-[11px] font-medium text-text-muted leading-tight">{label}</p>
      {children}
    </div>
  </div>
);

const socialClass =
  "glass-chip grid place-items-center w-9 h-9 rounded-full text-text-primary hover:text-lime hover:border-lime/50 hover:-translate-y-0.5 transition-all duration-200";

export const Sidebar = ({ isOpen, onClose }) => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Floating glass panel on desktop, slide-in drawer on mobile */}
      <aside
        className={`glass-panel fixed overflow-hidden inset-y-0 left-0 lg:inset-y-3 lg:left-3 w-72 sm:w-80 z-50 rounded-r-3xl lg:rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-pink/20 blur-3xl"
        />
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 glass-chip grid place-items-center w-8 h-8 rounded-full text-text-primary hover:text-pink transition-colors cursor-pointer"
          aria-label="Close sidebar"
        >
          <HiX className="w-4 h-4" />
        </button>

        <div className="flex flex-col items-center text-center min-h-0 overflow-y-auto no-scrollbar">
          {/* Avatar: gradient ring around initials */}
          <div className="p-0.5 rounded-full bg-linear-to-br from-pink via-pink-soft to-lime shadow-glow-pink mb-4">
            <div className="grid place-items-center w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-bg-primary">
              <span className="font-display text-4xl sm:text-5xl font-normal text-text-primary tracking-tight">
                {personal.avatarInitials}
              </span>
            </div>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-normal text-text-primary tracking-tight">
            {personal.name}
          </h2>
          <span className="mt-2 inline-block px-3.5 py-1 text-xs font-semibold text-lime bg-lime/10 border border-lime/30 rounded-full">
            {personal.role}
          </span>

          <hr className="w-full border-white/10 my-5" />

          <div className="w-full space-y-3.5 text-left">
            <ContactRow icon="email" label="Email">
              <a
                href={`mailto:${personal.email}`}
                className="text-[13px] font-medium text-text-primary hover:text-pink transition-colors break-all block mt-0.5"
              >
                {personal.email}
              </a>
            </ContactRow>
            <ContactRow icon="phone" label="Phone">
              <p className="text-[13px] font-medium text-text-primary mt-0.5">{personal.phone}</p>
            </ContactRow>
            <ContactRow icon="location" label="Location">
              <p className="text-[13px] font-medium text-text-primary mt-0.5">{personal.location}</p>
            </ContactRow>
            <ContactRow icon="college" label="College" align="start">
              <p className="text-[13px] font-medium text-text-primary leading-snug mt-0.5">
                {personal.college}
              </p>
            </ContactRow>
          </div>

          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full py-2.5 px-4 rounded-xl bg-pink text-black font-bold text-sm flex items-center justify-center gap-2 hover:shadow-glow-pink hover:-translate-y-0.5 transition-all duration-200"
          >
            {getIcon("download", "w-4 h-4")}
            <span>Download resume</span>
          </a>
        </div>

        {/* Social capsule */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="glass-chip rounded-full py-2 px-4 flex items-center justify-around">
            <a href={personal.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className={socialClass}>
              {getIcon("github", "w-4 h-4")}
            </a>
            <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className={socialClass}>
              {getIcon("linkedin", "w-4 h-4")}
            </a>
            <a href={`mailto:${personal.email}`} aria-label="Send email" className={socialClass}>
              {getIcon("email", "w-4 h-4")}
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};
