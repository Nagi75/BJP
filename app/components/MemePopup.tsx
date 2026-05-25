"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { X, Bell } from "lucide-react";

const memeMessages = [
  { text: "🔥 BREAKING: BJP's meme manifesto goes viral — 2M shares in 1 hour!" },
  { text: "☕ ALERT: BhJP's chai supply running low at HQ. Send reinforcements!" },
  { text: "📊 POLL UPDATE: Both parties tied at 420% approval. Math unclear." },
  { text: "🎮 BJP announces national 'No Homework' policy. Students rejoice!" },
  { text: "💃 BhJP's garba rally breaks world record. Ankles also broken." },
  { text: "📶 WiFi speed hits 69 Gbps in fictional test lab. Nice." },
  { text: "😴 National Nap Hour extended to National Nap Day by popular demand." },
  { text: "🍕 Pizza subsidies pass fictional parliament. Dominos stock soars." },
  { text: "💅 BJP leader caught watching K-dramas during session. 'It's research.'" },
  { text: "🧡 BhJP chai recipe leaked. Contains: love, ginger, and audacity." },
];

interface MemeNotification {
  id: number;
  text: string;
}

export default function MemePopup() {
  const [notifications, setNotifications] = useState<MemeNotification[]>([]);

  const dismiss = useCallback((id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  useEffect(() => {
    let idx = 0;
    const show = () => {
      const msg = memeMessages[idx % memeMessages.length];
      const id = Date.now();
      setNotifications((prev) => [...prev.slice(-2), { id, text: msg.text }]);
      setTimeout(() => dismiss(id), 4500);
      idx++;
    };

    const first = setTimeout(show, 10000);
    const interval = setInterval(show, 18000 + Math.random() * 8000);
    return () => {
      clearTimeout(first);
      clearInterval(interval);
    };
  }, [dismiss]);

  return (
    <div className="fixed top-20 right-4 z-[45] flex flex-col gap-2 max-w-xs w-full pointer-events-none">
      <AnimatePresence mode="popLayout">
        {notifications.map((n) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            transition={{ type: "spring", bounce: 0.3 }}
            className="glass-strong rounded-xl p-3.5 shadow-xl flex items-start gap-3 pointer-events-auto"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-baddie-pink to-bhabhi-orange flex items-center justify-center shrink-0">
              <Bell className="w-3.5 h-3.5 text-white" />
            </div>
            <p className="text-xs text-foreground/70 flex-1 leading-relaxed">{n.text}</p>
            <button
              onClick={() => dismiss(n.id)}
              className="text-foreground/20 hover:text-foreground/50 transition-colors cursor-pointer shrink-0"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
