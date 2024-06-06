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
  <thead className='uppercase tracking-widest text-xs xl:text-md text-black dark:text-white'>
    <tr>
      <th scope='col' className='w-16' />
      <th scope='col' className='w-48'>
        Name
      </th>
      <th scope='col' className='w-48'>
        Based in
      </th>
      <th scope='col' className='w-32'>
        # Attended
      </th>
      <th scope='col' className='hidden md:block'>
        Events Attended
      </th>
    </tr>
  </thead>
);

const Leaderboard = (props: LeaderboardProps) => {
  const { ryans } = props;

  const sortedRyans = ryans.sort((a, b) => b.eventsAttended.length - a.eventsAttended.length);

  return (
    <div>
      <Heading className='mb-4 text-center xl:text-left'>
        Attendance Leaderboard
      </Heading>

      <Text className='italic mb-10 text-center xl:text-left'>
        <span className='font-semibold text-blue-500'>*</span>Ryans must attend at least three Ryan Meetups in order to qualify for the leaderboard.
      </Text>

      <div className='relative overflow-x-auto'>
        <table className='w-full text-sm text-left'>
          <TableHeader />
          <tbody>
            {sortedRyans.map((ryan, index) => (
              <tr key={ryan.fullName} className={`text-2xl border-gray-700 h-full ${index !== sortedRyans.length - 1 && 'border-b'}`}>
                <td className='py-2'>
                  <div className='relative w-10 h-10 md:w-12 md:h-12'>
                    <NextImage
                      className='rounded-full'
                      src={convertImageUrl(ryan.headshot) ?? '/trophy.png'}
                      fill
                      style={{ objectFit: 'cover' }}
                      alt={ryan.fullName}
                    />
                  </div>
                </td>
                <td>
                  <div className='hidden md:block'>
                    <Text>
                      {ryan.fullName}
                    </Text>
                  </div>
                  <div className='block md:hidden'>
                    <Text size='xxs'>
                      {ryan.fullName}
                    </Text>
                  </div>
                </td>
                <td>
                  <div className='hidden md:block'>
                    <Text>
                      {ryan.basedIn}
                    </Text>
                  </div>
                  <div className='block md:hidden'>
                    <Text size='xxs'>
                      {ryan.basedIn}
                    </Text>
                  </div>
                </td>
                <td>
                  <p className='text-4xl text-center pr-2 md:pr-8 text-gray-700 dark:text-white'>
                    {ryan.eventsAttended.length}
                  </p>
                </td>
                <td className='p-2 hidden md:block'>
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

      <Heading className='mb-4 mx-16 lg:mx-0 text-center mt-10'>
        Not seeing your name?
      </Heading>

      <Text className='text-center mb-20'>
        Get in contact through our{' '}
        <NextLink href='/contact' className='font-semibold text-blue-500 hover:cursor'>
          /contact
        </NextLink> page or shoot us an email at{' '}
        <NextLink className='font-semibold text-blue-500 hover:cursor' href='mailto:ryan@ryanmeetup.com'>
          ryan@ryanmeetup.com
        </NextLink>.
      </Text>
    </div>
  );
};

export { Leaderboard };
