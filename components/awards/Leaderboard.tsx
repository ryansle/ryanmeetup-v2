// Components
import { Heading, Text } from '@/components/global';
import { EventTag } from '@/components/awards';
import { RepeatRyan } from '@/lib/types';
import NextImage from 'next/image';
import NextLink from 'next/link';

// Utilities
import { convertImageUrl } from '@/utils/convert';

type LeaderboardProps = {
  ryans: RepeatRyan[];
};

const TableHeader = () => (
  <thead className='uppercase tracking-widest text-xs xl:text-md title'>
    <tr>
      <th scope='col' className='w-16' aria-label='Headshot' />
      <th scope='col' className='w-48'>
        Name
      </th>
      <th scope='col' className='w-48'>
        Based in
      </th>
      <th scope='col' className='w-32'>
        # Attended
      </th>
      <th scope='col' className='hidden xl:block'>
        Events Attended
      </th>
    </tr>
  </thead>
);

const Leaderboard = (props: LeaderboardProps) => {
  const { ryans } = props;

  const sortedRyans = ryans.sort((a, b) => b.eventsAttended.length - a.eventsAttended.length);
  const filteredRyans = sortedRyans.filter((ryan) => ryan.eventsAttended.length >= 4);
  
  return (
    <div>
      <Heading className='mb-6 text-center text-4xl title'>
        Attendance Leaderboard
      </Heading>

      <Text className='secondary italic mb-10 text-center text-lg'>
        <span className='font-semibold text-blue-700 dark:text-blue-500'>*</span>Ryans must attend at least four Ryan Meetups in order to qualify for the leaderboard.
      </Text>

      <div className='relative overflow-x-auto'>
        <table className='w-full text-sm text-left'>
          <TableHeader />
          <tbody>
            {filteredRyans.map((ryan, index) => (
              <tr key={ryan.fullName} className={`text-2xl border-gray-700 h-full ${index !== sortedRyans.length - 1 && 'border-b'}`}>
                <td className='py-2'>
                  <div className='relative w-10 h-10 md:w-12 md:h-12'>
                    <NextImage
                      className='rounded-full shadow-lg'
                      src={convertImageUrl(ryan.headshot) ?? '/trophy.png'}
                      fill
                      style={{ objectFit: 'cover' }}
                      alt={ryan.fullName}
                    />
                  </div>
                </td>
                <td>
                  <Text className='title text-xs md:text-sm lg:text-base xl:text-lg'>
                    {ryan.fullName}
                  </Text>
                </td>
                <td>
                  <Text className='title text-xs md:text-sm lg:text-base xl:text-lg'>
                    {ryan.basedIn}
                  </Text>
                </td>
                <td>
                  <p className='text-4xl text-center pr-2 md:pr-8 text-gray-700 dark:text-white'>
                    {ryan.eventsAttended.length}
                  </p>
                </td>
                <td className='p-2 hidden xl:block'>
                  <div className='flex gap-x-1 flex-wrap items-center'>
                    {ryan.eventsAttended.map((event, index) => (
                      <EventTag
                        key={index}
                        event={event}
                      />
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Heading className='mb-4 mx-16 lg:mx-0 text-center text-4xl mt-10 title'>
        Not seeing your name?
      </Heading>

      <Text className='secondary text-center mb-20 text-lg'>
        Get in contact through our{' '}
        <NextLink href='/contact' className='font-semibold text-blue-700 dark:text-blue-500 hover:cursor'>
          /contact
        </NextLink> page or shoot us an email at{' '}
        <NextLink className='font-semibold text-blue-700 dark:text-blue-500 hover:cursor' href='mailto:ryan@ryanmeetup.com'>
          ryan@ryanmeetup.com
        </NextLink>.
      </Text>
    </div>
  );
};

export { Leaderboard };
