// Components
import { Heading } from '@/components/global';
import { Event } from '@/components/events';

// Types
import type { RyanEvent } from '@/lib/types';

type EventsSectionProps = {
  events: RyanEvent[];
  title: string;
  eventType: string;
};

const EventsSection = (props: EventsSectionProps) => {
  const { events, title, eventType } = props;

  return (
    <div className='mb-10'>
      <Heading size='md' className='mb-4'>
        {title}
      </Heading>

      {eventType === 'Main' ? (
        <div className='grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-3'>
          {events?.map((event, index) => (
            <Event
              key={index}
              event={event as RyanEvent}
            />
          ))}
        </div>
      ) : (
        <div className='grid grid-cols-1 gap-x-4 gap-y-4 xl:grid-cols-2'>
          {events?.map((event, index) => (
            <Event
              key={index}
              event={event as RyanEvent}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export { EventsSection };