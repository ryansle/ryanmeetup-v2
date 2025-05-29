'use client';

import { useMemo } from 'react';

// Components
import { Divider } from '@/components/global';
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

  const activeEvents = useMemo(() => {
    return mainEvents?.filter((event) => (
      new Date(event.date as unknown as string).getTime() >= new Date().getTime()
    ));
  }, [mainEvents]);  

  const inactiveEvents = useMemo(() => {
    return mainEvents?.filter((event) => (
      new Date(event.date as unknown as string).getTime() < new Date().getTime()
    ));
  }, [mainEvents]);  

  return (
    <div className='mb-10'>

      {activeEvents.length !== 0 && (
        <>
          <EventsSection
            title='Upcoming Events'
            events={activeEvents}
            eventType={eventType}
          />

          <Divider margins='xl' />
        </>
      )}

      <EventsSection
        title='Past Events'
        events={inactiveEvents}
        eventType={eventType}
      />
    </div>
  );
};

export { EventsContainer };