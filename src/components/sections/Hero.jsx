import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../constants/portfolioData";
import { getIcon } from "../../utils/iconUtils";

// The one orchestrated moment on the page: staggered entrance on load.
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const rise = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const socialClass =
  "glass-chip grid place-items-center w-10 h-10 rounded-full text-text-primary hover:text-lime hover:border-lime/50 hover:-translate-y-0.5 transition-all duration-200";

export const Hero = () => {
  const { personal, hero } = PORTFOLIO_DATA;
  const [firstName, ...rest] = personal.name.split(" ");
  const lastName = rest.join(" ");

  const scrollToProjects = (e) => {
    e.preventDefault();
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="scroll-mt-24 min-h-[calc(100vh-9rem)] flex items-center py-4 sm:py-8"
    >
      <div className="w-full">
        {/* ---------- Copy ---------- */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="space-y-6 max-w-3xl"
        >
          <motion.div variants={rise}>
            <p className="text-base sm:text-lg text-text-secondary font-medium mb-2">
              {hero.greeting}
            </p>
            <h1 className="font-display font-normal tracking-tight leading-[0.9] text-text-primary text-7xl sm:text-8xl xl:text-[9.5rem]">
              <span className="block">{firstName}</span>
              <span className="block">{lastName}</span>
            </h1>
          </motion.div>

          <motion.p variants={rise} className="text-xl sm:text-2xl font-semibold text-pink">
            {hero.title}
          </motion.p>

          <motion.p
            variants={rise}
            className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl"
          >
            {hero.description}
          </motion.p>

          <motion.div variants={rise} className="flex flex-col sm:flex-row gap-3 pt-1">
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="px-6 py-3 rounded-xl bg-pink text-black font-bold text-sm flex items-center justify-center hover:shadow-glow-pink hover:-translate-y-0.5 transition-all duration-200"
            >
              View my work
            </a>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-chip px-6 py-3 rounded-xl text-text-primary font-bold text-sm flex items-center justify-center gap-2 hover:border-lime/50 hover:text-lime transition-colors duration-200"
            >
              {getIcon("download", "w-4 h-4")}
              Download resume
            </a>
          </motion.div>

          <motion.div variants={rise} className="flex items-center gap-3 pt-1">
            <a href={personal.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className={socialClass}>
              {getIcon("github", "w-4 h-4")}
            </a>
            <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className={socialClass}>
              {getIcon("linkedin", "w-4 h-4")}
            </a>
            <a href={`mailto:${personal.email}`} aria-label="Email me" className={socialClass}>
              {getIcon("email", "w-4 h-4")}
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
