import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { buildMetadata } from "../lib/seo";
import profile from "../data/profile";

export const metadata = buildMetadata({
  title: `${profile.name} — Portfolio`,
  description: profile.summary,
  url: "https://github.com/Nikolay-Davydov/Portfolio2026",
  image: "/images/placeholder-1.svg",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
