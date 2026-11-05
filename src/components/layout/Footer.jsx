import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineChevronUp } from "react-icons/hi";
import { PORTFOLIO_DATA } from "../../constants/portfolioData";

export const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="mt-20 sm:mt-28 pt-6 pb-10 border-t border-white/10 text-center">
      <p className="px-4 text-xs sm:text-sm text-text-muted">
        © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}
      </p>

      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 grid place-items-center w-11 h-11 rounded-full bg-lime text-black shadow-glow-lime hover:-translate-y-0.5 transition-transform duration-200 cursor-pointer"
          >
            <HiOutlineChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};
