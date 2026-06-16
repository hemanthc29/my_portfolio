import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiBookOpen, FiActivity, FiCompass } from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const { bio, stats } = portfolioData.personalInfo;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  const highlights = [
    {
      icon: <FiAward className="text-purple-400 text-xl" />,
      title: "Algorithmic Problem Solver",
      text: "6,000+ data structures and algorithms problems solved with robust consistency."
    },
    {
      icon: <FiBookOpen className="text-indigo-400 text-xl" />,
      title: "Computer Science Scholar",
      text: "Strong foundational knowledge in DBMS, Operating Systems, OOP, and System Design."
    },
    {
      icon: <FiActivity className="text-blue-400 text-xl" />,
      title: "System Optimizer",
      text: "Passionate about optimizing query latencies, scheduling constraint algorithms, and IoT pipelines."
    },
    {
      icon: <FiCompass className="text-cyan-400 text-xl" />,
      title: "End-to-End Engineer",
      text: "Experienced in integrating hardware nodes, cloud alert handlers, and web interfaces."
    }
  ];

  return (
    <section id="about" className="py-14 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute right-0 top-1/3 w-96 h-96 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none theme-transition" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-10">
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-2 theme-transition"
          >
            Get to Know Me
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl font-extrabold text-text-primary theme-transition"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Biography Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="font-display text-2xl font-bold text-text-primary theme-transition">
              SDE Candidate, Backend Systems Developer
            </h3>
            <p className="text-text-secondary leading-relaxed text-base theme-transition">
              {bio}
            </p>
            <div className="p-5 glassmorphism rounded-xl border border-purple-500/20 bg-purple-500/5 relative overflow-hidden theme-transition">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl -mr-4 -mt-4" />
              <h4 className="font-bold text-text-primary mb-2 flex items-center gap-2 theme-transition">
                <span>🎯 Career Objective</span>
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed theme-transition">
                Aiming to leverage deep algorithmic strengths, rigorous computer science fundamentals, and hands-on system building experience to secure a full-time Software Development Engineer (SDE), Backend, or Full Stack Developer role. Committed to writing clean, testable, and optimized code at scale.
              </p>
            </div>
          </motion.div>

          {/* Highlights & Cards Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="font-display text-2xl font-bold text-text-primary theme-transition">
              Why I Stand Out
            </h3>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {highlights.map((hl, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  className="p-5 premium-card rounded-xl flex flex-col items-start theme-transition"
                >
                  <div className="w-10 h-10 rounded-lg bg-bg-dark border border-border-glass flex items-center justify-center mb-4 shadow-inner theme-transition">
                    {hl.icon}
                  </div>
                  <h4 className="font-semibold text-text-primary mb-1.5 text-sm theme-transition">{hl.title}</h4>
                  <p className="text-text-muted text-xs leading-relaxed theme-transition">{hl.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section Overlay */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-10 pt-10 border-t border-border-glass theme-transition"
        >
          {stats.map((stat) => (
            <motion.div 
              key={stat.id} 
              variants={itemVariants}
              className="p-6 premium-card rounded-2xl text-center relative overflow-hidden group shadow-lg theme-transition"
            >
              {/* Top border color hover indicator */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-1 font-display tracking-tight group-hover:scale-105 transition-transform duration-300 theme-transition">
                <span className="gradient-text">{stat.value}</span>
              </h3>
              <p className="text-xs font-semibold text-text-secondary mb-1 theme-transition">{stat.label}</p>
              <p className="text-[10px] text-text-muted font-medium theme-transition">{stat.subLabel}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
