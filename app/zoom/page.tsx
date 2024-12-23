// Types
import type { Metadata } from 'next';

// Utilities
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Ryan Meetup - Zoom',
  description: 'Ryan Meetup Zoom Call',
  openGraph: {
    url: 'https://ryanmeetup.com/zoom',
    title: 'Ryan Meetup - Zoom',
    description: 'Ryan Meetup Zoom Call',
    siteName: 'Ryan Meetup',
    images: [
      {
        url: 'https://ryanmeetup.com/donate.webp',
        width: 1000,
        height: 714,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const ZoomPageRedirect = () => {
  redirect('https://us05web.zoom.us/j/81333707942?pwd=2KfPNXHOzDcKkRiOway1efcTk1e9TF.1');
};

export default ZoomPageRedirect;
