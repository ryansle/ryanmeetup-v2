// Components
import { Layout } from "@/components/navigation";
import { Heading, Text, Divider, Pill, Card, Button } from "@/components/global";
import { BiMailSend as Send } from "react-icons/bi";
import {
  FaBullhorn as Megaphone,
  FaHandshake as Handshake,
  FaChartLine as Growth,
  FaUsers as Community,
  FaMicrophoneAlt as Mic,
  FaMapMarkedAlt as Footprint,
} from "react-icons/fa";
import { SponsorSection } from "@/components/sponsors";

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
        <Card
          variant="soft"
          size="md"
          className="mx-auto grid w-full gap-4 text-left sm:grid-cols-2 lg:grid-cols-3"
        >
          <div className="sm:col-span-3">
            <Text className="text-xs font-semibold uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
              Partnership perks
            </Text>
          </div>
          {[
            {
              icon: <Megaphone className="h-4 w-4" />,
              text: "Brand visibility at unforgettable events.",
            },
            {
              icon: <Footprint className="h-4 w-4" />,
              text: "Local activations that connect with Ryans.",
            },
            {
              icon: <Community className="h-4 w-4" />,
              text: "Community goodwill with a viral movement.",
            },
            {
              icon: <Handshake className="h-4 w-4" />,
              text: "Partnered storytelling across press and social.",
            },
            {
              icon: <Mic className="h-4 w-4" />,
              text: "On-site shoutouts and event integrations.",
            },
            {
              icon: <Growth className="h-4 w-4" />,
              text: "Audience growth through regional momentum.",
            },
          ].map((item) => (
            <Card key={item.text} variant="solid" size="sm">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-black text-white dark:border-white/10 dark:bg-white dark:text-black">
                  {item.icon}
                </span>
                <Text className="text-sm text-black/70 dark:text-white/70">
                  {item.text}
                </Text>
              </div>
            </Card>
          ))}
        </Card>
        <div className="flex justify-center">
          <Button.Link
            href="/contact"
            leftIcon={<Send className="h-4 w-4" />}
            variant="primary"
            size="md"
            fullWidth
            className="max-w-3xl"
            newTab={false}
          >
            Partner with us
          </Button.Link>
        </div>
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
