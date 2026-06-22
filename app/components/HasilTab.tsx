"use client";

import { results, formatDate } from "../lib/data";
import type { Match } from "../lib/data";

export default function HasilTab() {
  // Group results by date (newest first)
  const byDate: Record<string, Match[]> = {};
  results.forEach((m) => {
    if (!byDate[m.date]) byDate[m.date] = [];
    byDate[m.date].push(m);
  });

  const sortedDates = Object.keys(byDate).sort().reverse();

  return (
    <div className="space-y-8 animate-fade-in">
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-1">Hasil Pertandingan</h2>
        <p className="text-muted text-sm">
          Semua skor laga yang sudah selesai — diurutkan dari yang terbaru.
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

          <div className="grid gap-3 sm:grid-cols-2">
            {byDate[date].map((match) => {
              const homeWin =
                match.homeScore !== undefined &&
                match.awayScore !== undefined &&
                match.homeScore > match.awayScore;
              const awayWin =
                match.homeScore !== undefined &&
                match.awayScore !== undefined &&
                match.awayScore > match.homeScore;
              const isDraw =
                match.homeScore !== undefined &&
                match.awayScore !== undefined &&
                match.homeScore === match.awayScore;

              return (
                <div key={match.id} className="glass-card p-4">
                  {/* Group + Status */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-accent bg-accent-glow px-2 py-0.5 rounded-md">
                      Grup {match.group}
                    </span>
                    <span className="text-[0.6rem] font-semibold text-success bg-success/10 px-2 py-0.5 rounded-md border border-success/20 uppercase tracking-wider">
                      FT
                    </span>
                  </div>

                  {/* Score */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <span className="text-xl flex-shrink-0">{match.homeFlag}</span>
                      <span
                        className={`text-sm font-semibold truncate ${
                          homeWin ? "text-foreground" : "text-muted"
                        }`}
                      >
                        {match.homeTeam}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 flex-shrink-0">
                      <span
                        className={`text-xl font-bold font-mono tabular-nums ${
                          homeWin
                            ? "text-accent"
                            : isDraw
                            ? "text-foreground"
                            : "text-muted"
                        }`}
                      >
                        {match.homeScore}
                      </span>
                      <span className="text-muted text-xs">–</span>
                      <span
                        className={`text-xl font-bold font-mono tabular-nums ${
                          awayWin
                            ? "text-orange-400"
                            : isDraw
                            ? "text-foreground"
                            : "text-muted"
                        }`}
                      >
                        {match.awayScore}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 flex-1 min-w-0 justify-end">
                      <span
                        className={`text-sm font-semibold truncate text-right ${
                          awayWin ? "text-foreground" : "text-muted"
                        }`}
                      >
                        {match.awayTeam}
                      </span>
                      <span className="text-xl flex-shrink-0">{match.awayFlag}</span>
                    </div>
                  </div>

                  {/* Venue */}
                  <p className="text-[0.6rem] text-muted mt-2.5 text-center">
                    {match.venue}, {match.city}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      ))}

      {/* Total Stats */}
      <div className="glass-card p-4 text-center">
        <p className="text-sm text-muted">
          Total laga selesai:{" "}
          <span className="text-accent font-bold">{results.length}</span> •
          Total gol:{" "}
          <span className="text-accent font-bold">
            {results.reduce(
              (sum, m) => sum + (m.homeScore || 0) + (m.awayScore || 0),
              0
            )}
          </span> •
          Rata-rata gol per laga:{" "}
          <span className="text-accent font-bold">
            {(
              results.reduce(
                (sum, m) => sum + (m.homeScore || 0) + (m.awayScore || 0),
                0
              ) / results.length
            ).toFixed(1)}
          </span>
        </p>
      </div>
    </div>
  );
}
