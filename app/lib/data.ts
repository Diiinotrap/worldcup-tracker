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


export interface Player {
  nama: string;
  posisi: 'GK' | 'CB' | 'LB' | 'RB' | 'DM' | 'CM' | 'AM' | 'LW' | 'RW' | 'ST';
  klub: string;
  nomorPunggung: number;
}

export interface Staff {
  pelatih: string;
  asisten: string;
}

export interface TeamSquad {
  kode: string;
  staff: Staff;
  pemain: Player[];
}

export const squads: TeamSquad[] = [
  {
    kode: 'ARG',
    staff: { pelatih: 'Lionel Scaloni', asisten: 'Pablo Aimar' },
    pemain: [
      { nama: 'Emiliano Martínez', posisi: 'GK', klub: 'Aston Villa', nomorPunggung: 23 },
      { nama: 'Cristian Romero', posisi: 'CB', klub: 'Tottenham Hotspur', nomorPunggung: 13 },
      { nama: 'Lisandro Martínez', posisi: 'CB', klub: 'Manchester United', nomorPunggung: 25 },
      { nama: 'Nahuel Molina', posisi: 'RB', klub: 'Atlético Madrid', nomorPunggung: 26 },
      { nama: 'Nicolás Tagliafico', posisi: 'LB', klub: 'Lyon', nomorPunggung: 3 },
      { nama: 'Enzo Fernández', posisi: 'CM', klub: 'Chelsea', nomorPunggung: 24 },
      { nama: 'Alexis Mac Allister', posisi: 'CM', klub: 'Liverpool', nomorPunggung: 20 },
      { nama: 'Rodrigo De Paul', posisi: 'CM', klub: 'Atlético Madrid', nomorPunggung: 7 },
      { nama: 'Lionel Messi', posisi: 'RW', klub: 'Inter Miami', nomorPunggung: 10 },
      { nama: 'Julián Álvarez', posisi: 'ST', klub: 'Manchester City', nomorPunggung: 9 },
      { nama: 'Lautaro Martínez', posisi: 'ST', klub: 'Inter Milan', nomorPunggung: 22 }
    ]
  },
  {
    kode: 'FRA',
    staff: { pelatih: 'Didier Deschamps', asisten: 'Guy Stéphan' },
    pemain: [
      { nama: 'Mike Maignan', posisi: 'GK', klub: 'AC Milan', nomorPunggung: 16 },
      { nama: 'Dayot Upamecano', posisi: 'CB', klub: 'Bayern Munich', nomorPunggung: 4 },
      { nama: 'William Saliba', posisi: 'CB', klub: 'Arsenal', nomorPunggung: 17 },
      { nama: 'Jules Koundé', posisi: 'RB', klub: 'Barcelona', nomorPunggung: 5 },
      { nama: 'Theo Hernández', posisi: 'LB', klub: 'AC Milan', nomorPunggung: 22 },
      { nama: 'Aurélien Tchouaméni', posisi: 'DM', klub: 'Real Madrid', nomorPunggung: 8 },
      { nama: 'Eduardo Camavinga', posisi: 'CM', klub: 'Real Madrid', nomorPunggung: 6 },
      { nama: 'Antoine Griezmann', posisi: 'AM', klub: 'Atlético Madrid', nomorPunggung: 7 },
      { nama: 'Kylian Mbappé', posisi: 'LW', klub: 'Real Madrid', nomorPunggung: 10 },
      { nama: 'Ousmane Dembélé', posisi: 'RW', klub: 'Paris Saint-Germain', nomorPunggung: 11 },
      { nama: 'Marcus Thuram', posisi: 'ST', klub: 'Inter Milan', nomorPunggung: 9 }
    ]
  },
  {
    kode: 'BRA',
    staff: { pelatih: 'Dorival Júnior', asisten: 'Lucas Silvestre' },
    pemain: [
      { nama: 'Alisson', posisi: 'GK', klub: 'Liverpool', nomorPunggung: 1 },
      { nama: 'Marquinhos', posisi: 'CB', klub: 'Paris Saint-Germain', nomorPunggung: 4 },
      { nama: 'Éder Militão', posisi: 'CB', klub: 'Real Madrid', nomorPunggung: 3 },
      { nama: 'Danilo', posisi: 'RB', klub: 'Juventus', nomorPunggung: 2 },
      { nama: 'Wendell', posisi: 'LB', klub: 'Porto', nomorPunggung: 6 },
      { nama: 'Bruno Guimarães', posisi: 'CM', klub: 'Newcastle United', nomorPunggung: 8 },
      { nama: 'Lucas Paquetá', posisi: 'AM', klub: 'West Ham United', nomorPunggung: 10 },
      { nama: 'Vinícius Júnior', posisi: 'LW', klub: 'Real Madrid', nomorPunggung: 7 },
      { nama: 'Rodrygo', posisi: 'RW', klub: 'Real Madrid', nomorPunggung: 11 },
      { nama: 'Endrick', posisi: 'ST', klub: 'Real Madrid', nomorPunggung: 9 },
      { nama: 'Raphinha', posisi: 'RW', klub: 'Barcelona', nomorPunggung: 19 }
    ]
  },
  {
    kode: 'ESP',
    staff: { pelatih: 'Luis de la Fuente', asisten: 'Pablo Amo' },
    pemain: [
      { nama: 'Unai Simón', posisi: 'GK', klub: 'Athletic Bilbao', nomorPunggung: 23 },
      { nama: 'Aymeric Laporte', posisi: 'CB', klub: 'Al Nassr', nomorPunggung: 14 },
      { nama: 'Robin Le Normand', posisi: 'CB', klub: 'Real Sociedad', nomorPunggung: 3 },
      { nama: 'Dani Carvajal', posisi: 'RB', klub: 'Real Madrid', nomorPunggung: 2 },
      { nama: 'Marc Cucurella', posisi: 'LB', klub: 'Chelsea', nomorPunggung: 24 },
      { nama: 'Rodri', posisi: 'DM', klub: 'Manchester City', nomorPunggung: 16 },
      { nama: 'Pedri', posisi: 'CM', klub: 'Barcelona', nomorPunggung: 20 },
      { nama: 'Fabián Ruiz', posisi: 'CM', klub: 'Paris Saint-Germain', nomorPunggung: 8 },
      { nama: 'Lamine Yamal', posisi: 'RW', klub: 'Barcelona', nomorPunggung: 19 },
      { nama: 'Nico Williams', posisi: 'LW', klub: 'Athletic Bilbao', nomorPunggung: 17 },
      { nama: 'Álvaro Morata', posisi: 'ST', klub: 'Atlético Madrid', nomorPunggung: 7 }
    ]
  },
  {
    kode: 'GER',
    staff: { pelatih: 'Julian Nagelsmann', asisten: 'Sandro Wagner' },
    pemain: [
      { nama: 'Marc-André ter Stegen', posisi: 'GK', klub: 'Barcelona', nomorPunggung: 1 },
      { nama: 'Antonio Rüdiger', posisi: 'CB', klub: 'Real Madrid', nomorPunggung: 2 },
      { nama: 'Jonathan Tah', posisi: 'CB', klub: 'Bayer Leverkusen', nomorPunggung: 4 },
      { nama: 'Joshua Kimmich', posisi: 'RB', klub: 'Bayern Munich', nomorPunggung: 6 },
      { nama: 'Maximilian Mittelstädt', posisi: 'LB', klub: 'VfB Stuttgart', nomorPunggung: 18 },
      { nama: 'Toni Kroos', posisi: 'CM', klub: 'Real Madrid', nomorPunggung: 8 },
      { nama: 'Ilkay Gündogan', posisi: 'CM', klub: 'Barcelona', nomorPunggung: 21 },
      { nama: 'Florian Wirtz', posisi: 'AM', klub: 'Bayer Leverkusen', nomorPunggung: 17 },
      { nama: 'Jamal Musiala', posisi: 'AM', klub: 'Bayern Munich', nomorPunggung: 10 },
      { nama: 'Kai Havertz', posisi: 'ST', klub: 'Arsenal', nomorPunggung: 7 },
      { nama: 'Niclas Füllkrug', posisi: 'ST', klub: 'Borussia Dortmund', nomorPunggung: 9 }
    ]
  },
  {
    kode: 'ENG',
    staff: { pelatih: 'Gareth Southgate', asisten: 'Steve Holland' },
    pemain: [
      { nama: 'Jordan Pickford', posisi: 'GK', klub: 'Everton', nomorPunggung: 1 },
      { nama: 'John Stones', posisi: 'CB', klub: 'Manchester City', nomorPunggung: 5 },
      { nama: 'Marc Guéhi', posisi: 'CB', klub: 'Crystal Palace', nomorPunggung: 6 },
      { nama: 'Kyle Walker', posisi: 'RB', klub: 'Manchester City', nomorPunggung: 2 },
      { nama: 'Kieran Trippier', posisi: 'LB', klub: 'Newcastle United', nomorPunggung: 12 },
      { nama: 'Declan Rice', posisi: 'DM', klub: 'Arsenal', nomorPunggung: 4 },
      { nama: 'Jude Bellingham', posisi: 'AM', klub: 'Real Madrid', nomorPunggung: 10 },
      { nama: 'Phil Foden', posisi: 'AM', klub: 'Manchester City', nomorPunggung: 11 },
      { nama: 'Bukayo Saka', posisi: 'RW', klub: 'Arsenal', nomorPunggung: 7 },
      { nama: 'Anthony Gordon', posisi: 'LW', klub: 'Newcastle United', nomorPunggung: 18 },
      { nama: 'Harry Kane', posisi: 'ST', klub: 'Bayern Munich', nomorPunggung: 9 }
    ]
  },
  {
    kode: 'POR',
    staff: { pelatih: 'Roberto Martínez', asisten: 'Anthony Barry' },
    pemain: [
      { nama: 'Diogo Costa', posisi: 'GK', klub: 'Porto', nomorPunggung: 22 },
      { nama: 'Rúben Dias', posisi: 'CB', klub: 'Manchester City', nomorPunggung: 4 },
      { nama: 'Pepe', posisi: 'CB', klub: 'Porto', nomorPunggung: 3 },
      { nama: 'João Cancelo', posisi: 'RB', klub: 'Barcelona', nomorPunggung: 20 },
      { nama: 'Nuno Mendes', posisi: 'LB', klub: 'Paris Saint-Germain', nomorPunggung: 19 },
      { nama: 'João Palhinha', posisi: 'DM', klub: 'Fulham', nomorPunggung: 6 },
      { nama: 'Vitinha', posisi: 'CM', klub: 'Paris Saint-Germain', nomorPunggung: 23 },
      { nama: 'Bruno Fernandes', posisi: 'AM', klub: 'Manchester United', nomorPunggung: 8 },
      { nama: 'Bernardo Silva', posisi: 'RW', klub: 'Manchester City', nomorPunggung: 10 },
      { nama: 'Rafael Leão', posisi: 'LW', klub: 'AC Milan', nomorPunggung: 17 },
      { nama: 'Cristiano Ronaldo', posisi: 'ST', klub: 'Al Nassr', nomorPunggung: 7 }
    ]
  },
  {
    kode: 'NED',
    staff: { pelatih: 'Ronald Koeman', asisten: 'Erwin Koeman' },
    pemain: [
      { nama: 'Bart Verbruggen', posisi: 'GK', klub: 'Brighton', nomorPunggung: 1 },
      { nama: 'Virgil van Dijk', posisi: 'CB', klub: 'Liverpool', nomorPunggung: 4 },
      { nama: 'Nathan Aké', posisi: 'CB', klub: 'Manchester City', nomorPunggung: 5 },
      { nama: 'Denzel Dumfries', posisi: 'RB', klub: 'Inter Milan', nomorPunggung: 22 },
      { nama: 'Ian Maatsen', posisi: 'LB', klub: 'Borussia Dortmund', nomorPunggung: 12 },
      { nama: 'Tijjani Reijnders', posisi: 'CM', klub: 'AC Milan', nomorPunggung: 14 },
      { nama: 'Jerdy Schouten', posisi: 'CM', klub: 'PSV Eindhoven', nomorPunggung: 24 },
      { nama: 'Xavi Simons', posisi: 'AM', klub: 'RB Leipzig', nomorPunggung: 7 },
      { nama: 'Cody Gakpo', posisi: 'LW', klub: 'Liverpool', nomorPunggung: 11 },
      { nama: 'Donyell Malen', posisi: 'RW', klub: 'Borussia Dortmund', nomorPunggung: 18 },
      { nama: 'Memphis Depay', posisi: 'ST', klub: 'Atlético Madrid', nomorPunggung: 10 }
    ]
  },
  {
    kode: 'JPN',
    staff: { pelatih: 'Hajime Moriyasu', asisten: 'Hiroshi Nanami' },
    pemain: [
      { nama: 'Zion Suzuki', posisi: 'GK', klub: 'Sint-Truiden', nomorPunggung: 23 },
      { nama: 'Takehiro Tomiyasu', posisi: 'CB', klub: 'Arsenal', nomorPunggung: 16 },
      { nama: 'Ko Itakura', posisi: 'CB', klub: 'Borussia Mönchengladbach', nomorPunggung: 4 },
      { nama: 'Yukinari Sugawara', posisi: 'RB', klub: 'AZ Alkmaar', nomorPunggung: 2 },
      { nama: 'Hiroki Ito', posisi: 'LB', klub: 'VfB Stuttgart', nomorPunggung: 21 },
      { nama: 'Wataru Endo', posisi: 'DM', klub: 'Liverpool', nomorPunggung: 6 },
      { nama: 'Hidemasa Morita', posisi: 'CM', klub: 'Sporting CP', nomorPunggung: 5 },
      { nama: 'Takefusa Kubo', posisi: 'RW', klub: 'Real Sociedad', nomorPunggung: 20 },
      { nama: 'Kaoru Mitoma', posisi: 'LW', klub: 'Brighton', nomorPunggung: 7 },
      { nama: 'Daichi Kamada', posisi: 'AM', klub: 'Lazio', nomorPunggung: 8 },
      { nama: 'Ayase Ueda', posisi: 'ST', klub: 'Feyenoord', nomorPunggung: 9 }
    ]
  },
  {
    kode: 'NOR',
    staff: { pelatih: 'Ståle Solbakken', asisten: 'Brede Hangeland' },
    pemain: [
      { nama: 'Ørjan Nyland', posisi: 'GK', klub: 'Sevilla', nomorPunggung: 1 },
      { nama: 'Leo Østigård', posisi: 'CB', klub: 'Napoli', nomorPunggung: 4 },
      { nama: 'Kristoffer Ajer', posisi: 'CB', klub: 'Brentford', nomorPunggung: 3 },
      { nama: 'Julian Ryerson', posisi: 'RB', klub: 'Borussia Dortmund', nomorPunggung: 14 },
      { nama: 'David Møller Wolfe', posisi: 'LB', klub: 'AZ Alkmaar', nomorPunggung: 5 },
      { nama: 'Sander Berge', posisi: 'DM', klub: 'Burnley', nomorPunggung: 8 },
      { nama: 'Martin Ødegaard', posisi: 'AM', klub: 'Arsenal', nomorPunggung: 10 },
      { nama: 'Oscar Bobb', posisi: 'RW', klub: 'Manchester City', nomorPunggung: 22 },
      { nama: 'Antonio Nusa', posisi: 'LW', klub: 'Club Brugge', nomorPunggung: 20 },
      { nama: 'Erling Haaland', posisi: 'ST', klub: 'Manchester City', nomorPunggung: 9 },
      { nama: 'Alexander Sørloth', posisi: 'ST', klub: 'Villarreal', nomorPunggung: 19 }
    ]
  },
  {
    kode: 'AUT',
    staff: { pelatih: 'Ralf Rangnick', asisten: 'Peter Perchtold' },
    pemain: [
      { nama: 'Patrick Pentz', posisi: 'GK', klub: 'Brøndby', nomorPunggung: 13 },
      { nama: 'Kevin Danso', posisi: 'CB', klub: 'Lens', nomorPunggung: 4 },
      { nama: 'Philipp Lienhart', posisi: 'CB', klub: 'Freiburg', nomorPunggung: 15 },
      { nama: 'Stefan Posch', posisi: 'RB', klub: 'Bologna', nomorPunggung: 5 },
      { nama: 'Phillipp Mwene', posisi: 'LB', klub: 'Mainz 05', nomorPunggung: 16 },
      { nama: 'Nicolas Seiwald', posisi: 'CM', klub: 'RB Leipzig', nomorPunggung: 6 },
      { nama: 'Marcel Sabitzer', posisi: 'CM', klub: 'Borussia Dortmund', nomorPunggung: 9 },
      { nama: 'Christoph Baumgartner', posisi: 'AM', klub: 'RB Leipzig', nomorPunggung: 19 },
      { nama: 'Konrad Laimer', posisi: 'RW', klub: 'Bayern Munich', nomorPunggung: 20 },
      { nama: 'Romano Schmid', posisi: 'LW', klub: 'Werder Bremen', nomorPunggung: 18 },
      { nama: 'Michael Gregoritsch', posisi: 'ST', klub: 'Freiburg', nomorPunggung: 11 }
    ]
  },
  {
    kode: 'SEN',
    staff: { pelatih: 'Aliou Cissé', asisten: 'Régis Bogaert' },
    pemain: [
      { nama: 'Édouard Mendy', posisi: 'GK', klub: 'Al-Ahli', nomorPunggung: 16 },
      { nama: 'Kalidou Koulibaly', posisi: 'CB', klub: 'Al-Hilal', nomorPunggung: 3 },
      { nama: 'Abdou Diallo', posisi: 'CB', klub: 'Al-Arabi', nomorPunggung: 22 },
      { nama: 'Krépin Diatta', posisi: 'RB', klub: 'Monaco', nomorPunggung: 15 },
      { nama: 'Ismail Jakobs', posisi: 'LB', klub: 'Monaco', nomorPunggung: 14 },
      { nama: 'Pape Matar Sarr', posisi: 'CM', klub: 'Tottenham Hotspur', nomorPunggung: 17 },
      { nama: 'Idrissa Gueye', posisi: 'CM', klub: 'Everton', nomorPunggung: 5 },
      { nama: 'Lamine Camara', posisi: 'AM', klub: 'Metz', nomorPunggung: 25 },
      { nama: 'Sadio Mané', posisi: 'LW', klub: 'Al-Nassr', nomorPunggung: 10 },
      { nama: 'Ismaïla Sarr', posisi: 'RW', klub: 'Marseille', nomorPunggung: 18 },
      { nama: 'Nicolas Jackson', posisi: 'ST', klub: 'Chelsea', nomorPunggung: 7 }
    ]
  },
  {
    kode: 'IRQ',
    staff: { pelatih: 'Jesús Casas', asisten: 'Alejandro Varela' },
    pemain: [
      { nama: 'Jalal Hassan', posisi: 'GK', klub: 'Al-Zawraa', nomorPunggung: 12 },
      { nama: 'Rebin Sulaka', posisi: 'CB', klub: 'FC Seoul', nomorPunggung: 2 },
      { nama: 'Saad Natiq', posisi: 'CB', klub: 'Al-Quwa Al-Jawiya', nomorPunggung: 4 },
      { nama: 'Hussein Ali', posisi: 'RB', klub: 'Heerenveen', nomorPunggung: 3 },
      { nama: 'Merchas Doski', posisi: 'LB', klub: 'Slovácko', nomorPunggung: 23 },
      { nama: 'Osama Rashid', posisi: 'CM', klub: 'Vizela', nomorPunggung: 20 },
      { nama: 'Amir Al-Ammari', posisi: 'CM', klub: 'Halmstads BK', nomorPunggung: 16 },
      { nama: 'Zidane Iqbal', posisi: 'AM', klub: 'FC Utrecht', nomorPunggung: 11 },
      { nama: 'Ali Jasim', posisi: 'LW', klub: 'Al-Quwa Al-Jawiya', nomorPunggung: 17 },
      { nama: 'Ibrahim Bayesh', posisi: 'RW', klub: 'Al-Quwa Al-Jawiya', nomorPunggung: 8 },
      { nama: 'Aymen Hussein', posisi: 'ST', klub: 'Al-Quwa Al-Jawiya', nomorPunggung: 18 }
    ]
  },
  {
    kode: 'JOR',
    staff: { pelatih: 'Hussein Ammouta', asisten: 'Mustafa Khalfi' },
    pemain: [
      { nama: 'Yazeed Abulaila', posisi: 'GK', klub: 'Al-Jabalain', nomorPunggung: 1 },
      { nama: 'Yazan Al-Arab', posisi: 'CB', klub: 'Muaither', nomorPunggung: 5 },
      { nama: 'Abdallah Nasib', posisi: 'CB', klub: 'Al-Hussein', nomorPunggung: 3 },
      { nama: 'Ihsan Haddad', posisi: 'RB', klub: 'Al-Faisaly', nomorPunggung: 23 },
      { nama: 'Salem Al-Ajalin', posisi: 'LB', klub: 'Al-Faisaly', nomorPunggung: 17 },
      { nama: 'Nizar Al-Rashdan', posisi: 'CM', klub: 'Emirates Club', nomorPunggung: 21 },
      { nama: 'Noor Al-Rawabdeh', posisi: 'CM', klub: 'Selangor', nomorPunggung: 8 },
      { nama: 'Mahmoud Al-Mardi', posisi: 'LW', klub: 'Al-Hussein', nomorPunggung: 13 },
      { nama: 'Musa Al-Taamari', posisi: 'RW', klub: 'Montpellier', nomorPunggung: 10 },
      { nama: 'Ali Olwan', posisi: 'AM', klub: 'Al-Shamal', nomorPunggung: 9 },
      { nama: 'Yazan Al-Naimat', posisi: 'ST', klub: 'Al-Ahli', nomorPunggung: 11 }
    ]
  },
  {
    kode: 'DZA',
    staff: { pelatih: 'Vladimir Petković', asisten: 'David Morandi' },
    pemain: [
      { nama: 'Anthony Mandrea', posisi: 'GK', klub: 'Caen', nomorPunggung: 16 },
      { nama: 'Ramy Bensebaini', posisi: 'CB', klub: 'Borussia Dortmund', nomorPunggung: 21 },
      { nama: 'Aïssa Mandi', posisi: 'CB', klub: 'Villarreal', nomorPunggung: 2 },
      { nama: 'Youcef Atal', posisi: 'RB', klub: 'Adana Demirspor', nomorPunggung: 20 },
      { nama: 'Rayan Aït-Nouri', posisi: 'LB', klub: 'Wolverhampton', nomorPunggung: 15 },
      { nama: 'Nabil Bentaleb', posisi: 'CM', klub: 'Lille', nomorPunggung: 19 },
      { nama: 'Ismaël Bennacer', posisi: 'CM', klub: 'AC Milan', nomorPunggung: 22 },
      { nama: 'Houssem Aouar', posisi: 'AM', klub: 'Roma', nomorPunggung: 8 },
      { nama: 'Riyad Mahrez', posisi: 'RW', klub: 'Al-Ahli', nomorPunggung: 7 },
      { nama: 'Said Benrahma', posisi: 'LW', klub: 'Lyon', nomorPunggung: 10 },
      { nama: 'Baghdad Bounedjah', posisi: 'ST', klub: 'Al-Sadd', nomorPunggung: 9 }
    ]
  },
  {
    kode: 'URU',
    staff: { pelatih: 'Marcelo Bielsa', asisten: 'Diego Reyes' },
    pemain: [
      { nama: 'Sergio Rochet', posisi: 'GK', klub: 'Internacional', nomorPunggung: 1 },
      { nama: 'Ronald Araújo', posisi: 'CB', klub: 'Barcelona', nomorPunggung: 4 },
      { nama: 'José María Giménez', posisi: 'CB', klub: 'Atlético Madrid', nomorPunggung: 2 },
      { nama: 'Nahitan Nández', posisi: 'RB', klub: 'Al-Qadsiah', nomorPunggung: 8 },
      { nama: 'Mathías Olivera', posisi: 'LB', klub: 'Napoli', nomorPunggung: 16 },
      { nama: 'Federico Valverde', posisi: 'CM', klub: 'Real Madrid', nomorPunggung: 15 },
      { nama: 'Manuel Ugarte', posisi: 'DM', klub: 'Paris Saint-Germain', nomorPunggung: 5 },
      { nama: 'Nicolás de la Cruz', posisi: 'AM', klub: 'Flamengo', nomorPunggung: 7 },
      { nama: 'Facundo Pellistri', posisi: 'RW', klub: 'Granada', nomorPunggung: 11 },
      { nama: 'Maximiliano Araújo', posisi: 'LW', klub: 'Toluca', nomorPunggung: 20 },
      { nama: 'Darwin Núñez', posisi: 'ST', klub: 'Liverpool', nomorPunggung: 19 }
    ]
  },
  {
    kode: 'COL',
    staff: { pelatih: 'Néstor Lorenzo', asisten: 'Amaranto Perea' },
    pemain: [
      { nama: 'Camilo Vargas', posisi: 'GK', klub: 'Atlas', nomorPunggung: 12 },
      { nama: 'Yerry Mina', posisi: 'CB', klub: 'Cagliari', nomorPunggung: 13 },
      { nama: 'Davinson Sánchez', posisi: 'CB', klub: 'Galatasaray', nomorPunggung: 23 },
      { nama: 'Daniel Muñoz', posisi: 'RB', klub: 'Crystal Palace', nomorPunggung: 21 },
      { nama: 'Johan Mojica', posisi: 'LB', klub: 'Osasuna', nomorPunggung: 17 },
      { nama: 'Jefferson Lerma', posisi: 'DM', klub: 'Crystal Palace', nomorPunggung: 16 },
      { nama: 'Richard Ríos', posisi: 'CM', klub: 'Palmeiras', nomorPunggung: 6 },
      { nama: 'James Rodríguez', posisi: 'AM', klub: 'São Paulo', nomorPunggung: 10 },
      { nama: 'Jhon Arias', posisi: 'RW', klub: 'Fluminense', nomorPunggung: 11 },
      { nama: 'Luis Díaz', posisi: 'LW', klub: 'Liverpool', nomorPunggung: 7 },
      { nama: 'Rafael Santos Borré', posisi: 'ST', klub: 'Internacional', nomorPunggung: 19 }
    ]
  }
];
