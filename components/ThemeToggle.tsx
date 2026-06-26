"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null;

  const isLight = theme === "light";

  return (
    <button
      onClick={() => setTheme(isLight ? "dark" : "light")}
      aria-label="Toggle theme"
      className={styles.toggleBtn}
    >
      <span
        className={styles.knob}
        style={{ transform: isLight ? "translateX(24px)" : "translateX(0)" }}
      >
        {isLight ? (
          <MdLightMode size={14} color="var(--royal)" />
        ) : (
          <MdDarkMode size={14} color="var(--royal)" />
        )}
      </span>
    </button>
  );
}
