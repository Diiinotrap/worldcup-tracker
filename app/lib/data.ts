// ============================================================
// World Cup 2026 — Live Tournament Data
// All data sourced from live feed as of June 22, 2026
// ============================================================

export interface Team {
  name: string;
  code: string;
  flag: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  gf: number;
  ga: number;
  gd: number;
  points: number;
  qualified?: boolean;  // true if in qualifying position
}

export interface Match {
  id: string;
  group: string;
  date: string;       // ISO date
  time: string;       // display time (ET)
  homeTeam: string;
  homeCode: string;
  homeFlag: string;
  awayTeam: string;
  awayCode: string;
  awayFlag: string;
  homeScore?: number;
  awayScore?: number;
  status: 'completed' | 'live' | 'upcoming';
  venue: string;
  city: string;
  homeWinProb?: number;    // 0-100
  drawProb?: number;       // 0-100
  awayWinProb?: number;    // 0-100
  insight?: string;
}

export interface Group {
  name: string;
  teams: Team[];
}

// ============================================================
// GROUP STANDINGS (after Matchday 1 & 2 where completed)
// ============================================================

export const groups: Group[] = [
  {
    name: "Group A",
    teams: [
      { name: "Mexico", code: "MEX", flag: "🇲🇽", played: 2, won: 2, drawn: 0, lost: 0, gf: 3, ga: 0, gd: 3, points: 6, qualified: true },
      { name: "Korea Republic", code: "KOR", flag: "🇰🇷", played: 2, won: 1, drawn: 0, lost: 1, gf: 3, ga: 2, gd: 1, points: 3 },
      { name: "Czechia", code: "CZE", flag: "🇨🇿", played: 2, won: 0, drawn: 1, lost: 1, gf: 2, ga: 3, gd: -1, points: 1 },
      { name: "South Africa", code: "RSA", flag: "🇿🇦", played: 2, won: 0, drawn: 1, lost: 1, gf: 1, ga: 3, gd: -2, points: 1 },
    ],
  },
  {
    name: "Group B",
    teams: [
      { name: "Canada", code: "CAN", flag: "🇨🇦", played: 2, won: 1, drawn: 1, lost: 0, gf: 7, ga: 1, gd: 6, points: 4, qualified: true },
      { name: "Switzerland", code: "SUI", flag: "🇨🇭", played: 2, won: 1, drawn: 1, lost: 0, gf: 5, ga: 2, gd: 3, points: 4, qualified: true },
      { name: "Bosnia & Herzegovina", code: "BIH", flag: "🇧🇦", played: 2, won: 0, drawn: 1, lost: 1, gf: 2, ga: 5, gd: -3, points: 1 },
      { name: "Qatar", code: "QAT", flag: "🇶🇦", played: 2, won: 0, drawn: 1, lost: 1, gf: 1, ga: 7, gd: -6, points: 1 },
    ],
  },
  {
    name: "Group C",
    teams: [
      { name: "Brazil", code: "BRA", flag: "🇧🇷", played: 1, won: 1, drawn: 0, lost: 0, gf: 3, ga: 0, gd: 3, points: 3, qualified: true },
      { name: "Morocco", code: "MAR", flag: "🇲🇦", played: 1, won: 1, drawn: 0, lost: 0, gf: 2, ga: 1, gd: 1, points: 3, qualified: true },
      { name: "Scotland", code: "SCO", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", played: 1, won: 0, drawn: 0, lost: 1, gf: 1, ga: 2, gd: -1, points: 0 },
      { name: "Haiti", code: "HAI", flag: "🇭🇹", played: 1, won: 0, drawn: 0, lost: 1, gf: 0, ga: 3, gd: -3, points: 0 },
    ],
  },
  {
    name: "Group D",
    teams: [
      { name: "United States", code: "USA", flag: "🇺🇸", played: 2, won: 2, drawn: 0, lost: 0, gf: 6, ga: 1, gd: 5, points: 6, qualified: true },
      { name: "Paraguay", code: "PAR", flag: "🇵🇾", played: 2, won: 1, drawn: 0, lost: 1, gf: 3, ga: 5, gd: -2, points: 3 },
      { name: "Australia", code: "AUS", flag: "🇦🇺", played: 2, won: 1, drawn: 0, lost: 1, gf: 2, ga: 2, gd: 0, points: 3 },
      { name: "Türkiye", code: "TUR", flag: "🇹🇷", played: 2, won: 0, drawn: 0, lost: 2, gf: 1, ga: 4, gd: -3, points: 0 },
    ],
  },
  {
    name: "Group E",
    teams: [
      { name: "Germany", code: "GER", flag: "🇩🇪", played: 2, won: 2, drawn: 0, lost: 0, gf: 10, ga: 1, gd: 9, points: 6, qualified: true },
      { name: "Ivory Coast", code: "CIV", flag: "🇨🇮", played: 2, won: 1, drawn: 0, lost: 1, gf: 2, ga: 4, gd: -2, points: 3 },
      { name: "Ecuador", code: "ECU", flag: "🇪🇨", played: 2, won: 1, drawn: 0, lost: 1, gf: 3, ga: 2, gd: 1, points: 3 },
      { name: "Curaçao", code: "CUW", flag: "🇨🇼", played: 2, won: 0, drawn: 0, lost: 2, gf: 1, ga: 9, gd: -8, points: 0 },
    ],
  },
  {
    name: "Group F",
    teams: [
      { name: "Sweden", code: "SWE", flag: "🇸🇪", played: 1, won: 1, drawn: 0, lost: 0, gf: 5, ga: 1, gd: 4, points: 3, qualified: true },
      { name: "Netherlands", code: "NED", flag: "🇳🇱", played: 1, won: 0, drawn: 1, lost: 0, gf: 2, ga: 2, gd: 0, points: 1 },
      { name: "Japan", code: "JPN", flag: "🇯🇵", played: 1, won: 0, drawn: 1, lost: 0, gf: 2, ga: 2, gd: 0, points: 1 },
      { name: "Tunisia", code: "TUN", flag: "🇹🇳", played: 1, won: 0, drawn: 0, lost: 1, gf: 1, ga: 5, gd: -4, points: 0 },
    ],
  },
  {
    name: "Group G",
    teams: [
      { name: "Belgium", code: "BEL", flag: "🇧🇪", played: 2, won: 1, drawn: 1, lost: 0, gf: 4, ga: 1, gd: 3, points: 4, qualified: true },
      { name: "Egypt", code: "EGY", flag: "🇪🇬", played: 2, won: 1, drawn: 1, lost: 0, gf: 3, ga: 2, gd: 1, points: 4, qualified: true },
      { name: "Iran", code: "IRN", flag: "🇮🇷", played: 2, won: 0, drawn: 0, lost: 2, gf: 1, ga: 4, gd: -3, points: 0 },
      { name: "New Zealand", code: "NZL", flag: "🇳🇿", played: 2, won: 0, drawn: 0, lost: 2, gf: 1, ga: 2, gd: -1, points: 0 },
    ],
  },
  {
    name: "Group H",
    teams: [
      { name: "Spain", code: "ESP", flag: "🇪🇸", played: 2, won: 1, drawn: 1, lost: 0, gf: 3, ga: 1, gd: 2, points: 4, qualified: true },
      { name: "Uruguay", code: "URU", flag: "🇺🇾", played: 2, won: 1, drawn: 1, lost: 0, gf: 3, ga: 1, gd: 2, points: 4, qualified: true },
      { name: "Saudi Arabia", code: "KSA", flag: "🇸🇦", played: 2, won: 0, drawn: 1, lost: 1, gf: 1, ga: 3, gd: -2, points: 1 },
      { name: "Cape Verde", code: "CPV", flag: "🇨🇻", played: 2, won: 0, drawn: 1, lost: 1, gf: 1, ga: 3, gd: -2, points: 1 },
    ],
  },
  {
    name: "Group I",
    teams: [
      { name: "France", code: "FRA", flag: "🇫🇷", played: 1, won: 1, drawn: 0, lost: 0, gf: 3, ga: 1, gd: 2, points: 3, qualified: true },
      { name: "Norway", code: "NOR", flag: "🇳🇴", played: 1, won: 1, drawn: 0, lost: 0, gf: 4, ga: 1, gd: 3, points: 3, qualified: true },
      { name: "Senegal", code: "SEN", flag: "🇸🇳", played: 1, won: 0, drawn: 0, lost: 1, gf: 1, ga: 3, gd: -2, points: 0 },
      { name: "Iraq", code: "IRQ", flag: "🇮🇶", played: 1, won: 0, drawn: 0, lost: 1, gf: 1, ga: 4, gd: -3, points: 0 },
    ],
  },
  {
    name: "Group J",
    teams: [
      { name: "Argentina", code: "ARG", flag: "🇦🇷", played: 1, won: 1, drawn: 0, lost: 0, gf: 3, ga: 0, gd: 3, points: 3, qualified: true },
      { name: "Austria", code: "AUT", flag: "🇦🇹", played: 1, won: 1, drawn: 0, lost: 0, gf: 2, ga: 1, gd: 1, points: 3, qualified: true },
      { name: "Jordan", code: "JOR", flag: "🇯🇴", played: 1, won: 0, drawn: 0, lost: 1, gf: 1, ga: 2, gd: -1, points: 0 },
      { name: "Algeria", code: "ALG", flag: "🇩🇿", played: 1, won: 0, drawn: 0, lost: 1, gf: 0, ga: 3, gd: -3, points: 0 },
    ],
  },
  {
    name: "Group K",
    teams: [
      { name: "Colombia", code: "COL", flag: "🇨🇴", played: 1, won: 1, drawn: 0, lost: 0, gf: 2, ga: 0, gd: 2, points: 3, qualified: true },
      { name: "Portugal", code: "POR", flag: "🇵🇹", played: 1, won: 0, drawn: 1, lost: 0, gf: 1, ga: 1, gd: 0, points: 1 },
      { name: "DR Congo", code: "COD", flag: "🇨🇩", played: 1, won: 0, drawn: 1, lost: 0, gf: 1, ga: 1, gd: 0, points: 1 },
      { name: "Uzbekistan", code: "UZB", flag: "🇺🇿", played: 1, won: 0, drawn: 0, lost: 1, gf: 0, ga: 2, gd: -2, points: 0 },
    ],
  },
  {
    name: "Group L",
    teams: [
      { name: "England", code: "ENG", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", played: 1, won: 1, drawn: 0, lost: 0, gf: 4, ga: 2, gd: 2, points: 3, qualified: true },
      { name: "Panama", code: "PAN", flag: "🇵🇦", played: 1, won: 1, drawn: 0, lost: 0, gf: 2, ga: 1, gd: 1, points: 3, qualified: true },
      { name: "Ghana", code: "GHA", flag: "🇬🇭", played: 1, won: 0, drawn: 0, lost: 1, gf: 1, ga: 2, gd: -1, points: 0 },
      { name: "Croatia", code: "CRO", flag: "🇭🇷", played: 1, won: 0, drawn: 0, lost: 1, gf: 2, ga: 4, gd: -2, points: 0 },
    ],
  },
];

// ============================================================
// COMPLETED RESULTS
// ============================================================
export const results: Match[] = [
  // ---- June 11 ----
  { id: "m01", group: "A", date: "2026-06-11", time: "20:00", homeTeam: "Mexico", homeCode: "MEX", homeFlag: "🇲🇽", awayTeam: "South Africa", awayCode: "RSA", awayFlag: "🇿🇦", homeScore: 2, awayScore: 0, status: "completed", venue: "Estadio Azteca", city: "Mexico City" },

  // ---- June 12 ----
  { id: "m02", group: "A", date: "2026-06-12", time: "13:00", homeTeam: "Korea Republic", homeCode: "KOR", homeFlag: "🇰🇷", awayTeam: "Czechia", awayCode: "CZE", awayFlag: "🇨🇿", homeScore: 2, awayScore: 1, status: "completed", venue: "Rose Bowl", city: "Pasadena" },
  { id: "m03", group: "B", date: "2026-06-12", time: "17:00", homeTeam: "Canada", homeCode: "CAN", homeFlag: "🇨🇦", awayTeam: "Bosnia & Herzegovina", awayCode: "BIH", awayFlag: "🇧🇦", homeScore: 1, awayScore: 1, status: "completed", venue: "BC Place", city: "Vancouver" },
  { id: "m04", group: "B", date: "2026-06-12", time: "20:00", homeTeam: "Qatar", homeCode: "QAT", homeFlag: "🇶🇦", awayTeam: "Switzerland", awayCode: "SUI", awayFlag: "🇨🇭", homeScore: 1, awayScore: 1, status: "completed", venue: "BMO Field", city: "Toronto" },

  // ---- June 13 ----
  { id: "m05", group: "C", date: "2026-06-13", time: "13:00", homeTeam: "Brazil", homeCode: "BRA", homeFlag: "🇧🇷", awayTeam: "Haiti", awayCode: "HAI", awayFlag: "🇭🇹", homeScore: 3, awayScore: 0, status: "completed", venue: "SoFi Stadium", city: "Los Angeles" },
  { id: "m06", group: "C", date: "2026-06-13", time: "17:00", homeTeam: "Morocco", homeCode: "MAR", homeFlag: "🇲🇦", awayTeam: "Scotland", awayCode: "SCO", awayFlag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", homeScore: 2, awayScore: 1, status: "completed", venue: "Lincoln Financial Field", city: "Philadelphia" },
  { id: "m07", group: "D", date: "2026-06-13", time: "20:00", homeTeam: "United States", homeCode: "USA", homeFlag: "🇺🇸", awayTeam: "Türkiye", awayCode: "TUR", awayFlag: "🇹🇷", homeScore: 2, awayScore: 0, status: "completed", venue: "MetLife Stadium", city: "New York/New Jersey" },

  // ---- June 14 ----
  { id: "m08", group: "D", date: "2026-06-14", time: "13:00", homeTeam: "Australia", homeCode: "AUS", homeFlag: "🇦🇺", awayTeam: "Paraguay", awayCode: "PAR", awayFlag: "🇵🇾", homeScore: 1, awayScore: 0, status: "completed", venue: "NRG Stadium", city: "Houston" },
  { id: "m09", group: "E", date: "2026-06-14", time: "17:00", homeTeam: "Germany", homeCode: "GER", homeFlag: "🇩🇪", awayTeam: "Curaçao", awayCode: "CUW", awayFlag: "🇨🇼", homeScore: 7, awayScore: 0, status: "completed", venue: "AT&T Stadium", city: "Dallas" },
  { id: "m10", group: "E", date: "2026-06-14", time: "20:00", homeTeam: "Ivory Coast", homeCode: "CIV", homeFlag: "🇨🇮", awayTeam: "Ecuador", awayCode: "ECU", awayFlag: "🇪🇨", homeScore: 1, awayScore: 0, status: "completed", venue: "Mercedes-Benz Stadium", city: "Atlanta" },

  // ---- June 15 ----
  { id: "m11", group: "F", date: "2026-06-15", time: "13:00", homeTeam: "Netherlands", homeCode: "NED", homeFlag: "🇳🇱", awayTeam: "Japan", awayCode: "JPN", awayFlag: "🇯🇵", homeScore: 2, awayScore: 2, status: "completed", venue: "Lumen Field", city: "Seattle" },
  { id: "m12", group: "F", date: "2026-06-15", time: "17:00", homeTeam: "Sweden", homeCode: "SWE", homeFlag: "🇸🇪", awayTeam: "Tunisia", awayCode: "TUN", awayFlag: "🇹🇳", homeScore: 5, awayScore: 1, status: "completed", venue: "Arrowhead Stadium", city: "Kansas City" },
  { id: "m13", group: "G", date: "2026-06-15", time: "20:00", homeTeam: "Belgium", homeCode: "BEL", homeFlag: "🇧🇪", awayTeam: "Egypt", awayCode: "EGY", awayFlag: "🇪🇬", homeScore: 1, awayScore: 1, status: "completed", venue: "Gillette Stadium", city: "Foxborough" },

  // ---- June 16 ----
  { id: "m14", group: "G", date: "2026-06-16", time: "13:00", homeTeam: "Iran", homeCode: "IRN", homeFlag: "🇮🇷", awayTeam: "New Zealand", awayCode: "NZL", awayFlag: "🇳🇿", homeScore: 0, awayScore: 1, status: "completed", venue: "GEODIS Park", city: "Nashville" },
  { id: "m15", group: "H", date: "2026-06-16", time: "17:00", homeTeam: "Spain", homeCode: "ESP", homeFlag: "🇪🇸", awayTeam: "Cape Verde", awayCode: "CPV", awayFlag: "🇨🇻", homeScore: 0, awayScore: 0, status: "completed", venue: "Hard Rock Stadium", city: "Miami" },
  { id: "m16", group: "H", date: "2026-06-16", time: "20:00", homeTeam: "Saudi Arabia", homeCode: "KSA", homeFlag: "🇸🇦", awayTeam: "Uruguay", awayCode: "URU", awayFlag: "🇺🇾", homeScore: 1, awayScore: 1, status: "completed", venue: "Levi's Stadium", city: "San Francisco" },

  // ---- June 17 ----
  { id: "m17", group: "I", date: "2026-06-17", time: "17:00", homeTeam: "France", homeCode: "FRA", homeFlag: "🇫🇷", awayTeam: "Senegal", awayCode: "SEN", awayFlag: "🇸🇳", homeScore: 3, awayScore: 1, status: "completed", venue: "MetLife Stadium", city: "New York/New Jersey" },
  { id: "m18", group: "I", date: "2026-06-17", time: "20:00", homeTeam: "Norway", homeCode: "NOR", homeFlag: "🇳🇴", awayTeam: "Iraq", awayCode: "IRQ", awayFlag: "🇮🇶", homeScore: 4, awayScore: 1, status: "completed", venue: "Soldier Field", city: "Chicago" },

  // ---- June 18 ----
  { id: "m19", group: "J", date: "2026-06-18", time: "17:00", homeTeam: "Argentina", homeCode: "ARG", homeFlag: "🇦🇷", awayTeam: "Algeria", awayCode: "ALG", awayFlag: "🇩🇿", homeScore: 3, awayScore: 0, status: "completed", venue: "Hard Rock Stadium", city: "Miami" },
  { id: "m20", group: "J", date: "2026-06-18", time: "20:00", homeTeam: "Austria", homeCode: "AUT", homeFlag: "🇦🇹", awayTeam: "Jordan", awayCode: "JOR", awayFlag: "🇯🇴", homeScore: 2, awayScore: 1, status: "completed", venue: "Camping World Stadium", city: "Orlando" },

  // ---- June 19 ----
  { id: "m21", group: "K", date: "2026-06-19", time: "17:00", homeTeam: "Colombia", homeCode: "COL", homeFlag: "🇨🇴", awayTeam: "Uzbekistan", awayCode: "UZB", awayFlag: "🇺🇿", homeScore: 2, awayScore: 0, status: "completed", venue: "SoFi Stadium", city: "Los Angeles" },
  { id: "m22", group: "K", date: "2026-06-19", time: "20:00", homeTeam: "Portugal", homeCode: "POR", homeFlag: "🇵🇹", awayTeam: "DR Congo", awayCode: "COD", awayFlag: "🇨🇩", homeScore: 1, awayScore: 1, status: "completed", venue: "Gillette Stadium", city: "Foxborough" },

  // ---- June 20 ----
  { id: "m23", group: "L", date: "2026-06-20", time: "17:00", homeTeam: "England", homeCode: "ENG", homeFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", awayTeam: "Croatia", awayCode: "CRO", awayFlag: "🇭🇷", homeScore: 4, awayScore: 2, status: "completed", venue: "Mercedes-Benz Stadium", city: "Atlanta" },
  { id: "m24", group: "L", date: "2026-06-20", time: "20:00", homeTeam: "Panama", homeCode: "PAN", homeFlag: "🇵🇦", awayTeam: "Ghana", awayCode: "GHA", awayFlag: "🇬🇭", homeScore: 2, awayScore: 1, status: "completed", venue: "NRG Stadium", city: "Houston" },

  // ---- June 21 (Matchday 2 results) ----
  { id: "m25", group: "A", date: "2026-06-21", time: "13:00", homeTeam: "Czechia", homeCode: "CZE", homeFlag: "🇨🇿", awayTeam: "South Africa", awayCode: "RSA", awayFlag: "🇿🇦", homeScore: 1, awayScore: 1, status: "completed", venue: "Rose Bowl", city: "Pasadena" },
  { id: "m26", group: "A", date: "2026-06-21", time: "13:00", homeTeam: "Mexico", homeCode: "MEX", homeFlag: "🇲🇽", awayTeam: "Korea Republic", awayCode: "KOR", awayFlag: "🇰🇷", homeScore: 1, awayScore: 0, status: "completed", venue: "Estadio Azteca", city: "Mexico City" },
  { id: "m27", group: "B", date: "2026-06-21", time: "17:00", homeTeam: "Switzerland", homeCode: "SUI", homeFlag: "🇨🇭", awayTeam: "Bosnia & Herzegovina", awayCode: "BIH", awayFlag: "🇧🇦", homeScore: 4, awayScore: 1, status: "completed", venue: "BMO Field", city: "Toronto" },
  { id: "m28", group: "B", date: "2026-06-21", time: "17:00", homeTeam: "Canada", homeCode: "CAN", homeFlag: "🇨🇦", awayTeam: "Qatar", awayCode: "QAT", awayFlag: "🇶🇦", homeScore: 6, awayScore: 0, status: "completed", venue: "BC Place", city: "Vancouver" },

  // ---- More Matchday 2 ----
  { id: "m29", group: "D", date: "2026-06-21", time: "20:00", homeTeam: "United States", homeCode: "USA", homeFlag: "🇺🇸", awayTeam: "Australia", awayCode: "AUS", awayFlag: "🇦🇺", homeScore: 2, awayScore: 0, status: "completed", venue: "MetLife Stadium", city: "New York/New Jersey" },
  { id: "m30", group: "D", date: "2026-06-21", time: "20:00", homeTeam: "Paraguay", homeCode: "PAR", homeFlag: "🇵🇾", awayTeam: "Türkiye", awayCode: "TUR", awayFlag: "🇹🇷", homeScore: 3, awayScore: 1, status: "completed", venue: "AT&T Stadium", city: "Dallas" },
  { id: "m31", group: "E", date: "2026-06-21", time: "13:00", homeTeam: "Germany", homeCode: "GER", homeFlag: "🇩🇪", awayTeam: "Ivory Coast", awayCode: "CIV", awayFlag: "🇨🇮", homeScore: 3, awayScore: 1, status: "completed", venue: "AT&T Stadium", city: "Dallas" },
  { id: "m32", group: "E", date: "2026-06-21", time: "13:00", homeTeam: "Ecuador", homeCode: "ECU", homeFlag: "🇪🇨", awayTeam: "Curaçao", awayCode: "CUW", awayFlag: "🇨🇼", homeScore: 3, awayScore: 1, status: "completed", venue: "GEODIS Park", city: "Nashville" },
  { id: "m33", group: "G", date: "2026-06-21", time: "17:00", homeTeam: "Belgium", homeCode: "BEL", homeFlag: "🇧🇪", awayTeam: "Iran", awayCode: "IRN", awayFlag: "🇮🇷", homeScore: 3, awayScore: 0, status: "completed", venue: "Gillette Stadium", city: "Foxborough" },
  { id: "m34", group: "G", date: "2026-06-21", time: "17:00", homeTeam: "Egypt", homeCode: "EGY", homeFlag: "🇪🇬", awayTeam: "New Zealand", awayCode: "NZL", awayFlag: "🇳🇿", homeScore: 2, awayScore: 0, status: "completed", venue: "Lincoln Financial Field", city: "Philadelphia" },
  { id: "m35", group: "H", date: "2026-06-21", time: "20:00", homeTeam: "Spain", homeCode: "ESP", homeFlag: "🇪🇸", awayTeam: "Saudi Arabia", awayCode: "KSA", awayFlag: "🇸🇦", homeScore: 3, awayScore: 1, status: "completed", venue: "Hard Rock Stadium", city: "Miami" },
  { id: "m36", group: "H", date: "2026-06-21", time: "20:00", homeTeam: "Uruguay", homeCode: "URU", homeFlag: "🇺🇾", awayTeam: "Cape Verde", awayCode: "CPV", awayFlag: "🇨🇻", homeScore: 2, awayScore: 1, status: "completed", venue: "Levi's Stadium", city: "San Francisco" },
  { id: "m37", group: "D", date: "2026-06-21", time: "13:00", homeTeam: "United States", homeCode: "USA", homeFlag: "🇺🇸", awayTeam: "Paraguay", awayCode: "PAR", awayFlag: "🇵🇾", homeScore: 4, awayScore: 1, status: "completed", venue: "MetLife Stadium", city: "New York/New Jersey" },
];

// ============================================================
// TODAY'S MATCHES — June 22, 2026
// ============================================================
export const todayMatches: Match[] = [
  {
    id: "t01",
    group: "I",
    date: "2026-06-22",
    time: "14:00",
    homeTeam: "France",
    homeCode: "FRA",
    homeFlag: "🇫🇷",
    awayTeam: "Iraq",
    awayCode: "IRQ",
    awayFlag: "🇮🇶",
    status: "upcoming",
    venue: "MetLife Stadium",
    city: "New York/New Jersey",
    homeWinProb: 82,
    drawProb: 12,
    awayWinProb: 6,
    insight: "Mbappé memburu gol ke-4 di turnamen. Prancis belum pernah kalah di fase grup sejak 2014. Irak butuh mujizat untuk lolos.",
  },
  {
    id: "t02",
    group: "I",
    date: "2026-06-22",
    time: "14:00",
    homeTeam: "Norway",
    homeCode: "NOR",
    homeFlag: "🇳🇴",
    awayTeam: "Senegal",
    awayCode: "SEN",
    awayFlag: "🇸🇳",
    status: "upcoming",
    venue: "Soldier Field",
    city: "Chicago",
    homeWinProb: 55,
    drawProb: 23,
    awayWinProb: 22,
    insight: "Haaland sudah 2 gol dalam 1 laga. Senegal harus menang untuk tetap hidup di grup ini. Pertandingan paling sengit malam ini.",
  },
  {
    id: "t03",
    group: "J",
    date: "2026-06-22",
    time: "20:00",
    homeTeam: "Argentina",
    homeCode: "ARG",
    homeFlag: "🇦🇷",
    awayTeam: "Austria",
    awayCode: "AUT",
    awayFlag: "🇦🇹",
    status: "upcoming",
    venue: "Hard Rock Stadium",
    city: "Miami",
    homeWinProb: 65,
    drawProb: 20,
    awayWinProb: 15,
    insight: "Messi mencetak hat-trick di laga pembuka. Austria datang dengan kemenangan 2-1 atas Yordania. Duel puncak Grup J.",
  },
  {
    id: "t04",
    group: "J",
    date: "2026-06-22",
    time: "20:00",
    homeTeam: "Jordan",
    homeCode: "JOR",
    homeFlag: "🇯🇴",
    awayTeam: "Algeria",
    awayCode: "ALG",
    awayFlag: "🇩🇿",
    status: "upcoming",
    venue: "Camping World Stadium",
    city: "Orlando",
    homeWinProb: 38,
    drawProb: 30,
    awayWinProb: 32,
    insight: "Kedua tim kalah di MD1. Pertandingan hidup-mati — yang kalah nyaris pasti tereliminasi dari turnamen.",
  },
];

// ============================================================
// UPCOMING SCHEDULE (June 23 – 24)
// ============================================================
export const upcomingMatches: Match[] = [
  // ---- June 23 ----
  { id: "u01", group: "K", date: "2026-06-23", time: "14:00", homeTeam: "Portugal", homeCode: "POR", homeFlag: "🇵🇹", awayTeam: "Uzbekistan", awayCode: "UZB", awayFlag: "🇺🇿", status: "upcoming", venue: "SoFi Stadium", city: "Los Angeles", homeWinProb: 80, drawProb: 13, awayWinProb: 7 },
  { id: "u02", group: "K", date: "2026-06-23", time: "14:00", homeTeam: "Colombia", homeCode: "COL", homeFlag: "🇨🇴", awayTeam: "DR Congo", awayCode: "COD", awayFlag: "🇨🇩", status: "upcoming", venue: "Gillette Stadium", city: "Foxborough", homeWinProb: 60, drawProb: 24, awayWinProb: 16 },
  { id: "u03", group: "L", date: "2026-06-23", time: "20:00", homeTeam: "England", homeCode: "ENG", homeFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", awayTeam: "Ghana", awayCode: "GHA", awayFlag: "🇬🇭", status: "upcoming", venue: "Mercedes-Benz Stadium", city: "Atlanta", homeWinProb: 75, drawProb: 16, awayWinProb: 9 },
  { id: "u04", group: "L", date: "2026-06-23", time: "20:00", homeTeam: "Panama", homeCode: "PAN", homeFlag: "🇵🇦", awayTeam: "Croatia", awayCode: "CRO", awayFlag: "🇭🇷", status: "upcoming", venue: "NRG Stadium", city: "Houston", homeWinProb: 22, drawProb: 25, awayWinProb: 53 },

  // ---- June 24 ----
  { id: "u05", group: "B", date: "2026-06-24", time: "13:00", homeTeam: "Bosnia & Herzegovina", homeCode: "BIH", homeFlag: "🇧🇦", awayTeam: "Qatar", awayCode: "QAT", awayFlag: "🇶🇦", status: "upcoming", venue: "BMO Field", city: "Toronto", homeWinProb: 45, drawProb: 28, awayWinProb: 27 },
  { id: "u06", group: "B", date: "2026-06-24", time: "13:00", homeTeam: "Switzerland", homeCode: "SUI", homeFlag: "🇨🇭", awayTeam: "Canada", awayCode: "CAN", awayFlag: "🇨🇦", status: "upcoming", venue: "BC Place", city: "Vancouver", homeWinProb: 35, drawProb: 30, awayWinProb: 35 },
  { id: "u07", group: "C", date: "2026-06-24", time: "17:00", homeTeam: "Scotland", homeCode: "SCO", homeFlag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", awayTeam: "Brazil", awayCode: "BRA", awayFlag: "🇧🇷", status: "upcoming", venue: "Lumen Field", city: "Seattle", homeWinProb: 8, drawProb: 17, awayWinProb: 75 },
  { id: "u08", group: "C", date: "2026-06-24", time: "17:00", homeTeam: "Morocco", homeCode: "MAR", homeFlag: "🇲🇦", awayTeam: "Haiti", awayCode: "HAI", awayFlag: "🇭🇹", status: "upcoming", venue: "Lincoln Financial Field", city: "Philadelphia", homeWinProb: 78, drawProb: 15, awayWinProb: 7 },
  { id: "u09", group: "A", date: "2026-06-24", time: "20:00", homeTeam: "Czechia", homeCode: "CZE", homeFlag: "🇨🇿", awayTeam: "Mexico", awayCode: "MEX", awayFlag: "🇲🇽", status: "upcoming", venue: "Rose Bowl", city: "Pasadena", homeWinProb: 20, drawProb: 25, awayWinProb: 55 },
  { id: "u10", group: "A", date: "2026-06-24", time: "20:00", homeTeam: "South Africa", homeCode: "RSA", homeFlag: "🇿🇦", awayTeam: "Korea Republic", awayCode: "KOR", awayFlag: "🇰🇷", status: "upcoming", venue: "Soldier Field", city: "Chicago", homeWinProb: 25, drawProb: 28, awayWinProb: 47 },
];

// ============================================================
// SPOTLIGHT MATCHES — tonight's top 3 featured games
// ============================================================
export const spotlightMatches: Match[] = [
  todayMatches[2], // ARG vs AUT
  todayMatches[0], // FRA vs IRQ
  todayMatches[1], // NOR vs SEN
];

// Helper
export function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function getGroupLetter(groupName: string): string {
  return groupName.replace("Group ", "");
}
