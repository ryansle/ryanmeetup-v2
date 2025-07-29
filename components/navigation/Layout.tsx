'use client';

import { useState, useEffect } from 'react';

// Components
import { Banner, Header, NewFooter } from '@/components/navigation';
import { useTheme } from 'next-themes';

// Types
import type { ReactNode } from 'react';

type LayoutProps = {
  className?: string;
  children: ReactNode;
  fullscreen?: boolean;
};

const Layout = (props: LayoutProps) => {
  const { className, children, fullscreen = false } = props;

  const { theme } = useTheme();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main>
      <Banner />
      <Header />
      <section 
        className={`${className} 
                    text-white h-full flex flex-col 
                    ${isClient && theme === 'light' ? "bg-[url('/crumbled.png')] bg-repeat bg-cover bg-white" : 'bg-white from-white bg-gradient-to-b from-neutral-00 to-neutral-200 to-neutral-00 dark:from-neutral-900 dark:to-black'} 
                    ${fullscreen ? '' : 'py-8 px-4 lg:px-32 2xl:px-56 3xl:px-[350px] 4xl:px-[500px]'}`}
      >
        {children}
      </section>
      <NewFooter />
    </main>
  );
};

export { Layout };
