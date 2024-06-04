// Components
import { BryanChecker } from '@/components/global';

// Types
import type { Metadata } from 'next';

// Utilities
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://v2.ryanmeetup.com'),
  title: 'Ryan Meetup',
  description: 'Wanna meet other Ryans? Join the Ryan Meetup!',
  openGraph: {
    url: 'https://ryanmeetup.com',
    title: 'Ryan Meetup',
    description: 'Wanna meet other Ryans? Join the Ryan Meetup!',
    siteName: 'Ryan Meetup',
    images: '/ryanroundup.png',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <BryanChecker />
        {children}
      </body>
    </html>
  );
};
