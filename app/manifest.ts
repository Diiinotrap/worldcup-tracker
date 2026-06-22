import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "World Cup 2026 Tracker",
    short_name: "WC2026",
    description:
      "Track the 2026 FIFA World Cup live — real-time scores, group standings, match schedule, and win probabilities.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#050a14",
    theme_color: "#050a14",
    categories: ["sports", "news"],
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-maskable-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    screenshots: [],
  };
}
