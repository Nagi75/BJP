"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { BarChart3, TrendingUp, Users, Vote, Trophy, Sparkles, Flame } from "lucide-react";

interface CounterProps {
  value: number;
  isInView: boolean;
  suffix?: string;
}

function AnimatedCounter({ value, isInView: inView, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);
  return <span>{count.toLocaleString("en-IN")}{suffix}</span>;
}

const partyData = [
  {
    name: "Baddie Janta Party",
    short: "BJP",
    votes: 4269420,
    approval: 73,
    memeRating: 98,
    gradient: "from-baddie-pink to-baddie-purple",
    color: "text-baddie-pink",
    icon: Sparkles,
    emoji: "💅",
  },
  {
    name: "Bhabhi Janta Party",
    short: "BhJP",
    votes: 3847156,
    approval: 68,
    memeRating: 91,
    gradient: "from-bhabhi-orange to-bhabhi-yellow",
    color: "text-bhabhi-orange",
    icon: Flame,
    emoji: "🔥",
  },
];

const statCards = [
  { label: "Total Fictional Voters", value: 8116576, icon: Users, suffix: "" },
  { label: "Memes Generated", value: 420069, icon: BarChart3, suffix: "" },
  { label: "States Covered", value: 69, icon: TrendingUp, suffix: "" },
  { label: "Chai Cups Consumed", value: 9999999, icon: Vote, suffix: "" },
];

export default function ElectionDashboard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [liveVotes, setLiveVotes] = useState(partyData.map((p) => p.votes));

  // Simulate live vote changes
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveVotes((prev) =>
        prev.map((v) => v + Math.floor(Math.random() * 50) + 10)
      );
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const totalVotes = liveVotes.reduce((a, b) => a + b, 0);
  const formatNum = useCallback((n: number) => n.toLocaleString("en-IN"), []);

  return (
    <section id="dashboard" className="relative py-24 md:py-32 px-4" ref={ref}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-baddie-purple/3 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-bhabhi-orange/3 rounded-full blur-[200px]" />
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
            <Trophy className="w-4 h-4 text-bhabhi-yellow" />
            Live Election Dashboard
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="gradient-text-mixed">Election HQ</span>
          </h2>
          <p className="text-foreground/40 max-w-lg mx-auto">
            Real-time* fictional voting data. (*Real-time as in we update it randomly every 1.5 seconds)
          </p>
        </motion.div>

        {/* Vote bars for each party */}
        <div className="space-y-6 mb-12">
          {partyData.map((party, i) => (
            <motion.div
              key={party.short}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-2xl p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${party.gradient} flex items-center justify-center text-lg`}>
                    {party.emoji}
                  </div>
                  <div>
                    <h4 className={`font-bold ${party.color}`}>{party.name}</h4>
                    <p className="text-xs text-foreground/30">
                      {formatNum(liveVotes[i])} votes
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black gradient-text-mixed tabular-nums">
                    {totalVotes > 0 ? Math.round((liveVotes[i] / totalVotes) * 100) : 0}%
                  </span>
                </div>
              </div>
              <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${totalVotes > 0 ? (liveVotes[i] / totalVotes) * 100 : 0}%` } : {}}
                  transition={{ duration: 1.5, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${party.gradient} transition-all duration-1000`}
                />
              </div>
              <div className="flex items-center gap-6 mt-3 text-xs text-foreground/30">
                <span>Approval: {party.approval}%</span>
                <span>Meme Rating: {party.memeRating}/100</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {statCards.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="glass rounded-2xl p-4 text-center"
            >
              <stat.icon className="w-5 h-5 text-foreground/20 mx-auto mb-2" />
              <div className="text-xl md:text-2xl font-black gradient-text-mixed tabular-nums">
                <AnimatedCounter value={stat.value} isInView={isInView} suffix={stat.suffix} />
              </div>
              <p className="text-xs text-foreground/30 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
          className="text-center text-xs text-foreground/15 mt-6"
        >
          * Data powered by: imagination, chai, and random number generators. Margin of error: definitely.
        </motion.p>
      </div>
    </section>
  );
}
