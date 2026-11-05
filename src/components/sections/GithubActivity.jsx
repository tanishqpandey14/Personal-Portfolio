import { GitHubCalendar } from "react-github-calendar";
import { FaGithub } from "react-icons/fa";
import { PORTFOLIO_DATA } from "../../constants/portfolioData";
import { SectionHeader } from "../ui/SectionHeader";

// Contribution scale: empty → deep pink → hot pink → soft pink → lime (peak days)
const calendarTheme = {
  dark: ["#17171a", "#5a1038", "#b3175f", "#ff2e93", "#d6ff1f"],
};

export const GithubActivity = () => {
  const githubUrl = PORTFOLIO_DATA.personal.socials.github;
  const username = githubUrl.split("/").pop() || "tanishqpandey14";

  return (
    <section id="github" className="scroll-mt-28">
      <SectionHeader
        title="GitHub Activity"
        icon={<FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />}
        subtitle="A snapshot of my code contributions and daily coding streak."
      />

      <div className="glass-card rounded-3xl p-4 sm:p-8 overflow-x-auto no-scrollbar">
        <div className="min-w-max flex justify-center">
          <GitHubCalendar
            username={username}
            colorScheme="dark"
            theme={calendarTheme}
            blockSize={11}
            blockMargin={3}
            fontSize={12}
            style={{ color: "var(--color-text-secondary)" }}
          />
        </div>
      </div>
    </section>
  );
};
