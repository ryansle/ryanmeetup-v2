// Components
import { Layout } from "@/components/navigation";
import { Heading, Text, Divider, Pill } from "@/components/global";
import { SponsorSection, PartnershipPerks } from "@/components/sponsors";

// Types
import { Sponsor } from "@/lib/types";
import { Metadata } from "next";

// Utilities
import { fetchSponsors } from "@/actions/fetchContent";

export async function generateMetadata(): Promise<Metadata> {
  const sponsors = await fetchSponsors();

  return {
    title: `Ryan Meetup - Sponsors`,
    description:
      "Ryan Meetups wouldn't be possible without our amazing sponsors. Explore the organizations supporting our events and learn how your brand can join the movement.",
    keywords: [
      "ryan meetup",
      ...sponsors.map(
        (sponsor) => (sponsor.name as string)?.toLowerCase() || "",
      ),
      "ryan meetup sponsors",
      "ryan meetup sponsorship",
      "ryan meetup partners",
    ],
    openGraph: {
      url: "https://ryanmeetup.com/sponsors",
      title: `Ryan Meetup - Sponsors`,
      description:
        "Ryan Meetups wouldn't be possible without our amazing sponsors. Explore the organizations supporting our events and learn how your brand can join the movement.",
      siteName: "Ryan Meetup",
      images: [
        {
          url: "https://ryanmeetup.com/meta/sponsors.png",
          width: 2056,
          height: 1163,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

const SponsorsPage = async () => {
  const sponsors = await fetchSponsors();

  const goldSponsors = sponsors.filter(
    (sponsor) => (sponsor.eventsSponsored as number) >= 3,
  );
  const silverSponsors = sponsors.filter(
    (sponsor) => (sponsor.eventsSponsored as number) === 2,
  );
  const bronzeSponsors = sponsors.filter(
    (sponsor) => (sponsor.eventsSponsored as number) === 1,
  );
  return (
    <Layout className="space-y-12">
      <section className="space-y-6 text-center">
        <div className="flex justify-center">
          <Pill>Sponsors</Pill>
        </div>
        <Heading className="text-4xl title sm:text-5xl lg:text-6xl" size="h1">
          Ryan Meetup Sponsors
        </Heading>
        <Text className="mx-auto text-lg text-black/70 dark:text-white/70">
          Thanks to our incredible sponsors, Ryan Meetup has grown across the
          country. Want to help power the next one? We&apos;d love to partner with
          you.
        </Text>
        <PartnershipPerks />
      </section>

      <Divider margins="xl" />

      <SponsorSection tier="Founding" sponsors={goldSponsors as Sponsor[]} />

      <Divider margins="xl" />

      <SponsorSection tier="Core" sponsors={silverSponsors as Sponsor[]} />

      <Divider margins="xl" />

      <SponsorSection
        tier="Contributing"
        sponsors={bronzeSponsors as Sponsor[]}
      />
    </Layout>
  );
};

export default SponsorsPage;
