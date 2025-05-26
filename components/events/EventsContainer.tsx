'use client';

import { useState, useMemo } from 'react';

// Components
import { Divider } from '@/components/global';
import { EventsSection } from '@/components/events';

// Types
import type { RyanEvent } from '@/lib/types';

type EventsContainerProps = {
  events: RyanEvent[];
};

const EventsContainer = (props: EventsContainerProps) => {
  const { events } = props;

  const activeEvents = useMemo(() => {
    return events?.filter((event) => (
      new Date(event.date as unknown as string).getTime() >= new Date().getTime()
    ));
  }, [events]);  

  const inactiveEvents = useMemo(() => {
    return events?.filter((event) => (
      new Date(event.date as unknown as string).getTime() < new Date().getTime()
    ));
  }, [events]);  

  return (
    <div className='mb-10'>

      {activeEvents.length !== 0 && (
        <>
          <EventsSection
            title='Upcoming Events'
            events={activeEvents}
          />

          <Divider margins='xl' />
        </>
      )}

      <EventsSection
        title='Past Events'
        events={inactiveEvents}
      />
    </div>
  );
};

export { EventsContainer };