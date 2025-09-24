"use client";

import { useEffect, useState } from "react";

const THEME_KEY = "theme";

type Theme = "light" | "dark";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme | undefined>(undefined);
  const [isDark, setIsDark] = useState(false);

  // Carrega o tema do localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      setIsDark(stored === "dark");
    } else {
      const systemTheme = getSystemTheme();
      setTheme(systemTheme);
      setIsDark(systemTheme === "dark");
    }
  }, []);

  // Aplica o tema ao documento
  useEffect(() => {
    if (!theme) return;
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    setIsDark(theme === "dark");
  }, [theme]);

  // Acompanha as mudanças do sistema operacional
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (!localStorage.getItem(THEME_KEY)) {
        const systemTheme = getSystemTheme();
        setTheme(systemTheme);
        setIsDark(systemTheme === "dark");
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleToggle = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  };

  if (!theme) return null;

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="switch"
        className="themeSwitcher-input"
        checked={isDark}
        onChange={handleToggle}
      />
      <label
        htmlFor="switch"
        className="themeSwitcher-label"
        title="Trocar tema"
        aria-label="Trocar tema"
      />
    </div >
  );
}

export default ThemeSwitcher;