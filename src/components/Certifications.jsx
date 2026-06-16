import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiFileText, FiAward, FiX, FiSearch, FiExternalLink, FiArrowLeft, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";
import certificatesList from "../data/certificatesList.json";

const formatCertName = (filename) => {
  let name = filename.substring(0, filename.lastIndexOf('.'));
  name = name.replace(/[_-]/g, ' ');
  name = name.replace(/certificate cvhk6300.*/gi, '');
  name = name.replace(/\s[a-f0-9]{8}\s[a-f0-9]{4}\s.*/gi, '');
  name = name.trim();
  name = name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');

  if (/^[A-Z0-9]{10}$/.test(name) || /^[A-Z0-9]{8}$/.test(name) || name.toLowerCase().includes("wa00") || name.startsWith("Img")) {
    if (name.includes("Wa0022")) return "CCBP Masterclass: Mr Krishna Raghavan (Flipkart CPO)";
    if (name.includes("Wa0002")) return "Salesforce Agentblazer Workshop Completion";
    if (name.includes("Wa0003")) return "Quantum Fundamentals Certification";
    return `CCBP Academy Certification (${name})`;
  }

  if (name.toLowerCase() === "tata da ai") return "Tata - GenAI Powered Data Analytics";
  if (name.toLowerCase() === "tata da ai page 0001") return "Tata - GenAI Powered Data Analytics (View)";
  if (name.toLowerCase() === "tata da v") return "Tata - Data Visualisation Job Simulation";
  if (name.toLowerCase() === "tata da v page 0001") return "Tata - Data Visualisation (View)";
  if (name.toLowerCase() === "iqta certificate") return "IQTA Course Certification";
  
  return name;
};

const getCertFileUrl = (cert) => {
  if (!cert) return "";
  if (cert.fileUrl) return cert.fileUrl;
  return `/certificates/${cert.name}`;
};

const getCertDisplayName = (cert) => {
  if (!cert) return "";
  if (cert.name && (cert.name.endsWith(".pdf") || cert.name.endsWith(".png") || cert.name.endsWith(".jpg"))) {
    return formatCertName(cert.name);
  }
  return cert.name;
};

export default function Certifications() {
  const { certifications } = portfolioData;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllFeatured, setShowAllFeatured] = useState(false);
  
  // Lightbox Viewer state properties
  const [viewerFile, setViewerFile] = useState(null);
  const [viewerTitle, setViewerTitle] = useState("");
  const [viewerList, setViewerList] = useState([]);
  const [viewerIndex, setViewerIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isModalOpen || viewerFile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen, viewerFile]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 18 } }
  };

  // Filter duplicate view page artifacts and handle search queries
  const filteredList = certificatesList.filter((cert) => {
    if (cert.name.includes("_page-0001")) return false;
    if (cert.name.includes("_thumbnail")) return false;
    
    const displayName = formatCertName(cert.name).toLowerCase();
    const query = searchQuery.toLowerCase();
    return displayName.includes(query) || cert.name.toLowerCase().includes(query);
  });

  const handleViewerPrev = (e) => {
    if (e) e.stopPropagation();
    if (!viewerList || viewerList.length <= 1) return;
    const nextIndex = viewerIndex === 0 ? viewerList.length - 1 : viewerIndex - 1;
    const nextCert = viewerList[nextIndex];
    setViewerIndex(nextIndex);
    setViewerFile(getCertFileUrl(nextCert));
    setViewerTitle(getCertDisplayName(nextCert));
  };

  const handleViewerNext = (e) => {
    if (e) e.stopPropagation();
    if (!viewerList || viewerList.length <= 1) return;
    const nextIndex = viewerIndex === viewerList.length - 1 ? 0 : viewerIndex + 1;
    const nextCert = viewerList[nextIndex];
    setViewerIndex(nextIndex);
    setViewerFile(getCertFileUrl(nextCert));
    setViewerTitle(getCertDisplayName(nextCert));
  };

  const handleCloseViewer = () => {
    setViewerFile(null);
    setIsModalOpen(false); // Exits the overlay and closes the registry modal to return to main page
  };

  return (
    <section id="certifications" className="py-14 relative overflow-hidden">
      {/* Background radial elements */}
      <div className="absolute left-1/4 bottom-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none theme-transition" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-2 theme-transition">Verified Professional Credentials</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary theme-transition">
            Licenses & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {(showAllFeatured ? certifications : certifications.slice(0, 3)).map((cert, idx) => {
            const CardWrapper = cert.fileUrl ? "button" : "div";
            const wrapperProps = cert.fileUrl 
              ? { 
                  onClick: () => {
                    setViewerList(certifications);
                    setViewerIndex(idx);
                    setViewerFile(cert.fileUrl);
                    setViewerTitle(cert.name);
                  },
                  type: "button",
                  className: "w-full text-left premium-card p-6 rounded-2xl flex flex-col justify-between relative group cursor-pointer hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300 h-full theme-transition" 
                } 
              : { 
                  className: "premium-card p-6 rounded-2xl flex flex-col justify-between relative group h-full theme-transition" 
                };

            return (
              <motion.div key={idx} variants={cardVariants} className="h-full">
                <CardWrapper {...wrapperProps}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/5 to-transparent rounded-tr-2xl blur-xl pointer-events-none" />
                  
                  <div className="space-y-4">
                    {/* Header Icon */}
                    <div className="flex justify-between items-start">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 text-lg shadow-md theme-transition">
                        <FiAward />
                      </div>
                      <span className="text-[10px] font-bold font-mono text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded theme-transition">
                        {cert.date}
                      </span>
                    </div>

                    {/* Info */}
                    <div>
                      <h3 className="font-display text-base font-bold text-text-primary leading-snug group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300 theme-transition">
                        {cert.name}
                      </h3>
                      <p className="text-text-secondary text-xs font-semibold mt-1 theme-transition">
                        Issued by: {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Sub-label */}
                  <div className="mt-6 pt-4 border-t border-border-glass flex items-center justify-between w-full theme-transition">
                    <span className="text-[10px] text-text-muted font-mono italic max-w-[70%] truncate theme-transition">
                      Topic: {cert.highlight}
                    </span>
                    <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 flex items-center gap-1 group-hover:text-purple-500 dark:group-hover:text-purple-300 transition-colors theme-transition">
                      {cert.fileUrl ? (
                        <>View <FiExternalLink className="text-[10px]" /></>
                      ) : (
                        <><FiCheckCircle className="text-emerald-500" /> Verified</>
                      )}
                    </span>
                  </div>
                </CardWrapper>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Inline Show More/Less Toggle & Credentials Registry Button */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
          <button
            onClick={() => setShowAllFeatured(!showAllFeatured)}
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-border-glass hover:border-purple-500/40 bg-bg-card hover:bg-bg-card-hover text-text-secondary hover:text-text-primary font-semibold text-sm cursor-pointer transition-all duration-300 theme-transition"
          >
            {showAllFeatured ? "Show Less Featured" : `Show All Featured (${certifications.length})`}
          </button>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-purple-500/10 cursor-pointer flex items-center gap-2 justify-center hover:scale-105 active:scale-95 transition-all duration-300 theme-transition"
          >
            <FiFileText className="text-lg" />
            <span>View Complete Credentials Registry ({certificatesList.length})</span>
          </button>
        </div>

        {mounted && createPortal(
          <>
            {/* Full Certificates Modal Viewer */}
            <AnimatePresence>
              {isModalOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 bg-bg-darker/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
                >
                  <motion.div
                    initial={{ scale: 0.95, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.95, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 250 }}
                    className="relative bg-bg-dark border border-border-glass rounded-3xl w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden shadow-2xl p-[1px]"
                  >
                    {/* Header */}
                    <div className="p-6 md:p-8 border-b border-border-glass flex items-center justify-between bg-bg-card/20">
                      <div>
                        <h3 className="font-display text-xl md:text-2xl font-extrabold text-text-primary">
                          Credentials <span className="gradient-text">Registry</span>
                        </h3>
                        <p className="text-xs text-text-muted mt-1 font-mono">
                          Showing {filteredList.length} unique certificate records
                        </p>
                      </div>
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="p-2.5 rounded-xl glassmorphism border border-border-glass hover:border-purple-500/40 text-text-secondary hover:text-text-primary text-xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300"
                        aria-label="Close modal"
                      >
                        <FiX />
                      </button>
                    </div>

                    {/* Search / Filter bar inside Modal */}
                    <div className="px-6 md:px-8 py-4 border-b border-border-glass bg-bg-darker/30">
                      <div className="relative">
                        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted text-lg" />
                        <input
                          type="text"
                          placeholder="Search certificate credentials by name, topic, technology..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-11 pr-4 py-3 bg-bg-darker border border-border-glass focus:border-purple-500/50 rounded-xl text-text-primary text-sm font-medium focus:outline-none transition-all duration-300 shadow-inner"
                        />
                      </div>
                    </div>

                    {/* Scrollable credentials grid */}
                    <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 scrollbar-thin">
                      {filteredList.length === 0 ? (
                        <div className="text-center py-20">
                          <p className="text-text-muted font-mono">No matching certificates found.</p>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                          {filteredList.map((cert, idx) => {
                            const displayName = formatCertName(cert.name);
                            const isPdf = cert.name.endsWith(".pdf");
                            return (
                              <button
                                key={idx}
                                onClick={() => {
                                  setViewerList(filteredList);
                                  setViewerIndex(idx);
                                  setViewerFile(`/certificates/${cert.name}`);
                                  setViewerTitle(displayName);
                                }}
                                type="button"
                                className="w-full text-left premium-card p-5 rounded-xl flex flex-col justify-between hover:border-purple-500/40 cursor-pointer transition-all duration-300 relative group"
                              >
                                <div className="space-y-3">
                                  <div className="flex items-center justify-between">
                                    <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/15 text-purple-600 dark:text-purple-400 text-sm">
                                      <FiFileText />
                                    </div>
                                    <span className="text-[9px] font-bold font-mono uppercase bg-bg-darker px-2 py-0.5 rounded text-text-secondary border border-border-glass">
                                      {isPdf ? "PDF Document" : "Image File"}
                                    </span>
                                  </div>
                                  <h4 className="font-display text-sm font-bold text-text-primary leading-snug group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300">
                                    {displayName}
                                  </h4>
                                </div>

                                <div className="mt-5 pt-3 border-t border-border-glass flex items-center justify-between text-text-muted w-full">
                                  <span className="text-[9px] font-mono">
                                    Size: {(cert.size / 1024).toFixed(0)} KB
                                  </span>
                                  <span className="text-[9px] font-semibold text-purple-600 dark:text-purple-400 flex items-center gap-1 group-hover:text-purple-500 dark:group-hover:text-purple-300">
                                    View <FiExternalLink className="text-[10px]" />
                                  </span>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Fullscreen Certificate Viewer Overlay with Slide Navigation */}
            <AnimatePresence>
              {viewerFile && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[60] bg-bg-darker flex flex-col"
                >
                  {/* Header Bar */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-border-glass bg-bg-dark/85 backdrop-blur-md z-[70] shrink-0">
                    <button
                      onClick={handleCloseViewer}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-bg-card hover:bg-bg-card-hover border border-border-glass text-text-secondary hover:text-text-primary text-sm font-semibold hover:scale-105 active:scale-95 transition-all duration-300 shadow-md cursor-pointer hover:border-purple-500/50"
                    >
                      <FiArrowLeft className="text-lg" />
                      <span>Back to Portfolio</span>
                    </button>

                    <h3 className="hidden md:block font-display text-sm font-bold text-text-primary truncate max-w-md">
                      {viewerTitle}
                    </h3>

                    <div className="px-4 py-2 rounded-xl bg-bg-card border border-border-glass text-xs font-mono font-bold text-text-muted">
                      {viewerIndex + 1} / {viewerList.length}
                    </div>
                  </div>

                  {/* Fullscreen Document Container with Horizontal Chevrons */}
                  <div className="flex-1 w-full bg-black/25 flex items-center justify-center p-4 px-16 md:p-8 md:px-28 overflow-hidden relative">
                    
                    {/* Horizontal Navigation Controls */}
                    {viewerList && viewerList.length > 1 && (
                      <>
                        <div className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30">
                          <button
                            onClick={handleViewerPrev}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-xl glassmorphism border border-border-glass hover:border-purple-500/40 flex items-center justify-center text-text-secondary hover:text-text-primary text-xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl"
                            aria-label="Previous Certificate"
                          >
                            <FiChevronLeft />
                          </button>
                        </div>

                        <div className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30">
                          <button
                            onClick={handleViewerNext}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-xl glassmorphism border border-border-glass hover:border-purple-500/40 flex items-center justify-center text-text-secondary hover:text-text-primary text-xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl"
                            aria-label="Next Certificate"
                          >
                            <FiChevronRight />
                          </button>
                        </div>
                      </>
                    )}

                    {/* Inner View Frame */}
                    {viewerFile.toLowerCase().endsWith(".pdf") ? (
                      <iframe 
                        src={viewerFile} 
                        className="w-full max-w-5xl h-full border-none rounded-2xl shadow-2xl bg-white" 
                        title={viewerTitle}
                      />
                    ) : (
                      <div className="max-w-4xl max-h-full overflow-auto flex items-center justify-center">
                        <img 
                          src={viewerFile} 
                          className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl" 
                          alt={viewerTitle}
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>,
          document.body
        )}
      </div>
    </section>
  );
}
