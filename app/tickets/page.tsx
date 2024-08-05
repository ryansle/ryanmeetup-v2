// Components
import { Layout } from '@/components/navigation';
import { Heading, Text, Divider, List } from '@/components/global';
import { TicketSale, NYCMap } from '@/components/tickets';
import NextLink from 'next/link';
import { GiKatana as Katana, GiWolverineClaws as Wolverine } from 'react-icons/gi';
import { FaClock as Clock } from 'react-icons/fa';
import NextImage from 'next/image';
import { MdEmojiTransportation as Transit } from 'react-icons/md';
import { FAQ } from '@/components/home';

// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ryan Meetup - Tickets',
  description: 'Purchase tickets to 150 Deadpools & Wolverine, also known as the Ryan Red Carpet event in New York City on July 27th.',
  keywords: ['ryan red carpet', 'ryanpool', 'deadpool 3', 'ryanpool & wolverine', 'ryanpool and wolverine', 'deadpool and wolverine', '150 deadpools and wolverine', 'ryan gala', 'ryan movie', 'ryancon trailer', 'ryan meetup trailer', 'ryan meetup deadpool', 'ryan reynolds ryan meetup', 'ryan meetup new york', 'ryan meetup amc 25', 'ryan meetup printers alley', 'ryan meetup marvel', 'ryan meetup marvel studios', 'ryan meetup disney'],
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
  const ryanTicket = [
    { main: 'AMC Movie Ticket' },
    { main: 'Commemorative Deadpool Mask' },
    { main: 'Homage T-Shirt' },
    { main: 'V.I.R. Access to Red Carpet & After Party' },
    { main: '149 New Friends Named Ryan' },
  ];

  const hughTicket = [
    { main: 'AMC Movie Ticket' },
    { main: 'Wolverine Mask' },
    { main: 'Homage T-Shirt' },
    { main: 'An Inferiority Complex' },
    { main: 'Legal Name Change Paperwork' },
  ];

  const schedule = [
    { main: '5:00 PM:', sub: 'Ryan Red Carpet @ AMC Empire 25' },
    { main: '7:00 PM:', sub: 'Please be seated in the auditorium' },
    { main: '7:30 PM:', sub: '150 Deadpools & Wolverine Premiere' },
    { main: '10:30 PM:', sub: 'Ryan Meetup After Party @ Printers Alley' },
  ];

  const transit = [
    { main: 'Walking:', sub: '~5 minute walk south, 0.2 miles' },
  ];

  const faqs = [
    {
      question: 'Can I bring a +1 to the movie premiere?',
      answer: 'Only if their name is also Ryan.'
    },
    {
      question: 'How does ticketing work?',
      answer: 'We have already purchased all of the seats in the theater. When you pay for a ticket, we add your first and last name to the guest list. All you have to do is show up with your Ryan ID for entry.',
    },
    {
      question: 'Can I still come to the after party if I don\'t attend the rest of the event?',
      answer: 'Yes, you may still attend the after party without joining us for the premiere.'
    },
    {
      question: 'Will Ryan be there?',
      answer: 'Yes, of course.',
    }
  ];

  const hrefStyle = 'text-blue-500 font-bold underline';
  const iconStyle = 'fill-gray-600 dark:fill-white mt-1 mr-4 w-5 h-5 flex-shrink-0';

  return (
    <Layout>
      <div className='px-0 xl:px-32 space-y-6'>
        <div className='relative w-full h-60 md:h-[340px] lg:h-[470px]'>
          <NextImage
            className='rounded-xl border border-black items-center shadow-xl'
            src='/deadpools.png'
            alt='150 Deadpools & Wolverine'
            style={{ objectFit: 'cover' }}
            fill
          />
        </div>

        {/* <Text className='text-center px-0 sm:px-12 md:px-24 xl:px-52' size='xs'>
          <span className='font-semibold underline'>NOTE:</span> We encourage you to Zelle us directly at <span className='font-semibold text-blue-500'>theryanmeetup@gmail.com</span> or Venmo us at <NextLink href='https://venmo.com/code?user_id=3841296049374520231&created=1690776081.636693&printed=1' className='text-blue-500 font-semibold hover:underline'>@RyanMeetup</NextLink> to bypass ticketing fees.
        </Text> */}

        <div className='grid grid-cols-10 space-y-10 gap-x-4 md:space-y-0'>
          <div className='col-span-10 md:col-span-5'>
            <TicketSale
              name='Ryan'
              price='$40'
              href='https://buy.stripe.com/4gw8yL9ridynaIMeUY'
              remaining={0}
              icon={<Katana className={iconStyle} />}
              inclusions={ryanTicket}
              flashSale
              disabled
            />
          </div>
          <Divider className='col-span-10 block md:hidden' margins='sm' />
          <div className='col-span-10 md:col-span-5'>
            <TicketSale
              name='Hugh'
              price='$1,000'
              href='https://buy.stripe.com/4gwbKX5b23XN2cg7sz'
              remaining={0}
              icon={<Wolverine className={iconStyle} />}
              inclusions={hughTicket}
              flashSale
              disabled
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
            <NextLink className={hrefStyle} href='https://www.amctheatres.com/movie-theatres/new-york-city/amc-empire-25' target='_blank'>AMC Empire 25</NextLink>, where you&apos;ll meet 149 other Ryans dressed up as Deadpool - and one singular, lonesome, Hugh.
            You <span className='font-bold underline'>must</span> purchase a ticket for entrance into the auditorium, as there are a limited amount of seats available.
          </Text>
          <Text>
            There will be a Ryan Red Carpet event prior to the showing, as well as an after party hosted by{' '}<NextLink href='https://printersalleynyc.com/' className={hrefStyle} target='_blank'>Printers Alley</NextLink> nearby. You can RSVP to the after party <NextLink href='/rsvp' className={hrefStyle} target='_blank'>here</NextLink>.
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

        <FAQ data={faqs} />

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

export const revalidate = 30;