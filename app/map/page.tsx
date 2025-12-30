// Components
import { Layout } from "@/components/navigation";
import { Mapbox, Info } from "@/components/map";

// Types
import type { Location } from "@/lib/types";
import type { Metadata } from "next";

// Utilities
import { fetchLocations } from "@/actions/fetchContent";
import { getMapFixtures } from "@/lib/test-fixtures/map";

export const metadata: Metadata = {
  title: "Ryan Meetup - Map",
  description: "Ryan Meetup around the world.",
  keywords: [
    "ryan meetup world map",
    "ryan meetup worldwide",
    "ryan meetup world",
    "ryan meetup us",
    "ryan meetup england",
    "ryan meetup germany",
    "ryan meetup canada",
    "ryan meetup australia",
    "ryan meetup america",
    "ryan meetup map",
    "ryan meetup locations",
    "ryan meetup cities",
  ],
  openGraph: {
    url: "https://ryanmeetup.com/map",
    title: "Ryan Meetup - Map",
    description: "Ryan Meetup around the world.",
    siteName: "Ryan Meetup",
    images: [
      {
        url: "https://ryanmeetup.com/map.png",
        width: 3360,
        height: 1350,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const MapPage = async () => {
  const locations =
    process.env.E2E_TESTS === "true"
      ? getMapFixtures()
      : await fetchLocations();

  return (
    <Layout fullscreen>
      <Mapbox locations={locations as unknown as Location[]} />
      <Info locations={locations as unknown as Location[]} />
    </Layout>
  );
};

export default MapPage;
