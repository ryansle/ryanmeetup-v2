// Components
import { Layout } from "@/components/navigation";
import { AnchorNav, Divider } from "@/components/global";
import {
  NameChangeHero,
  RegionSection,
  US_STATES,
  CANADA_PROVINCES,
} from "@/components/name-change";
import { FaCanadianMapleLeaf, FaFlagUsa } from "react-icons/fa6";

// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ryan Meetup - Name Change",
  description:
    "Download name change paperwork by state. All 50 states in one place.",
  openGraph: {
    url: "https://ryanmeetup.com/name-change",
    title: "Ryan Meetup - Name Change",
    description:
      "Download name change paperwork by state. All 50 states in one place.",
    siteName: "Ryan Meetup",
    images: [
      {
        url: "https://ryanmeetup.com/meta/name-change.png",
        width: 3360,
        height: 1854,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

// TODO: publicize page on the website, under 'Community' section
const NameChangePage = () => {
  const anchorIconStyle = "h-5 w-5";
  const anchors = [
    {
      icon: <FaFlagUsa className={anchorIconStyle} />,
      href: "#united-states",
      tooltip: "United States",
    },
    {
      icon: <FaCanadianMapleLeaf className={anchorIconStyle} />,
      href: "#canada",
      tooltip: "Canada",
    },
  ];

  return (
    <Layout fullscreen>
      <div className="relative">
        <AnchorNav items={anchors} />
        <section className="px-4 pb-20 pt-8 lg:px-32 2xl:px-56 3xl:px-[350px] 4xl:px-[500px]">
          <NameChangeHero />

          <Divider margins="xl" />

          <RegionSection
            id="united-states"
            title="United States"
            subtitle="All 50 states"
            items={US_STATES}
          />

          <Divider margins="xl" />

          <RegionSection
            id="canada"
            title="Canada"
            subtitle="10 provinces"
            items={CANADA_PROVINCES}
          />
        </section>
      </div>
    </Layout>
  );
};

export default NameChangePage;
