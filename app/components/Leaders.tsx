"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, MessageCircle, Globe, Sparkles, Flame } from "lucide-react";

const leaders = [
  // Baddie Janta Party leaders
  {
    party: "baddie",
    name: "Chotu Bhaiya",
    role: "Supreme Slay Commander",
    quote: "I don't make promises. I make aesthetic mood boards. ✨",
    emoji: "👨‍🎤",
    gradient: "from-baddie-pink to-baddie-purple",
    glow: "group-hover:shadow-baddie-pink/20",
    borderClass: "neon-border-baddie",
  },
  {
    party: "baddie",
    name: "Meme Lord Priya",
    role: "Minister of Dank Affairs",
    quote: "A nation that memes together stays together. Period. 💅",
    emoji: "👩‍💻",
    gradient: "from-baddie-purple to-baddie-magenta",
    glow: "group-hover:shadow-baddie-purple/20",
    borderClass: "neon-border-baddie",
  },
  {
    party: "baddie",
    name: "WiFi Wala Dev",
    role: "Chief Technology Bro",
    quote: "Forget GDP. I track WiFi speed per capita. 📶",
    emoji: "🧑‍💻",
    gradient: "from-baddie-magenta to-baddie-pink",
    glow: "group-hover:shadow-baddie-magenta/20",
    borderClass: "neon-border-baddie",
  },
  // Bhabhi Janta Party leaders
  {
    party: "bhabhi",
    name: "Chai Wali Aunty",
    role: "Supreme Chai Chancellor",
    quote: "One cup of kadak chai = 10 cabinet meetings. ☕",
    emoji: "👩‍🍳",
    gradient: "from-bhabhi-orange to-bhabhi-amber",
    glow: "group-hover:shadow-bhabhi-orange/20",
    borderClass: "neon-border-bhabhi",
  },
  {
    party: "bhabhi",
    name: "Sharma Ji Ka Beta",
    role: "Head of Comparison Dept.",
    quote: "My resume includes 12 hobbies, 3 degrees, and 0 fun. 📋",
    emoji: "🧔",
    gradient: "from-bhabhi-amber to-bhabhi-yellow",
    glow: "group-hover:shadow-bhabhi-amber/20",
    borderClass: "neon-border-bhabhi",
  },
  {
    party: "bhabhi",
    name: "Garba Queen Ritu",
    role: "Minister of Dance & Vibes",
    quote: "My dandiya moves have better approval than any policy. 💃",
    emoji: "💃",
    gradient: "from-bhabhi-yellow to-bhabhi-orange",
    glow: "group-hover:shadow-bhabhi-yellow/20",
    borderClass: "neon-border-bhabhi",
  },
];

export default function Leaders() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const baddieLeaders = leaders.filter((l) => l.party === "baddie");
  const bhabhiLeaders = leaders.filter((l) => l.party === "bhabhi");

  return (
    <section id="leaders" className="relative py-24 md:py-32 px-4" ref={ref}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-baddie-purple/3 rounded-full blur-[200px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-foreground/60 mb-4">
            👑 The Legends
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="gradient-text-mixed">Party Leaders</span>
          </h2>
          <p className="text-foreground/40 max-w-xl mx-auto">
            Meet the totally qualified icons running for office (source: vibes)
          </p>
        </motion.div>

        {/* Baddie Leaders */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="flex items-center gap-2 mb-6"
          >
            <Sparkles className="w-5 h-5 text-baddie-pink" />
            <h3 className="text-xl font-bold gradient-text-baddie">Baddie Janta Party</h3>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {baddieLeaders.map((leader, i) => (
              <LeaderCard key={leader.name} leader={leader} index={i} isInView={isInView} />
            ))}
          </div>
        </div>

        {/* Bhabhi Leaders */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 mb-6"
          >
            <Flame className="w-5 h-5 text-bhabhi-orange" />
            <h3 className="text-xl font-bold gradient-text-bhabhi">Bhabhi Janta Party</h3>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {bhabhiLeaders.map((leader, i) => (
              <LeaderCard key={leader.name} leader={leader} index={i + 3} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LeaderCard({
  leader,
  index,
  isInView,
}: {
  leader: (typeof leaders)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className={`group glass ${leader.borderClass} rounded-2xl p-6 text-center cursor-default hover:shadow-2xl ${leader.glow} transition-all duration-300`}
    >
      {/* Avatar */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${leader.gradient} flex items-center justify-center text-3xl shadow-lg`}
      >
        {leader.emoji}
      </motion.div>

      <h4 className="text-lg font-bold text-foreground mb-1">{leader.name}</h4>
      <p className={`text-xs font-semibold bg-gradient-to-r ${leader.gradient} bg-clip-text text-transparent mb-3`}>
        {leader.role}
      </p>

      <div className="relative mb-4">
        <Quote className="w-3 h-3 text-foreground/15 mb-1 mx-auto" />
        <p className="text-xs text-foreground/40 italic leading-relaxed group-hover:text-foreground/60 transition-colors">
          &ldquo;{leader.quote}&rdquo;
        </p>
      </div>

      {/* Fake social buttons */}
      <div className="flex items-center justify-center gap-2">
        <motion.button
          whileHover={{ scale: 1.15 }}
          className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-foreground/30 hover:text-baddie-pink transition-colors cursor-pointer"
        >
          <MessageCircle className="w-3.5 h-3.5" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.15 }}
          className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-foreground/30 hover:text-bhabhi-orange transition-colors cursor-pointer"
        >
          <Globe className="w-3.5 h-3.5" />
        </motion.button>
      </div>
    </motion.div>
  );
}
