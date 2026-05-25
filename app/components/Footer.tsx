"use client";

import { motion } from "framer-motion";
import { Globe, MessageCircle, Video, Code, Heart, Sparkles, Zap } from "lucide-react";

const socialLinks = [
  { icon: MessageCircle, label: "Twitter", href: "#" },
  { icon: Globe, label: "Instagram", href: "#" },
  { icon: Video, label: "YouTube", href: "#" },
  { icon: Code, label: "GitHub", href: "#" },
];

const footerLinks = ["Battle", "Leaders", "Dashboard", "Manifesto", "News", "Gallery"];

export default function Footer() {
  return (
    <footer className="relative py-16 px-4 border-t border-white/5">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-baddie-purple/3 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-baddie-pink" />
            <span className="text-xl font-black gradient-text-baddie">BJP</span>
            <span className="text-xs font-bold text-foreground/20">vs</span>
            <span className="text-xl font-black gradient-text-bhabhi">BhJP</span>
            <Zap className="w-5 h-5 text-bhabhi-orange" />
          </motion.div>

          <p className="text-foreground/30 mb-8 max-w-md text-sm">
            Making democracy dank since 2024. Two parties, one mission: absolute chaos.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3 mb-8">
            {socialLinks.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-xl glass flex items-center justify-center text-foreground/30 hover:text-baddie-pink transition-colors"
                aria-label={s.label}
              >
                <s.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Nav */}
          <div className="flex flex-wrap items-center justify-center gap-5 mb-8 text-sm">
            {footerLinks.map((link) => (
              <button
                key={link}
                onClick={() =>
                  document
                    .querySelector(`#${link.toLowerCase()}`)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-foreground/30 hover:text-baddie-pink transition-colors cursor-pointer text-xs"
              >
                {link}
              </button>
            ))}
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent mb-6" />

          <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-foreground/20">
            <p>© {new Date().getFullYear()} BJP vs BhJP. All rights (and wrongs) reserved.</p>
            <span className="hidden sm:inline">•</span>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-baddie-pink" /> and terrible decisions
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-6 px-4 py-2.5 rounded-xl glass text-[10px] text-foreground/20 max-w-lg"
          >
            ⚠️ <strong>Disclaimer:</strong> This website is fictional parody content created entirely for fun
            and UI practice. It is not affiliated with any real political party, organization, or movement.
            No chai was harmed in the making of this website.
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
