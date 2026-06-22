import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aende KickOff",
    short_name: "AendeKickOff",
    description:
      "Track the Aende KickOff live — real-time scores, group standings, match schedule, and win probabilities.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#050a14",
    theme_color: "#050a14",
    categories: ["sports", "news"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      }
    ],
    screenshots: [],
  };
}
