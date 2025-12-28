import { useCallback, useMemo } from "react";
import type { Dispatch, SetStateAction } from "react";

// Components
import { Heading, Text, Card } from "@/components/global";
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
    <div className="absolute bottom-2 right-2 w-52 lg:bottom-8 lg:right-8">
      <Card variant="soft" size="sm" className="bg-white/95 dark:bg-black/70">
        <Heading className="mb-2 text-base font-semibold text-black dark:text-white" size="h3">
          Legend
        </Heading>
        <div className="space-y-2">
          {options.map((option) => (
            <div className="flex items-center justify-between gap-2" key={option.text}>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-black dark:accent-white"
                  checked={option.checked}
                  aria-label={option.text}
                  onClick={option.handler}
                />
                <Text className="text-xs text-black/70 dark:text-white/70">
                  {option.text}
                </Text>
              </label>
              <NextImage
                className={`flex shrink-0 ${option.text === "Local Chapter" ? "rounded-full" : ""}`}
                src={option.icon}
                width={20}
                height={20}
                alt={option.alt}
              />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export { Legend };
