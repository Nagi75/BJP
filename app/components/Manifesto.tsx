"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Coffee,
  Wifi,
  Gamepad2,
  GraduationCap,
  Music,
  BedDouble,
  Pizza,
  Bike,
  Sparkles,
  Flame,
} from "lucide-react";

const manifestoItems = [
  {
    icon: Coffee, title: "Free Chai for Coders",
    desc: "Ctrl+C, Ctrl+V, Ctrl+Chai. Every keyboard warrior deserves unlimited fuel.",
    party: "baddie", color: "from-amber-500 to-orange-500",
  },
  {
    icon: Wifi, title: "24/7 Hostel WiFi",
    desc: "100 Mbps minimum. Netflix doesn't buffer in our regime.",
    party: "bhabhi", color: "from-cyan-400 to-blue-500",
  },
  {
    icon: Gamepad2, title: "Gaming Holidays",
    desc: "National holidays on every major game launch day. GG ez.",
    party: "baddie", color: "from-purple-500 to-pink-500",
  },
  {
    icon: GraduationCap, title: "Attendance Forgiveness",
    desc: "75% attendance? We'll make it 25%. You're welcome.",
    party: "bhabhi", color: "from-green-400 to-emerald-500",
  },
  {
    icon: BedDouble, title: "National Nap Hour",
    desc: "2-3 PM is sacred. Mandatory nap time for all citizens.",
    party: "baddie", color: "from-indigo-400 to-violet-500",
  },
  {
    icon: Music, title: "Lo-fi in Govt Offices",
    desc: "Every government office plays lo-fi beats. Zero stress policy.",
    party: "bhabhi", color: "from-pink-500 to-rose-500",
  },
  {
    icon: Pizza, title: "Street Food Subsidies",
    desc: "Pani puri at ₹5, momos at ₹10. Budget? Vibes will cover it.",
    party: "baddie", color: "from-yellow-400 to-amber-500",
  },
  {
    icon: Bike, title: "Free EV Scooty",
    desc: "Every citizen gets an electric scooty. Traffic? Not our problem.",
    party: "bhabhi", color: "from-teal-400 to-cyan-500",
  },
];

export default function Manifesto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="manifesto" className="relative py-24 md:py-32 px-4" ref={ref}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bhabhi-orange/3 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-baddie-pink/3 rounded-full blur-[180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-foreground/60 mb-4">
            📜 The Sacred Scrolls
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="gradient-text-mixed">Manifesto Arena</span>
          </h2>
          <p className="text-foreground/40 max-w-lg mx-auto">
            8 promises. 0 budget. 100% vibes. Both parties, one dream: chaos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {manifestoItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ scale: 1.04, y: -5, transition: { duration: 0.2 } }}
              className={`group glass rounded-2xl p-5 cursor-default hover:shadow-xl transition-all duration-300 relative overflow-hidden ${
                item.party === "baddie" ? "neon-border-baddie" : "neon-border-bhabhi"
              }`}
            >
              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity`} />

              <div className="relative z-10">
                {/* Party tag */}
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-5 h-5 text-white/80" />
                  </div>
                  <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider">
                    {item.party === "baddie" ? (
                      <><Sparkles className="w-3 h-3 text-baddie-pink" /><span className="text-baddie-pink">BJP</span></>
                    ) : (
                      <><Flame className="w-3 h-3 text-bhabhi-orange" /><span className="text-bhabhi-orange">BhJP</span></>
                    )}
                  </span>
                </div>
                <h3 className="text-base font-bold text-foreground mb-1.5">{item.title}</h3>
                <p className="text-xs text-foreground/40 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
