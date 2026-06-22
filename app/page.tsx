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
              <span className="text-2xl animate-float">⚽</span>
              <div>
                <h1 className="text-lg sm:text-xl font-bold tracking-tight">
                  <span className="gradient-text">World Cup 2026</span>
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
          FIFA World Cup 2026™ • USA 🇺🇸 Mexico 🇲🇽 Canada 🇨🇦 •{" "}
          <span className="text-accent">Data dari SportRadar API</span>
        </p>
      </footer>
    </div>
  );
}
