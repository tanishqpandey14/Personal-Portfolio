import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { PORTFOLIO_DATA } from "../../constants/portfolioData";
import { useTheme } from "../../context/ThemeContext";
import { FaGithub } from "react-icons/fa";

export const GithubActivity = () => {
  const { theme } = useTheme();
  const githubUrl = PORTFOLIO_DATA.personal.socials.github;
  const username = githubUrl.split("/").pop() || "tanishqpandey14";

  const explicitTheme = {
    light: ["#ebedf0", "#fbcfe8", "#f472b6", "#be123c", "#800a38"],
    dark: ["#161926", "#3b0764", "#7e22ce", "#c084fc", "#f472b6"],
  };

  return (
    <section
      id="github"
      className="scroll-mt-24 lg:min-h-[calc(100vh-160px)] lg:flex lg:flex-col lg:justify-center py-6 sm:py-10"
    >
      <div className="text-center mb-6 sm:mb-8 space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-badge text-brand-secondary text-xs sm:text-sm font-bold mb-1">
          <FaGithub className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>Contributions</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
          GitHub Activity
        </h2>
        <p className="text-text-secondary text-xs sm:text-sm max-w-md mx-auto px-2">
          A snapshot of my open-source code contributions and daily coding streak.
        </p>
      </div>

      <div className="w-full bg-bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-border-light shadow-card flex flex-col items-center justify-center overflow-x-auto custom-scrollbar">
        <div className="min-w-max flex justify-center">
          <GitHubCalendar
            username={username}
            colorScheme={theme === "dark" ? "dark" : "light"}
            theme={explicitTheme}
            blockSize={11}
            blockMargin={3}
            fontSize={11}
          />
        </div>
      </div>
    </section>
  );
};