// Components
import { Layout } from "@/components/navigation";
import { Divider, Text } from "@/components/global";
import { PosterContainer } from "@/components/flyers";
import { Blurb } from "@/components/events";

// Types
import type { Metadata } from "next";

// Utilities
import { fetchFlyers } from "@/actions/fetchContent";
import { EventFlyer, Flyer } from "@/lib/types";

export const metadata: Metadata = {
  title: "Ryan Meetup - Flyers",
  description:
    "Download our official Ryan Meetup flyers here and help bring the Ryan Meetup to your city!",
  keywords: [
    "ryan meetup",
    "ryan meetup posters",
    "ryan meetup flyers",
    "is your name ryan",
    "wanna meet other ryans",
    "join the ryan meetup",
    "ryan meet up",
    "first name must be ryan",
    "no bryans allowed",
    "tell them to join the ryan meetup",
    "we want you to join the ryan meetup",
    "wanna change your name to ryan",
    "no brians allowed",
    "do you know a ryan",
    "meet other ryans",
    "absolutely no bryans",
    "ryan meetup flyer download",
    "ryan meetup poster download",
    "ryan meetup printable flyer",
  ],
  openGraph: {
    url: "https://ryanmeetup.com/flyers",
    title: "Ryan Meetup - Flyers",
    description:
      "Download our official Ryan Meetup flyers here and help bring the Ryan Meetup to your city!",
    siteName: "Ryan Meetup",
    images: [
      {
        url: "https://ryanmeetup.com/group-photos/ryankickoff.png",
        width: 1600,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const flyers: Flyer[] = [
  { title: "OG Ryan Meetup Poster", src: "/posters/ogposter.png" },
  { title: "Variant Poster", src: "/posters/isyournameryan.png" },
  { title: "Calling all Ryans Poster", src: "/posters/CallingAllRyans.png" },
  { title: "Uncle Sam Poster", src: "/posters/unclesam.png" },
  { title: "Know a Ryan Poster", src: "/posters/knowaryan.png" },
];

const FlyersPage = async () => {
  const eventFlyers = await fetchFlyers();

  return (
    <Layout>
      <Blurb
        fullHeadline="Ryan Meetup Flyers"
        smallHeadline="Ryan Meetup Flyers"
        tag="Flyers"
      >
        <Text className="secondary text-xl mx-0 sm:mx-24 lg:mx-0">
          Interested in hanging up Ryan Meetup flyers in your city? Download our
          flyers here!
        </Text>
      </Blurb>
      <PosterContainer
        title="Flyers"
        flyers={flyers}
        variant="normal"
        download
        description="Interested in hanging up Ryan Meetup flyers in your city? Download our flyers here!"
      />

      <Divider margins="xl" />

      <PosterContainer
        title="Event Flyers"
        flyers={eventFlyers as unknown as EventFlyer[]}
        variant="event"
        description="Posters from previous events."
      />
    </Layout>
  );
};

export default FlyersPage;
