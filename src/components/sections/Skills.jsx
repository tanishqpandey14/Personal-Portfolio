import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../constants/portfolioData";
import { getIcon } from "../../utils/iconUtils";

export const Skills = () => {
  const { skills } = PORTFOLIO_DATA;

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="scroll-mt-28">
      {/* Section Header */}
      <div className="text-center mb-10 space-y-2">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
          Skills & Capabilities
        </h2>
        <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto">
          Languages, frameworks, databases, and modern developer tools I utilize.
        </p>
      </div>

      {/* 2x2 Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {skills.map((category) => (
          <motion.div
            key={category.category}
            variants={cardVariants}
            className="bg-bg-card rounded-3xl p-6 border border-border-light shadow-card flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-4 pb-2 border-b border-border-light">
                {category.category}
              </h3>

              {/* Skill Pills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-bg-secondary/60 hover:bg-bg-secondary border border-border-light/50 transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                  >
                    <div className="w-5 h-5 shrink-0 flex items-center justify-center">
                      {getIcon(skill.icon || skill.name, "w-5 h-5")}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-text-primary truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};