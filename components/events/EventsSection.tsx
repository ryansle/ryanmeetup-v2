// Components
import { Heading } from '@/components/global';
import { Event } from './Event';

// Types
import type { RyanEvent } from '@/lib/types';

type EventsSectionProps = {
  events: RyanEvent[];
  title: string;
};

const EventsSection = (props: EventsSectionProps) => {
  const { events, title } = props;

  return (
    <div className='mb-10'>
      <Heading size='md' className='mb-4'>
        {title}
      </Heading>

      <div className='grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-3'>
        {events?.map((event, index) => (
          <Event
            key={index}
            event={event as RyanEvent}
          />
        ))}
      </div>
    </div>
  );
};

export { EventsSection };