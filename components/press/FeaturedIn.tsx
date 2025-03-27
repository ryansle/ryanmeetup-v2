'use client';

// Components
import NextImage from 'next/image';
import NextLink from 'next/link';
import Marquee from 'react-fast-marquee';

// Utilities
import { useTheme } from 'next-themes';

const FeaturedIn = () => {
  const { theme } = useTheme();

  const renderColor = (theme: string) => {
    if (theme === 'light') return 'black';
    else return 'white';
  }

  const outlets = [
    {
      title: 'New York Times',
      src: `/logos/press/nyt-${renderColor(theme as string)}.png`,
      url: 'https://www.nytimes.com/2023/03/28/nyregion/ryan-meetup-nyc.html',
    },
    {
      title: 'Los Angeles Times',
      src: `/logos/press/lat-${renderColor(theme as string)}.png`,
      url: 'https://www.latimes.com/california/newsletter/2023-09-11/at-the-dumb-and-wholesome-ryan-rave-everyone-belongs-and-everyones-ryan-essential-california',
    },
    {
      title: 'ABC News',
      src: `/logos/press/abc-${renderColor(theme as string)}.png`,
      url: 'https://abcnews.go.com/WNN/video/rytoberfest-weekend-104132029',
    },
    {
      title: 'New York Post',
      src: '/logos/press/nyp.png',
      url: 'https://nypost.com/2023/10/17/brooklyns-ryan-society-has-raves-and-bizarre-rules/',
    },
    {
      title: 'NBC News',
      src: `/logos/press/nbc-${renderColor(theme as string)}.png`,
      url: 'https://www.nbcboston.com/local/st-patricks-day-has-nothing-on-st-ryans-day/3665711/',
    },
    {
      title: 'IrishCentral',
      src: `/logos/press/irish-${renderColor(theme as string)}.png`,
      url: 'https://www.irishcentral.com/culture/ryan-meetup',
    },
    {
      title: 'The Times',
      src: `/logos/press/times-${renderColor(theme as string)}.png`,
      url: 'https://www.thetimes.co.uk/article/the-ryans-of-america-have-a-club-and-they-really-hate-bryans-6hqpz2gb7',
    },
    {
      title: 'TV Insider',
      src: `/logos/press/tvinsider-${renderColor(theme as string)}.png`,
      url: 'https://www.tvinsider.com/1181795/the-price-is-right-drew-carey-snub-ryan-seacrest/',
    },
  ];

  return (
    <div className='mt-4'>
      <Marquee speed={50} gradient={false}>
        {outlets.map((outlet, idx) => (
          <div key={idx} className="mx-8 flex items-center justify-center">
            <NextLink href={outlet.url} className='timing hover:scale-105'>
              <NextImage
                src={outlet.src}
                alt={outlet.title}
                width={0}
                height={40}
                className="h-20 w-auto object-contain"
                sizes="(max-width: 768px) 100px, 300px"
              />
            </NextLink>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export { FeaturedIn };