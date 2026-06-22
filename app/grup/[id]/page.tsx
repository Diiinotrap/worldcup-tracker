import Link from "next/link";
import { notFound } from "next/navigation";
import {
  groups,
  results,
  todayMatches,
  upcomingMatches,
  formatDate,
} from "../../lib/data";
import ProbabilityBar from "../../components/ProbabilityBar";
import Flag from "../../components/Flag";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const groupId = id.toUpperCase();
  return {
    title: `Grup ${groupId} — World Cup 2026 Tracker`,
    description: `Klasemen, skor, dan jadwal lengkap untuk Grup ${groupId} di FIFA World Cup 2026.`,
  };
}

export default async function GroupPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const groupId = id.toUpperCase();

  // Find group data
  const group = groups.find((g) => g.name.replace("Group ", "") === groupId);
  if (!group) {
    notFound();
  }

  // Filter matches for this group
  const groupResults = results.filter((m) => m.group === groupId);
  const groupToday = todayMatches.filter((m) => m.group === groupId);
  const groupUpcoming = upcomingMatches.filter((m) => m.group === groupId);

  // Sort results newest first, upcoming by date ascending
  groupResults.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  groupUpcoming.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const pendingMatches = [...groupToday, ...groupUpcoming];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground animate-fade-in">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 py-4">
            <Link
              href="/"
              className="p-2 -ml-2 rounded-full hover:bg-surface transition-colors"
              aria-label="Kembali ke Beranda"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted group-hover:text-foreground"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </Link>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
                Grup <span className="text-accent">{groupId}</span>
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* ── Content ── */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-8 space-y-10">
        {/* Klasemen Lengkap */}
        <section className="animate-slide-up delay-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Klasemen Lengkap</h2>
            <span className="text-xs text-muted uppercase tracking-wider bg-surface px-3 py-1 rounded-full border border-border">
              {group.teams[0].played > 0
                ? `Matchday ${group.teams[0].played}`
                : "Belum mulai"}
            </span>
          </div>

          <div className="glass-card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-[0.65rem] text-muted uppercase tracking-wider bg-surface/50 border-b border-border">
                  <th className="text-left px-4 py-3 w-8">#</th>
                  <th className="text-left py-3">Tim</th>
                  <th className="text-center py-3 w-8" title="Main">M</th>
                  <th className="text-center py-3 w-8" title="Menang">M</th>
                  <th className="text-center py-3 w-8" title="Seri">S</th>
                  <th className="text-center py-3 w-8" title="Kalah">K</th>
                  <th className="text-center py-3 w-8" title="Gol Memasukkan">GM</th>
                  <th className="text-center py-3 w-8" title="Gol Kemasukan">GK</th>
                  <th className="text-center py-3 w-10" title="Selisih Gol">SG</th>
                  <th className="text-center py-3 w-12 font-bold text-accent">Poin</th>
                </tr>
              </thead>
              <tbody>
                {group.teams.map((team, idx) => {
                  const isQualified = idx < 2;
                  return (
                    <tr
                      key={team.code}
                      className={`
                        border-b border-border/30 last:border-0 transition-colors hover:bg-surface-hover
                        ${isQualified ? "bg-success/5" : ""}
                      `}
                    >
                      <td className="px-4 py-3">
                        <span
                          className={`
                            inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold
                            ${isQualified ? "bg-success/20 text-success" : "text-muted"}
                          `}
                        >
                          {idx + 1}
                        </span>
                      </td>
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <Link href={`/tim/${team.code}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <Flag code={team.code} className="w-6 h-4 object-contain shadow-sm rounded-sm" />
                            <span
                              className={`font-semibold ${
                                isQualified ? "text-foreground hover:text-accent" : "text-muted hover:text-accent"
                              }`}
                            >
                              {team.name}
                            </span>
                          </Link>
                          {/* Badges */}
                          {isQualified ? (
                            <span className="ml-2 text-[0.6rem] font-bold uppercase tracking-widest text-success bg-success/10 border border-success/20 px-2 py-0.5 rounded-full">
                              Lolos
                            </span>
                          ) : (
                            <span className="ml-2 text-[0.6rem] font-bold uppercase tracking-widest text-orange-400 bg-orange-400/10 border border-orange-400/20 px-2 py-0.5 rounded-full">
                              Terancam
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="text-center py-3 text-muted">{team.played}</td>
                      <td className="text-center py-3">{team.won}</td>
                      <td className="text-center py-3">{team.drawn}</td>
                      <td className="text-center py-3">{team.lost}</td>
                      <td className="text-center py-3">{team.gf}</td>
                      <td className="text-center py-3 text-muted">{team.ga}</td>
                      <td className="text-center py-3">
                        <span
                          className={
                            team.gd > 0
                              ? "text-success"
                              : team.gd < 0
                              ? "text-danger"
                              : "text-muted"
                          }
                        >
                          {team.gd > 0 ? `+${team.gd}` : team.gd}
                        </span>
                      </td>
                      <td className="text-center py-3">
                        <span className="font-bold text-accent text-base">
                          {team.points}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Jadwal Mendatang */}
        {pendingMatches.length > 0 && (
          <section className="animate-slide-up delay-200">
            <h2 className="text-xl font-bold mb-4">Pertandingan Mendatang</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {pendingMatches.map((match) => (
                <div key={match.id} className="glass-card p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-accent uppercase tracking-widest">
                      {formatDate(match.date)}
                    </span>
                    <span className="text-xs text-muted">{match.time} ET</span>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 flex-1">
                      <Flag code={match.homeCode} className="w-6 h-4 object-contain shadow-sm rounded-sm" />
                      <span className="text-sm font-semibold truncate">
                        {match.homeTeam}
                      </span>
                    </div>
                    <span className="text-xs text-muted px-2">vs</span>
                    <div className="flex items-center gap-2 flex-1 justify-end">
                      <span className="text-sm font-semibold truncate text-right">
                        {match.awayTeam}
                      </span>
                      <Flag code={match.awayCode} className="w-6 h-4 object-contain shadow-sm rounded-sm" />
                    </div>
                  </div>

                  {match.homeWinProb !== undefined && (
                    <div className="space-y-1.5 mt-4">
                      <ProbabilityBar
                        home={match.homeWinProb}
                        draw={match.drawProb || 0}
                        away={match.awayWinProb || 0}
                      />
                      <div className="flex justify-between text-[0.65rem] text-muted font-mono">
                        <span>{match.homeCode} {match.homeWinProb}%</span>
                        <span>Seri {match.drawProb}%</span>
                        <span>{match.awayWinProb}% {match.awayCode}</span>
                      </div>
                    </div>
                  )}

                  <p className="text-[0.65rem] text-muted mt-3 text-center border-t border-border/50 pt-2">
                    📍 {match.venue}, {match.city}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Hasil Pertandingan */}
        {groupResults.length > 0 && (
          <section className="animate-slide-up delay-300">
            <h2 className="text-xl font-bold mb-4">Hasil Pertandingan</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {groupResults.map((match) => {
                const homeWin =
                  match.homeScore! > match.awayScore!;
                const awayWin =
                  match.awayScore! > match.homeScore!;
                const isDraw = match.homeScore === match.awayScore;

                return (
                  <div key={match.id} className="glass-card p-4 bg-surface/30">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-muted uppercase tracking-widest">
                        {formatDate(match.date)}
                      </span>
                      <span className="text-[0.6rem] font-semibold text-success bg-success/10 px-2 py-0.5 rounded-md border border-success/20 uppercase tracking-wider">
                        FT
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 flex-1">
                        <Flag code={match.homeCode} className="w-6 h-4 object-contain shadow-sm rounded-sm" />
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
                          className={`text-lg font-bold font-mono ${
                            homeWin ? "text-accent" : isDraw ? "text-foreground" : "text-muted"
                          }`}
                        >
                          {match.homeScore}
                        </span>
                        <span className="text-muted text-xs">–</span>
                        <span
                          className={`text-lg font-bold font-mono ${
                            awayWin ? "text-orange-400" : isDraw ? "text-foreground" : "text-muted"
                          }`}
                        >
                          {match.awayScore}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 flex-1 justify-end">
                        <span
                          className={`text-sm font-semibold truncate text-right ${
                            awayWin ? "text-foreground" : "text-muted"
                          }`}
                        >
                          {match.awayTeam}
                        </span>
                        <Flag code={match.awayCode} className="w-6 h-4 object-contain shadow-sm rounded-sm" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
