import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineChevronUp } from "react-icons/hi";

export const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-12 sm:mt-20 pt-6 sm:pt-8 pb-10 border-t border-border-light text-center relative">
      <div className="flex items-center justify-center px-4 text-xs sm:text-sm text-text-muted">
        <p>© 2026 Tanishq Pandey. All rights reserved.</p>
      </div>

      {/* Floating Back-to-Top Button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 p-2.5 sm:p-3 rounded-full bg-brand-primary hover:bg-brand-primaryHover text-white shadow-card transition-colors duration-200 cursor-pointer"
          >
            <HiOutlineChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};