// Types
import { buildPageMetadata } from "@/utils/metadata";

// Utilities
import { redirect } from "next/navigation";

export const metadata = buildPageMetadata({
  title: "Ryan Meetup - Q&A",
  description: "Documenting the shared history of the Ryan Meetup.",
  canonical: "https://ryanmeetup.com/qa",
  image: {
    url: "https://ryanmeetup.com/group-photos/ryankickoff.png",
    width: 1600,
    height: 800,
  },
  keywords: [
    "ryan meetup qa",
    "ryan meetup",
    "history of ryan meetup",
    "ryan meetup questions",
    "ryan meetup answers",
  ],
});

const QAPage = () => {
  redirect(
    "https://docs.google.com/forms/d/e/1FAIpQLScP5a5ynWxQU6f1G9hvprObZQSp9QtLs_97Uf82JQJYHj4L4Q/viewform?usp=dialog",
  );
};

export default QAPage;
