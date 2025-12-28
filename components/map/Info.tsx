// Components
import { Heading, Text, Card, Pill } from "@/components/global";
import NextLink from "next/link";
import { getCountryFromLocation } from "@/utils/stats";

// Types
import { Location } from "@/lib/types";

type InfoProps = {
  locations: Location[];
};

const Info = (props: InfoProps) => {
  const { locations } = props;

  const uniqueCountries = new Set<string>();
  const uniqueCities = new Set<string>();
  const locationTypeCounts: Record<string, number> = {
    "Event Location": 0,
    "Ryan Hub": 0,
    "Ryan-Named Business": 0,
    "Ryan-Owned Business": 0,
    Chapter: 0,
  };

  locations?.forEach((location) => {
    const cityName =
      location.city ?? location.locationName.split(",")[0].trim();
    if (cityName) {
      uniqueCities.add(cityName);
    }

    if (locationTypeCounts[location.locationType] !== undefined) {
      locationTypeCounts[location.locationType] += 1;
    }

    const country = getCountryFromLocation(location);
    if (country) {
      uniqueCountries.add(country);
    }
  });

  const stats = [
    { label: "Locations", value: locations.length },
    { label: "Cities", value: uniqueCities.size },
    { label: "Countries", value: uniqueCountries.size },
    { label: "Events", value: locationTypeCounts["Event Location"] },
    { label: "Chapters", value: locationTypeCounts["Chapter"] },
    {
      label: "Businesses",
      value:
        locationTypeCounts["Ryan-Named Business"] +
        locationTypeCounts["Ryan-Owned Business"],
    },
  ];

  return (
    <section className="px-4 pb-12 pt-6">
      <Card variant="soft" size="lg" className="mx-auto max-w-5xl text-center">
        <div className="mb-4 flex justify-center">
          <Pill>Map</Pill>
        </div>
        <Heading className="text-3xl title sm:text-4xl" size="h2">
          Ryan Meetup Worldwide
        </Heading>
        <Text className="mt-3 text-lg text-black/70 dark:text-white/70">
          Our growing network of Ryans spans across{" "}
          <span className="font-semibold text-blue-700 dark:text-blue-500">
            {uniqueCountries.size} countries
          </span>{" "}
          and{" "}
          <span className="font-semibold text-blue-700 dark:text-blue-500">
            {uniqueCities.size} cities
          </span>{" "}
          worldwide.
        </Text>
        <Text className="mt-3 text-base text-black/60 dark:text-white/60">
          Help us expand as we gear up for RyanCon, the soon-to-be largest same
          name gathering in history.
        </Text>

        <div className="mt-6 grid gap-3 grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.label} variant="solid" size="sm">
              <Heading className="text-3xl font-cooper" size="h3">
                {stat.value}
              </Heading>
              <Text className="text-xs uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
                {stat.label}
              </Text>
            </Card>
          ))}
        </div>

        <Heading className="mt-8 text-2xl title sm:text-3xl" size="h3">
          Don&apos;t see your city?
        </Heading>
        <Text className="mt-3 text-base text-black/70 dark:text-white/70">
          <NextLink
            href="/contact"
            className="font-semibold underline underline-offset-2 text-blue-700 dark:text-blue-500 hover:cursor-pointer"
          >
            Contact Ryan
          </NextLink>{" "}
          to have your city added to the map.
        </Text>
      </Card>
    </section>
  );
};

export { Info };
