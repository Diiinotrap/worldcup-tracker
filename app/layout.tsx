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
  title: "World Cup 2026 Tracker — Live Scores, Standings & Schedule",
  description:
    "Track the 2026 FIFA World Cup live — real-time scores, group standings, match schedule, and win probabilities. All 48 teams across 12 groups.",
  keywords: ["World Cup 2026", "FIFA", "Soccer", "Football", "Live Scores", "Standings"],
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "WC2026",
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
        <link rel="icon" href="/icon-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        
        {/* iOS Splash Screens - common sizes */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="WC2026" />

        {/* Microsoft Tile */}
        <meta name="msapplication-TileColor" content="#050a14" />
        <meta name="msapplication-TileImage" content="/icon-192x192.png" />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <PWAInstallPrompt />
      </body>
    </html>
  );
}
