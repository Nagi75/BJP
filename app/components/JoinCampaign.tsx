"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Sparkles, Check, Loader2, PartyPopper } from "lucide-react";

export default function JoinCampaign() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [team, setTeam] = useState<"baddie" | "bhabhi" | "">("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name || !team) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      // Fire confetti
      import("canvas-confetti").then((confetti) => {
        confetti.default({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors:
            team === "baddie"
              ? ["#ec4899", "#a855f7", "#d946ef"]
              : ["#f97316", "#facc15", "#f59e0b"],
        });
      });
      setTimeout(() => {
        setStatus("idle");
        setEmail("");
        setName("");
        setTeam("");
      }, 4000);
    }, 1500);
  };

  return (
    <section id="join" className="relative py-24 md:py-32 px-4" ref={ref}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-baddie-purple/5 rounded-full blur-[180px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="relative max-w-lg mx-auto"
      >
        <div className="glass-strong rounded-3xl p-8 md:p-10 relative overflow-hidden">
          {/* Decorative border gradient */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-baddie-pink/10 via-transparent to-bhabhi-orange/10 pointer-events-none" />

          {/* Floating icon */}
          <motion.div
            animate={{ y: [-5, 5, -5], rotate: [-3, 3, -3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-baddie-pink to-bhabhi-orange flex items-center justify-center"
          >
            <PartyPopper className="w-7 h-7 text-white" />
          </motion.div>

          <h2 className="text-2xl md:text-3xl font-black text-center mb-2">
            <span className="gradient-text-mixed">Join the Movement</span>
          </h2>
          <p className="text-foreground/40 text-center text-sm mb-8 max-w-sm mx-auto">
            Pick your side. Submit your allegiance. Get absolutely nothing in return except vibes.
          </p>

          {status === "success" ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-green/20 flex items-center justify-center">
                <Check className="w-8 h-8 text-neon-green" />
              </div>
              <p className="text-lg font-bold text-foreground mb-1">You&apos;re in! 🎉</p>
              <p className="text-sm text-foreground/40">
                Welcome to Team {team === "baddie" ? "Baddie 💅" : "Bhabhi 🔥"}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your meme name"
                  required
                  className="w-full px-4 py-3.5 rounded-xl glass text-foreground text-sm placeholder:text-foreground/25 focus:outline-none focus:ring-2 focus:ring-baddie-pink/30 bg-transparent transition-all"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/20" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl glass text-foreground text-sm placeholder:text-foreground/25 focus:outline-none focus:ring-2 focus:ring-baddie-pink/30 bg-transparent transition-all"
                />
              </div>

              {/* Team selection */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setTeam("baddie")}
                  className={`py-3 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    team === "baddie"
                      ? "bg-gradient-to-r from-baddie-pink to-baddie-purple text-white shadow-lg glow-baddie"
                      : "glass text-foreground/50 hover:text-baddie-pink"
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  Team Baddie
                </button>
                <button
                  type="button"
                  onClick={() => setTeam("bhabhi")}
                  className={`py-3 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    team === "bhabhi"
                      ? "bg-gradient-to-r from-bhabhi-orange to-bhabhi-amber text-white shadow-lg glow-bhabhi"
                      : "glass text-foreground/50 hover:text-bhabhi-orange"
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  Team Bhabhi
                </button>
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "loading" || !team}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-baddie-pink via-baddie-purple to-bhabhi-orange text-white font-bold text-sm flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {status === "loading" ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <PartyPopper className="w-4 h-4" />
                    Join the Party
                  </>
                )}
              </motion.button>
            </form>
          )}

          <p className="text-[10px] text-foreground/15 text-center mt-6">
            No real data is collected. This form does nothing. You&apos;re safe.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
