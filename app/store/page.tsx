// Components
import { Layout } from "@/components/navigation";
import { Heading, Text, Divider, Pill, Card, Button } from "@/components/global";
import NextImage from "next/image";

// Types
import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Ryan Meetup - Store",
//   description: "Store highlights and merch drops from the Ryan Meetup shop.",
//   keywords: [
//     "ryan meetup merch",
//     "ryan meetup store",
//     "ryan meetup shirts",
//     "ryan meetup gear",
//     "ryan meetup drops",
//   ],
//   openGraph: {
//     url: "https://ryanmeetup.com/store",
//     title: "Ryan Meetup - Store",
//     description: "Store highlights and merch drops from the Ryan Meetup shop.",
//     siteName: "Ryan Meetup",
//     images: [
//       {
//         url: "https://ryanmeetup.com/meta/merch.png",
//         width: 2202,
//         height: 1282,
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
// };

const StorePage = () => {
  const highlights = [
    {
      title: "Apparel",
      description: "Tees, hoodies, and crewnecks built for the meetup.",
      image: "/meta/merch.png",
    },
    {
      title: "Membership Card",
      description: "Carry the Ryan Meetup legacy in your wallet.",
      image: "/cards.png",
    },
    {
      title: "Posters",
      description: "Limited-run event art from past meetups.",
      image: "/posters/ryanrave.png",
    },
  ];

  const drops = [
    {
      title: "Limited Drops",
      detail: "Small-batch runs tied to each major meetup moment.",
    },
    {
      title: "Etsy Fulfillment",
      detail: "All orders are handled through our Etsy storefront.",
    },
    {
      title: "Support the Meetup",
      detail: "Merch revenue helps fund local chapters and events.",
    },
  ];

  return (
    <Layout>
      <div className="space-y-12">
        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <Pill>Store</Pill>
            <Heading className="text-4xl title sm:text-5xl lg:text-6xl" size="h1">
              Store Highlights & Merch Drops
            </Heading>
            <Text className="text-lg text-black/70 dark:text-white/70">
              Explore the best of Ryan Meetup merch, from limited drops to
              staple gear. Every purchase powers future Ryan meetups.
            </Text>
            <div className="flex flex-wrap gap-3">
              <Button.Link
                href="https://ryanmeetup.etsy.com"
                variant="primary"
                size="md"
                fullWidth
                newTab
              >
                Shop the Etsy store
              </Button.Link>
              <Button.Link
                href="/newsletter"
                variant="secondary"
                size="md"
                fullWidth
                newTab={false}
              >
                Get drop alerts
              </Button.Link>
            </div>
            <Text className="text-sm uppercase tracking-[0.2em] text-black/70 dark:text-white/70">
              Orders are fulfilled through Etsy.
            </Text>
          </div>
          <Card
            variant="soft"
            size="lg"
            className="relative overflow-hidden border-black/10"
          >
            <div className="relative h-72 w-full sm:h-96">
              <NextImage
                src="/meta/merch.png"
                alt="Ryan Meetup merch preview"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 540px, 100vw"
              />
            </div>
          </Card>
        </section>

        <Divider />

        <section className="space-y-6">
          <div className="text-center">
            <Heading className="text-3xl title sm:text-4xl" size="h2">
              Highlights
            </Heading>
            <Text className="mt-2 text-base text-black/70 dark:text-white/70">
              A quick look at what&apos;s in the shop right now.
            </Text>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {highlights.map((item) => (
              <Card key={item.title} variant="soft" size="md" hover>
                <div className="relative h-52 w-full overflow-hidden rounded-2xl">
                  <NextImage
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <Heading className="text-xl title" size="h3">
                    {item.title}
                  </Heading>
                  <Text className="text-sm text-black/70 dark:text-white/70">
                    {item.description}
                  </Text>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Divider />

        <section className="grid gap-6 lg:grid-cols-3">
          {drops.map((item) => (
            <Card key={item.title} variant="soft" size="md">
              <Heading className="text-xl title" size="h3">
                {item.title}
              </Heading>
              <Text className="mt-2 text-sm text-black/70 dark:text-white/70">
                {item.detail}
              </Text>
            </Card>
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default StorePage;
