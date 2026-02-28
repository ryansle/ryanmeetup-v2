import { Layout } from "@/components/navigation";
import { Blurb } from "@/components/events";
import { Text } from "@/components/global";
import { EventsListPager } from "@/components/events/EventsListPager";
import { fetchEvents } from "@/actions/fetchContent";
import { getTestEvents } from "@/lib/test-fixtures/events";
import type { RyanEvent } from "@/lib/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ryan Meetup - Upcoming Events",
  description: "See upcoming Ryan Meetups.",
  alternates: {
    canonical: "https://ryanmeetup.com/upcoming",
  },
  openGraph: {
    url: "https://ryanmeetup.com/upcoming",
    title: "Ryan Meetup - Upcoming Events",
    description: "See upcoming Ryan Meetups.",
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
  twitter: {
    card: "summary_large_image",
    title: "Ryan Meetup - Upcoming Events",
    description: "See upcoming Ryan Meetups.",
    images: ["https://ryanmeetup.com/group-photos/rockies.jpg"],
  },
};

const UpcomingPage = async ({
  searchParams,
}: {
  searchParams?: { fixture?: string };
}) => {
  const events =
    process.env.E2E_TESTS === "true"
      ? getTestEvents(searchParams?.fixture)
      : await fetchEvents();

  return (
    <Layout>
      <Blurb fullHeadline="Upcoming Events" tag="Upcoming">
        <Text className="secondary text-xl mb-6 xl:mx-40">
          Browse upcoming Ryan Meetups and join in on the fun.
        </Text>
      </Blurb>
      <EventsListPager
        events={events as RyanEvent[]}
        view="upcoming"
        perPageOptions={[5, 10, 25]}
        defaultPerPage={10}
        showPerPageSelector
        listTitle="Upcoming Events"
        ctaLabel="RSVP"
        sortOrder="asc"
        emptyStateVariant="table"
      />
    </Layout>
  );
};

export default UpcomingPage;
