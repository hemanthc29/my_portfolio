import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCode, FiLayers, FiDatabase, FiSettings, FiGrid, FiFeather, FiCpu } from "react-icons/fi";
import { 
  FaJava, 
  FaPython, 
  FaNodeJs, 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap, 
  FaGitAlt, 
  FaGithub, 
  FaBitbucket, 
  FaServer, 
  FaBrain, 
  FaDatabase, 
  FaCube,
  FaLaptopCode
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiExpress, 
  SiSpringboot, 
  SiMysql, 
  SiMongodb, 
  SiPostman, 
  SiC 
} from "react-icons/si";
import { 
  TbApi, 
  TbBinaryTree, 
  TbCodeCircle 
} from "react-icons/tb";
import { portfolioData } from "../data/portfolioData";

const getSkillIcon = (name) => {
  const n = name.toLowerCase();
  if (n.includes("java") && !n.includes("script")) return <FaJava className="text-red-500 text-lg" />;
  if (n.includes("python")) return <FaPython className="text-blue-400 text-lg" />;
  if (n.includes("javascript")) return <SiJavascript className="text-yellow-400 text-lg rounded bg-black/10" />;
  if (n === "c") return <SiC className="text-blue-500 text-lg" />;
  if (n.includes("node")) return <FaNodeJs className="text-green-500 text-lg" />;
  if (n.includes("express")) return <SiExpress className="text-text-primary text-lg" />;
  if (n.includes("spring")) return <SiSpringboot className="text-green-600 text-lg" />;
  if (n.includes("rest api") || n.includes("api design") || n.includes("apis")) return <TbApi className="text-cyan-400 text-lg" />;
  if (n.includes("backend engineering")) return <FaServer className="text-purple-400 text-lg" />;
  if (n.includes("react")) return <FaReact className="text-sky-400 text-lg" />;
  if (n.includes("html5") || n.includes("html")) return <FaHtml5 className="text-orange-500 text-lg" />;
  if (n.includes("css3") || n.includes("css")) return <FaCss3Alt className="text-blue-500 text-lg" />;
  if (n.includes("bootstrap")) return <FaBootstrap className="text-purple-600 text-lg" />;
  if (n.includes("mysql")) return <SiMysql className="text-blue-400 text-lg" />;
  if (n.includes("mongodb")) return <SiMongodb className="text-green-500 text-lg" />;
  if (n === "git") return <FaGitAlt className="text-orange-600 text-lg" />;
  if (n === "github") return <FaGithub className="text-text-primary text-lg" />;
  if (n.includes("bitbucket")) return <FaBitbucket className="text-blue-600 text-lg" />;
  if (n.includes("postman")) return <SiPostman className="text-orange-500 text-lg" />;
  if (n.includes("vscode") || n.includes("vs code")) return <FaLaptopCode className="text-sky-500 text-lg" />;
  if (n.includes("data structures") || n.includes("algorithms") || n.includes("dsa")) return <TbBinaryTree className="text-purple-400 text-lg" />;
  if (n.includes("oriented programming") || n.includes("oop")) return <TbCodeCircle className="text-blue-400 text-lg" />;
  if (n.includes("dbms") || n.includes("database")) return <FaDatabase className="text-indigo-400 text-lg" />;
  if (n.includes("operating systems") || n.includes("os")) return <FiCpu className="text-amber-500 text-lg" />;
  
  return <FaBrain className="text-purple-400 text-lg" />;
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("languages");
  const { skills } = portfolioData;

  const categories = [
    { id: "languages", name: "Languages", icon: <FiCode /> },
    { id: "backend", name: "Backend Eng.", icon: <FiLayers /> },
    { id: "frontend", name: "Frontend UI", icon: <FiFeather /> },
    { id: "databases", name: "Databases", icon: <FiDatabase /> },
    { id: "tools", name: "Tools & Platforms", icon: <FiSettings /> },
    { id: "fundamentals", name: "CS Fundamentals", icon: <FiGrid /> }
  ];

  const getSkillsByTab = () => {
    return skills[activeTab] || [];
  };

  const getCategoryColor = (tab) => {
    switch(tab) {
      case "languages": return "from-purple-500 to-indigo-500 shadow-purple-500/20";
      case "backend": return "from-indigo-500 to-blue-500 shadow-indigo-500/20";
      case "frontend": return "from-blue-500 to-cyan-500 shadow-blue-500/20";
      case "databases": return "from-cyan-500 to-emerald-500 shadow-cyan-500/20";
      case "tools": return "from-emerald-500 to-amber-500 shadow-emerald-500/20";
      case "fundamentals": return "from-rose-500 to-purple-500 shadow-rose-500/20";
      default: return "from-purple-500 to-blue-500";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <section id="skills" className="py-14 relative overflow-hidden">
      {/* Glow decorations */}
      <div className="absolute left-0 top-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none theme-transition" />
      <div className="absolute right-0 bottom-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none theme-transition" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-2 theme-transition">Technical Armory</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary theme-transition">
            Skills & <span className="gradient-text">Competencies</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Custom Interactive Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar Navigation */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-none snap-x snap-mandatory"
          >
            {categories.map((cat) => (
              <motion.button
                variants={itemVariants}
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`snap-center flex items-center gap-3 px-5 py-4 rounded-xl border text-sm font-semibold transition-all duration-300 w-full min-w-[180px] lg:min-w-0 cursor-pointer theme-transition ${
                  activeTab === cat.id
                    ? "bg-bg-dark border-purple-500/30 text-purple-600 dark:text-purple-300 shadow-md shadow-purple-500/5"
                    : "glassmorphism border-border-glass text-text-secondary hover:text-text-primary hover:bg-bg-card-hover hover:border-border-glass-hover"
                }`}
              >
                <span className={`p-2 rounded-lg flex items-center justify-center text-base theme-transition ${
                  activeTab === cat.id ? "bg-purple-500/20 text-purple-600 dark:text-purple-400" : "bg-bg-darker text-text-muted"
                }`}>
                  {cat.icon}
                </span>
                <span>{cat.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Skill List Display */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <div className="glassmorphism p-6 md:p-8 rounded-2xl border border-border-glass min-h-[380px] theme-transition">
              <div className="flex items-center justify-between mb-8 border-b border-border-glass pb-4 theme-transition">
                <h3 className="font-display text-xl font-bold text-text-primary uppercase tracking-wider theme-transition">
                  {categories.find(c => c.id === activeTab)?.name}
                </h3>
                <span className="text-xs font-mono text-purple-600 dark:text-purple-400 theme-transition">Hemanth's Stack</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {getSkillsByTab().map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="p-4 rounded-xl premium-card group theme-transition"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2.5">
                          {getSkillIcon(skill.name)}
                          <span className="text-sm font-semibold text-text-secondary group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors theme-transition">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-text-muted theme-transition">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="w-full bg-bg-darker border border-border-glass rounded-full h-2 overflow-hidden p-[1px] theme-transition">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.05 }}
                          className={`h-full rounded-full bg-gradient-to-r ${getCategoryColor(activeTab)}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Extra highlights banner */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 p-4 rounded-xl border border-blue-500/10 bg-blue-500/5 flex items-center gap-3 text-xs md:text-sm text-blue-600 dark:text-blue-300 theme-transition"
            >
              <span className="text-base">💡</span>
              <p>
                <strong>Focus Area:</strong> High scale API design, low-latency algorithms, and robust database constraints schema architecture using Java & Python.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
