"use client";

export default function ProbabilityBar({
  home,
  draw,
  away,
}: {
  home: number;
  draw: number;
  away: number;
}) {
  return (
    <div className="prob-bar" title={`Home ${home}% • Draw ${draw}% • Away ${away}%`}>
      <div className="home" style={{ width: `${home}%` }} />
      <div className="draw" style={{ width: `${draw}%` }} />
      <div className="away" style={{ width: `${away}%` }} />
    </div>
  );
}
