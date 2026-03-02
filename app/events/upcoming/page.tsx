// Components
import { Layout } from "@/components/navigation";
import { Blurb, Breadcrumbs, Divider, Text } from "@/components/global";
import { EventsListPager } from "@/components/events/EventsListPager";

// Utilities
import { fetchEvents } from "@/actions/fetchContent";
import { getTestEvents } from "@/lib/test-fixtures/events";
import type { RyanEvent } from "@/lib/types";
import { buildPageMetadata } from "@/utils/metadata";
import { getUpcomingEventsBreadcrumbs } from "@/utils/breadcrumbs";

export const metadata = buildPageMetadata({
  title: "Ryan Meetup - Upcoming Events",
  description: "See upcoming Ryan Meetups.",
  canonical: "https://ryanmeetup.com/events/upcoming",
  image: {
    url: "https://ryanmeetup.com/group-photos/rockies.jpg",
    width: 3490,
    height: 2328,
  },
});

const UpcomingPage = async ({
  searchParams,
}: {
  searchParams?: { fixture?: string };
}) => {
  const events =
    process.env.E2E_TESTS === "true"
      ? getTestEvents(searchParams?.fixture)
      : await fetchEvents();

  const breadcrumbs = getUpcomingEventsBreadcrumbs();

  return (
    <Layout>
      <Blurb fullHeadline="Upcoming Events" tag="Coming Soon">
        <Text className="secondary text-xl mb-6 xl:mx-40">
          Browse upcoming Ryan Meetups and join in on the fun.
        </Text>
      </Blurb>

      <Divider />

      <EventsListPager
        events={events as RyanEvent[]}
        view="upcoming"
        perPageOptions={[5, 10, 25]}
        defaultPerPage={10}
        showPerPageSelector
        breadcrumbNode={
          <Breadcrumbs className="flex" crumbs={breadcrumbs} />
        }
        listTitle="Upcoming Events"
        ctaLabel="RSVP"
        sortOrder="asc"
        emptyStateVariant="table"
      />
    </Layout>
  );
};

export default UpcomingPage;
