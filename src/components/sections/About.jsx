import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../constants/portfolioData";
import { getIcon } from "../../utils/iconUtils";

export const About = () => {
  const { about } = PORTFOLIO_DATA;

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.15,
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
    <section id="about" className="scroll-mt-28">
      {/* Section Header */}
      <div className="text-center mb-10 space-y-2">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
          {about.heading}
        </h2>
        <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto">
          {about.subheading}
        </p>
      </div>

      {/* Two-Column Grid Layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
      >
        {/* Left Column: Bio Card */}
        <motion.div
          variants={cardVariants}
          className="lg:col-span-7 bg-bg-card rounded-3xl p-6 sm:p-8 border border-border-light shadow-card flex flex-col justify-between space-y-6"
        >
          <div className="space-y-4 text-text-secondary text-sm sm:text-base leading-relaxed">
            <p>
              I am a{" "}
              <strong className="text-text-primary font-semibold">
                Full Stack Developer
              </strong>{" "}
              passionate about building modern web applications and AI-powered
              projects.
            </p>
            <p>
              Skilled in{" "}
              <strong className="text-text-primary font-semibold">
                Java, Python, HTML, CSS, and JavaScript
              </strong>
              , with a current focus on{" "}
              <strong className="text-brand-secondary font-semibold">
                Node.js + AI projects
              </strong>
              , backend development, and problem-solving using Java.
            </p>
            <p>
              Whether I'm engineering robust backend services or exploring AI
              workflows, my goal is always to deliver smooth user experiences
              backed by solid engineering.
            </p>
          </div>
        </motion.div>

        {/* Right Column: 3 Feature Cards */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {about.features.map((feature) => {
            let iconKey = feature.id || feature.title;

            return (
              <motion.div
                key={feature.id}
                variants={cardVariants}
                className="bg-bg-card hover:bg-bg-cardHover rounded-2xl p-5 border border-border-light shadow-subtle transition-all duration-200 hover:-translate-y-1 flex items-start gap-4"
              >
                <div className="p-3 rounded-2xl bg-brand-badge text-brand-secondary shrink-0">
                  {getIcon(iconKey, "w-5 h-5")}
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-normal">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};