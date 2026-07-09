import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiCode, FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";
import jeePrepImg from "../assets/project_jee_prep.png";
import timetableImg from "../assets/project_timetable.png";
import riderSafetyImg from "../assets/project_rider_safety.png";
import eventMgmtImg from "../assets/project_event_mgmt.png";
import djangoBackendImg from "../assets/project_django_backend.png";
import carWebsiteImg from "../assets/project_car_website.png";
import collegePortalImg from "../assets/project_college_portal.png";
import weatherDashboardImg from "../assets/project_weather_dashboard.png";
import musicPlayerImg from "../assets/project_music_player.png";
import ottStreamingImg from "../assets/project_ott_streaming.png";
import hotelBookingImg from "../assets/project_hotel_booking.png";

const projectImages = {
  "jee-prep": jeePrepImg,
  "timetable-gen": timetableImg,
  "rider-safety": riderSafetyImg,
  "event-resource": eventMgmtImg,
  "django-projects": djangoBackendImg,
  "car-website": carWebsiteImg,
  "hotel-booking": hotelBookingImg,
  "college-website": collegePortalImg,
  "weather-dashboard": weatherDashboardImg,
  "music-player": musicPlayerImg,
  "ott-platform": ottStreamingImg,
};

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 150 : -150,
    opacity: 0,
    scale: 0.98
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 220, damping: 25 },
      opacity: { duration: 0.2 },
      scale: { type: "spring", stiffness: 220, damping: 25 }
    }
  },
  exit: (direction) => ({
    x: direction < 0 ? 150 : -150,
    opacity: 0,
    scale: 0.98,
    transition: {
      x: { type: "spring", stiffness: 220, damping: 25 },
      opacity: { duration: 0.2 }
    }
  })
};

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const { projects } = portfolioData;

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "python", name: "Python" },
    { id: "react", name: "React / Node" },
    { id: "dsa", name: "DSA & Algorithmic" },
    { id: "iot", name: "IoT & Systems" }
  ];

  const handleFilter = (project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "python") return project.tech.some(t => t.toLowerCase().includes("python"));
    if (activeFilter === "react") return project.tech.some(t => t.toLowerCase().includes("react") || t.toLowerCase().includes("node") || t.toLowerCase().includes("boot"));
    if (activeFilter === "dsa") return project.tech.some(t => t.toLowerCase().includes("dsa") || t.toLowerCase().includes("optimization") || t.toLowerCase().includes("algorithms"));
    if (activeFilter === "iot") return project.tech.some(t => t.toLowerCase().includes("iot") || t.toLowerCase().includes("sensor") || t.toLowerCase().includes("webhook"));
    return true;
  };

  const handleSearch = (project) => {
    const query = searchQuery.toLowerCase();
    return (
      project.name.toLowerCase().includes(query) ||
      project.subtitle.toLowerCase().includes(query) ||
      project.tech.some(t => t.toLowerCase().includes(query)) ||
      project.description.toLowerCase().includes(query)
    );
  };

  const filteredProjects = projects.filter(project => handleFilter(project) && handleSearch(project));

  // Reset index when changing filters or searches to prevent index out of bounds
  useEffect(() => {
    setCurrentIndex(0);
    setDirection(0);
  }, [activeFilter, searchQuery]);

  const handlePrev = () => {
    if (filteredProjects.length <= 1) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (filteredProjects.length <= 1) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
  };

  const project = filteredProjects[currentIndex] || filteredProjects[0];
  const projectImg = project ? projectImages[project.id] : null;

  return (
    <section id="projects" className="py-14 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-80 h-80 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-2 theme-transition">My Engineering Feats</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text-primary theme-transition">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 p-4 glassmorphism rounded-2xl border border-border-glass shadow-lg theme-transition">
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted text-lg theme-transition" />
            <input
              type="text"
              placeholder="Search projects by name, language, stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-bg-darker border border-border-glass focus:border-purple-500/50 rounded-xl text-text-primary text-sm font-medium focus:outline-none transition-all duration-300 shadow-inner theme-transition"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((fl) => (
              <button
                key={fl.id}
                onClick={() => setActiveFilter(fl.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide border transition-all duration-300 cursor-pointer theme-transition ${
                  activeFilter === fl.id
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 border-purple-500/30 text-white shadow-md shadow-purple-600/10"
                    : "bg-bg-dark border-border-glass text-text-secondary hover:text-text-primary hover:border-border-glass-hover"
                }`}
              >
                {fl.name}
              </button>
            ))}
          </div>
        </div>

        {/* Project Carousel Slider */}
        {filteredProjects.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 glassmorphism rounded-2xl border border-border-glass theme-transition"
          >
            <p className="text-text-muted font-mono theme-transition">No matching projects found. Try adjusting your query or filters.</p>
          </motion.div>
        ) : (
          <div className="relative w-full max-w-5xl mx-auto md:px-12">
            
            {/* Carousel Arrow Controls - Floating on desktop */}
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-20 hidden md:block">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-xl glassmorphism border border-border-glass hover:border-purple-500/40 flex items-center justify-center text-text-secondary hover:text-text-primary text-xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg theme-transition"
                aria-label="Previous Project"
              >
                <FiChevronLeft />
              </button>
            </div>
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-20 hidden md:block">
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-xl glassmorphism border border-border-glass hover:border-purple-500/40 flex items-center justify-center text-text-secondary hover:text-text-primary text-xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg theme-transition"
                aria-label="Next Project"
              >
                <FiChevronRight />
              </button>
            </div>

            {/* Slider window */}
            <div className="overflow-hidden min-h-[500px] md:min-h-[460px] relative rounded-2xl border border-border-glass glassmorphism shadow-2xl p-[1px]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={project.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, info) => {
                    if (info.offset.x < -80) {
                      handleNext();
                    } else if (info.offset.x > 80) {
                      handlePrev();
                    }
                  }}
                  className="flex flex-col md:flex-row min-h-[500px] md:min-h-[460px] w-full rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing"
                >
                  {/* Left Column - Banner */}
                  <div className="relative w-full md:w-5/12 min-h-[220px] md:min-h-auto p-6 md:p-8 flex flex-col justify-between overflow-hidden shrink-0">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                      {projectImg ? (
                        <img 
                          src={projectImg} 
                          alt={project.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${project.themeGradient} opacity-90`} />
                      )}
                      {/* Gradient overlay for blending and text contrast */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${project.themeGradient} opacity-75 mix-blend-multiply`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-darker via-transparent to-transparent opacity-60 md:hidden" />
                    </div>

                    {/* Abstract Overlay pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none z-10" />
                    
                    {/* Abstract developer terminal backdrop */}
                    <div className="absolute bottom-[-15%] right-[-10%] opacity-15 font-mono text-[9px] text-white select-none whitespace-pre pointer-events-none tracking-tight z-10">
                      {`def optimize_system():
  cache = RedisCache()
  data = db.fetch_all()
  return [item for item in data if item.isValid()]`}
                    </div>

                    <div className="relative z-20 flex justify-between items-start">
                      <div className="p-2.5 rounded-xl bg-bg-darker/40 backdrop-blur-md border border-border-glass text-white shadow-md theme-transition">
                        <FiCode className="text-xl" />
                      </div>
                      <span className="text-[10px] uppercase font-mono tracking-widest font-bold bg-bg-darker/60 backdrop-blur-sm px-2.5 py-1 rounded-full text-text-secondary border border-border-glass theme-transition">
                        {project.tech[0]}
                      </span>
                    </div>

                    <div className="relative z-20 mt-12 md:mt-0">
                      <p className="text-xs font-semibold font-mono text-white/80 uppercase tracking-widest leading-none mb-1">
                        {project.subtitle}
                      </p>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                        {project.name}
                      </h3>
                    </div>
                  </div>

                  {/* Right Column - Body Content */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6 bg-bg-card/30">
                    <div className="space-y-4">
                      {/* Description */}
                      <p className="text-text-secondary text-sm leading-relaxed theme-transition">
                        {project.description}
                      </p>

                      {/* Achievements bullets */}
                      <div className="space-y-2 pt-2">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted font-mono theme-transition">Key Highlights</p>
                        <ul className="space-y-1.5">
                          {project.achievements.map((ach, idx) => (
                            <li key={idx} className="text-xs text-text-secondary flex items-start gap-2 leading-relaxed theme-transition">
                              <span className="text-purple-500 mt-1 shrink-0">•</span>
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tech Badges & Links */}
                    <div className="space-y-4 border-t border-border-glass pt-4 theme-transition">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span 
                            key={t} 
                            className="text-[10px] font-semibold font-mono text-purple-600 dark:text-purple-300 bg-purple-500/10 border border-purple-500/10 px-2.5 py-1 rounded-lg theme-transition"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Project Action Buttons */}
                      <div className="flex items-center gap-3">
                        <a 
                          href={project.codeUrl || "https://github.com/hemanthc29"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border-glass hover:border-purple-500/50 bg-bg-darker text-text-secondary hover:text-text-primary text-xs font-semibold transition-all duration-300 theme-transition"
                        >
                          <FiGithub />
                          <span>Code Repository</span>
                        </a>

                        <a 
                          href={project.liveUrl || "https://github.com/hemanthc29"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600/10 border border-purple-500/20 hover:bg-purple-600 text-purple-600 dark:text-purple-300 hover:text-white text-xs font-semibold transition-all duration-300 theme-transition"
                        >
                          <FiExternalLink />
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Controls & Mobile Arrows */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-8">
              {/* Mobile Arrow buttons */}
              <div className="flex md:hidden items-center gap-4">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-xl glassmorphism border border-border-glass flex items-center justify-center text-text-secondary hover:text-text-primary text-lg cursor-pointer transition-all duration-300 shadow-md"
                  aria-label="Previous Project"
                >
                  <FiChevronLeft />
                </button>
                <span className="text-xs font-mono text-text-muted font-bold">
                  {currentIndex + 1} / {filteredProjects.length}
                </span>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-xl glassmorphism border border-border-glass flex items-center justify-center text-text-secondary hover:text-text-primary text-lg cursor-pointer transition-all duration-300 shadow-md"
                  aria-label="Next Project"
                >
                  <FiChevronRight />
                </button>
              </div>

              {/* Pagination Dots (Desktop/All) */}
              <div className="flex items-center justify-center gap-2 flex-wrap w-full md:w-auto">
                {filteredProjects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                      currentIndex === idx 
                        ? "w-8 bg-gradient-to-r from-purple-500 to-indigo-500 shadow-md shadow-purple-500/20" 
                        : "w-2.5 bg-border-glass hover:bg-border-glass-hover"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Progress summary for Desktop */}
              <div className="hidden md:block">
                <span className="text-xs font-mono font-bold text-text-muted">
                  Project {currentIndex + 1} of {filteredProjects.length}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
