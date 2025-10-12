// Components
import { BryanChecker } from "@/components/global";
import { ThemeProvider } from "next-themes";

// Types
import type { Metadata } from "next";

// Utilities
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://v2.ryanmeetup.com"),
  title: "Ryan Meetup",
  description: "Wanna meet other Ryans? Join the Ryan Meetup!",
  keywords: [
    "ryan gathering",
    "ryan meetup",
    "ryan meet up",
    "ryan convention",
    "ryan event",
    "ryan society",
    "gathering of the ryans",
    "council of ryans",
    "ryan association",
    "ryan club",
    "ryan social club",
    "ryancon",
    "network of ryans",
    "ryan network",
    "ryan reunion",
    "ryan's game show",
    "last ryan standing",
    "ryan roundup",
    "ryan rendezvous",
    "st ryans day",
    "ryan rave",
    "rytoberfest",
    "ryan retreat",
    "ryan resort",
    "ryans near me",
    "ryan events near me",
    "ryan rose",
    "ryan le",
    "ryan cousins",
    "ryan vesler",
    "ryan reynolds",
    "ryan gosling",
    "ryan seacrest",
    "ryan stiles",
    "ryan hailey",
    "ryan cunningham",
    "ryans meeting up",
    "ryan party",
  ],
  openGraph: {
    url: "https://ryanmeetup.com",
    title: "Ryan Meetup",
    description: "Wanna meet other Ryans? Join the Ryan Meetup!",
    siteName: "Ryan Meetup",
    images: [
      {
        url: "https://ryanmeetup.com/group-photos/ryanroundup.png",
        width: 3284,
        height: 2189,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <BryanChecker />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
