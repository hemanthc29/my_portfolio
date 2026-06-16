import React, { useState, useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import AnimatedBackground from "./components/AnimatedBackground";

export default function App() {
  const [loading, setLoading] = useState(true);
  
  // Interactive Mouse Follower Glow coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 50, stiffness: 180, mass: 0.8 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Offset by 150px to center the 300px wide follower glow blob
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);

      // Update global CSS variables for custom grid spotlight tracking
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Read theme from local storage or fallback to system preferences
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return systemPrefersDark ? "dark" : "light";
  });

  // Toggle theme handler
  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      return next;
    });
  };

  // Synchronize class list on root document element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
  }, [theme]);

  useEffect(() => {
    const sections = [
      "home", 
      "about", 
      "skills", 
      "experience", 
      "projects", 
      "education", 
      "certifications", 
      "achievements", 
      "resume", 
      "contact"
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [loading]);

  const [activeSection, setActiveSection] = useState("home");

  return (
    <>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <div className="bg-bg-darker text-text-primary min-h-screen relative flex flex-col font-sans selection:bg-purple-500/30 selection:text-purple-200 theme-transition">
          
          {/* Custom Full-Screen Premium Animated Background Transition (Blobs, Spotlight Grid, Particles) */}
          <AnimatedBackground 
            theme={theme} 
            activeSection={activeSection} 
            glowX={glowX} 
            glowY={glowY} 
          />

          {/* Navigation Bar */}
          <Navbar 
            activeSection={activeSection} 
            setActiveSection={setActiveSection} 
            theme={theme}
            toggleTheme={toggleTheme}
          />
          {/* Main Portfolio Sections */}
          <main className="flex-1 w-full space-y-8 relative z-10">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Certifications />
            <Achievements />
            <Resume />
            <Contact />
          </main>

          {/* Footer branding */}
          <Footer />

          {/* Scroll controls */}
          <BackToTop />
        </div>
      )}
    </>
  );
}
