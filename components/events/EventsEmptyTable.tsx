"use client";

import { EmptyState, Heading, Text } from "@/components/global";

type EventsEmptyTableProps = {
  title: string;
  countLabel: string;
  message: string;
};

const EventsEmptyTable = (props: EventsEmptyTableProps) => {
  const { title, countLabel, message } = props;

  return (
    <div className="mb-10 rounded-2xl border border-black/10 bg-white/90 p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
      <div className="mb-4 flex flex-col gap-2 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
        <Heading className="text-3xl title lg:text-4xl" size="h2">
          {title}
        </Heading>
        <Text className="text-xs uppercase tracking-[0.3em] text-black/70 dark:text-white/70">
          {countLabel}
        </Text>
      </div>
      <EmptyState message={message} />
    </div>
  );
};

export { EventsEmptyTable };
