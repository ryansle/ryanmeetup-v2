// Components
import { Layout } from "@/components/navigation";
import { Text, Divider } from "@/components/global";
import { ContactForm, FollowUs } from "@/components/contact";
import { Blurb } from "@/components/events";

// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ryan Meetup - Contact Us",
  description: "Get in contact with one of the Ryans here.",
  keywords: [
    "contact ryan",
    "contact ryan meetup",
    "ryan meetup email address",
    "official ryan business",
    "big and important ryan topics",
    "ryan",
    "ryan meetup",
  ],
  openGraph: {
    url: "https://ryanmeetup.com/contact",
    title: "Ryan Meetup - Contact Us",
    description: "Get in contact with one of the Ryans here.",
    siteName: "Ryan Meetup",
    images: [
      {
        url: "https://ryanmeetup.com/ryankickoff.png",
        width: 1600,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const ContactPage = async () => {
  return (
    <Layout>
      <Blurb
        fullHeadline="Contact the Ryans"
        smallHeadline="Contact the Ryans"
        tag="Contact"
      >
        <Text className="secondary text-xl mx-0 sm:mx-24 lg:mx-0">
          One of our Ryans will get back to you as soon as we can.
        </Text>
      </Blurb>

      <Divider margins="lg" />

      <div className="grid grid-cols-2 gap-8 xl:gap-20">
        <ContactForm />
        <FollowUs />
      </div>
    </Layout>
  );
};

export default ContactPage;
