import React from "react";
import { motion } from "framer-motion";
import { FiDownload, FiMail, FiArrowRight } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImg from "../assets/profile.jpg";
import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const { fullName, title, summary, github, linkedin, resumeUrl } = portfolioData.personalInfo;

  const scrollToSection = (id) => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const photoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 }
    }
  };

  return (
    <section id="home" className="relative min-h-[70vh] md:min-h-[80vh] flex items-center pt-20 pb-12 overflow-hidden">
      {/* Background Animated Blobs */}
      <div className="absolute top-1/4 left-1/10 w-72 md:w-96 h-72 md:h-96 rounded-full bg-purple-600/10 blur-[80px] md:blur-[120px] animate-blob-slow pointer-events-none theme-transition" />
      <div className="absolute bottom-1/4 right-1/10 w-80 md:w-[450px] h-80 md:h-[450px] rounded-full bg-blue-600/10 blur-[90px] md:blur-[140px] animate-blob-medium pointer-events-none theme-transition" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-bg-darker-val)_100%)] pointer-events-none theme-transition" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Area */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
        >
          {/* Greeting Tag */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glassmorphism text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-300 border border-purple-500/20 mb-6 theme-transition"
          >
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
            <span>💼 Open for SDE Roles</span>
          </motion.div>
 
          {/* Name */}
          <motion.h1 
            variants={itemVariants}
            className="font-display text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-text-primary mb-4 leading-none theme-transition"
          >
            👋 Hi, I'm <span className="gradient-text">{fullName}</span>
          </motion.h1>
 
          {/* Subtitle / Title */}
          <motion.h2 
            variants={itemVariants}
            className="text-lg md:text-2xl font-semibold text-text-secondary mb-6 font-display theme-transition"
          >
            {title}
          </motion.h2>
 
          {/* Bio Summary */}
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-text-muted max-w-xl leading-relaxed mb-8 theme-transition"
          >
            {summary}
          </motion.p>
 
          {/* Call-to-actions */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-medium hover:opacity-95 shadow-lg shadow-purple-600/20 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
            >
              <span>💻 View My Projects</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
 
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3.5 rounded-xl border border-border-glass hover:border-purple-500/50 bg-bg-card hover:bg-bg-card-hover text-text-secondary hover:text-text-primary font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer theme-transition"
            >
              <FiMail />
              <span>📧 Contact Me</span>
            </button>
 
            <a
              href={resumeUrl}
              download="Resume_SE_Chennuru_Venkata_Hemanth_Kumar.pdf"
              className="px-6 py-3.5 rounded-xl bg-bg-card border border-purple-500/20 hover:border-purple-500/50 hover:bg-bg-card-hover text-purple-600 dark:text-purple-300 hover:text-purple-500 dark:hover:text-purple-200 font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer theme-transition"
            >
              <FiDownload />
              <span>📄 Download Resume</span>
            </a>
          </motion.div>

          {/* Social Quick Links */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-5 pt-4 border-t border-border-glass w-full justify-center lg:justify-start text-text-muted theme-transition"
          >
            <span className="text-sm font-semibold tracking-wider text-text-muted uppercase">Connect:</span>
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-purple-500 dark:hover:text-purple-400 text-xl transition-colors duration-300"
              aria-label="GitHub Link"
            >
              <FaGithub />
            </a>
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-purple-500 dark:hover:text-purple-400 text-xl transition-colors duration-300"
              aria-label="LinkedIn Link"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Image Area */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            variants={photoVariants}
            initial="hidden"
            animate="visible"
            className="relative group cursor-pointer"
          >
            {/* Background elements for photo */}
            {/* 1. Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-2xl opacity-25 dark:opacity-35 blur-2xl group-hover:opacity-60 group-hover:scale-110 transition-all duration-700 ease-out theme-transition" />
            
            {/* 2. Spinning decorative frame */}
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-purple-500 to-blue-500 opacity-60 animate-spin-slow group-hover:animate-spin-fast transition-all duration-700 ease-out" />

            {/* 3. Glowing border outline gap */}
            <div className="absolute -inset-[3px] rounded-2xl bg-bg-darker theme-transition" />

            {/* 4. Profile Frame */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl bg-bg-dark border border-border-glass group-hover:border-purple-500/40 transition-all duration-500 ease-out theme-transition">
              <img 
                src={profileImg} 
                alt={fullName}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-750 ease-out"
                loading="eager"
              />
              {/* Glass overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-darker via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-out theme-transition" />
            </div>

            {/* Decorative Card Stats Overlay 1 (DSA Solved) */}
            <div className="absolute -bottom-6 -left-6 glassmorphism p-3 rounded-lg border border-purple-500/30 flex items-center gap-3 shadow-xl hidden md:flex animate-float group-hover:scale-105 group-hover:border-purple-500/60 group-hover:shadow-purple-500/10 transition-all duration-500 theme-transition" style={{ animationDelay: '1s' }}>
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 dark:text-purple-400 text-lg font-bold">
                🚀
              </div>
              <div>
                <p className="text-[10px] text-text-muted uppercase tracking-widest leading-none">DSA solved</p>
                <h4 className="text-sm font-bold text-text-primary leading-tight mt-1">6,000+ Questions</h4>
              </div>
            </div>

            {/* Decorative Card Stats Overlay 2 (Consistency) */}
            <div className="absolute -top-6 -right-6 glassmorphism p-3 rounded-lg border border-blue-500/30 flex items-center gap-3 shadow-xl hidden md:flex animate-float group-hover:scale-105 group-hover:border-blue-500/60 group-hover:shadow-blue-500/10 transition-all duration-500 theme-transition" style={{ animationDelay: '3s' }}>
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 dark:text-blue-400 text-lg font-bold">
                ⭐
              </div>
              <div>
                <p className="text-[10px] text-text-muted uppercase tracking-widest leading-none">Consistency</p>
                <h4 className="text-sm font-bold text-text-primary leading-tight mt-1">250+ Day Streak</h4>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
