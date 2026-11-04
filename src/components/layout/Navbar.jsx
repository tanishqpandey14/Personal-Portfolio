import { useEffect, useRef } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { PORTFOLIO_DATA } from "../../constants/portfolioData";
import { useActiveSection } from "../../hooks/useActiveSection";

const { navLinks } = PORTFOLIO_DATA;
// Module-level so the array identity is stable between renders
const SECTION_IDS = ["hero", ...navLinks.map((l) => l.href.replace("#", ""))];

export const Navbar = ({ onOpenSidebar }) => {
  const activeSection = useActiveSection(SECTION_IDS, 180);
  const navRef = useRef(null);

  // Keep the active link centred when the pill has to scroll sideways
  useEffect(() => {
    const nav = navRef.current;
    const active = nav?.querySelector('[aria-current="true"]');
    if (!nav || !active) return;
    nav.scrollTo({
      left: active.offsetLeft - nav.clientWidth / 2 + active.clientWidth / 2,
      behavior: "smooth",
    });
  }, [activeSection]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    document
      .getElementById(href.replace("#", ""))
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed top-3 sm:top-5 left-0 right-0 lg:left-88 lg:right-10 z-30 flex items-center justify-center px-3 sm:px-4 pointer-events-none">
      <div className="flex items-center gap-2 max-w-full pointer-events-auto">
        {/* Mobile hamburger */}
        <button
          onClick={onOpenSidebar}
          className="glass lg:hidden grid place-items-center w-10 h-10 rounded-full text-text-primary hover:text-lime transition-colors shrink-0 cursor-pointer"
          aria-label="Open sidebar"
        >
          <HiMenuAlt2 className="w-5 h-5" />
        </button>

        {/* Floating glass capsule */}
        <nav
          ref={navRef}
          aria-label="Sections"
          className="glass relative rounded-full p-1 sm:p-1.5 flex items-center gap-0.5 sm:gap-1 overflow-x-auto no-scrollbar max-w-[calc(100vw-4.5rem)] lg:max-w-full"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                aria-current={isActive ? "true" : undefined}
                className={`px-3 sm:px-4 lg:px-3 xl:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm lg:text-[13px] xl:text-sm font-semibold whitespace-nowrap shrink-0 transition-colors duration-200 ${
                  isActive
                    ? "bg-pink text-black shadow-glow-pink"
                    : "text-text-secondary hover:text-text-primary hover:bg-white/10"
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
