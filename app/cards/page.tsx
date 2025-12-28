// Components
import { Layout } from "@/components/navigation";
import NextImage from "next/image";
import { Backdrop, Heading, Text } from "@/components/global";
import { CardInfo } from "@/components/cards";
import NextLink from "next/link";

// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy Membership Card",
  description:
    "You've always been a member, and now you have the card to prove it.",
  openGraph: {
    url: "https://ryanmeetup.com/cards",
    title: "Buy Membership Card",
    description:
      "You've always been a member, and now you have the card to prove it.",
    siteName: "Ryan Meetup",
    images: [
      {
        url: "https://ryanmeetup.com/meta/cards.png",
        width: 4032,
        height: 3024,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const BuyCardsPageRedirect = () => {
  // redirect('https://buy.stripe.com/3cIcN4fTP7BS0kzbXJ2kw0a');

  return (
    <Layout fullscreen>
      <Backdrop imageSrc="/backdrop.png">
        <div className="hidden lg:grid grid-cols-12 gap-16 py-8 lg:px-32 2xl:px-56 3xl:px-[320px] 4xl:px-[500px]">
          <div className="col-span-12 xl:col-span-6 flex items-center flex-col justify-center">
            <div className="relative lg:h-[500px] w-full">
              <NextImage
                src="/cards.png"
                alt="Ryan Meetup Membership Card"
                className="flex justify-center"
                objectFit="contain"
                fill
              />
            </div>
            <Text className="mt-8 font-semibold">
              Shown: front / back of the membership card
            </Text>
          </div>

          <CardInfo />
        </div>

        <div className="block lg:hidden space-y-8">
          <NextImage
            src="/cards.png"
            alt="Ryan Meetup Membership Card"
            className="flex justify-center"
            height={1024}
            width={768}
          />

          <Text className="mt-8 font-semibold">
            Shown: front / back of the membership card
          </Text>

          <CardInfo />
        </div>
      </Backdrop>

      <section className="text-center py-4 border-t-2 border-gray-400 dark:border-gray-700 px-4 md:py-8 lg:px-32 xl:px-72 3xl:px-[350px] 4xl:px-[650px]">
        <Heading className="mb-6 text-4xl title">
          Need help with your order?
        </Heading>

        <Text className="text-lg secondary">
          <NextLink
            href="/contact"
            className="font-semibold underline underline-offset-2 text-blue-700 dark:text-blue-500 hover:cursor-pointer"
          >
            Get in touch
          </NextLink>{" "}
          with our team and we&apos;ll make things right.
        </Text>
      </section>
    </Layout>
  );
};

export default BuyCardsPageRedirect;
