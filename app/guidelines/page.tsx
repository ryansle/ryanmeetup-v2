// Types
import { buildPageMetadata } from "@/utils/metadata";

// Utilities
import { redirect } from "next/navigation";

export const metadata = buildPageMetadata({
  title: "Ryan Meetup - Guidelines",
  description: "Guidelines for starting your own chapter of the Ryan Meetup.",
  canonical: "https://ryanmeetup.com/guidelines",
  image: {
    url: "https://ryanmeetup.com/group-photos/ryankickoff.png",
    width: 1600,
    height: 800,
  },
  keywords: [
    "ryan meetup guidelines",
    "ryan meetup chapter guide",
    "ryan meetup rules",
    "start a ryan meetup chapter",
  ],
});

const GuidelinesPageRedirect = () => {
  redirect(
    "https://docs.google.com/document/d/1DfDD3iyrQMUHTt4EzbfPytfOOh-de1vk9pHRqqM8obs/edit?tab=t.0",
  );
};

export default GuidelinesPageRedirect;
