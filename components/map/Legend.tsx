import { useCallback, useMemo } from "react";
import type { Dispatch, SetStateAction } from "react";

// Components
import { Heading, Text } from "@/components/global";
import NextImage from "next/image";

type LegendProps = {
  showMeetups: boolean;
  showRyans: boolean;
  showNamedBusinesses: boolean;
  showOwnedBusinesses: boolean;
  showChapters: boolean;
  setShowMeetups: Dispatch<SetStateAction<boolean>>;
  setShowRyans: Dispatch<SetStateAction<boolean>>;
  setShowNamedBusinesses: Dispatch<SetStateAction<boolean>>;
  setShowOwnedBusinesses: Dispatch<SetStateAction<boolean>>;
  setShowChapters: Dispatch<SetStateAction<boolean>>;
};

const Legend = (props: LegendProps) => {
  const {
    showMeetups,
    showRyans,
    showNamedBusinesses,
    showOwnedBusinesses,
    showChapters,
    setShowMeetups,
    setShowRyans,
    setShowNamedBusinesses,
    setShowOwnedBusinesses,
    setShowChapters,
  } = props;

  const toggleMeetups = useCallback(() => {
    setShowMeetups((prev: boolean) => !prev);
  }, [setShowMeetups]);

  const toggleRyans = useCallback(() => {
    setShowRyans((prev: boolean) => !prev);
  }, [setShowRyans]);

  const toggleNamedBusinesses = useCallback(() => {
    setShowNamedBusinesses((prev: boolean) => !prev);
  }, [setShowNamedBusinesses]);

  const toggleOwnedBusinesses = useCallback(() => {
    setShowOwnedBusinesses((prev: boolean) => !prev);
  }, [setShowOwnedBusinesses]);

  const toggleChapters = useCallback(() => {
    setShowChapters((prev: boolean) => !prev);
  }, [setShowChapters]);

  const options = useMemo(
    () => [
      {
        checked: showMeetups,
        handler: toggleMeetups,
        text: "Ryan Meetup",
        alt: "Past or future Ryan Meetup location.",
        icon: "/icons/partiful.webp",
      },
      {
        checked: showRyans,
        handler: toggleRyans,
        text: "Ryan lives here",
        alt: "There's at least one of the Ryans that lives here.",
        icon: "/icons/ryanicon.png",
      },
      {
        checked: showNamedBusinesses,
        handler: toggleNamedBusinesses,
        text: "Ryan-Named Biz",
        alt: "Ryan-Named Businesses",
        icon: "/icons/nametagicon.png",
      },
      {
        checked: showOwnedBusinesses,
        handler: toggleOwnedBusinesses,
        text: "Ryan-Owned Biz",
        alt: "Ryan-Owned Businesses",
        icon: "/icons/brief.png",
      },
      {
        checked: showChapters,
        handler: toggleChapters,
        text: "Local Chapter",
        alt: "Ryan Meetup Chapter",
        icon: "/icons/invert.png",
      },
    ],
    [
      showMeetups,
      showRyans,
      showNamedBusinesses,
      showOwnedBusinesses,
      showChapters,
      toggleMeetups,
      toggleRyans,
      toggleNamedBusinesses,
      toggleOwnedBusinesses,
      toggleChapters,
    ],
  );

  return (
    <div className="absolute bottom-2 right-2 bg-white p-3 rounded-2xl shadow-md text-black w-48 font-semibold lg:bottom-8 lg:right-8">
      <Heading className="font-semibold mb-2 text-lg text-black" size="h3">
        Legend
      </Heading>
      <div className="space-y-1">
        {options.map((option) => (
          <div className="flex justify-between" key={option.text}>
            <div className="flex">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={option.checked}
                aria-label={option.text}
                onClick={option.handler}
              />

              <Text className="ml-2 text-xs text-black">{option.text}</Text>
            </div>
            <NextImage
              className={`flex shrink-0 ${option.text === "Local Chapter" && "rounded-full"}`}
              src={option.icon}
              width={20}
              height={20}
              alt="Ryans have met up in this city before"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export { Legend };
