// Components
import { Layout } from "@/components/navigation";
import { Divider, Text } from "@/components/global";
import { Blurb, EventsContainer } from "@/components/events";
import { FaRegNewspaper as News } from "react-icons/fa";
import { FaUserPlus as Join } from "react-icons/fa6";

// Types
import type { RyanEvent } from "@/lib/types";
import type { Metadata } from "next";

// Utilities
import { fetchEvents } from "@/actions/fetchContent";

export const metadata: Metadata = {
  title: "Ryan Meetup - All Events",
  description: "All Ryan Meetup events in one place.",
  keywords: [
    "ryan meetup events",
    "ryan meetup all events",
    "ryan meetup schedule",
    "ryan meetup calendar",
  ],
  openGraph: {
    url: "https://ryanmeetup.com/events/all",
    title: "Ryan Meetup - All Events",
    description: "All Ryan Meetup events in one place.",
    siteName: "Ryan Meetup",
    images: [
      {
        url: "https://ryanmeetup.com/group-photos/rockies.jpg",
        width: 3490,
        height: 2328,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const AllEventsPage = async () => {
  const events = await fetchEvents();

  console.log(events);

  return (
    <Layout>
      <Blurb
        fullHeadline="All Ryan Meetups"
        smallHeadline="All Events"
        tag="Events"
        href="/newsletter"
        icon={<News />}
        hrefText="Get event updates"
        secondaryHref="/join"
        secondaryIcon={<Join />}
        secondaryHrefText="Join the Ryan Meetup"
      >
        <Text className="secondary text-xl mb-6 xl:mx-32">
          Everything we&apos;ve got — main events and chapter meetups in one
          place.
        </Text>
      </Blurb>

      <Divider />

      <EventsContainer
        events={events as unknown as RyanEvent[]}
        showChapters={false}
        displayMode="flat"
      />
    </Layout>
  );
};

export default AllEventsPage;
