import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload, FiEye, FiFileText, FiX, FiCheck } from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";

export default function Resume() {
  const { fullName, title, email, phone, location, summary, linkedin } = portfolioData.personalInfo;
  const [showQuickPreview, setShowQuickPreview] = useState(false);

  return (
    <section id="resume" className="py-14 relative overflow-hidden bg-bg-darker/5 theme-transition">
      {/* Background decoration */}
      <div className="absolute left-1/3 bottom-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none theme-transition" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-2 theme-transition">Curriculum Vitae</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary theme-transition">
            Resume <span className="gradient-text">Preview</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Resume Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text Description Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display text-2xl font-bold text-text-primary theme-transition">
              Looking for a formal copy?
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed theme-transition">
              My resume contains a complete, formal summary of my academic history, internships at Cognifyz & Veknova, certifications from NASSCOM & CCBP, and sports gold medals.
            </p>
            <p className="text-text-secondary text-sm leading-relaxed theme-transition">
              Feel free to download the document for application review, printing, or sharing with hiring teams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/Resume_SE.docx"
                download="Resume_SE_Chennuru_Venkata_Hemanth_Kumar.docx"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-medium hover:opacity-95 shadow-lg shadow-purple-600/20 transition-all cursor-pointer"
              >
                <FiDownload />
                <span>Download DOCX</span>
              </a>

              <button
                onClick={() => setShowQuickPreview(true)}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-border-glass hover:border-purple-500/50 bg-bg-card hover:bg-bg-card-hover text-text-secondary hover:text-text-primary font-medium transition-all cursor-pointer theme-transition"
              >
                <FiEye />
                <span>Quick View Details</span>
              </button>
            </div>

            {/* Document checklist details */}
            <div className="space-y-2 pt-4 border-t border-border-glass theme-transition">
              <div className="flex items-center gap-2 text-xs text-text-secondary theme-transition">
                <FiCheck className="text-emerald-500 text-base shrink-0" />
                <span>Formal SDE design format (ATS-friendly)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-secondary theme-transition">
                <FiCheck className="text-emerald-500 text-base shrink-0" />
                <span>Details on 6,000+ solved DSA coding challenges</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-secondary theme-transition">
                <FiCheck className="text-emerald-500 text-base shrink-0" />
                <span>Verified intern roles & college activities</span>
              </div>
            </div>
          </div>

          {/* Graphical Card Column */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 rounded-2xl premium-card relative group shadow-2xl cursor-pointer theme-transition"
              onClick={() => setShowQuickPreview(true)}
            >
              {/* Fake doc sheet representation */}
              <div className="bg-bg-darker border border-border-glass rounded-xl p-5 font-mono text-[10px] text-text-secondary space-y-4 max-h-[380px] overflow-hidden select-none relative theme-transition">
                {/* Overlay gradient blur to show more is hidden */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-darker via-bg-darker/40 to-transparent pointer-events-none theme-transition" />
                
                <div className="border-b border-border-glass pb-4 text-center theme-transition">
                  <h4 className="text-text-primary text-xs font-bold uppercase tracking-wide leading-none mb-1 theme-transition">{fullName}</h4>
                  <p className="text-purple-600 dark:text-purple-400 leading-none theme-transition">{email} | {phone} | {location}</p>
                </div>

                <div>
                  <h5 className="text-purple-600 dark:text-purple-300 font-bold uppercase tracking-wider mb-1 theme-transition">Summary</h5>
                  <p className="leading-relaxed text-text-muted theme-transition">{summary}</p>
                </div>

                <div>
                  <h5 className="text-purple-600 dark:text-purple-300 font-bold uppercase tracking-wider mb-1 theme-transition">Education</h5>
                  <p className="text-text-primary font-bold leading-relaxed theme-transition">Bachelor of Engineering in Computer Science (CGPA: 8.82/10)</p>
                  <p className="text-text-muted leading-none theme-transition">Madanapalle Institute of Technology and Science, 2023–2027</p>
                </div>

                <div>
                  <h5 className="text-purple-600 dark:text-purple-300 font-bold uppercase tracking-wider mb-1 theme-transition">Work History</h5>
                  <p className="text-text-primary font-bold leading-relaxed theme-transition">Python Developer Intern - Cognifyz Technologies</p>
                  <p className="text-text-primary font-bold leading-relaxed theme-transition">Web Developer Intern - Veknova Private Limited</p>
                </div>

                <div className="flex items-center justify-center absolute bottom-4 left-0 right-0 z-10">
                  <span className="px-4 py-2 rounded-xl bg-purple-600/90 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg border border-purple-500/20 group-hover:scale-105 transition-transform duration-300">
                    <FiEye /> Expand Full Preview
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Full Preview Modal */}
      <AnimatePresence>
        {showQuickPreview && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-bg-darker/80 backdrop-blur-md flex items-center justify-center z-50 p-4 theme-transition"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="w-full max-w-4xl bg-bg-card border border-border-glass rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden theme-transition"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border-glass bg-bg-dark/60 theme-transition">
                <div className="flex items-center gap-2">
                  <FiFileText className="text-purple-500 dark:text-purple-400 text-lg theme-transition" />
                  <span className="text-sm font-bold text-text-primary tracking-wide theme-transition">Resume Document Details</span>
                </div>
                <button
                  onClick={() => setShowQuickPreview(false)}
                  className="text-text-secondary hover:text-text-primary p-1 rounded-lg hover:bg-bg-card-hover transition-colors cursor-pointer theme-transition"
                >
                  <FiX className="text-xl" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-8 font-sans text-sm text-text-secondary theme-transition">
                {/* Header Block */}
                <div className="border-b border-border-glass pb-6 text-center md:text-left md:flex justify-between items-start theme-transition">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-text-primary leading-none theme-transition">{fullName}</h2>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold mt-1.5 theme-transition">{title}</p>
                    <p className="text-xs text-text-muted mt-1 theme-transition">{location}</p>
                  </div>
                  <div className="mt-4 md:mt-0 space-y-1 text-xs text-text-muted font-mono theme-transition">
                    <p>📧 {email}</p>
                    <p>📞 {phone}</p>
                    <p>🔗 <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">{linkedin.replace("https://www.", "").replace("https://", "")}</a></p>
                  </div>
                </div>

                {/* Summary */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-purple-600 dark:text-purple-400 theme-transition">Professional Summary</h4>
                  <p className="leading-relaxed">{summary}</p>
                </div>

                {/* Education */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-purple-600 dark:text-purple-400 theme-transition">Education</h4>
                  <div>
                    <div className="flex justify-between items-start">
                      <span className="font-bold text-text-primary theme-transition">Bachelor of Engineering in Computer Science</span>
                      <span className="text-xs font-mono text-purple-600 dark:text-purple-400 theme-transition">2023 - 2027</span>
                    </div>
                    <p className="text-text-secondary text-xs mt-0.5 theme-transition">Madanapalle Institute of Technology and Science, AP, India</p>
                    <span className="inline-block mt-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded theme-transition">
                      CGPA: 8.82/10
                    </span>
                  </div>
                </div>

                {/* Experience */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-purple-600 dark:text-purple-400 theme-transition">Work Experience</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-start">
                        <span className="font-bold text-text-primary theme-transition">Python Developer Intern — Cognifyz Technologies</span>
                        <span className="text-xs font-mono text-purple-600 dark:text-purple-400 theme-transition">Mar 2025 – Jun 2025</span>
                      </div>
                      <p className="text-xs text-text-muted mt-0.5 theme-transition">Developed backend Python modules for data processing and REST API integration.</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-start">
                        <span className="font-bold text-text-primary theme-transition">Web Developer Intern — Veknova Private Limited</span>
                        <span className="text-xs font-mono text-purple-600 dark:text-purple-400 theme-transition">Aug 2025 – Oct 2025</span>
                      </div>
                      <p className="text-xs text-text-muted mt-0.5 theme-transition">Built responsive frontend components and integrated them with backend APIs.</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-start">
                        <span className="font-bold text-text-primary theme-transition">Student Mentor — NxtWave CCBP Academy</span>
                        <span className="text-xs font-mono text-purple-600 dark:text-purple-400 theme-transition">2024 - Present</span>
                      </div>
                      <p className="text-xs text-text-muted mt-0.5 theme-transition">Mentored students in DSA, problem solving, and coding best practices.</p>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-purple-600 dark:text-purple-400 theme-transition">Technical Skills</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                    <div>
                      <p className="text-text-secondary mb-1 theme-transition"><span className="text-text-primary font-bold theme-transition">Languages:</span> Java, Python, C, JavaScript</p>
                      <p className="text-text-secondary mb-1 theme-transition"><span className="text-text-primary font-bold theme-transition">Backend:</span> Node.js, Express.js, Spring Boot, REST APIs</p>
                      <p className="text-text-secondary theme-transition"><span className="text-text-primary font-bold theme-transition">Frontend:</span> React.js, HTML5, CSS3, Bootstrap</p>
                    </div>
                    <div>
                      <p className="text-text-secondary mb-1 theme-transition"><span className="text-text-primary font-bold theme-transition">Databases:</span> MySQL, MongoDB</p>
                      <p className="text-text-secondary mb-1 theme-transition"><span className="text-text-primary font-bold theme-transition">Fundamentals:</span> DSA (6k+ solved), OOP, DBMS, OS, API Design</p>
                      <p className="text-text-secondary theme-transition"><span className="text-text-primary font-bold theme-transition">Tools:</span> Git, GitHub, Bitbucket, Postman, VS Code</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-border-glass bg-bg-dark/40 flex justify-end gap-3 theme-transition">
                <button
                  onClick={() => setShowQuickPreview(false)}
                  className="px-4 py-2 border border-border-glass rounded-xl hover:bg-bg-card-hover text-xs font-semibold cursor-pointer theme-transition"
                >
                  Close Preview
                </button>
                <a
                  href="/Resume_SE.docx"
                  download="Resume_SE_Chennuru_Venkata_Hemanth_Kumar.docx"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-95 text-xs text-white font-semibold flex items-center gap-1.5 cursor-pointer shadow-md shadow-purple-600/10"
                >
                  <FiDownload />
                  <span>Download Document</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
