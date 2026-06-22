import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PWAInstallPrompt from "./components/PWAInstallPrompt";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aende KickOff — Live Scores, Standings & Schedule",
  description:
    "Track the Aende KickOff live — real-time scores, group standings, match schedule, and win probabilities. All 48 teams across 12 groups.",
  keywords: ["Aende KickOff", "FIFA", "Soccer", "Football", "Live Scores", "Standings"],
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "AendeKickOff",
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#050a14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* PWA Icons */}
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        
        {/* iOS Splash Screens - common sizes */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="AendeKickOff" />

        {/* Microsoft Tile */}
        <meta name="msapplication-TileColor" content="#050a14" />
        <meta name="msapplication-TileImage" content="/icon.svg" />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <PWAInstallPrompt />
      </body>
    </html>
  );
}
