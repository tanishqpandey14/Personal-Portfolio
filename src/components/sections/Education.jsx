import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../constants/portfolioData";
import { getIcon } from "../../utils/iconUtils";

export const Education = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="scroll-mt-24 lg:min-h-[calc(100vh-160px)] lg:flex lg:flex-col lg:justify-center py-6 sm:py-10">
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <div className="p-2 sm:p-2.5 rounded-2xl bg-brand-badge text-brand-secondary">
          {getIcon("college", "w-5 h-5 sm:w-6 sm:h-6")}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
          Education
        </h2>
      </div>

      <div className="relative pl-5 sm:pl-8 space-y-6 sm:space-y-8 before:absolute before:left-2 before:sm:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-border-medium">
        {education.map((item) => (
          <div key={item.id} className="relative flex flex-col gap-2">
            <div className="absolute -left-5 sm:-left-7.25 top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-bg-card border-2 border-brand-secondary ring-4 ring-bg-primary flex items-center justify-center">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-brand-secondary"></div>
            </div>
            <div className="bg-bg-card hover:bg-bg-cardHover rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-border-light shadow-subtle transition-all duration-200">
              <h3 className="text-base sm:text-xl font-bold text-text-primary leading-snug">
                {item.institution}
              </h3>
              <p className="text-[11px] sm:text-xs font-semibold text-brand-secondary mt-1">
                {item.period}
              </p>
              <p className="text-xs sm:text-sm text-text-secondary mt-2">
                {item.degree}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};