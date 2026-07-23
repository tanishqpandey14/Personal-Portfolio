import React from "react";
import { PORTFOLIO_DATA } from "../../constants/portfolioData";
import { useActiveSection } from "../../hooks/useActiveSection";
import { HiMenuAlt2 } from "react-icons/hi";

export const Navbar = ({ onOpenSidebar }) => {
  const sectionIds = ["hero", "about", "skills", "education", "projects", "github", "contact"];
  const activeSection = useActiveSection(sectionIds, 180);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed top-2 sm:top-6 left-0 lg:left-80 right-0 z-30 flex items-center justify-center px-2 sm:px-4 pointer-events-none">
      <div className="flex items-center gap-1.5 max-w-full pointer-events-auto">
        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={onOpenSidebar}
          className="lg:hidden p-2 rounded-full bg-bg-card/90 backdrop-blur-md border border-border-light shadow-card text-brand-primary hover:bg-bg-secondary transition-all shrink-0 cursor-pointer"
          aria-label="Open Sidebar"
        >
          <HiMenuAlt2 className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Floating Nav Capsule */}
        <nav className="bg-bg-glass backdrop-blur-md border border-border-light shadow-glass rounded-full px-2 py-1 sm:px-6 sm:py-3 flex items-center gap-1 sm:gap-3 overflow-x-auto no-scrollbar max-w-[calc(100vw-70px)] sm:max-w-max">
          {PORTFOLIO_DATA.navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-2.5 sm:px-5 py-1 sm:py-2 rounded-full text-xs sm:text-base font-semibold transition-all duration-200 whitespace-nowrap shrink-0 ${
                  isActive
                    ? "bg-brand-badge text-brand-secondary shadow-xs"
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-secondary/50"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
};