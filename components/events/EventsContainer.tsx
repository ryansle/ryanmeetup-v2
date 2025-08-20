'use client';

// Components
import { Text, Divider, Heading } from '@/components/global';
import { EventsSection } from '@/components/events';
import NextLink from 'next/link';

// Types
import type { RyanEvent } from '@/lib/types';

// Utilities
import { usePathname } from 'next/navigation';

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

  const chapterEvents = events.filter(event => (
    !event.chapter.includes(eventType) && 
    new Date(event.date as unknown as string).getTime() >= new Date().getTime()
  ));

  const activeEvents = mainEvents?.filter(event => (
    new Date(event.date as unknown as string).getTime() >= new Date().getTime()
  ));

  const inactiveEvents = mainEvents?.filter(event => (
    new Date(event.date as unknown as string).getTime() < new Date().getTime()
  ));

  const pathname = usePathname();

  return (
    <div className='mb-10'>
      {showUpcomingSection && activeEvents.length === 0 && inactiveEvents.length !== 0 && (
        <div className='mb-8'>
          <Heading className='mb-4 text-center text-3xl title lg:text-4xl lg:text-left' size='h2'>
            Upcoming Events
          </Heading>

          <div className='space-y-4'>
            <Text className='text-lg text-center secondary lg:text-left'>
              No upcoming events at this time.
            </Text>
          </div>

          <Divider margins='lg' />
        </div>
      )}

      {(activeEvents.length !== 0 || chapterEvents.length !== 0) && !pathname.includes('/chapter') && (
        <>
          <EventsSection
            title='Upcoming Events'
            events={activeEvents}
            eventType={eventType}
            showChapters={chapterEvents.length !== 0}
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
          showChapters={false}
        />
      )}

      {(inactiveEvents.length === 0 && activeEvents.length === 0) && (
        <div className='space-y-4'>
          <Text className='text-center text-lg secondary lg:text-left'>
            There have not been any local Ryan Meetups in {eventType} yet.
          </Text>
          <Text className='text-center text-lg secondary lg:text-left'>
            Reach out to Ryan via Instagram or at <NextLink className='font-semibold text-blue-700 dark:text-blue-500 hover:cursor' href='mailto:ryan@ryanmeetup.com'>ryan@ryanmeetup.com</NextLink>{' '}about scheduling one today!
          </Text>
        </div>
      )}
    </div>
  );
};

export { EventsContainer };