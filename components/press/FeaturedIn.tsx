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
      title: 'ESPN',
      src: '/logos/press/espn.png',
      url: 'https://www.espn.com/mlb/story/_/id/45587300/colorado-rockies-ryan-record-meetup-coors-field',
    },
    {
      title: 'Major League Baseball',
      src: '/logos/press/mlb.png',
      url: 'https://www.mlb.com/rockies/news/ryan-mcmahon-rox-fall-to-d-backs-in-series-opener?t=rockies-pipeline-coverage',
    },
    {
      title: 'ABC News',
      src: `/logos/press/abc-${renderColor(theme as string)}.png`,
      url: 'https://abcnews.go.com/WNN/video/rytoberfest-weekend-104132029',
    },
    {
      title: 'CBS News',
      src: `/logos/press/cbs-${renderColor(theme as string)}.png`,
      url: 'https://www.cbsnews.com/losangeles/video/rallying-ryans-host-meet-ups-around-the-world/',
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
    {
      title: 'OutKick',
      src: `/logos/press/outkick-${renderColor(theme as string)}.png`,
      url: 'https://www.outkick.com/sports/rockies-players-named-ryan-shine-front-600-other-ryans-ryan-night-coors-field',
    },
    {
      title: 'The Denver Gazette',
      src: `/logos/press/denver-g-${renderColor(theme as string)}.png`,
      url: 'https://denvergazette.com/outtherecolorado/news/calling-all-people-named-ryan-heres-your-chance-to-unite-for-a-world-record/article_1117b211-9775-4149-af66-6266ba275aa6.html',
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
                className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto object-contain"
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