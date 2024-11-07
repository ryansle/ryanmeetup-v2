// Types
import type { Metadata } from 'next';

// Utilities
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Ryan Meetup - WhatsApp',
  description: 'Join the official Ryan Meetup WhatsApp group.',
  keywords: ['ryan meetup whatsapp', 'ryan whatsapp'],
  openGraph: {
    url: 'https://ryanmeetup.com/whatsapp',
    title: 'Ryan Meetup - WhatsApp',
    description: 'Join the official Ryan Meetup WhatsApp group.',
    siteName: 'Ryan Meetup',
    images: [
      {
        url: '/ryankickoff.png',
        width: 1600,
        height: 800,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const WhatsAppRedirectPage = () => {
  redirect('https://chat.whatsapp.com/I1FQfjPokiMIQaHgqOoisW');
};

export default WhatsAppRedirectPage;
