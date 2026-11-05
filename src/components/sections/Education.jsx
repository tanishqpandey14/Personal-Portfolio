import { PORTFOLIO_DATA } from "../../constants/portfolioData";
import { getIcon } from "../../utils/iconUtils";
import { SectionHeader } from "../ui/SectionHeader";

export const Education = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="scroll-mt-28">
      <SectionHeader
        title="Education"
        icon={getIcon("college", "w-5 h-5 sm:w-6 sm:h-6")}
        subtitle="Where I've studied and what I've been studying."
      />

      {/* A real sequence, so a real timeline: pink at the start, lime at "now" */}
      <ol className="relative space-y-5 sm:space-y-6">
        <span
          aria-hidden="true"
          className="absolute left-2 top-4 bottom-4 w-0.5 rounded-full bg-linear-to-b from-pink to-lime opacity-70"
        />
        {education.map((item) => (
          <li key={item.id} className="relative pl-9 sm:pl-11">
            <span
              aria-hidden="true"
              className="absolute left-px top-7 w-4 h-4 rounded-full bg-bg-primary border-2 border-pink shadow-glow-pink"
            />
            <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6">
              <h3 className="font-display text-xl sm:text-2xl font-normal text-text-primary leading-snug">
                {item.institution}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-lime mt-1.5">{item.period}</p>
              <p className="text-sm text-text-secondary mt-3">{item.degree}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
