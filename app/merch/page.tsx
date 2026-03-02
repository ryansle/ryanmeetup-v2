// Types
import { buildPageMetadata } from "@/utils/metadata";

// Utilities
import { redirect } from "next/navigation";

export const metadata = buildPageMetadata({
  title: "Ryan Meetup - Merch",
  description: "Buy official Ryan Meetup merchandise!",
  canonical: "https://ryanmeetup.com/merch",
  image: {
    url: "https://ryanmeetup.com/meta/merch.png",
    width: 2202,
    height: 1282,
  },
  keywords: [
    "ryan meetup merch",
    "ryan meetup store",
    "ryan meetup shirts",
    "ryan meetup gear",
  ],
});

const MerchPageRedirect = () => {
  redirect("https://ryanmeetup.etsy.com");
};

export default MerchPageRedirect;
