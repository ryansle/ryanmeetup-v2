// Components
import { Layout } from "@/components/navigation";
import { Blurb, Event } from "@/components/events";
import { Divider, Text } from "@/components/global";

// Types
import type { Metadata } from "next";
import type { RyanEvent } from "@/lib/types";

// Utilities
import { fetchEvents } from "@/actions/fetchContent";

export const metadata: Metadata = {
  title: "Ryan Meetup - RSVP",
  description: "RSVP to upcoming Ryan Meetup events.",
  keywords: [
    "ryan meetup rsvp",
    "ryan meetup tickets",
    "ryan meetup event registration",
    "ryan meetup signup",
  ],
  openGraph: {
    url: "https://ryanmeetup.com/rsvp",
    title: "Ryan Meetup - RSVP",
    description: "RSVP to upcoming Ryan Meetup events.",
    siteName: "Ryan Meetup",
    images: [
      {
        url: "https://ryanmeetup.com/logos/doubleheader.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const RSVPPage = async () => {
  const events = (await fetchEvents()) as RyanEvent[];

  const upcoming = events.filter(
    (event) => event.active && event.chapter?.includes("Main"),
  );

  return (
    <Layout>
      <Blurb
        fullHeadline="Join us in Philadelphia!"
        smallHeadline="Join us in Philadelphia!"
        tag="RSVP"
      >
        <Text className="secondary text-lg mb-6 xl:mx-32">
          We&apos;re taking this year&apos;s St. Ryan&apos;s Day celebration to Philadelphia! See you there, Ryan.
        </Text>
      </Blurb>

      <Divider />

      <div className="mx-auto w-full max-w-5xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {upcoming.map((event, index) => (
            <Event key={index} event={event} />
          ))}
        </div>

        {upcoming.length === 0 && (
          <div className="flex items-center justify-center">
            <code>[events not uploaded yet]</code>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default RSVPPage;
