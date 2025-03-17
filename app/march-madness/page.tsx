// Components
import { Layout } from '@/components/navigation';
import { Heading, Divider } from '@/components/global';
import NextImage from 'next/image';
import NextLink from 'next/link';

type LinkTileProps = {
  title: string;
  bgImage: string;
  href: string;
};

const LinkTile = (props: LinkTileProps) => {
  const { title, bgImage, href } = props;

  return (
    <NextLink href={href}>
      <div className='border flex flex-col items-center justify-center shadow-xl border-gray-700 rounded-xl transition ease-in duration-300 hover:border-white hover:scale-102'>
        <div className='relative w-full flex items-center justify-center rounded-xl h-80 overflow-hidden bg-center'>
          <div className='w-full h-full brightness-30'>
            <NextImage
              src={bgImage}
              alt={title}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className='absolute w-full inset-x-0 text-white text-xs text-center leading-4 flex items-center justify-center flex-col px-8'>
            <Heading ignoreColorMode size='xl'>{title}</Heading>
          </div>
        </div>
      </div>
    </NextLink>
  );
};

const MarchMadnessPage = () => {
  const tiles = [
    {
      title: 'Join the bracket',
      bgImage: '/braket.png',
      href: 'https://fantasy.espn.com/tc/sharer?challengeId=257&from=espn&context=GROUP_INVITE&edition=espn-en&groupId=0e234d31-a9cb-41e5-acce-4683e2b8ab46&joinKey=131b98da-c860-3f78-9484-f08c22a8abaa'
    },
    {
      title: 'Pay the league dues',
      bgImage: 'https://play-lh.googleusercontent.com/KIyfUzmb58ylhyUW6Ess82zfoSCib_wF1PJsZIwALjmqdBWLFQnO8htLFyZRKSx_XYg',
      href: 'https://www.leaguesafe.com/join/4287996'
    },
    {
      title: 'Join the WhatsApp',
      bgImage: '/alfaro.jpg',
      href: 'https://chat.whatsapp.com/F1ODsXktavh3PFVloBQp5s',
    },
  ];

  return (
    <Layout>
      <div className='grid grid-cols-5'>
        <div className='col-span-5 md:col-span-1' />
        <div className='col-span-5 md:col-span-3 relative w-full h-[150px] md:h-[290px]'>
          <NextImage
            src='/ryan_madness.png'
            layout='fill'
            alt='Ryan Madness'
            objectFit='contain'
          />
        </div>
        <div className='col-span-5 md:col-span-1' />
      </div>

      <Heading className='text-center mt-10 mx-24 hidden md:block' size='lg'>
        Ryan Meetup is back with their own Ryans-only March Madness bracket.
      </Heading>

      <Heading className='text-center mt-10 block md:hidden' size='md'>
        Ryan Meetup is back with their own Ryans-only March Madness bracket.
      </Heading>

      <Divider />

      <div className='grid grid-cols-3 gap-4'>
        {tiles.map((tile, index) => (
          <div key={tile.title} className='col-span-3 mb-4 md:col-span-1 md:mb-0'>
            <Heading className='text-center mb-2'>
              STEP {index + 1}
            </Heading>
            <LinkTile
              title={tile.title}
              bgImage={tile.bgImage}
              href={tile.href}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default MarchMadnessPage;
