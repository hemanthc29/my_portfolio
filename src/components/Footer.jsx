import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const { fullName, email, phone, github, linkedin } = portfolioData.personalInfo;
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border-glass bg-bg-dark py-12 relative overflow-hidden theme-transition">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative z-10">
        
        {/* Brand Block */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white w-7 h-7 rounded-lg flex items-center justify-center shadow-md">
              HK
            </span>
            <span className="font-semibold text-text-primary theme-transition">Hemanth</span>
          </div>
          <p className="text-text-muted text-xs leading-relaxed max-w-xs theme-transition">
            Software Development Engineer (SDE) undergraduate. Specialized in optimization algorithms, backend databases, and robust full stack systems.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-muted font-mono theme-transition">Quick Navigation</h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <button onClick={() => handleLinkClick("home")} className="text-text-secondary hover:text-purple-500 dark:hover:text-purple-400 text-left transition-colors cursor-pointer theme-transition">Home</button>
            <button onClick={() => handleLinkClick("about")} className="text-text-secondary hover:text-purple-400 text-left transition-colors cursor-pointer theme-transition">About</button>
            <button onClick={() => handleLinkClick("skills")} className="text-text-secondary hover:text-purple-400 text-left transition-colors cursor-pointer theme-transition">Skills</button>
            <button onClick={() => handleLinkClick("experience")} className="text-text-secondary hover:text-purple-400 text-left transition-colors cursor-pointer theme-transition">Experience</button>
            <button onClick={() => handleLinkClick("projects")} className="text-text-secondary hover:text-purple-400 text-left transition-colors cursor-pointer theme-transition">Projects</button>
            <button onClick={() => handleLinkClick("education")} className="text-text-secondary hover:text-purple-400 text-left transition-colors cursor-pointer theme-transition">Education</button>
            <button onClick={() => handleLinkClick("certifications")} className="text-text-secondary hover:text-purple-400 text-left transition-colors cursor-pointer theme-transition">Certificates</button>
            <button onClick={() => handleLinkClick("contact")} className="text-text-secondary hover:text-purple-400 text-left transition-colors cursor-pointer theme-transition">Contact</button>
          </div>
        </div>

        {/* Socials / Copyright */}
        <div className="space-y-4">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-muted font-mono theme-transition">Contact Info</h4>
          <div className="space-y-2 text-xs text-text-secondary theme-transition">
            <p className="flex items-center gap-2">📧 <span>{email}</span></p>
            <p className="flex items-center gap-2">📞 <span>{phone}</span></p>
          </div>
          <div className="flex items-center gap-3 text-text-muted theme-transition">
            <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 dark:hover:text-purple-400 text-base transition-colors" aria-label="GitHub"><FaGithub /></a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 dark:hover:text-purple-400 text-base transition-colors" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 pt-6 border-t border-border-glass flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-text-muted font-mono theme-transition">
        <p>© {currentYear} Chennuru Venkata Hemanth Kumar. All rights reserved.</p>
        <p>Built with React, TailwindCSS & Framer Motion</p>
      </div>
    </footer>
  );
}
