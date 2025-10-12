// Types
import type { Metadata } from "next";

// Utilities
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Ryan Meetup - RSVP",
  description: "RSVP to Rytoberfest II in New York, NY, on September 13th.",
  openGraph: {
    url: "https://ryanmeetup.com/rsvp",
    title: "Ryan Meetup - RSVP",
    description: "RSVP to Rytoberfest II in New York, NY, on September 13th.",
    siteName: "Ryan Meetup",
    images: [
      {
        url: "https://ryanmeetup.com/logos/rytoberfest.avif",
        width: 920,
        height: 581,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const RSVPPage = () => {
  redirect("https://partiful.com/e/dd0WtzSQ35uEIFxN3Pql");
};

export default RSVPPage;
