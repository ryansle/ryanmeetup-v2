'use client';

// Components
import { Heading } from '@/components/global';
import { RouteMenu, ThemeToggle } from '@/components/navigation';
import NextLink from 'next/link';
import { MobileMenu } from '@/components/navigation';

// Utilities
import { usePathname } from 'next/navigation';
import { routes } from '@/lib/constants';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className='flex justify-between items-center py-5 px-4 border-b border-gray-400 dark:border-gray-700 bg-white dark:bg-black sticky relative top-0 right-0 left-0 z-20 lg:px-32 2xl:px-56 3xl:px-[350px] 4xl:px-[500px]'>
      <NextLink
        href='/'
        className='text-black dark:text-white timing hover:scale-105'
      >
        <Heading>RYAN</Heading>
      </NextLink>

      <div className='hidden 2xl:flex space-x-4 overflow-y-scroll'>
        {routes.map((route) => !route.subroutes ? (
          <NextLink
            key={route.text}
            className={`${route.href.includes(pathname) && pathname !== '/' && 'bg-gray-300 dark:bg-gray-800'} text-sm flex items-center font-semibold rounded-lg text-black tracking-wide gap-x-2 px-2 py-1 border border-white dark:border-black timing hover:border hover:border-gray-700 2xl:text-base dark:text-white`}
            href={route.href}
          >
            {route.icon} {route.text}
          </NextLink>
        ) : (
          <RouteMenu
            key={route.text}
            icon={route.icon}
            title={route.text}
            routes={route.subroutes}
            pathname={pathname}
          />
        ))}

        <ThemeToggle />
      </div>

      <div className='flex gap-x-4 2xl:hidden'>
        <MobileMenu content={routes} />
        <ThemeToggle />
      </div>
    </header>
  );
};

export { Header };
