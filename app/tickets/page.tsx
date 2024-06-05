// Components
import { Layout } from '@/components/navigation';
import { Heading, Text, Divider, List } from '@/components/global';
import { TicketSale, NYCMap } from '@/components/tickets';
import NextLink from 'next/link';
import { GiKatana as Katana, GiWolverineClaws as Wolverine } from 'react-icons/gi';
import { FaClock as Clock } from 'react-icons/fa';
import NextImage from 'next/image';
import { MdEmojiTransportation as Transit } from 'react-icons/md';

// Types
import type { Metadata } from 'next';

// Utilities
import { fetchRyanTickets, fetchHughTickets } from '@/actions/fetchContent';

export const metadata: Metadata = {
  title: 'Ryan Meetup - Tickets',
  description: 'Purchase tickets to 150 Deadpools & Wolverine, also known as the Ryan Red Carpet event in New York City on July 27th.',
  keywords: ['ryan red carpet', 'ryanpool', 'deadpool 3', 'ryanpool & wolverine', 'ryanpool and wolverine', 'deadpool and wolverine', '150 deadpools and wolverine', 'ryan gala', 'ryan movie', 'ryancon trailer', 'ryan meetup trailer', 'ryan meetup deadpool', 'ryan reynolds ryan meetup', 'ryan meetup new york', 'ryan meetup amc 25', 'ryan meetup slate', 'ryan meetup marvel', 'ryan meetup marvel studios', 'ryan meetup disney'],
  openGraph: {
    url: 'https://ryanmeetup.com/tickets',
    title: 'Ryan Meetup - Tickets',
    description: 'Purchase tickets to 150 Deadpools & Wolverine, also known as the Ryan Red Carpet event in New York City on July 27th.',
    siteName: 'Ryan Meetup',
    images: '/deadpool.png',
    locale: 'en_US',
    type: 'website',
  },
};

const TicketPage = async () => {
  const ryanTickets = await fetchRyanTickets();
  const hughTickets = await fetchHughTickets();

  const ryanTicket = [
    { main: 'Ryan Nametag:', sub: 'Classic red name tag so everyone knows that you are Ryan' },
    { main: 'VIR Access:', sub: 'Priority access to the Ryan Red Carpet event' },
    { main: 'Commemorative Deadpool Mask' },
    { main: 'First Come First Serve Seating:', sub: 'First picks on seats in the theater during the premiere' },
    { main: 'After Party Entry:', sub: 'Access to the Ryan Meetup after party following the premiere' },
    { main: 'Meet & Greet with Ryans:', sub: 'Photo opportunities with Ryan, Ryan, and Ryan, of course' },
  ];

  const hughTicket = [
    { main: 'Yellow Hugh Nametag:', sub: 'So that nobody mistakes you for Ryan, since you are definitely not one of us' },
    { main: 'Commemorative Wolverine Mask:', sub: 'It may or may not be made out of an old paper plate' },
    { main: 'Front Row Seats:', sub: 'Sit at the very front of the theater and stare up at the screen the whole time' },
    { main: 'Access to Name Change Paperwork:', sub: 'Legally become a Ryan by filling out the necessary paperwork' },
  ];

  const schedule = [
    { main: '6:30 PM:', sub: 'Ryan Red Carpet @ AMC Empire 25' },
    { main: '7:30 PM:', sub: '150 Deadpools & Wolverine Premiere' },
    { main: '10:30 PM:', sub: 'Ryan Meetup After Party @ Slate' },
  ];

  const transit = [
    { main: 'Transit:', sub: 'Board the F/M trains at 42nd St—Bryant Park and ride it southbound two stops to 23rd St' },
    { main: 'Ridesharing:', sub: 'About a 15-20 minute drive via Uber, Lyft, or cab services' },
    { main: 'Walking:', sub: '~30 minute walk south, 1.3 milesI adde' },
  ];

  const hrefStyle = 'text-blue-500 font-bold underline';
  const iconStyle = 'fill-gray-600 dark:fill-white mt-1 mr-4 w-5 h-5 flex-shrink-0';

  return (
    <Layout>
      <div className='px-0 xl:px-32 space-y-6'>
        <div className='relative w-full h-60 md:h-[340px]'>
          <NextImage
            className='rounded-xl border border-black items-center shadow-xl'
            src='/deadpools.png'
            alt='150 Deadpools & Wolverine'
            style={{ objectFit: 'cover' }}
            fill
          />
        </div>

        <Text className='italic mb-10 text-center'>
          <span className='font-semibold text-blue-500'>*</span>Early bird pricing ends on July 1st, 2024.
        </Text>

        <div className='grid grid-cols-11 space-y-10 md:space-y-0'>
          <div className='col-span-11 md:col-span-5'>
            <TicketSale
              name='Ryan'
              price='$40'
              href='https://buy.stripe.com/8wMaGTeLC51Rg36bIK'
              remaining={ryanTickets.ticketsRemaining as number}
              icon={<Katana className={iconStyle} />}
              inclusions={ryanTicket}
              earlyBird
              earlyBirdPrice='$35'
            />
          </div>
          <div className='col-span-11 md:col-span-1'>
            <Divider className='block md:hidden' margins='sm' />
          </div>
          <div className='col-span-11 md:col-span-5'>
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

        <Divider />

        <Heading>
          Event Details
        </Heading>

        <div className='space-y-4'>
          <Text>
            Join us for a private showing of{' '}
            <NextLink className={hrefStyle} href='https://www.youtube.com/watch?v=73_1biulkYk' target='_blank'>Deadpool &amp; Wolverine</NextLink> on Saturday, July 27th, in New York City at the{' '}
            <NextLink className={hrefStyle} href='https://www.amctheatres.com/movie-theatres/new-york-city/amc-empire-25' target='_blank'>Empire AMC 25</NextLink>, where you&apos;ll meet 149 other Ryans dressed up as Deadpool - and maybe one singular, lonesome, Hugh.
          </Text>
          <Text>
            There will be a Ryan Red Carpet event prior to the showing, as well as an after party hosted by{' '}<NextLink href='https://www.slate-ny.com' className={hrefStyle} target='_blank'>Slate</NextLink> in Chelsea. You can RSVP to the after party <NextLink href='/rsvp' className={hrefStyle} target='_blank'>here</NextLink>.
          </Text>
        </div>

        <Heading size='md'>
          Event Schedule
        </Heading>
        <List
          icon={<Clock className={iconStyle} />}
          content={schedule}
        />

        <Divider />

        <Heading size='md'>
          Transportation Options
        </Heading>
        <List
          icon={<Transit className={iconStyle} />}
          content={transit}
        />

        <NYCMap />
      </div>
    </Layout>
  );
};

export default TicketPage;
