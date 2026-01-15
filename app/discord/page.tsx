// Types
import type { Metadata } from "next";

// Utilities
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Ryan Meetup - Discord",
  description: "Join the Ryan Meetup Discord server!",
  keywords: [
    "ryan meetup discord",
    "ryan meetup chat",
    "ryan meetup community",
    "ryan discord server",
  ],
  openGraph: {
    url: "https://ryanmeetup.com/discord",
    title: "Ryan Meetup - Discord",
    description: "Join the Ryan Meetup Discord server!",
    siteName: "Ryan Meetup",
    images: [
      {
        url: "https://ryanmeetup.com/group-photos/ryankickoff.png",
        width: 1600,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const DiscordPageRedirect = () => {
  redirect("https://discord.gg/8rPPQMtZCp");
};

export default DiscordPageRedirect;
