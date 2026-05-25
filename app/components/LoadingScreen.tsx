"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + Math.random() * 15 + 5;
      });
    }, 150);
    const timer = setTimeout(() => setIsLoading(false), 2400);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark"
        >
          {/* Background blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-baddie-pink/20 rounded-full blur-[120px] animate-blob" />
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-baddie-purple/20 rounded-full blur-[120px] animate-blob-delay" />
            <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-bhabhi-orange/20 rounded-full blur-[120px] animate-blob-delay-2" />
          </div>

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 text-center"
          >
            {/* VS Logo */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.span
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-3xl md:text-4xl font-black gradient-text-baddie"
              >
                BJP
              </motion.span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-lg font-bold text-white/40"
              >
                VS
              </motion.span>
              <motion.span
                animate={{ x: [5, -5, 5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-3xl md:text-4xl font-black gradient-text-bhabhi"
              >
                BhJP
              </motion.span>
            </div>

            <p className="text-sm text-white/40 font-medium tracking-[0.3em] uppercase mb-8">
              Loading the showdown...
            </p>

            {/* Progress bar */}
            <div className="w-48 h-1 rounded-full bg-white/5 mx-auto overflow-hidden">
              <motion.div
                animate={{ width: `${Math.min(progress, 100)}%` }}
                className="h-full rounded-full bg-gradient-to-r from-baddie-pink via-baddie-purple to-bhabhi-orange"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
