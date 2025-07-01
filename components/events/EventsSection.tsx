// Components
import { Heading } from '@/components/global';
import { Event } from '@/components/events';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition
} from '@headlessui/react';
import { FaChevronDown as ChevronDown } from 'react-icons/fa';

// Types
import type { RyanEvent } from '@/lib/types';

type EventsSectionProps = {
  events: RyanEvent[];
  title: string;
  eventType: string;
  hidePastEvents?: boolean;
};

type ContainerProps = {
  eventType: string;
  events: RyanEvent[];
};

const Container = (props: ContainerProps) => {
  const { eventType, events } = props;

  return (
    <div>
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
  )
};

const EventsSection = (props: EventsSectionProps) => {
  const { 
    events, 
    title, 
    eventType, 
    hidePastEvents = false,
  } = props;

  return (
    <div className='mb-10'>
      {hidePastEvents ? (
        <Disclosure
          as='div'
          className='w-full'
        >
          {({ open }) => (
            <>
              <DisclosureButton className='gap-x-4 mb-2 w-full flex items-center hover:underline hover:scale-102 timing'>
                <Heading className='mb-4 text-center text-2xl lg:text-4xl lg:text-left' size='h2'>
                  {title}
                </Heading>

                <div className='flex justify-end'>
                  <ChevronDown className={`timing ${open && '-rotate-180'}`} />
                </div>
              </DisclosureButton>

              <div className='overflow-hidden'>
                <Transition
                  enter='duration-200 ease-in-out'
                  enterFrom='opacity-0 -translate-y-6'
                  enterTo='opacity-100 translate-y-0'
                  leave='duration-300 ease-in-out'
                  leaveFrom='opacity-100 translate-y-0'
                  leaveTo='opacity-0 -translate-y-6'
                >
                  <DisclosurePanel className='origin-top transition'>
                    <Container
                      eventType={eventType}
                      events={events}
                    />
                  </DisclosurePanel>
                </Transition>
              </div>
            </>
          )}
        </Disclosure>
      ) : (
        <div>
          <Heading className='mb-4 text-center text-2xl lg:text-4xl lg:text-left' size='h2'>
            {title}
          </Heading>

          <Container
            eventType={eventType}
            events={events}
          />
        </div>
      )}
    </div>
  );
};

export { EventsSection };