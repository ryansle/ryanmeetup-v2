'use client';

import { useState, useEffect } from 'react';

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

  const [activeEvents, setActiveEvents] = useState<RyanEvent[]>([]);
  const [inactiveEvents, setInactiveEvents] = useState<RyanEvent[]>([]);
  const [inactiveCommunityEvents, setInactiveCommunityEvents] = useState<RyanEvent[]>([]);

  useEffect(() => {
    const active = events?.filter((event) => (
      new Date(event.date as unknown as string).getTime() >= new Date().getTime()
    ));

    let inactive = events?.filter((event) => (
      new Date(event.date as unknown as string).getTime() < new Date().getTime()
    ));

    const official = inactive?.filter((event) => !event.isPartnerEvent);
    const community = inactive?.filter((event) => event.isPartnerEvent);

    official?.sort((a, b) => new Date(b.date as unknown as string).getTime() - new Date(a.date as unknown as string).getTime());

    setActiveEvents(active as unknown as RyanEvent[]);
    setInactiveEvents(official as unknown as RyanEvent[]);
    setInactiveCommunityEvents(community as unknown as RyanEvent[]);
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

      <Divider margins='xl' />

      <EventsSection
        title='Past Community Events'
        events={inactiveCommunityEvents}
      />
    </div>
  );
};

export { EventsContainer };