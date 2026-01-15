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
import { getTestEvents } from "@/lib/test-fixtures/events";

export const metadata: Metadata = {
  title: "Ryan Meetup - Events",
  description: "Keep up to date with Ryan Meetups near you!",
  keywords: [
    "when is the next ryan meetup?",
    "ryan meetup",
    "ryan meetup nyc",
    "ryan meetup new york",
    "ryan meetup new york city",
    "ryan meetup near me",
    "ryan meetup los angeles",
    "ryan rendezvous",
    "ryan roundup",
    "ryan kickoff",
    "ryan rodeo",
    "ryan roundtable",
    "ryan roadtrip",
    "ryan rally",
    "ryan rave",
    "ryan run",
    "ryan new york city",
    "ryan meet up",
    "ryan meetup new york city",
    "ryan reunion",
    "ryan syndicate",
    "ryan retreat",
    "ryan relay",
    "st ryans day",
    "ryami vice",
    "150 deadpools and wolverine",
    "ryans game show",
    "rytoberfest",
    "ryancon",
    "last ryan standing",
    "ryan royale",
    "ryan relay",
    "society of ryans",
    "ryan red carpet",
    "ryan meetup schedule",
    "ryan meetup calendar",
    "ryan meetup upcoming events",
  ],
  openGraph: {
    url: "https://ryanmeetup.com/events",
    title: "Ryan Meetup - Events",
    description: "Keep up to date with Ryan Meetups near you!",
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

const EventsPage = async ({
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
      <Blurb
        fullHeadline="Join the Ryan Meetup"
        smallHeadline="Our Events"
        tag="Events"
        href="/newsletter"
        icon={<News />}
        hrefText="Get event updates"
        secondaryHref="/join"
        secondaryIcon={<Join />}
        secondaryHrefText="Join the Ryan Meetup"
      >
        <Text className="secondary text-xl mb-6 xl:mx-32">
          <span className="hidden md:inline-block">
            It&apos;s never too late to join the Ryan Meetup.
          </span>
          <span>
            {" "}
            Sign up for our newsletter below to stay up-to-date with our
            events.{" "}
          </span>

          <span className="hidden md:inline-block">
            And remember - No Bryans allowed.
          </span>
        </Text>
      </Blurb>

      <Divider />

      <EventsContainer events={events as unknown as RyanEvent[]} />
    </Layout>
  );
};

export default EventsPage;
