'use client';

import { useMemo } from 'react';

// Components
import { Text, Divider } from '@/components/global';
import { EventsSection } from '@/components/events';

// Types
import type { RyanEvent } from '@/lib/types';

type EventsContainerProps = {
  events: RyanEvent[];
  eventType?: string;
};

const EventsContainer = (props: EventsContainerProps) => {
  const { events, eventType = 'Main' } = props;

  const mainEvents = events.filter(event => event.chapter.includes(eventType));

  const activeEvents = mainEvents?.filter((event) => (
    new Date(event.date as unknown as string).getTime() >= new Date().getTime()
  ));

  const inactiveEvents = mainEvents?.filter((event) => (
    new Date(event.date as unknown as string).getTime() < new Date().getTime()
  ));

  return (
    <div className='mb-10'>

      {activeEvents.length !== 0 && (
        <>
          <EventsSection
            title='Upcoming Events'
            events={activeEvents}
            eventType={eventType}
          />

          {inactiveEvents.length !== 0 && <Divider margins='xl' />}
        </>
      )}

      {inactiveEvents.length !== 0 && (
        <EventsSection
          title='Past Events'
          events={inactiveEvents}
          eventType={eventType}
        />
      )}

      {(inactiveEvents.length === 0 && activeEvents.length === 0) && (
        <div className='space-y-4'>
          <Text>
            There have not been any local Ryan Meetups in {eventType} yet.
          </Text>
          <Text>
            Talk to Ryan about scheduling one today!
          </Text>
        </div>
      )}
    </div>
  );
};

export { EventsContainer };