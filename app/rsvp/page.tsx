// Types
import type { Metadata } from "next";

// Utilities
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Ryan Meetup - RSVP",
  description: "RSVP to Ryans Own Manhattan New York, NY, on December 13th.",
  openGraph: {
    url: "https://ryanmeetup.com/rsvp",
    title: "Ryan Meetup - RSVP",
    description: "RSVP to Ryans Own Manhattan in New York, NY, on December 13th.",
    siteName: "Ryan Meetup",
    images: [
      {
        url: "https://ryanmeetup.com/logos/owningman.png",
        width: 2159,
        height: 1201,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const RSVPPage = () => {
  redirect("https://partiful.com/e/5YxUmCHOlgP36YQIhfes");
};

export default RSVPPage;
