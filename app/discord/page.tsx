// Types
import { buildPageMetadata } from "@/utils/metadata";

// Utilities
import { redirect } from "next/navigation";

export const metadata = buildPageMetadata({
  title: "Ryan Meetup - Discord",
  description: "Join the Ryan Meetup Discord server!",
  canonical: "https://ryanmeetup.com/discord",
  image: {
    url: "https://ryanmeetup.com/group-photos/ryankickoff.png",
    width: 1600,
    height: 800,
  },
  keywords: [
    "ryan meetup discord",
    "ryan meetup chat",
    "ryan meetup community",
    "ryan discord server",
  ],
});

const DiscordPageRedirect = () => {
  redirect("https://discord.gg/8rPPQMtZCp");
};

export default DiscordPageRedirect;
