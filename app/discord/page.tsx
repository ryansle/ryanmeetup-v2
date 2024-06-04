// Types
import type { Metadata } from 'next';

// Utilities
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Ryan Meetup - Discord',
  description: 'Join the official Ryan Meetup Discord server.',
  keywords: ['ryan meetup discord', 'ryan discord'],
  openGraph: {
    url: 'https://ryanmeetup.com/discord',
    title: 'Ryan Meetup - Discord',
    description: 'Join the official Ryan Meetup Discord server.',
    siteName: 'Ryan Meetup',
    images: ['/discord.png'],
    locale: 'en_US',
    type: 'website',
  },
};

const DiscordRedirectPage = () => {
  redirect('https://discord.gg/HDugzYSHKC');
};

export default DiscordRedirectPage;
