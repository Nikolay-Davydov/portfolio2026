"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import DarkBackground from "./DarkBackground";
import LightBackground from "./LightBackground";

export default function ThemeBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  // До монтирования на клиенте тема ещё не известна — ничего не рендерим,
  // чтобы избежать hydration mismatch (та же логика, что в ThemeToggle)
  if (!mounted) return null;

  if (resolvedTheme === "dark") {
    return <DarkBackground />;
  }

  return <LightBackground />;
}