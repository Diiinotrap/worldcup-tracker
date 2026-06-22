"use client";

import { useState } from "react";
import Link from "next/link";
import { groups } from "../lib/data";

const groupLabels = ["Semua", ...groups.map((g) => g.name.replace("Group ", ""))];

export default function KlasemenTab() {
  const [filter, setFilter] = useState("Semua");

  const displayedGroups =
    filter === "Semua"
      ? groups
      : groups.filter((g) => g.name.replace("Group ", "") === filter);

  return (
    <div className="space-y-6 animate-fade-in">
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-1">Klasemen Grup</h2>
        <p className="text-muted text-sm">
          Semua 12 grup — 2 teratas lolos otomatis + 8 peringkat 3 terbaik ke babak 32 besar.
        </p>
      </section>

      {/* Filter chips */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {groupLabels.map((label) => (
          <button
            key={label}
            onClick={() => setFilter(label)}
            className={`chip ${filter === label ? "chip-active" : ""}`}
          >
            {label === "Semua" ? "🌍 Semua" : `Grup ${label}`}
          </button>
        ))}
      </div>

      {/* Group Tables */}
      <div className="grid gap-5 md:grid-cols-2">
        {displayedGroups.map((group, gIdx) => (
          <div
            key={group.name}
            className={`glass-card overflow-hidden animate-slide-up delay-${Math.min(gIdx + 1, 5) * 100}`}
          >
            {/* Group Header */}
            <div className="px-4 py-3 border-b border-border flex items-center justify-between bg-surface/50">
              <Link href={`/grup/${group.name.replace("Group ", "")}`} className="hover:text-accent transition-colors">
                <h3 className="text-sm font-bold flex items-center gap-1.5">
                  <span className="text-accent">⬡</span> {group.name}
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 ml-1">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </h3>
              </Link>
              <span className="text-[0.6rem] text-muted uppercase tracking-wider">
                {group.teams[0].played > 0
                  ? `MD${group.teams[0].played}`
                  : "Belum mulai"}
              </span>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-[0.65rem] text-muted uppercase tracking-wider">
                    <th className="text-left px-4 py-2 w-8">#</th>
                    <th className="text-left py-2">Tim</th>
                    <th className="text-center py-2 w-8">M</th>
                    <th className="text-center py-2 w-8">M</th>
                    <th className="text-center py-2 w-8">S</th>
                    <th className="text-center py-2 w-8">K</th>
                    <th className="text-center py-2 w-10">SG</th>
                    <th className="text-center py-2 w-10 font-bold text-accent">Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {group.teams.map((team, idx) => {
                    const isQualified = idx < 2;
                    return (
                      <tr
                        key={team.code}
                        className={`
                          border-t border-border/50 transition-colors hover:bg-surface-hover
                          ${isQualified ? "bg-success/5" : ""}
                        `}
                      >
                        <td className="px-4 py-2.5">
                          <span
                            className={`
                              inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold
                              ${isQualified ? "bg-success/20 text-success" : "text-muted"}
                            `}
                          >
                            {idx + 1}
                          </span>
                        </td>
                        <td className="py-2.5">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{team.flag}</span>
                            <span className={`font-semibold ${isQualified ? "text-foreground" : ""}`}>
                              {team.name}
                            </span>
                            {isQualified && (
                              <span className="qualified-badge">Lolos</span>
                            )}
                          </div>
                        </td>
                        <td className="text-center py-2.5 text-muted">{team.played}</td>
                        <td className="text-center py-2.5">{team.won}</td>
                        <td className="text-center py-2.5">{team.drawn}</td>
                        <td className="text-center py-2.5">{team.lost}</td>
                        <td className="text-center py-2.5">
                          <span className={team.gd > 0 ? "text-success" : team.gd < 0 ? "text-danger" : "text-muted"}>
                            {team.gd > 0 ? `+${team.gd}` : team.gd}
                          </span>
                        </td>
                        <td className="text-center py-2.5">
                          <span className="font-bold text-accent text-base">{team.points}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 text-xs text-muted">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-success/30 border border-success/50" />
          <span>Posisi lolos otomatis (1–2)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-muted text-[0.6rem]">M = Main • S = Seri • K = Kalah • SG = Selisih Gol</span>
        </div>
      </div>
    </div>
  );
}
