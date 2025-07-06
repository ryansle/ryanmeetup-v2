// Components
import NextLink from 'next/link';
import { Heading, Divider } from '@/components/global';

// Utilities
import { socials } from '@/lib/constants';

const NewFooter = () => {
  return (
    <footer className='bg-white dark:bg-black relative bottom-0 border-t border-gray-700 py-8 px-4 lg:px-32 2xl:px-56 3xl:px-[350px] 4xl:px-[500px]'>
      <div className='flex flex-col justify-between xl:flex-row'>
        {/* LEFT COLUMN */}
        <div className='timing hover:scale-105 mb-8 xl:mb-0'>
          <NextLink href='/'>
            <Heading 
              className='text-4xl text-center sm:text-left xl:text-6xl xl:text-center'
              size='h1'
            >
              RYAN MEETUP
            </Heading>

            <Heading 
              className='mt-[2px] uppercase font-cooper text-lg text-center sm:text-left xl:text-3xl xl:text-center'
              size='h2'
            >
              NO BRYANS ALLOWED
            </Heading>
          </NextLink>
        </div>

        {/* RIGHT COLUMN */}
        <div className='grid grid-cols-4 space-x-8'>
          <div className='col-span-1'>
            <h2 className='mb-6 text-xs font-semibold text-gray-900 uppercase text-black dark:text-white sm:text-sm'>
              Follow us
            </h2>
            <ul className='text-gray-600 font-medium space-y-2'>
              {socials.map((social) => (
                <li key={social.text}>
                  <NextLink href={social.href} className='hover:underline'>
                    {social.text}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>
          <div className='col-span-3'>
            <h2 className='mb-6 text-xs font-semibold text-gray-900 uppercase text-black dark:text-white sm:text-sm'>
              Built With
            </h2>
            <div className='grid grid-cols-2 space-x-4'>
              <div className='col-span-1'>
                <ul className='text-gray-600 font-medium'>
                  <li className='mb-2'>
                    <NextLink href='https://vercel.com' className='hover:underline'>
                      Vercel
                    </NextLink>
                  </li>
                  <li className='mb-2'>
                    <NextLink href='https://nextjs.org/' className='hover:underline'>
                      Next.js 14
                    </NextLink>
                  </li>
                  <li className='mb-2'>
                    <NextLink href='https://react.dev/' className='hover:underline'>
                      React.js
                    </NextLink>
                  </li>
                  <li className='mb-2'>
                    <NextLink href='https://tailwindcss.com/' className='hover:underline'>
                      Tailwind CSS
                    </NextLink>
                  </li>
                </ul>
              </div>
              <div className='col-span-1'>
                <ul className='text-gray-600 font-medium'>
                  <li className='mb-2'>
                    <NextLink href='https://headlessui.com/' className='hover:underline'>
                      Headless UI
                    </NextLink>
                  </li>
                  <li className='mb-2'>
                    <NextLink href='https://www.contentful.com/' className='hover:underline'>
                      Contentful
                    </NextLink>
                  </li>
                  <li className='mb-2'>
                    <NextLink href='https://www.mapbox.com/' className='hover:underline'>
                      Mapbox
                    </NextLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Divider margins='lg'/>

      <div className='sm:flex sm:items-center sm:justify-between'>
        <span className='text-sm text-gray-600 sm:text-center'>
          Website designed and developed by <NextLink href='https://ryanle.dev/' className='font-bold underline hover:text-white'>Ryan Le</NextLink>. All Rights Reserved.
        </span>

        {/* Socials */}
        <div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0'>
          {socials.map((channel, index) => (
            <NextLink
              key={index}
              href={channel.href}
              aria-label={channel.text}
            >
              {channel.icon}
            </NextLink>
          ))}
        </div>
      </div>
    </footer>
  );
};

export { NewFooter };
