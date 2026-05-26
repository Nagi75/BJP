"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface MemeContextProps {
  rizzScore: number;
  incrementRizz: (amount?: number) => void;
  voteCounts: { baddie: number; bhabhi: number };
  castVote: (party: 'baddie' | 'bhabhi') => void;
}

const MemeContext = createContext<MemeContextProps | undefined>(undefined);

export const MemeProvider = ({ children }: { children: ReactNode }) => {
  const [rizzScore, setRizzScore] = useState<number>(0);
  const [voteCounts, setVoteCounts] = useState({ baddie: 0, bhabhi: 0 });

  const incrementRizz = (amount = 1) => {
    setRizzScore((prev) => prev + amount);
  };

  const castVote = (party: 'baddie' | 'bhabhi') => {
    setVoteCounts((prev) => ({
      ...prev,
      [party]: prev[party] + 1,
    }));
    // Increment rizz on each vote as a fun side‑effect
    incrementRizz(5);
  };

  // Persist to localStorage for demo continuity
  useEffect(() => {
    const storedRizz = localStorage.getItem('rizzScore');
    const storedVotes = localStorage.getItem('voteCounts');
    if (storedRizz) setRizzScore(parseInt(storedRizz, 10));
    if (storedVotes) setVoteCounts(JSON.parse(storedVotes));
  }, []);

  useEffect(() => {
    localStorage.setItem('rizzScore', rizzScore.toString());
    localStorage.setItem('voteCounts', JSON.stringify(voteCounts));
  }, [rizzScore, voteCounts]);

  return (
    <MemeContext.Provider value={{ rizzScore, incrementRizz, voteCounts, castVote }}>
      {children}
    </MemeContext.Provider>
  );
};

export const useMeme = () => {
  const context = useContext(MemeContext);
  if (!context) {
    throw new Error('useMeme must be used within a MemeProvider');
  }
  return context;
};
