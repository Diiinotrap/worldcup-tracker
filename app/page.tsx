"use client";

import { useState } from "react";
import SorotanTab from "./components/SorotanTab";
import JadwalTab from "./components/JadwalTab";
import KlasemenTab from "./components/KlasemenTab";
import HasilTab from "./components/HasilTab";

const tabs = [
  { id: "sorotan", label: "⚡ Sorotan", desc: "Highlight" },
  { id: "jadwal", label: "📅 Jadwal", desc: "Schedule" },
  { id: "klasemen", label: "📊 Klasemen", desc: "Standings" },
  { id: "hasil", label: "🏆 Hasil", desc: "Results" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("sorotan");

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Top bar */}
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="url(#cyanGradient)" strokeLinecap="round" strokeLinejoin="round" className="animate-float drop-shadow-md">
                <defs>
                  <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f2fe" />
                    <stop offset="100%" stopColor="#00d2ff" />
                  </linearGradient>
                </defs>
                <path d="M 10 50 C 25 65 40 80 65 85" strokeWidth="2" />
                <path d="M 15 65 C 35 85 55 95 85 85" strokeWidth="2.5" />
                <path d="M 25 80 C 45 95 65 100 85 95" strokeWidth="2" />
                <circle cx="78" cy="62" r="16" strokeWidth="2.5"/>
                <path d="M 78 52 L 85 57 L 82 65 L 74 65 L 71 57 Z" strokeWidth="2" />
                <path d="M 78 52 L 78 46" strokeWidth="2" />
                <path d="M 85 57 L 93 55" strokeWidth="2" />
                <path d="M 82 65 L 88 73" strokeWidth="2" />
                <path d="M 74 65 L 67 73" strokeWidth="2" />
                <path d="M 71 57 L 62 57" strokeWidth="2" />
                <path d="M 62 57 C 62 57 65 50 69 47 L 78 46" strokeWidth="2"/>
                <path d="M 93 55 C 93 55 94 60 94 62 C 94 67 91 71 88 73" strokeWidth="2"/>
                <path d="M 67 73 C 63 69 62 65 62 57" strokeWidth="2"/>
                <path d="M 45 55 C 48 55 53 59 58 61 C 62 63 65 64 65 66 C 65 68 62 69 59 70 C 55 71 50 72 45 69 C 42 67 41 63 41 59 Z" strokeWidth="2"/>
                <path d="M 47 70 L 48 73 L 50 72 Z" fill="url(#cyanGradient)" strokeWidth="1.5"/>
                <path d="M 53 71 L 54 74 L 56 73 Z" fill="url(#cyanGradient)" strokeWidth="1.5"/>
                <path d="M 59 70 L 60 73 L 62 72 Z" fill="url(#cyanGradient)" strokeWidth="1.5"/>
                <path d="M 48 57 L 50 59 M 51 56 L 53 58 M 54 55 L 56 57" strokeWidth="2"/>
                <path d="M 43 59 C 47 62 50 64 53 64" strokeWidth="1.5"/>
                <path d="M 31 38 C 36 45 41 51 45 55" strokeWidth="2.5"/>
                <path d="M 23 43 C 28 48 35 53 41 59" strokeWidth="2.5"/>
                <path d="M 41 59 C 42 57 44 56 45 55" strokeWidth="2"/>
                <path d="M 31 38 C 27 39 24 41 23 43" strokeWidth="2.5"/>
                <path d="M 30 35 C 26 36 23 38 22 40" strokeWidth="2"/>
                <path d="M 31 38 L 30 35 M 23 43 L 22 40" strokeWidth="2"/>
                <path d="M 25 23 C 33 23 35 28 30 35" strokeWidth="2.5"/>
                <path d="M 15 28 C 21 31 23 36 22 40" strokeWidth="2.5"/>
                <path d="M 15 28 C 18 27 21 25 25 23" strokeWidth="2.5"/>
                <path d="M 5 5 C 10 15 15 20 25 23 M 2 15 C 8 20 10 23 15 28" strokeWidth="2.5"/>
              </svg>
              <div>
                <h1 className="text-lg sm:text-xl font-bold tracking-tight">
                  <span className="gradient-text">Aende KickOff</span>
                </h1>
                <p className="text-[0.65rem] text-muted tracking-widest uppercase">
                  Live Tracker
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted">
              <div className="live-dot" />
              <span className="hidden sm:inline">LIVE</span>
              <span className="text-border">|</span>
              <span>22 Jun 2026</span>
            </div>
          </div>

          {/* Tab bar */}
          <nav className="flex gap-1 -mb-px overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-all duration-200
                  ${
                    activeTab === tab.id
                      ? "tab-active text-accent"
                      : "text-muted hover:text-foreground"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* ── Content ── */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6">
        {activeTab === "sorotan" && <SorotanTab />}
        {activeTab === "jadwal" && <JadwalTab />}
        {activeTab === "klasemen" && <KlasemenTab />}
        {activeTab === "hasil" && <HasilTab />}
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-border py-4 text-center text-xs text-muted">
        <p>
          Aende KickOff • USA 🇺🇸 Mexico 🇲🇽 Canada 🇨🇦 •{" "}
          <span className="text-accent">Data dari SportRadar API</span>
        </p>
      </footer>
    </div>
  );
}
