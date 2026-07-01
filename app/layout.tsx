import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { buildMetadata } from "../lib/seo";
import { Space_Grotesk, Geist } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeBackground from "../components/ThemeBackground";
import profile from "../data/profile";


const heading = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
});

const body = Geist({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
});

export const metadata = buildMetadata({
  title: `${profile.name} — Portfolio`,
  description: profile.summary,
  url: "https://github.com/Nikolay-Davydov/Portfolio2026",
  image: "/images/placeholder-1.svg",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${heading.variable} ${body.variable}`}>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>          
          <ThemeBackground />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
