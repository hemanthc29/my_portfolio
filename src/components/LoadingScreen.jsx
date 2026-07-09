import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [textIndex, setTextIndex] = useState(0);
  const loadingTexts = [
    "Initializing portfolio environment...",
    "Loading career details from Resume_SE.pdf...",
    "importing { React, TailwindCSS, FramerMotion }...",
    "const engineer = new SDE('Chennuru Venkata Hemanth Kumar');",
    "engineer.solveDSA(6380+); // Diamond III Consistency",
    "engineer.optimizeAlgorithms({ constraintBacktracking: true });",
    "engineer.compileProjectGallery();",
    "Deployment ready. Launching portfolio..."
  ];

  useEffect(() => {
    if (textIndex < loadingTexts.length) {
      const delay = textIndex === loadingTexts.length - 1 ? 900 : 350;
      const timer = setTimeout(() => {
        setTextIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [textIndex, onComplete]);

  return (
    <div className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-50 px-4">
      {/* Background radial highlight */}
      <div className="absolute w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-purple-500/5 blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="w-full max-w-lg glassmorphism p-6 rounded-xl relative overflow-hidden font-mono text-xs md:text-sm text-purple-400 shadow-2xl border-purple-500/20">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-rose-500" />
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="text-[10px] text-slate-500 ml-2">bash - portfolio_loader.sh</span>
        </div>

        {/* Terminal logs */}
        <div className="space-y-2 min-h-[160px] flex flex-col justify-end">
          {loadingTexts.slice(0, textIndex).map((text, i) => (
            <div key={i} className="text-slate-400">
              <span className="text-purple-500 font-bold">$ </span>
              {text}
            </div>
          ))}
          
          {textIndex < loadingTexts.length && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
              className="text-white flex items-center"
            >
              <span className="text-purple-500 font-bold mr-1">$ </span>
              <span>{loadingTexts[textIndex]}</span>
              <span className="ml-1 w-2 h-4 bg-purple-400 inline-block animate-pulse" />
            </motion.div>
          )}
        </div>

        {/* Loading Progress Bar */}
        <div className="mt-6 w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3.2, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
