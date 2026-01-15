// Types
import type { Metadata } from "next";

// Utilities
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Ryan Meetup - WhatsApp",
  description: "Join the official Ryan Meetup WhatsApp group.",
  keywords: [
    "ryan meetup whatsapp",
    "ryan whatsapp",
    "ryan meetup group chat",
    "ryan meetup whatsapp group",
  ],
  openGraph: {
    url: "https://ryanmeetup.com/whatsapp",
    title: "Ryan Meetup - WhatsApp",
    description: "Join the official Ryan Meetup WhatsApp group.",
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

const WhatsAppRedirectPage = () => {
  redirect("https://chat.whatsapp.com/LeI37a2AlMk0OmMfhXPNvq");
};

export default WhatsAppRedirectPage;
