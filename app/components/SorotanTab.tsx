"use client";

import { spotlightMatches, todayMatches } from "../lib/data";
import ProbabilityBar from "./ProbabilityBar";

export default function SorotanTab() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <section>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl sm:text-3xl font-bold">Sorotan Hari Ini</h2>
          <span className="text-xs text-muted bg-surface px-3 py-1 rounded-full border border-border">
            Minggu, 22 Juni
          </span>
        </div>
        <p className="text-muted text-sm">
          Matchday 2 — Grup I & J sedang berlangsung. 4 pertandingan krusial malam ini.
        </p>
      </section>

      {/* Spotlight — 3 Big Matches */}
      <section>
        <h3 className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
          🔥 Laga Krusial Malam Ini
        </h3>
        <div className="grid gap-5 md:grid-cols-3">
          {spotlightMatches.map((match, idx) => (
            <div
              key={match.id}
              className={`spotlight-card p-5 animate-slide-up delay-${(idx + 1) * 100}`}
            >
              {/* Group badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-accent bg-accent-glow px-2 py-0.5 rounded-md">
                  Grup {match.group}
                </span>
                <span className="text-xs text-muted">
                  {match.time} ET • {match.city}
                </span>
              </div>

              {/* Teams */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col items-center gap-1 flex-1">
                  <span className="text-3xl">{match.homeFlag}</span>
                  <span className="text-sm font-bold">{match.homeCode}</span>
                  <span className="text-xs text-accent font-mono">
                    {match.homeWinProb}%
                  </span>
                </div>
                <div className="flex flex-col items-center px-3">
                  <span className="text-lg font-bold text-muted">VS</span>
                  <span className="text-[0.6rem] text-muted mt-1 uppercase tracking-wider">
                    {match.status === "upcoming" ? "Belum Mulai" : "LIVE"}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1 flex-1">
                  <span className="text-3xl">{match.awayFlag}</span>
                  <span className="text-sm font-bold">{match.awayCode}</span>
                  <span className="text-xs text-orange-400 font-mono">
                    {match.awayWinProb}%
                  </span>
                </div>
              </div>

              {/* Probability Bar */}
              <ProbabilityBar
                home={match.homeWinProb || 0}
                draw={match.drawProb || 0}
                away={match.awayWinProb || 0}
              />

              {/* Insight */}
              {match.insight && (
                <p className="text-xs text-muted mt-3 leading-relaxed border-t border-border pt-3">
                  💡 {match.insight}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* All Today Matches */}
      <section>
        <h3 className="text-sm font-semibold text-muted uppercase tracking-widest mb-4">
          📋 Semua Pertandingan Hari Ini
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {todayMatches.map((match, idx) => (
            <div
              key={match.id}
              className={`glass-card p-4 animate-slide-up delay-${(idx + 1) * 100}`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-accent">
                  Grup {match.group}
                </span>
                <span className="text-xs text-muted">{match.time} ET</span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{match.homeFlag}</span>
                  <span className="text-sm font-semibold">{match.homeTeam}</span>
                </div>
                <span className="text-xs text-muted font-mono px-2">vs</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">{match.awayTeam}</span>
                  <span className="text-xl">{match.awayFlag}</span>
                </div>
              </div>
              <ProbabilityBar
                home={match.homeWinProb || 0}
                draw={match.drawProb || 0}
                away={match.awayWinProb || 0}
              />
              <div className="flex justify-between mt-2 text-[0.65rem] text-muted">
                <span>{match.homeCode} {match.homeWinProb}%</span>
                <span>Seri {match.drawProb}%</span>
                <span>{match.awayCode} {match.awayWinProb}%</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Total Gol", value: "78", icon: "⚽" },
          { label: "Laga Selesai", value: "36", icon: "✅" },
          { label: "Top Skor", value: "Messi (3)", icon: "👑" },
          { label: "Assist Terbanyak", value: "Mbappé (3)", icon: "🎯" },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className={`glass-card p-4 text-center animate-slide-up delay-${(i + 1) * 100}`}
          >
            <div className="text-2xl mb-1">{stat.icon}</div>
            <div className="text-xl font-bold text-accent">{stat.value}</div>
            <div className="text-xs text-muted mt-0.5">{stat.label}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
