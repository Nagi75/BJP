"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, Sparkles, Flame } from "lucide-react";

const galleryItems = [
  {
    title: "The First Rally",
    desc: "5 people, 1 ring light, unlimited confidence",
    gradient: "from-baddie-pink via-purple-600 to-baddie-purple",
    emoji: "🎤",
    party: "baddie",
  },
  {
    title: "Chai Pe Charcha",
    desc: "Bhabhi JP's legendary tea diplomacy",
    gradient: "from-bhabhi-amber via-orange-500 to-bhabhi-orange",
    emoji: "☕",
    party: "bhabhi",
  },
  {
    title: "Meme Parliament",
    desc: "Democracy but make it dank",
    gradient: "from-neon-cyan via-blue-500 to-baddie-purple",
    emoji: "🏛️",
    party: "baddie",
  },
  {
    title: "Garba Night Rally",
    desc: "When the dandiya hits harder than policy",
    gradient: "from-bhabhi-yellow via-amber-500 to-bhabhi-orange",
    emoji: "💃",
    party: "bhabhi",
  },
  {
    title: "Gaming Championship",
    desc: "National BGMI finals at 3 AM",
    gradient: "from-baddie-purple via-pink-500 to-baddie-pink",
    emoji: "🎮",
    party: "baddie",
  },
  {
    title: "Campaign HQ",
    desc: "Someone's living room with fairy lights",
    gradient: "from-bhabhi-orange via-red-400 to-baddie-pink",
    emoji: "🏠",
    party: "bhabhi",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" className="relative py-24 md:py-32 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-foreground/60 mb-4">
            📸 Campaign Archives
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="gradient-text-mixed">Gallery</span>
          </h2>
          <p className="text-foreground/40 max-w-lg mx-auto">
            Rare footage from our totally real, definitely-not-staged events
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-75 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Dot pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "16px 16px",
                  }}
                />
              </div>

              {/* Emoji */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl md:text-6xl opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-300 select-none">
                  {item.emoji}
                </span>
              </div>

              {/* Neon border on hover */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity ${
                item.party === "baddie" ? "shadow-[inset_0_0_30px_rgba(236,72,153,0.3)]" : "shadow-[inset_0_0_30px_rgba(249,115,22,0.3)]"
              }`} />

              {/* Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Camera className="w-3.5 h-3.5 text-white/50" />
                  <span className="text-[10px] text-white/40 font-medium uppercase tracking-wider flex items-center gap-1">
                    {item.party === "baddie" ? (
                      <><Sparkles className="w-3 h-3 text-baddie-pink" /> BJP Archives</>
                    ) : (
                      <><Flame className="w-3 h-3 text-bhabhi-orange" /> BhJP Archives</>
                    )}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-0.5">{item.title}</h3>
                <p className="text-xs text-white/50">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
