import Image from "next/image";

const flagMap: Record<string, string> = {
  MEX: "mx", KOR: "kr", CZE: "cz", RSA: "za",
  CAN: "ca", SUI: "ch", BIH: "ba", QAT: "qa",
  BRA: "br", MAR: "ma", SCO: "gb-sct", HAI: "ht",
  USA: "us", PAR: "py", AUS: "au", TUR: "tr",
  GER: "de", CIV: "ci", ECU: "ec", CUW: "cw",
  SWE: "se", NED: "nl", JPN: "jp", TUN: "tn",
  BEL: "be", EGY: "eg", IRN: "ir", NZL: "nz",
  ESP: "es", URU: "uy", KSA: "sa", CPV: "cv",
  FRA: "fr", NOR: "no", SEN: "sn", IRQ: "iq",
  ARG: "ar", AUT: "at", JOR: "jo", ALG: "dz", DZA: "dz",
  COL: "co", POR: "pt", COD: "cd", UZB: "uz",
  ENG: "gb-eng", PAN: "pa", GHA: "gh", CRO: "hr",
};

export default function Flag({
  code,
  className = "w-6 h-6 object-contain drop-shadow-sm",
}: {
  code: string;
  className?: string;
}) {
  const cc = flagMap[code];

  if (!cc) {
    return <span className={className}>🏳️</span>;
  }

  // Use raw <img> for external SVGs to avoid Next.js domains config overhead
  return (
    <img
      src={`https://flagcdn.com/${cc}.svg`}
      alt={`Flag of ${code}`}
      className={className}
      loading="lazy"
    />
  );
}
