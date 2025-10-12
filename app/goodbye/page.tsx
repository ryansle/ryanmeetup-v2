// Components
import { Heading } from "@/components/global";

// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ryan Meetup - No Bryans Allowed!",
  description: "No Bryans allowed at the Ryan Meetup!",
  openGraph: {
    url: "https://ryanmeetup.com/goodbye",
    title: "Ryan Meetup - No Bryans Allowed!",
    description: "No Bryans allowed at the Ryan Meetup!",
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

const GoodbyePage = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center h-screen space-y-8 bg-white dark:bg-black">
      <div className="block space-y-20">
        <Heading className="text-5xl md:text-9xl" size="h1">
          Goodbye, Bryan.
        </Heading>

        <Heading className="text-4xl" size="h2">
          There are no Bryans allowed at the Ryan Meetup.
        </Heading>
      </div>
    </div>
  );
};

export default GoodbyePage;
