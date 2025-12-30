// Components
import NextLink from "next/link";
import NextImage from "next/image";
import { Heading, Text } from "@/components/global";

const Chapters = () => {
  return (
    <NextLink href="/chapters">
      <div className="border flex flex-col items-center justify-center shadow-xl border-gray-700 rounded-2xl min-h-96 h-full timing hover:border-white hover:scale-102">
        <div className="relative w-full flex items-center justify-center rounded-2xl h-full overflow-hidden bg-center">
          <div className="w-full h-96 md:h-full brightness-30">
            <NextImage
              src={"/group-photos/ryanroundup.png"}
              alt="Check out Ryan Meetup Local Chapters"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="absolute w-full inset-x-0 text-white text-xs text-center leading-4 flex items-center justify-center flex-col px-8">
            <Heading className="text-3xl text-white" size="h2">
              Ryan Meetup Chapters
            </Heading>
            <Text className="text-white text-xl mt-4">
              We&apos;re expanding the Ryan Meetup!
            </Text>
            <Text className="text-white text-xl mt-4">
              Check out our local chapters and join the community in your city.
            </Text>
          </div>
        </div>
      </div>
    </NextLink>
  );
};

export { Chapters };
