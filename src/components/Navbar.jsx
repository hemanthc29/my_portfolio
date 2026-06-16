import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";

export default function Navbar({ activeSection, setActiveSection, theme, toggleTheme }) {
  const { github, linkedin } = portfolioData.personalInfo;
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Education", id: "education" },
    { label: "Certifications", id: "certifications" },
    { label: "Achievements", id: "achievements" },
    { label: "Contact", id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Scrolled background trigger
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll progress indicator
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 theme-transition ${
          isScrolled 
            ? "glassmorphism-navbar shadow-lg py-3" 
            : "bg-transparent py-5"
        }`}
      >
        {/* Scroll Progress Bar */}
        <div className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 transition-all duration-75" style={{ width: `${scrollProgress}%` }} />

        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick("home")} 
            className="flex items-center gap-2 font-display text-lg md:text-xl font-bold cursor-pointer group"
          >
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white w-8 h-8 rounded-lg flex items-center justify-center shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform duration-300">
              HK
            </span>
            <span className="font-semibold tracking-wide text-text-primary group-hover:text-purple-500 transition-colors duration-300">
              Hemanth<span className="text-purple-500 font-extrabold">.</span>
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer ${
                  activeSection === item.id 
                    ? "text-purple-500 font-semibold" 
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-purple-500 shadow-[0_0_8px_#a855f7]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop Socials & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-border-glass hover:border-purple-500/40 bg-bg-card hover:bg-bg-card-hover text-text-secondary hover:text-purple-500 transition-all duration-300 cursor-pointer text-lg flex items-center justify-center relative overflow-hidden shadow-sm"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <FiMoon className="animate-spin-slow" style={{ animationIterationCount: 1, animationDuration: '0.5s' }} />
              ) : (
                <FiSun className="animate-spin-slow" style={{ animationIterationCount: 1, animationDuration: '0.5s' }} />
              )}
            </button>

            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors duration-300 text-xl"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors duration-300 text-xl"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <button 
              onClick={() => handleNavClick("contact")}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg border border-purple-500/50 hover:bg-purple-500/10 text-purple-500 hover:text-text-primary transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.1)]"
            >
              Ping Me
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center lg:hidden gap-3">
            {/* Mobile Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-border-glass bg-bg-card text-text-secondary hover:text-purple-500 transition-all duration-300 cursor-pointer text-base flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <FiMoon /> : <FiSun />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-secondary hover:text-text-primary text-2xl p-1 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full glassmorphism border-b border-border-glass lg:hidden overflow-hidden shadow-2xl"
            >
              <div className="px-4 py-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left px-4 py-2.5 rounded-lg text-base font-medium transition-colors duration-300 ${
                      activeSection === item.id 
                        ? "bg-purple-500/10 text-purple-500 font-semibold border-l-2 border-purple-500" 
                        : "text-text-secondary hover:text-text-primary hover:bg-bg-card-hover"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                
                <div className="flex items-center justify-between border-t border-border-glass pt-4 mt-2 px-4">
                  <div className="flex gap-4">
                    <a 
                      href={github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-text-primary transition-colors duration-300 text-xl"
                      aria-label="GitHub Profile"
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href={linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-text-primary transition-colors duration-300 text-xl"
                      aria-label="LinkedIn Profile"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                  <button 
                    onClick={() => handleNavClick("contact")}
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:opacity-90 transition-opacity"
                  >
                    Contact Me
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
