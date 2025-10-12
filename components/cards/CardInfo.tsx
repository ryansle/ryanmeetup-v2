"use client";

// Components
import { Heading, Text, Button } from "@/components/global";
import { FaDollarSign as Dollar } from "react-icons/fa";

const CardInfo = () => {
  return (
    <div className="col-span-12 xl:col-span-6 text-black h-full border border-gray-400 bg-white dark:bg-black rounded-xl w-full p-4 lg:p-8 text-left dark:border-gray-700">
      <Heading
        className="text-2xl text-center title lg:text-left lg:text-3xl font-semibold mb-4"
        size="h1"
      >
        Ryan Meetup Membership Card
      </Heading>

      <section className="space-y-4 text-base secondary lg:text-lg">
        <Text>
          You&apos;ve always been a member, and now you can have the card to
          prove it.
        </Text>

        <Text>
          Each purchase includes a customized anodized aluminum card that was
          designed by a Ryan and produced by a Ryan—just for you, Ryan.
        </Text>

        <Text>
          But it&apos;s more than just another flex on your non-Ryan
          &quot;friends.&quot; Your card comes with Ryan Pre-Check, letting you
          breeze past secu-Ry-ty at our events without having to show your Ry-D.
        </Text>

        <div className="text-gray-700 dark:text-gray-400 tracking-wide font-medium mt-8">
          Price:{" "}
          <span className="relative group title font-bold hover:underline">
            $30 USD
          </span>
          ; includes free shipping.
        </div>
      </section>

      <section className="space-y-4 mt-8 text-base secondary lg:text-lg">
        <Heading className="text-2xl title" size="h2">
          Why this price?
        </Heading>

        <Text>
          This price allows us to cover the cost of production, shipping, and
          handling, while also supporting the ongoing development of the Ryan
          Meetup community. It also supports Ryan&apos;s work at Transition
          Marketing.
        </Text>

        <Text>
          Please allow 4-5 weeks for delivery, as each card is made to order.
        </Text>
      </section>

      <Button.Link
        href="https://buy.stripe.com/3cIcN4fTP7BS0kzbXJ2kw0a"
        leftIcon={<Dollar className="w-5 h-5" />}
        className="mt-8"
        // disabled
      >
        Buy now
      </Button.Link>
    </div>
  );
};

export { CardInfo };
