"use client";

import Link from "next/link";
import { todayMatches, upcomingMatches, formatDate } from "../lib/data";
import type { Match } from "../lib/data";
import ProbabilityBar from "./ProbabilityBar";
import Flag from "./Flag";

export default function JadwalTab() {
  // Combine today + upcoming, group by date
  const allUpcoming = [...todayMatches, ...upcomingMatches];
  const byDate: Record<string, Match[]> = {};
  allUpcoming.forEach((m) => {
    if (!byDate[m.date]) byDate[m.date] = [];
    byDate[m.date].push(m);
  });

  const sortedDates = Object.keys(byDate).sort();

  return (
    <div className="space-y-8 animate-fade-in">
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-1">Jadwal Pertandingan</h2>
        <p className="text-muted text-sm">
          Semua pertandingan mendatang sampai 24 Juni 2026 — dilengkapi probabilitas kemenangan.
        </p>
      </section>

      {sortedDates.map((date, dateIdx) => (
        <section key={date} className={`animate-slide-up delay-${Math.min(dateIdx + 1, 5) * 100}`}>
          {/* Date header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs font-bold text-accent uppercase tracking-widest whitespace-nowrap">
              {formatDate(date)}
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="space-y-3">
            {byDate[date].map((match) => (
              <div key={match.id} className="glass-card p-4 sm:p-5">
                {/* Top row: group + time + venue */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Link href={`/grup/${match.group}`} className="text-xs font-bold text-accent bg-accent-glow px-2 py-0.5 rounded-md hover:bg-accent/20 transition-colors">
                      Grup {match.group}
                    </Link>
                    {date === "2026-06-22" && (
                      <span className="text-[0.6rem] font-bold text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded-md border border-yellow-400/20">
                        HARI INI
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-muted">{match.time} ET</span>
                </div>

                {/* Teams */}
                <div className="flex items-center justify-between mb-3">
                  <Link href={`/tim/${match.homeCode}`} className="flex items-center gap-3 flex-1 min-w-0 hover:opacity-80 transition-opacity">
                    <Flag code={match.homeCode} className="w-7 h-5 object-cover shadow-sm rounded-[2px] flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-bold truncate">{match.homeTeam}</p>
                      <p className="text-xs text-accent font-mono">
                        {match.homeWinProb}%
                      </p>
                    </div>
                  </Link>

                  <div className="flex flex-col items-center px-4 flex-shrink-0">
                    <span className="text-sm font-bold text-muted">VS</span>
                  </div>

                  <Link href={`/tim/${match.awayCode}`} className="flex items-center gap-3 flex-1 min-w-0 justify-end text-right hover:opacity-80 transition-opacity">
                    <div className="min-w-0">
                      <p className="text-sm font-bold truncate">{match.awayTeam}</p>
                      <p className="text-xs text-orange-400 font-mono">
                        {match.awayWinProb}%
                      </p>
                    </div>
                    <Flag code={match.awayCode} className="w-7 h-5 object-cover shadow-sm rounded-[2px] flex-shrink-0" />
                  </Link>
                </div>

                {/* Probability bar */}
                <ProbabilityBar
                  home={match.homeWinProb || 0}
                  draw={match.drawProb || 0}
                  away={match.awayWinProb || 0}
                />

                {/* Bottom venue */}
                <p className="text-[0.65rem] text-muted mt-2">
                  📍 {match.venue}, {match.city}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
