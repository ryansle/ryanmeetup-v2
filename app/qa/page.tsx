// Types
import type { Metadata } from "next";

// Utilities
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Ryan Meetup - Q&A",
  description: "Documenting the shared history of the Ryan Meetup.",
  keywords: [
    "ryan meetup qa",
    "ryan meetup",
    "history of ryan meetup",
    "ryan meetup questions",
    "ryan meetup answers",
  ],
  openGraph: {
    url: "https://ryanmeetup.com/qa",
    title: "Ryan Meetup - Q&A",
    description: "Documenting the shared history of the Ryan Meetup..",
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

const QAPage = () => {
  redirect(
    "https://docs.google.com/forms/d/e/1FAIpQLScP5a5ynWxQU6f1G9hvprObZQSp9QtLs_97Uf82JQJYHj4L4Q/viewform?usp=dialog",
  );
};

export default QAPage;
