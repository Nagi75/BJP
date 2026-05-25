"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Coffee,
  Wifi,
  Gamepad2,
  Music,
  Shirt,
  Star,
  Swords,
  Sparkles,
  Flame,
  Laugh,
} from "lucide-react";

const categories = [
  { label: "Ideology", icon: Star, baddie: "Slay First, Policy Later 💅", bhabhi: "Chai Diplomacy & Sass 🍵", baddieScore: 9, bhabhiScore: 8 },
  { label: "Chai Power", icon: Coffee, baddie: "Aesthetic matcha only", bhabhi: "Kadak adrak chai supremacy", baddieScore: 6, bhabhiScore: 10 },
  { label: "WiFi Promise", icon: Wifi, baddie: "5G in every selfie spot", bhabhi: "WiFi in every kitchen & gali", baddieScore: 8, bhabhiScore: 9 },
  { label: "Meme Rating", icon: Laugh, baddie: "10/10 dank certified", bhabhi: "9/10 wholesome viral", baddieScore: 10, bhabhiScore: 9 },
  { label: "Dance Skills", icon: Music, baddie: "K-pop + Bollywood fusion", bhabhi: "Garba + Bhangra dominance", baddieScore: 9, bhabhiScore: 10 },
  { label: "Gaming", icon: Gamepad2, baddie: "Valorant & Genshin mains", bhabhi: "Ludo & Candy Crush queens", baddieScore: 10, bhabhiScore: 7 },
  { label: "Fashion Level", icon: Shirt, baddie: "Y2K streetwear aesthetic", bhabhi: "Saree drip + gold game", baddieScore: 10, bhabhiScore: 10 },
];

export default function PartyComparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="comparison" className="relative py-24 md:py-32 px-4" ref={ref}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-baddie-pink/5 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-bhabhi-orange/5 rounded-full blur-[180px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium text-foreground/60 mb-4">
            <Swords className="w-4 h-4 text-baddie-pink" />
            Head-to-Head Battle
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="gradient-text-baddie">Baddie</span>
            <span className="text-foreground/20 mx-3">vs</span>
            <span className="gradient-text-bhabhi">Bhabhi</span>
          </h2>
          <p className="text-foreground/40 max-w-lg mx-auto">
            The ultimate showdown. Compare their stats, pick your champion.
          </p>
        </motion.div>

        {/* Party Headers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-4 mb-6"
        >
          <div className="text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl neon-border-baddie bg-baddie-pink/5">
              <Sparkles className="w-4 h-4 text-baddie-pink" />
              <span className="font-bold text-baddie-pink text-sm">Baddie JP</span>
            </div>
          </div>
          <div className="text-center text-foreground/20 text-xs font-bold self-center uppercase tracking-widest">
            Category
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl neon-border-bhabhi bg-bhabhi-orange/5">
              <Flame className="w-4 h-4 text-bhabhi-orange" />
              <span className="font-bold text-bhabhi-orange text-sm">Bhabhi JP</span>
            </div>
          </div>
        </motion.div>

        {/* Comparison Rows */}
        <div className="space-y-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="grid grid-cols-3 gap-4 items-center glass rounded-2xl p-4 hover:bg-surface-hover transition-colors"
            >
              {/* Baddie side */}
              <div className="text-right">
                <p className="text-sm text-foreground/60 mb-2 hidden sm:block">{cat.baddie}</p>
                <div className="flex items-center justify-end gap-1">
                  {Array.from({ length: 10 }).map((_, j) => (
                    <motion.div
                      key={j}
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ delay: 0.3 + i * 0.08 + j * 0.03 }}
                      className={`w-2 sm:w-3 h-2 rounded-full ${
                        j < cat.baddieScore
                          ? "bg-gradient-to-r from-baddie-pink to-baddie-purple"
                          : "bg-white/5"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Category label */}
              <div className="text-center">
                <div className="flex flex-col items-center gap-1">
                  <cat.icon className="w-4 h-4 text-foreground/30" />
                  <span className="text-xs font-bold text-foreground/50 uppercase tracking-wider">
                    {cat.label}
                  </span>
                </div>
              </div>

              {/* Bhabhi side */}
              <div>
                <p className="text-sm text-foreground/60 mb-2 hidden sm:block">{cat.bhabhi}</p>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 10 }).map((_, j) => (
                    <motion.div
                      key={j}
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ delay: 0.3 + i * 0.08 + j * 0.03 }}
                      className={`w-2 sm:w-3 h-2 rounded-full ${
                        j < cat.bhabhiScore
                          ? "bg-gradient-to-r from-bhabhi-orange to-bhabhi-yellow"
                          : "bg-white/5"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom verdict */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="text-center mt-8"
        >
          <p className="text-xs text-foreground/20">
            * All stats are scientifically calculated using advanced vibes-based algorithms.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
