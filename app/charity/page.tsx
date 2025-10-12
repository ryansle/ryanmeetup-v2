// Components
import { Layout } from "@/components/navigation";
import { Divider, Heading } from "@/components/global";
import { TotalCount, Donation } from "@/components/charity";

// Types
import { Charity } from "@/lib/types";
import type { Metadata } from "next";

// Utilities
import { fetchDonations } from "@/actions/fetchContent";

export const metadata: Metadata = {
  title: "Ryan Meetup - Charity",
  description:
    "Ryan Meetup has raised money for various charitable organizations over the years.",
  keywords: [
   "Ryan meetup charity",
   "ryan meetup donations",
   "ryan callahan foundation",
    "charitable organizations",
    "fundraising",
    "non-profits",
    "ryan meetup donate",
    "ryan meetup fundraising",
    "ryan meetup non-profit",
  ],
  openGraph: {
    url: "https://ryanmeetup.com/charity",
    title: "Ryan Meetup - Charity",
    description:
      "Ryan Meetup has raised money for various charitable organizations over the years.",
    siteName: "Ryan Meetup - Charity",
    images: [
      {
        url: "https://ryanmeetup.com/charity.png",
        width: 2056,
        height: 1162,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const CharityPage = async () => {
  const donations = await fetchDonations();

  // const colors = ["text-sky-400", "text-amber-400",];

  return (
    <Layout>
      <TotalCount donations={donations as Charity[]} />

      <Divider />

      <Heading size="h1" className="text-4xl mb-8 text-center title">
        Our fundraising partners
      </Heading>

      <section className="px-6 pb-20 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {donations.map((donation) => (
          <Donation
            key={donation.title as string}
            donation={donation as Charity}
            // color={colors[Math.floor(Math.random() * colors.length)]}
            color="text-amber-400"
          />
        ))}
      </section>
    </Layout>
  );
};

export default CharityPage;
