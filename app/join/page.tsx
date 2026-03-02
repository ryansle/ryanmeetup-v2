// Types
import { buildPageMetadata } from "@/utils/metadata";

// Utilities
import { redirect } from "next/navigation";

export const metadata = buildPageMetadata({
  title: "Ryan Meetup - Join",
  description: "Wanna meet other Ryans?",
  canonical: "https://ryanmeetup.com/join",
  image: {
    url: "https://ryanmeetup.com/group-photos/ryanroundup.png",
    width: 3284,
    height: 2189,
  },
  keywords: [
    "join ryan meetup",
    "ryan meetup rsvp",
    "ryan meetup signup",
    "ryan meetup tickets",
  ],
});

const JoinPageRedirect = () => {
  redirect("https://partiful.com/u/sJG4HpH0wS3ZA3YkzaL5");
};

export default JoinPageRedirect;
