// Types
import type { Metadata } from "next";

// Utilities
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Ryan Meetup - Join",
  description: "Wanna meet other Ryans?",
  keywords: [
    "join ryan meetup",
    "ryan meetup rsvp",
    "ryan meetup signup",
    "ryan meetup tickets",
  ],
  openGraph: {
    url: "https://partiful.com/u/sJG4HpH0wS3ZA3YkzaL5",
    title: "Ryan Meetup - Join",
    description: "Wanna meet other Ryans?",
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

const JoinPageRedirect = () => {
  redirect("https://partiful.com/u/sJG4HpH0wS3ZA3YkzaL5");
};

export default JoinPageRedirect;
