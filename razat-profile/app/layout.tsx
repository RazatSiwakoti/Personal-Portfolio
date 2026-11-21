// layout.tsx: wraps every page of the site (navbar, fonts, page title)
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Google fonts, loaded by Next.js
import "./globals.css";
import Navbar from "@/components/Navbar";

// Main font for normal text
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Monospace font for code or terminal-style text
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Text shown on the browser tab and in Google results
export const metadata: Metadata = {
  title: "Razat Siwakoti | Software & AI Engineer",
};

//Prevent Theme toggle when site loads
const themeScript = `
  (function () {
    try {
      var saved = localStorage.getItem("theme");
      var systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (saved === "dark" || (!saved && systemDark)) {
        document.documentElement.classList.add("dark");
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      {/* font-sans applies the Geist font to the whole site */}
      <body className="flex min-h-full flex-col font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
