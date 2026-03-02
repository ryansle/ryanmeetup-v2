// Types
import { buildPageMetadata } from "@/utils/metadata";

// Utilities
import { redirect } from "next/navigation";

export const metadata = buildPageMetadata({
  title: "Ryan Meetup - WhatsApp",
  description: "Join the official Ryan Meetup WhatsApp group.",
  canonical: "https://ryanmeetup.com/whatsapp",
  image: {
    url: "https://ryanmeetup.com/group-photos/ryankickoff.png",
    width: 1600,
    height: 800,
  },
  keywords: [
    "ryan meetup whatsapp",
    "ryan whatsapp",
    "ryan meetup group chat",
    "ryan meetup whatsapp group",
  ],
});

const WhatsAppRedirectPage = () => {
  redirect("https://chat.whatsapp.com/LeI37a2AlMk0OmMfhXPNvq");
};

export default WhatsAppRedirectPage;
