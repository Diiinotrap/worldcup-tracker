"use client";

import { useEffect, useState } from "react";

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [showInstall, setShowInstall] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Register service worker
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => {
          console.log("SW registered:", reg.scope);
        })
        .catch((err) => {
          console.log("SW registration failed:", err);
        });
    }

    // Check if already installed
    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      // @ts-expect-error - navigator.standalone is iOS Safari specific
      window.navigator.standalone === true
    ) {
      setIsInstalled(true);
      return;
    }

    // Listen for install prompt
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    // @ts-expect-error - BeforeInstallPromptEvent type
    deferredPrompt.prompt();
    // @ts-expect-error - BeforeInstallPromptEvent type
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setShowInstall(false);
      setIsInstalled(true);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowInstall(false);
  };

  if (isInstalled || !showInstall) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[100] sm:left-auto sm:right-4 sm:max-w-sm animate-slide-up">
      <div className="glass-card p-4 border-accent/30 shadow-2xl shadow-accent/10">
        <div className="flex items-start gap-3">
          <span className="text-3xl flex-shrink-0">📲</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold mb-0.5">Install Aplikasi</p>
            <p className="text-xs text-muted leading-relaxed">
              Pasang World Cup 2026 Tracker di perangkat Anda untuk akses cepat & pengalaman layar penuh.
            </p>
          </div>
        </div>
        <div className="flex gap-2 mt-3">
          <button
            onClick={handleInstall}
            className="flex-1 bg-accent/20 border border-accent/40 text-accent text-sm font-semibold py-2 rounded-xl hover:bg-accent/30 transition-all"
          >
            Install
          </button>
          <button
            onClick={handleDismiss}
            className="px-4 text-muted text-sm font-medium py-2 rounded-xl hover:text-foreground transition-all"
          >
            Nanti
          </button>
        </div>
      </div>
    </div>
  );
}
