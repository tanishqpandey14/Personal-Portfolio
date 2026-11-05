import { PORTFOLIO_DATA } from "../../constants/portfolioData";
import { getIcon } from "../../utils/iconUtils";
import { SectionHeader } from "../ui/SectionHeader";

export const Skills = () => {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="scroll-mt-28">
      <SectionHeader
        title="Skills & Capabilities"
        subtitle="Languages, frameworks, databases, and modern developer tools I use."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {skills.map((category) => (
          <div key={category.category} className="glass-card rounded-3xl p-6 sm:p-7">
            <h3 className="font-display text-xl font-normal text-text-primary mb-5 pb-3 border-b border-white/10 flex items-center gap-2.5">
              <span aria-hidden="true" className="w-2 h-2 rounded-full bg-pink shadow-glow-pink" />
              {category.category}
            </h3>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {category.items.map((skill) => (
                <li
                  key={skill.name}
                  className="glass-chip flex items-center gap-3 p-3 rounded-xl"
                >
                  <span className="w-5 h-5 shrink-0 flex items-center justify-center">
                    {getIcon(skill.icon || skill.name, "w-5 h-5")}
                  </span>
                  <span className="text-sm font-semibold text-text-primary truncate">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
