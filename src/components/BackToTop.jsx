import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const isModalActive = document.body.classList.contains("modal-open") || 
                            document.body.style.overflow === "hidden";
      if (window.scrollY > 300 && !isModalActive) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    
    // Listen to changes on body's class and style attributes
    const observer = new MutationObserver(toggleVisibility);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class", "style"] });

    // Initial check
    toggleVisibility();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-purple-600/90 text-white shadow-lg shadow-purple-600/20 hover:bg-purple-600 border border-purple-500/30 transition-colors flex items-center justify-center cursor-pointer hover:scale-105"
          aria-label="Scroll to top"
        >
          <FiArrowUp className="text-xl" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
