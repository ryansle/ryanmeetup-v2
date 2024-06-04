// Components
import { Layout } from '@/components/navigation';
import { Heading, Text, Divider, List } from '@/components/global';
import { TicketSale } from '@/components/tickets';
import NextLink from 'next/link';
import { GiKatana as Katana, GiWolverineClaws as Wolverine } from 'react-icons/gi';
import { FaClock as Clock } from 'react-icons/fa';

// Utilities
import { fetchRyanTickets, fetchHughTickets } from '@/actions/fetchContent';

const TicketPage = async () => {
  const ryanTickets = await fetchRyanTickets();
  const hughTickets = await fetchHughTickets();

  const ryanTicket = [
    { main: 'VIR Access:', sub: 'Priority access to the Ryan Red Carpet event' },
    { main: 'Commemorative Deadpool Mask:', sub: 'A Deadpool mask to remember the event by' },
    { main: 'Priority Seating:', sub: 'First picks on seats in the theater during the premiere' },
    { main: 'After Party Entry:', sub: 'Access to the Ryan Meetup after party following the premiere' },
  ];

  const hughTicket = [
    { main: 'Commemorative Wolverine Mask:', sub: 'It may or may not be made out of an old paper plate' },
    { main: 'Front Row Seats:', sub: 'Sit at the very front of the theater and stare up at the screen the whole time' },
    { main: 'Access to Name Change Paperwork:', sub: 'Legally become a Ryan by filling out the necessary paperwork' },
  ];

  const schedule = [
    { main: '6:30 PM:', sub: 'Ryan Red Carpet' },
    { main: '7:30 PM:', sub: '150 Deadpools & Wolverine Premiere' },
    { main: '10:30 PM:', sub: 'Ryan Meetup After Party @ Slate' },
  ];

  const hrefStyle = 'text-blue-500 font-bold underline';
  const iconStyle = 'fill-gray-600 dark:fill-white mt-1 mr-4 w-5 h-5 flex-shrink-0';

  return (
    <Layout>
      <div className='px-0 xl:px-32 space-y-6'>
        <Heading>
          Buy Tickets
        </Heading>

        <div className='space-y-4'>
          <Text>
            Join us for a <span className='font-bold'>private showing</span> of Marvel Studio's{' '}
            <NextLink className={hrefStyle} href='https://www.youtube.com/watch?v=73_1biulkYk' target='_blank'>Deadpool &amp; Wolverine</NextLink> on Saturday, July 27th, in New York City at the{' '}
            <NextLink className={hrefStyle} href='https://www.amctheatres.com/movie-theatres/new-york-city/amc-empire-25' target='_blank'>Empire AMC 25</NextLink>.
          </Text>
          <Text>
            There will be a Ryan Red Carpet event prior to the showing, as well as an after party hosted by{' '}<NextLink href='https://www.slate-ny.com' className={hrefStyle} target='_blank'>Slate</NextLink> in Chelsea. You can RSVP to the after party <NextLink href='/rsvp' className={hrefStyle} target='_blank'>here</NextLink>.
          </Text>
          <Heading size='md'>
            Event Schedule
          </Heading>
          <List
            icon={<Clock className={iconStyle} />}
            content={schedule}
          />
        </div>

        <div className='grid grid-cols-9 space-y-10 md:space-y-0'>
          <div className='col-span-9 md:col-span-4'>
            <TicketSale
              name='Ryan'
              price='$35'
              href='https://buy.stripe.com/8wMaGTeLC51Rg36bIK'
              remaining={ryanTickets.ticketsRemaining as number}
              icon={<Katana className={iconStyle} />}
              inclusions={ryanTicket}
            />
          </div>
          <div className='col-span-9 md:col-span-1'>
            <Divider className='block md:hidden' margins='sm' />
          </div>
          <div className='col-span-9 md:col-span-4'>
            <TicketSale
              name='Hugh'
              price='$1,000'
              href='https://buy.stripe.com/7sIg1d1YQ79Z5os3cf'
              remaining={hughTickets.ticketsRemaining as number}
              icon={<Wolverine className={iconStyle} />}
              inclusions={hughTicket}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TicketPage;
