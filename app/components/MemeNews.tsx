"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Newspaper, AlertTriangle, TrendingUp, Zap } from "lucide-react";

const headlines = [
  {
    tag: "BREAKING",
    tagColor: "bg-neon-red text-white",
    title: "BJP Leader Seen Making Aesthetic Reel During Parliament Session",
    time: "2 min ago",
  },
  {
    tag: "TRENDING",
    tagColor: "bg-baddie-pink text-white",
    title: "Bhabhi JP's Chai Rally Breaks Record: 10,000 Cups in 1 Hour",
    time: "15 min ago",
  },
  {
    tag: "EXCLUSIVE",
    tagColor: "bg-baddie-purple text-white",
    title: "WiFi Speed Tests Now Part of National Election Criteria",
    time: "32 min ago",
  },
  {
    tag: "VIRAL",
    tagColor: "bg-bhabhi-orange text-white",
    title: "Meme Lord Priya's Cat Photo Gets More Votes Than 3 Candidates",
    time: "1 hr ago",
  },
  {
    tag: "DEVELOPING",
    tagColor: "bg-neon-cyan text-white",
    title: "Both Parties Agree: Monday Should Be Cancelled Nationwide",
    time: "2 hrs ago",
  },
  {
    tag: "OPINION",
    tagColor: "bg-bhabhi-amber text-white",
    title: "Sharma Ji Ka Beta Writes 47-Page Report on Why He's Better Than You",
    time: "3 hrs ago",
  },
];

const tickerItems = [
  "🔥 BJP leads in meme polls by 420 points",
  "☕ BhJP promises chai delivery drones by 2026",
  "🎮 National Gaming League bill passes fictional parliament",
  "💅 BJP launches 'Slay the Vote' campaign",
  "🍕 Free pizza amendment added to BhJP manifesto",
  "📶 WiFi speed now a fundamental fictional right",
  "😴 National Nap Hour endorsed by both parties",
  "🏆 Meme Olympics confirmed for 2027",
];

export default function MemeNews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="news" className="relative py-24 md:py-32 px-4" ref={ref}>
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium text-foreground/60 mb-4">
            <Newspaper className="w-4 h-4 text-neon-red" />
            Meme News Network
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="gradient-text-mixed">Breaking News</span>
          </h2>
          <p className="text-foreground/40 max-w-lg mx-auto">
            All the news that&apos;s fit to meme. None of it is real. All of it is iconic.
          </p>
        </motion.div>

        {/* Animated Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-10 overflow-hidden rounded-xl glass py-3"
        >
          <div className="flex items-center">
            <div className="shrink-0 px-3 py-1 bg-neon-red text-white text-xs font-black uppercase tracking-wider rounded-r-lg mr-4 flex items-center gap-1">
              <Zap className="w-3 h-3" /> LIVE
            </div>
            <div className="overflow-hidden whitespace-nowrap flex-1">
              <div className="inline-flex animate-ticker">
                {[...tickerItems, ...tickerItems].map((item, i) => (
                  <span
                    key={i}
                    className="text-sm text-foreground/50 mx-8 whitespace-nowrap"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {headlines.map((news, i) => (
            <motion.div
              key={news.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group glass rounded-2xl p-5 cursor-default hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase ${news.tagColor}`}>
                  {news.tag}
                </span>
                <span className="text-[10px] text-foreground/25">{news.time}</span>
              </div>
              <h3 className="text-sm font-bold text-foreground/80 leading-relaxed group-hover:text-foreground transition-colors">
                {news.title}
              </h3>
              <div className="flex items-center gap-2 mt-3 text-[10px] text-foreground/20">
                <AlertTriangle className="w-3 h-3" />
                <span>Fictional • Satirical • Not Real</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trending topics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-2 mt-8"
        >
          <TrendingUp className="w-4 h-4 text-foreground/20" />
          {["#BaddieVsBhabhi", "#ChaiPower", "#MemeElection", "#VoteForVibes", "#NapHourNow"].map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full glass text-xs text-foreground/40 hover:text-baddie-pink transition-colors cursor-pointer">
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
