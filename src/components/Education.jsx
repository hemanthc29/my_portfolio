import React from "react";
import { motion } from "framer-motion";
import { FiBookOpen, FiCalendar, FiAward, FiStar } from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";

export default function Education() {
  const { education } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 15 }
    }
  };

  return (
    <section id="education" className="py-14 relative overflow-hidden bg-bg-darker/10 theme-transition">
      {/* Background decoration */}
      <div className="absolute right-1/4 top-1/3 w-72 h-72 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none theme-transition" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-2 theme-transition">Academic Credentials</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary theme-transition">
            Education <span className="gradient-text">History</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Horizontal Scroll Track */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-row gap-6 overflow-x-auto pb-6 scrollbar-thin snap-x snap-mandatory w-full"
        >
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="snap-start shrink-0 w-[90%] md:w-[75%] lg:w-[48%] premium-card p-6 md:p-8 rounded-2xl relative group flex flex-col gap-4 items-start theme-transition"
            >
              {/* Decorative side accent */}
              <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-gradient-to-b from-purple-500 to-blue-500 rounded-l-2xl" />

              {/* Icon / Date Side block */}
              <div className="flex items-center gap-3 w-full">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 text-lg shadow-md shrink-0 theme-transition">
                  <FiBookOpen />
                </div>
                <div className="flex-1 flex justify-between items-center flex-wrap gap-1">
                  <span className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400 flex items-center gap-1 theme-transition">
                    <FiCalendar /> {edu.duration}
                  </span>
                  <span className="text-[10px] text-text-muted font-bold uppercase tracking-widest theme-transition">
                    {edu.location.split(',')[0]}
                  </span>
                </div>
              </div>

              {/* Info Block */}
              <div className="w-full space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg md:text-xl font-bold text-text-primary leading-tight theme-transition">
                    {edu.degree}
                  </h3>
                  <p className="text-text-secondary font-medium text-xs mt-1 theme-transition">
                    {edu.institution}
                  </p>
                </div>

                {/* Score badge */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider theme-transition">
                    <FiAward className="text-xs" />
                    <span>Academic Rank: {edu.score}</span>
                  </div>
                </div>

                {/* Achievements bullets */}
                <div className="space-y-3 border-t border-border-glass pt-4 w-full theme-transition">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-muted font-mono flex items-center gap-1.5 theme-transition">
                    <FiStar /> Focus & Major Highlights
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="text-xs text-text-secondary flex items-start gap-2 leading-relaxed theme-transition">
                        <span className="text-purple-500 mt-1 shrink-0">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
