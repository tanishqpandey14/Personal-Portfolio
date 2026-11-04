import { PORTFOLIO_DATA } from "../../constants/portfolioData";
import { getIcon } from "../../utils/iconUtils";
import { SectionHeader } from "../ui/SectionHeader";

export const About = () => {
  const { about } = PORTFOLIO_DATA;
  const strong = "text-text-primary font-semibold";

  return (
    <section id="about" className="scroll-mt-28">
      <SectionHeader title={about.heading} subtitle={about.subheading} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
        {/* Bio */}
        <div className="glass-card lg:col-span-7 rounded-3xl p-6 sm:p-9 flex items-center">
          <div className="space-y-5 text-text-secondary text-base sm:text-lg leading-relaxed">
            <p>
              I am a <strong className={strong}>Full Stack Developer</strong> passionate
              about building modern web applications and AI-powered projects.
            </p>
            <p>
              Skilled in <strong className={strong}>Java, Python, HTML, CSS, and JavaScript</strong>,
              with a current focus on{" "}
              <strong className="text-lime font-semibold">Node.js + AI projects</strong>,
              backend development, and problem-solving using Java.
            </p>
            <p>
              Whether I&apos;m engineering robust backend services or exploring AI
              workflows, my goal is always to deliver smooth user experiences backed by
              solid engineering.
            </p>
          </div>
        </div>

        {/* Focus areas */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {about.features.map((feature) => (
            <div
              key={feature.id}
              className="glass-card rounded-2xl p-5 flex items-start gap-4 flex-1"
            >
              <div className="grid place-items-center w-11 h-11 rounded-xl bg-lime/10 border border-lime/25 text-lime shrink-0">
                {getIcon(feature.id || feature.title, "w-5 h-5")}
              </div>
              <div className="space-y-1">
                <h3 className="font-display text-lg sm:text-xl font-normal text-text-primary leading-snug">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-secondary leading-normal">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
