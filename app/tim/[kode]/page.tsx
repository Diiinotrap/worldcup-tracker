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

export function generateMetadata({ params }: { params: { kode: string } }) {
  const teamCode = params.kode.toUpperCase();
  let teamName = "Tim";
  for (const group of groups) {
    const t = group.teams.find((t) => t.code === teamCode);
    if (t) {
      teamName = t.name;
      break;
    }
  }

  return {
    title: `${teamName} (${teamCode}) — Profil Tim World Cup 2026`,
    description: `Statistik, jadwal pertandingan, dan hasil lengkap untuk ${teamName} di FIFA World Cup 2026.`,
  };
}

export default function TeamPage({ params }: { params: { kode: string } }) {
  const teamCode = params.kode.toUpperCase();

  // Find team and its group
  let teamData = null;
  let groupData = null;
  let teamPosition = 0;

  for (const group of groups) {
    const tIndex = group.teams.findIndex((t) => t.code === teamCode);
    if (tIndex !== -1) {
      teamData = group.teams[tIndex];
      groupData = group;
      teamPosition = tIndex + 1;
      break;
    }
  }

  if (!teamData || !groupData) {
    notFound();
  }

  const groupId = groupData.name.replace("Group ", "");
  const isQualified = teamPosition <= 2;

  // Filter matches involving this team
  const isTeamMatch = (m: any) =>
    m.homeCode === teamCode || m.awayCode === teamCode;

  const teamResults = results.filter(isTeamMatch);
  const teamToday = todayMatches.filter(isTeamMatch);
  const teamUpcoming = upcomingMatches.filter(isTeamMatch);

  // Sort matches
  teamResults.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  teamUpcoming.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const pendingMatches = [...teamToday, ...teamUpcoming];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground animate-fade-in">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 py-4">
            <Link
              href={`/grup/${groupId}`}
              className="p-2 -ml-2 rounded-full hover:bg-surface transition-colors"
              aria-label={`Kembali ke Grup ${groupId}`}
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
                {teamData.name} <span className="text-muted text-base ml-1">{teamData.code}</span>
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* ── Content ── */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-8 space-y-10">
        
        {/* Profil & Statistik Utama */}
        <section className="animate-slide-up delay-100">
          <div className="glass-card p-6 relative overflow-hidden">
            {/* Dekorasi Background */}
            <div className="absolute -right-8 -top-8 text-[12rem] opacity-[0.03] select-none pointer-events-none">
              {teamData.flag}
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              {/* Bendera & Identitas */}
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-6xl drop-shadow-2xl mb-2">{teamData.flag}</span>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs font-bold text-accent bg-accent-glow px-2 py-0.5 rounded-md">
                    Grup {groupId}
                  </span>
                  <span className={`text-[0.65rem] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border
                    ${isQualified 
                      ? "text-success bg-success/10 border-success/20" 
                      : "text-orange-400 bg-orange-400/10 border-orange-400/20"
                    }`}
                  >
                    Posisi {teamPosition}
                  </span>
                </div>
              </div>

              {/* Grid Statistik */}
              <div className="flex-1 w-full grid grid-cols-3 sm:grid-cols-4 gap-3">
                {[
                  { label: "Main", value: teamData.played },
                  { label: "Menang", value: teamData.won, color: "text-success" },
                  { label: "Seri", value: teamData.drawn },
                  { label: "Kalah", value: teamData.lost, color: "text-danger" },
                  { label: "Gol (+)", value: teamData.gf },
                  { label: "Gol (-)", value: teamData.ga },
                  { label: "Selisih", value: teamData.gd > 0 ? `+${teamData.gd}` : teamData.gd },
                ].map((stat, i) => (
                  <div key={i} className="bg-surface/50 border border-border/50 rounded-xl p-3 flex flex-col items-center justify-center text-center">
                    <span className={`text-xl font-bold ${stat.color || "text-foreground"}`}>
                      {stat.value}
                    </span>
                    <span className="text-[0.65rem] text-muted uppercase mt-1">{stat.label}</span>
                  </div>
                ))}
                
                {/* Poin Kotak Khusus */}
                <div className="col-span-3 sm:col-span-1 bg-accent-glow border border-accent/30 rounded-xl p-3 flex flex-col items-center justify-center text-center">
                  <span className="text-2xl font-bold text-accent">
                    {teamData.points}
                  </span>
                  <span className="text-[0.65rem] text-accent uppercase mt-1 tracking-wider font-bold">Poin</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Jadwal Mendatang */}
        {pendingMatches.length > 0 && (
          <section className="animate-slide-up delay-200">
            <h2 className="text-xl font-bold mb-4">Jadwal Selanjutnya</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {pendingMatches.map((match) => (
                <div key={match.id} className="glass-card p-4 border-l-2 border-l-accent">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-accent uppercase tracking-widest">
                      {formatDate(match.date)}
                    </span>
                    <span className="text-xs text-muted">{match.time} ET</span>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 flex-1">
                      <span className="text-xl">{match.homeFlag}</span>
                      <span className={`text-sm font-semibold truncate ${match.homeCode === teamCode ? "text-accent" : ""}`}>
                        {match.homeTeam}
                      </span>
                    </div>
                    <span className="text-xs text-muted px-2">vs</span>
                    <div className="flex items-center gap-2 flex-1 justify-end">
                      <span className={`text-sm font-semibold truncate text-right ${match.awayCode === teamCode ? "text-accent" : ""}`}>
                        {match.awayTeam}
                      </span>
                      <span className="text-xl">{match.awayFlag}</span>
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
                  
                  {match.insight && match.insight.includes(teamData.name) && (
                    <p className="text-xs text-muted mt-3 leading-relaxed border-t border-border pt-3">
                      💡 {match.insight}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Hasil Pertandingan */}
        <section className="animate-slide-up delay-300">
          <h2 className="text-xl font-bold mb-4">Hasil Pertandingan</h2>
          {teamResults.length > 0 ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {teamResults.map((match) => {
                const homeWin = match.homeScore! > match.awayScore!;
                const awayWin = match.awayScore! > match.homeScore!;
                const isDraw = match.homeScore === match.awayScore;
                
                // Determine if THIS team won
                let matchOutcomeLabel = "";
                let outcomeColor = "";
                
                if (isDraw) {
                  matchOutcomeLabel = "SERI";
                  outcomeColor = "text-muted bg-surface border-border";
                } else if ((match.homeCode === teamCode && homeWin) || (match.awayCode === teamCode && awayWin)) {
                  matchOutcomeLabel = "MENANG";
                  outcomeColor = "text-success bg-success/10 border-success/20";
                } else {
                  matchOutcomeLabel = "KALAH";
                  outcomeColor = "text-danger bg-danger/10 border-danger/20";
                }

                return (
                  <div key={match.id} className="glass-card p-4 bg-surface/30">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-muted uppercase tracking-widest">
                        {formatDate(match.date)}
                      </span>
                      <span className={`text-[0.6rem] font-semibold px-2 py-0.5 rounded-md border uppercase tracking-wider ${outcomeColor}`}>
                        {matchOutcomeLabel}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 flex-1">
                        <span className="text-xl">{match.homeFlag}</span>
                        <span
                          className={`text-sm font-semibold truncate ${
                            match.homeCode === teamCode ? "text-accent" : (homeWin ? "text-foreground" : "text-muted")
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
                            match.awayCode === teamCode ? "text-accent" : (awayWin ? "text-foreground" : "text-muted")
                          }`}
                        >
                          {match.awayTeam}
                        </span>
                        <span className="text-xl">{match.awayFlag}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="glass-card p-6 text-center text-muted text-sm border-dashed">
              Belum ada pertandingan yang dimainkan.
            </div>
          )}
        </section>

      </main>
    </div>
  );
}
