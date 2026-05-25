"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PartyComparison from "./components/PartyComparison";
import Leaders from "./components/Leaders";
import ElectionDashboard from "./components/ElectionDashboard";
import Manifesto from "./components/Manifesto";
import MemeNews from "./components/MemeNews";
import Gallery from "./components/Gallery";
import JoinCampaign from "./components/JoinCampaign";
import MemePopup from "./components/MemePopup";
import Footer from "./components/Footer";

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove("light");
    } else {
      html.classList.add("light");
    }
  }, [isDark]);

  return (
    <>
      <LoadingScreen />

      <div className="animated-gradient-bg min-h-screen">
        <Navbar isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />

        <main>
          <Hero />
          <PartyComparison />
          <Leaders />
          <ElectionDashboard />
          <Manifesto />
          <MemeNews />
          <Gallery />
          <JoinCampaign />
        </main>

        <Footer />
        <MemePopup />
      </div>
    </>
  );
}
