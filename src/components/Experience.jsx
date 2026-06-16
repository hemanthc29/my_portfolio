import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  const { experience } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  };

  return (
    <section id="experience" className="py-14 relative overflow-hidden bg-bg-darker/10 theme-transition">
      {/* Background blobs */}
      <div className="absolute left-1/3 top-1/4 w-80 h-80 rounded-full bg-purple-500/5 blur-[100px] pointer-events-none theme-transition" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-2 theme-transition">Professional Journey</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary theme-transition">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative border-l border-border-glass ml-4 md:ml-32 py-4 space-y-12 theme-transition"
        >
          {experience.map((exp, idx) => (
            <motion.div key={idx} variants={cardVariants} className="relative pl-6 md:pl-8">
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-1.5 w-4.5 h-4.5 rounded-full bg-bg-darker border-2 border-purple-500 flex items-center justify-center z-10 shadow-[0_0_8px_rgba(168,85,247,0.5)] theme-transition">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              </div>

              {/* Float duration left (on desktop) */}
              <div className="hidden md:block absolute -left-40 top-1.5 w-32 text-right">
                <span className="text-xs font-bold font-mono text-purple-600 dark:text-purple-400 flex items-center justify-end gap-1.5 theme-transition">
                  <FiCalendar /> {exp.duration.split('|')[0]}
                </span>
                <span className="block text-[10px] text-text-muted font-semibold uppercase mt-0.5 theme-transition">{exp.type}</span>
              </div>

              {/* Experience Card */}
              <div
                className="premium-card p-6 md:p-8 rounded-2xl relative group theme-transition"
              >
                {/* Accent glow corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-transparent rounded-tr-2xl blur-xl" />

                {/* Job Title */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-text-primary group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors theme-transition">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-text-muted text-sm mt-1 theme-transition">
                      <span className="font-semibold text-text-secondary">{exp.company}</span>
                      <span className="text-text-muted">•</span>
                      <span className="text-xs bg-bg-dark border border-border-glass text-purple-600 dark:text-purple-400 px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold theme-transition">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  {/* Mobile Duration */}
                  <div className="md:hidden flex items-center gap-1.5 text-xs font-mono text-purple-600 dark:text-purple-400 theme-transition">
                    <FiCalendar /> {exp.duration}
                  </div>
                </div>

                {/* Brief description */}
                <p className="text-text-muted text-sm mb-6 italic border-l-2 border-border-glass pl-3 theme-transition">
                  {exp.description}
                </p>

                {/* Achievements Checklist */}
                <ul className="space-y-3">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed theme-transition">
                      <FiCheckCircle className="text-purple-500 mt-1 shrink-0 text-base" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
