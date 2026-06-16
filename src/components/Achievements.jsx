import React from "react";
import { motion } from "framer-motion";
import { FiTrendingUp, FiUsers, FiCpu, FiAward } from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";

export default function Achievements() {
  const { achievements } = portfolioData;

  const getIcon = (category) => {
    switch (category) {
      case "Coding Profile":
        return <FiCpu className="text-purple-400 text-2xl" />;
      case "Leadership":
        return <FiUsers className="text-blue-400 text-2xl" />;
      case "Sports":
        return <FiAward className="text-amber-400 text-2xl" />;
      default:
        return <FiTrendingUp className="text-purple-400 text-2xl" />;
    }
  };

  const getBorderGlow = (category) => {
    switch (category) {
      case "Coding Profile": return "hover:border-purple-500/30 hover:shadow-purple-500/5";
      case "Leadership": return "hover:border-blue-500/30 hover:shadow-blue-500/5";
      case "Sports": return "hover:border-amber-500/30 hover:shadow-amber-500/5";
      default: return "hover:border-purple-500/30";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <section id="achievements" className="py-14 relative overflow-hidden bg-bg-darker/10 theme-transition">
      {/* Background decoration */}
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none theme-transition" />
      <div className="absolute left-0 top-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none theme-transition" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-2 theme-transition">Milestones & Accolades</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary theme-transition">
            Honors & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Achievements Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="premium-card p-6 md:p-8 rounded-2xl flex items-start gap-5 relative group theme-transition"
            >
              {/* Radial gradient corners */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-border-glass to-transparent rounded-tr-2xl pointer-events-none" />

              {/* Icon Panel */}
              <div className="w-12 h-12 rounded-xl bg-bg-dark border border-border-glass flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-300 theme-transition">
                {getIcon(ach.category)}
              </div>

              {/* Text info */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[9px] font-bold font-mono text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full uppercase tracking-wider theme-transition">
                    {ach.category}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-text-primary leading-snug group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors theme-transition">
                  {ach.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed theme-transition">
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
