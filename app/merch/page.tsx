// Types
import type { Metadata } from "next";

// Utilities
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Ryan Meetup - Merch",
  description: "Buy official Ryan Meetup merchandise!",
  keywords: [
    "ryan meetup merch",
    "ryan meetup store",
    "ryan meetup shirts",
    "ryan meetup gear",
  ],
  openGraph: {
    url: "https://ryanmeetup.etsy.com",
    title: "Ryan Meetup - Merch",
    description: "Buy official Ryan Meetup merchandise!",
    siteName: "Ryan Meetup",
    images: [
      {
        url: "https://ryanmeetup.com/meta/merch.png",
        width: 2202,
        height: 1282,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const MerchPageRedirect = () => {
  redirect("https://ryanmeetup.etsy.com");
};

export default MerchPageRedirect;
