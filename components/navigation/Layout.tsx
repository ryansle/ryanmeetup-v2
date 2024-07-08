'use client';

// Components
import { Header, Footer, Banner } from '@/components/navigation';

// Types
import type { ReactNode } from 'react';

type LayoutProps = {
  className?: string;
  children: ReactNode;
  fullscreen?: boolean;
  tickets?: {
    ticketsRemaining: number;
  };
};

const Layout = (props: LayoutProps) => {
  const { className, children, fullscreen = false, tickets } = props;

  return (
    <main>
      <Banner tickets={tickets?.ticketsRemaining ?? 0} />
      <Header />
      <section className={`${className} text-white h-full flex flex-col overflow-hidden bg-white from-white bg-gradient-to-b from-neutral-00 to-neutral-200 dark:from-neutral-900 to-neutral-00 dark:to-black ${fullscreen ? '' : 'py-8 px-4 lg:px-32 2xl:px-56 3xl:px-[350px] 4xl:px-[500px]'}`}>
        {children}
      </section>
      <Footer />
    </main>
  );
};

export { Layout };
