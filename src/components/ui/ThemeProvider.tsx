"use client";

import { createContext, useContext, useSyncExternalStore } from "react";
import { MotionConfig } from "framer-motion";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
}>({ theme: "dark", toggle: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

function getSnapshot(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerSnapshot(): Theme {
  return "dark";
}

function subscribe(onChange: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  function syncPreference() {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem("theme");
    } catch {
      // The theme remains usable when browser storage is unavailable.
    }
    const dark = stored === "dark" || (stored !== "light" && media.matches);
    document.documentElement.classList.toggle("dark", dark);
    onChange();
  }
  window.addEventListener("portfolio-theme-change", onChange);
  window.addEventListener("storage", syncPreference);
  media.addEventListener("change", syncPreference);
  return () => {
    window.removeEventListener("portfolio-theme-change", onChange);
    window.removeEventListener("storage", syncPreference);
    media.removeEventListener("change", syncPreference);
  };
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next = getSnapshot() === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Switching appearance does not require persistent storage.
    }
    window.dispatchEvent(new Event("portfolio-theme-change"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeContext.Provider>
  );
}
