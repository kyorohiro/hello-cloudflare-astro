import React, { useEffect, useState } from "react";
type ThemeName = "mint" | "amber" | "ocean";
const THEME_COLOR: Record<ThemeName, string> = {
  mint:  "oklch(70% 0.17 155)",
  amber: "oklch(78% 0.20  70)",
  ocean: "oklch(68% 0.19 220)",
};

function getStoredTheme(): "light" | "dark" | null {
  try { return (localStorage.getItem("theme") as any) ?? null; } catch { return null; }
}
const wantsDarkByOS = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-color-scheme: dark)").matches;

export default function ThemePanel() {
  const [isDark, setIsDark] = useState(false);
  const [theme, setTheme] = useState<ThemeName>("mint");

  useEffect(() => {
    const stored = getStoredTheme();
    const dark = stored ? stored === "dark" : wantsDarkByOS();
    setIsDark(dark);
  }, []);

  // <html class="dark"> を更新
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    try { localStorage.setItem("theme", isDark ? "dark" : "light"); } catch {}
  }, [isDark]);

  // <html data-theme="..."> を更新（★ ここが効く）
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.setProperty("--color-brand", THEME_COLOR[theme]);
    // デバッグ: 現在の --color-brand を確認
    const v = getComputedStyle(document.documentElement).getPropertyValue("--color-brand").trim();
    console.log("theme =", theme, "brand =", v);
  }, [theme]);

  return (
    <div className="min-h-dvh bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased p-6"> {/* style={{ ["--color-brand" as any]: THEME_COLOR[theme] }} -->*/}
      <main className="mx-auto max-w-screen-lg space-y-6">
        <header className="flex items-center gap-2">
          <button
            className="rounded-lg border px-3 py-1.5 text-sm"
            onClick={() => setIsDark(d => !d)}
            aria-pressed={isDark}
          >
            🌓 Toggle
          </button>

          <div className="ml-auto flex items-center gap-2">
            <span className="text-sm opacity-70">Theme:</span>
            {(["mint","amber","ocean"] as ThemeName[]).map(t => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className={`rounded-md border px-2 py-1 text-xs ${
                  theme === t ? "bg-slate-200 dark:bg-slate-800" : ""
                }`}
                aria-pressed={theme === t}
              >
                {t}
              </button>
            ))}
          </div>
        </header>

        <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Theming</h2>
          <div className="mt-4 flex gap-2">
            <button className="rounded-lg px-3 py-2 text-sm font-medium text-white bg-brand hover:bg-brand/90">
              Primary
            </button>
            <span className="rounded-md px-2 py-1 text-xs bg-brand/15 text-brand border border-brand/20">
              badge
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
