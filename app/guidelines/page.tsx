// Types
import type { Metadata } from "next";

// Utilities
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Ryan Meetup - Guidelines",
  description: "Guidelines for starting your own chapter of the Ryan Meetup.",
  openGraph: {
    url: "https://ryanmeetup.com/guidelines",
    title: "Ryan Meetup - Guidelines",
    description: "Guidelines for starting your own chapter of the Ryan Meetup.",
    siteName: "Ryan Meetup",
    images: [
      {
        url: "https://ryanmeetup.com/ryankickoff.png",
        width: 1600,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const GuidelinesPageRedirect = () => {
  redirect(
    "https://docs.google.com/document/d/1DfDD3iyrQMUHTt4EzbfPytfOOh-de1vk9pHRqqM8obs/edit?tab=t.0",
  );
};

export default GuidelinesPageRedirect;
