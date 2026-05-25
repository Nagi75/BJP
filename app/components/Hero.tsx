"use client";

import { motion } from "framer-motion";
import { Swords, Sparkles, Flame, Zap, Crown } from "lucide-react";

const floatingEmojis = ["✨", "🔥", "💅", "👑", "⚡", "💜", "🧡", "🎯"];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -50, 20, 0], scale: [1, 1.1, 0.9, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-baddie-pink/15 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ x: [0, -30, 20, 0], y: [0, 40, -30, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/4 -right-40 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-baddie-purple/15 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ x: [0, 20, -30, 0], y: [0, -20, 40, 0], scale: [1, 1.1, 0.9, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute -bottom-40 left-1/3 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-bhabhi-orange/15 rounded-full blur-[150px]"
        />
      </div>

      {/* Floating emojis */}
      {floatingEmojis.map((emoji, i) => (
        <motion.div
          key={i}
          animate={{ y: [-20, 20, -20], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          className="absolute text-xl md:text-2xl opacity-20 select-none hidden md:block"
          style={{ top: `${15 + (i * 10) % 70}%`, left: `${5 + (i * 13) % 90}%` }}
        >
          {emoji}
        </motion.div>
      ))}

      {/* Decorative spinning icons */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-24 right-10 md:right-24 opacity-[0.06]"
      >
        <Crown className="w-32 h-32 md:w-48 md:h-48 text-bhabhi-yellow" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-24 left-10 md:left-24 opacity-[0.06]"
      >
        <Flame className="w-28 h-28 md:w-40 md:h-40 text-baddie-pink" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs sm:text-sm font-medium text-foreground/60 mb-8"
        >
          <Swords className="w-4 h-4 text-baddie-pink" />
          <span>The Ultimate Political Showdown of 2025</span>
          <Zap className="w-4 h-4 text-bhabhi-orange" />
        </motion.div>

        {/* Party names - split branding */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight">
            <span className="gradient-text-baddie">Baddie</span>
            <span className="text-foreground/30 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mx-2 sm:mx-4 font-light">vs</span>
            <span className="gradient-text-bhabhi">Bhabhi</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mt-2"
          >
            Janta Party
          </motion.p>
        </motion.div>

        {/* Slogan battle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-10 text-sm sm:text-base md:text-lg"
        >
          <span className="text-baddie-pink font-semibold flex items-center gap-1">
            <Sparkles className="w-4 h-4" /> &ldquo;Slay. Vote. Repeat.&rdquo;
          </span>
          <span className="text-foreground/20 font-bold">⚔️</span>
          <span className="text-bhabhi-orange font-semibold flex items-center gap-1">
            <Flame className="w-4 h-4" /> &ldquo;Chai. Power. Sass.&rdquo;
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-sm md:text-base text-foreground/35 mb-10 max-w-xl mx-auto"
        >
          Two parties. One universe. Infinite memes. Pick your side in India&apos;s most unhinged fictional election 🗳️
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(236, 72, 153, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo("#comparison")}
            className="px-7 py-3.5 rounded-full bg-gradient-to-r from-baddie-pink to-baddie-purple text-white font-bold text-sm sm:text-base flex items-center gap-2 shadow-lg cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            Team Baddie 💅
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(249, 115, 22, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo("#comparison")}
            className="px-7 py-3.5 rounded-full bg-gradient-to-r from-bhabhi-orange to-bhabhi-amber text-white font-bold text-sm sm:text-base flex items-center gap-2 shadow-lg cursor-pointer"
          >
            <Flame className="w-4 h-4" />
            Team Bhabhi 🔥
          </motion.button>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-16"
        >
          <motion.p
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-foreground/20 text-xs font-medium tracking-widest uppercase"
          >
            Scroll to choose your destiny ↓
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
