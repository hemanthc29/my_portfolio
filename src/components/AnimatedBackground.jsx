import React, { useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Configuration for subtle floating particles
const PARTICLE_COUNT = 22;

const getMeshColors = (section, isLight) => {
  if (isLight) {
    switch (section) {
      case "home":
        return {
          c1: "rgba(168, 85, 247, 0.12)", // Purple
          c2: "rgba(99, 102, 241, 0.12)", // Indigo
          c3: "rgba(59, 130, 246, 0.08)",  // Blue
          c4: "rgba(236, 72, 153, 0.08)", // Pink
          c5: "rgba(6, 182, 212, 0.08)",  // Cyan
        };
      case "about":
        return {
          c1: "rgba(59, 130, 246, 0.12)",  // Blue
          c2: "rgba(6, 182, 212, 0.12)",   // Cyan
          c3: "rgba(99, 102, 241, 0.08)",  // Indigo
          c4: "rgba(168, 85, 247, 0.08)",  // Purple
          c5: "rgba(20, 184, 166, 0.08)",  // Teal
        };
      case "skills":
        return {
          c1: "rgba(20, 184, 166, 0.12)",  // Teal
          c2: "rgba(16, 185, 129, 0.08)",  // Emerald
          c3: "rgba(6, 182, 212, 0.08)",   // Cyan
          c4: "rgba(59, 130, 246, 0.08)",  // Blue
          c5: "rgba(99, 102, 241, 0.08)",  // Indigo
        };
      case "experience":
        return {
          c1: "rgba(249, 115, 22, 0.08)",  // Orange
          c2: "rgba(239, 68, 68, 0.08)",   // Red
          c3: "rgba(236, 72, 153, 0.08)",  // Pink
          c4: "rgba(168, 85, 247, 0.08)",  // Purple
          c5: "rgba(245, 158, 11, 0.08)",  // Amber
        };
      case "projects":
        return {
          c1: "rgba(217, 70, 239, 0.12)",  // Fuchsia
          c2: "rgba(168, 85, 247, 0.12)",  // Purple
          c3: "rgba(99, 102, 241, 0.08)",  // Indigo
          c4: "rgba(236, 72, 153, 0.08)",  // Pink
          c5: "rgba(59, 130, 246, 0.08)",  // Blue
        };
      case "education":
        return {
          c1: "rgba(139, 92, 246, 0.12)",  // Violet
          c2: "rgba(59, 130, 246, 0.12)",  // Blue
          c3: "rgba(6, 182, 212, 0.08)",   // Cyan
          c4: "rgba(99, 102, 241, 0.08)",  // Indigo
          c5: "rgba(168, 85, 247, 0.08)",  // Purple
        };
      case "certifications":
        return {
          c1: "rgba(244, 63, 94, 0.12)",   // Rose
          c2: "rgba(225, 29, 72, 0.08)",   // Dark Rose
          c3: "rgba(236, 72, 153, 0.08)",  // Pink
          c4: "rgba(168, 85, 247, 0.08)",  // Purple
          c5: "rgba(99, 102, 241, 0.08)",  // Indigo
        };
      case "achievements":
        return {
          c1: "rgba(245, 158, 11, 0.12)",  // Amber
          c2: "rgba(234, 179, 8, 0.08)",   // Yellow
          c3: "rgba(249, 115, 22, 0.08)",  // Orange
          c4: "rgba(16, 185, 129, 0.08)",  // Emerald
          c5: "rgba(59, 130, 246, 0.08)",  // Blue
        };
      case "resume":
        return {
          c1: "rgba(14, 165, 233, 0.12)",  // Sky
          c2: "rgba(99, 102, 241, 0.08)",  // Indigo
          c3: "rgba(59, 130, 246, 0.08)",  // Blue
          c4: "rgba(168, 85, 247, 0.08)",  // Purple
          c5: "rgba(6, 182, 212, 0.08)",   // Cyan
        };
      case "contact":
        return {
          c1: "rgba(99, 102, 241, 0.12)",  // Indigo
          c2: "rgba(168, 85, 247, 0.12)",  // Purple
          c3: "rgba(236, 72, 153, 0.08)",  // Pink
          c4: "rgba(59, 130, 246, 0.08)",  // Blue
          c5: "rgba(6, 182, 212, 0.08)",   // Cyan
        };
      default:
        return {
          c1: "rgba(168, 85, 247, 0.12)",
          c2: "rgba(99, 102, 241, 0.12)",
          c3: "rgba(59, 130, 246, 0.08)",
          c4: "rgba(236, 72, 153, 0.08)",
          c5: "rgba(6, 182, 212, 0.08)",
        };
    }
  } else {
    // Dark mode colors (Obsidian deep space with amber, orange and gold flares)
    switch (section) {
      case "home":
        return {
          c1: "rgba(245, 158, 11, 0.10)", // Amber
          c2: "rgba(239, 68, 68, 0.08)",  // Sunset Red/Orange
          c3: "rgba(251, 191, 36, 0.06)", // Gold
          c4: "rgba(217, 70, 239, 0.05)", // Cosmic Pink
          c5: "rgba(249, 115, 22, 0.06)", // Solar Orange
        };
      case "about":
        return {
          c1: "rgba(249, 115, 22, 0.10)", // Solar Orange
          c2: "rgba(245, 158, 11, 0.08)", // Amber
          c3: "rgba(239, 68, 68, 0.06)",  // Sunset Red
          c4: "rgba(168, 85, 247, 0.05)", // Nebula Purple
          c5: "rgba(251, 191, 36, 0.06)", // Gold
        };
      case "skills":
        return {
          c1: "rgba(251, 191, 36, 0.10)", // Gold
          c2: "rgba(249, 115, 22, 0.08)", // Solar Orange
          c3: "rgba(245, 158, 11, 0.08)", // Amber
          c4: "rgba(239, 68, 68, 0.06)",  // Sunset Red
          c5: "rgba(236, 72, 153, 0.05)", // Pink Flare
        };
      case "experience":
        return {
          c1: "rgba(239, 68, 68, 0.10)",  // Sunset Red
          c2: "rgba(249, 115, 22, 0.08)", // Solar Orange
          c3: "rgba(251, 191, 36, 0.06)", // Gold
          c4: "rgba(99, 102, 241, 0.05)", // Deep Space Indigo
          c5: "rgba(244, 63, 94, 0.06)",  // Rose
        };
      case "projects":
        return {
          c1: "rgba(245, 158, 11, 0.10)", // Amber
          c2: "rgba(251, 191, 36, 0.08)", // Gold
          c3: "rgba(249, 115, 22, 0.06)", // Solar Orange
          c4: "rgba(239, 68, 68, 0.06)",  // Sunset Red
          c5: "rgba(6, 182, 212, 0.05)",  // Cyan Flare
        };
      case "education":
        return {
          c1: "rgba(249, 115, 22, 0.10)", // Solar Orange
          c2: "rgba(239, 68, 68, 0.08)",  // Sunset Red
          c3: "rgba(245, 158, 11, 0.06)", // Amber
          c4: "rgba(139, 92, 246, 0.06)", // Violet
          c5: "rgba(251, 191, 36, 0.06)", // Gold
        };
      case "certifications":
        return {
          c1: "rgba(251, 191, 36, 0.10)", // Gold
          c2: "rgba(245, 158, 11, 0.08)", // Amber
          c3: "rgba(249, 115, 22, 0.06)", // Solar Orange
          c4: "rgba(16, 185, 129, 0.05)", // Emerald Aurora
          c5: "rgba(239, 68, 68, 0.06)",  // Sunset Red
        };
      case "achievements":
        return {
          c1: "rgba(245, 158, 11, 0.12)", // Amber
          c2: "rgba(251, 191, 36, 0.10)", // Gold
          c3: "rgba(249, 115, 22, 0.08)", // Solar Orange
          c4: "rgba(239, 68, 68, 0.06)",  // Sunset Red
          c5: "rgba(236, 72, 153, 0.05)", // Pink Flare
        };
      case "resume":
        return {
          c1: "rgba(249, 115, 22, 0.10)", // Solar Orange
          c2: "rgba(251, 191, 36, 0.08)", // Gold
          c3: "rgba(245, 158, 11, 0.06)", // Amber
          c4: "rgba(14, 165, 233, 0.05)", // Sky Flare
          c5: "rgba(239, 68, 68, 0.06)",  // Sunset Red
        };
      case "contact":
        return {
          c1: "rgba(239, 68, 68, 0.10)",  // Sunset Red
          c2: "rgba(249, 115, 22, 0.10)", // Solar Orange
          c3: "rgba(251, 191, 36, 0.08)", // Gold
          c4: "rgba(245, 158, 11, 0.06)", // Amber
          c5: "rgba(168, 85, 247, 0.05)", // Purple Nebula
        };
      default:
        return {
          c1: "rgba(245, 158, 11, 0.10)",
          c2: "rgba(249, 115, 22, 0.08)",
          c3: "rgba(239, 68, 68, 0.06)",
          c4: "rgba(251, 191, 36, 0.06)",
          c5: "rgba(244, 63, 94, 0.06)",
        };
    }
  }
};

export default function AnimatedBackground({ theme, activeSection, glowX, glowY }) {
  const isLight = theme === "light";
  const meshColors = getMeshColors(activeSection, isLight);

  // Memoize stable coordinates for the floating particle system
  const particles = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
      const size = Math.random() * 5 + 2; // 2px to 7px
      const left = Math.random() * 100; // 0% to 100% horizontal placement
      const delay = Math.random() * -25; // Negative delay so particles start midway immediately
      const duration = Math.random() * 20 + 20; // 20s to 40s travel duration
      const drift = Math.random() * 100 - 50; // -50px to 50px drift
      const opacity = isLight 
        ? Math.random() * 0.06 + 0.02   // Soft, low-contrast particles for Light Mode
        : Math.random() * 0.14 + 0.05;  // Bright, warm golden particles for Dark Mode
      return { id: i, size, left, delay, duration, drift, opacity };
    });
  }, [isLight]);

  // Framer Motion scroll parallax calculations
  const { scrollYProgress } = useScroll();
  const blob1Y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const blob3Y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const blob4Y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none theme-transition"
      style={{
        "--bg-glow-c1": meshColors.c1,
        "--bg-glow-c2": meshColors.c2,
        "--bg-glow-c3": meshColors.c3,
        "--bg-glow-c4": meshColors.c4,
        "--bg-glow-c5": meshColors.c5,
      }}
    >
      {/* 1. Dynamic morphing mesh-gradient backdrop */}
      <div className="mesh-gradient-backdrop" />

      {/* 2. Interactive Spotlight Grid Pattern */}
      <div className="bg-grid-pattern" />

      {/* 3. Interactive Mouse Follower Glow (Desktop only) */}
      <motion.div
        className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-purple-500/5 via-indigo-500/5 to-blue-500/5 dark:from-amber-500/5 dark:via-orange-500/5 dark:to-red-500/5 blur-[100px] hidden md:block"
        style={{
          x: glowX,
          y: glowY,
        }}
      />

      {/* 4. GPU-Accelerated Drifting Gradient Blobs */}
      {/* Blob 1: Top-Left (Organic drifting) */}
      <motion.div
        className="absolute top-[-15%] left-[-15%] w-[50vw] h-[50vw] rounded-full bg-blob-purple blur-[130px] animate-drift-blob-1"
        style={{ y: blob1Y }}
      />

      {/* Blob 2: Bottom-Right (Organic drifting) */}
      <motion.div
        className="absolute bottom-[-15%] right-[-15%] w-[55vw] h-[55vw] rounded-full bg-blob-blue blur-[140px] animate-drift-blob-2"
        style={{ y: blob2Y }}
      />

      {/* Blob 3: Top-Right (Organic drifting) */}
      <motion.div
        className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-blob-pink blur-[120px] animate-drift-blob-3"
        style={{ y: blob3Y }}
      />

      {/* Blob 4: Bottom-Left (Organic drifting) */}
      <motion.div
        className="absolute bottom-[15%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-purple-500/3 to-indigo-500/3 dark:from-amber-500/4 dark:to-orange-500/4 blur-[130px] animate-drift-blob-4"
        style={{ y: blob4Y }}
      />

      {/* 5. Subtle Floating Particles (CSS Animation Driven for Efficiency) */}
      <div className="absolute inset-0 w-full h-full">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full animate-float-particle"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              backgroundColor: isLight 
                ? "rgba(124, 58, 237, var(--particle-opacity))" // Indigo/Purple in Light Mode
                : "rgba(251, 146, 60, var(--particle-opacity))", // Warm Amber in Dark Mode
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              "--particle-drift": `${p.drift}px`,
              "--particle-opacity": p.opacity,
            }}
          />
        ))}
      </div>
    </div>
  );
}
