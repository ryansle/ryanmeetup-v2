'use client';

import { useState, useMemo } from 'react';

// Components
import { Event } from '@/components/events';

// Types
import type { RyanEvent } from '@/lib/types';

type DoubleHeaderProps = {
  events: RyanEvent[];
};

const DoubleHeader = (props: DoubleHeaderProps) => {
  const { events } = props;

  const activeEvents = useMemo(() => {
    return events?.filter((event) => (
      new Date(event.date as unknown as string).getTime() >= new Date().getTime()
    ));
  }, [events]);

  return (
    <div className='md:mx-24 grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2'>
      {activeEvents.map((event, index) => (
        <Event
          key={index}
          event={event as RyanEvent}
        />
      ))}
    </div>
  );
};

export { DoubleHeader };