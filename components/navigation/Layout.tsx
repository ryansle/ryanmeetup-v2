// Components
import { Header, Footer } from '@/components/navigation';

// Types
import type { ReactNode } from 'react';

type LayoutProps = {
  className?: string;
  children: ReactNode;
  fullscreen?: boolean;
};

const Layout = (props: LayoutProps) => {
  const { className, children, fullscreen = false } = props;

  return (
    <main>
      <Header />
      <section className={`${className} text-white h-full flex flex-col overflow-hidden bg-white from-white bg-gradient-to-b dark:from-neutral-900 to-neutral-00 dark:to-black ${fullscreen ? '' : 'py-8 px-4 lg:px-32 2xl:px-72 3xl:px-[400px] 4xl:px-[650px]'}`}>
        {children}
      </section>
      <Footer />
    </main>
  );
};

export { Layout };
