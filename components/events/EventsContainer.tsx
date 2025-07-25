'use client';

// Components
import { Text, Divider, Heading } from '@/components/global';
import { EventsSection } from '@/components/events';
import NextLink from 'next/link';

// Types
import type { RyanEvent } from '@/lib/types';

type EventsContainerProps = {
  events: RyanEvent[];
  eventType?: string;
  hidePastEvents?: boolean;
  showUpcomingSection?: boolean;
};

const EventsContainer = (props: EventsContainerProps) => {
  const { 
    events, 
    eventType = 'Main',
    hidePastEvents = false,
    showUpcomingSection = false
  } = props;

  const mainEvents = events.filter(event => event.chapter.includes(eventType));

  const activeEvents = mainEvents?.filter((event) => (
    new Date(event.date as unknown as string).getTime() >= new Date().getTime()
  ));

  const inactiveEvents = mainEvents?.filter((event) => (
    new Date(event.date as unknown as string).getTime() < new Date().getTime()
  ));

  return (
    <div className='mb-10'>
      {showUpcomingSection && activeEvents.length === 0 && inactiveEvents.length !== 0 && (
        <div className='mb-8'>
          <Heading className='mb-4 text-center text-3xl lg:text-4xl lg:text-left' size='h2'>
            Upcoming Events
          </Heading>

          <div className='space-y-4'>
            <Text className='text-lg text-center lg:text-left'>
              No upcoming events at this time.
            </Text>
          </div>

          <Divider margins='lg' />
        </div>
      )}

      {activeEvents.length !== 0 && (
        <>
          <EventsSection
            title='Upcoming Events'
            events={activeEvents}
            eventType={eventType}
          />

          {inactiveEvents.length !== 0 && <Divider margins='lg' />}
        </>
      )}

      {inactiveEvents.length !== 0 && (
        <EventsSection
          title='Past Events'
          events={inactiveEvents}
          eventType={eventType}
          hidePastEvents={hidePastEvents}
        />
      )}

      {(inactiveEvents.length === 0 && activeEvents.length === 0) && (
        <div className='space-y-4'>
          <Text className='text-center text-lg lg:text-left'>
            There have not been any local Ryan Meetups in {eventType} yet.
          </Text>
          <Text className='text-center text-lg lg:text-left'>
            Reach out to Ryan via Instagram or at <NextLink className='font-semibold text-blue-700 dark:text-blue-500 hover:cursor' href='mailto:ryan@ryanmeetup.com'>ryan@ryanmeetup.com</NextLink>{' '}about scheduling one today!
          </Text>
        </div>
      )}
    </div>
  );
};

export { EventsContainer };