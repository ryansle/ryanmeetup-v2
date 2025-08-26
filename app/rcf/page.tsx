// Types
import type { Metadata } from 'next';

// Utilities
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Donate to the Ryan Callahan Foundation',
  description: 'Ryan Meetup is partnering up with the Ryan Callahan Foundation to raise money for pediatric cancer care.',
  keywords: ['ryan meetup charity', 'ryan meetup', 'ryan callahan foundation', 'ryan meetup ryan callahan', 'ryan meetup donate', 'ryan meetup charity effort', 'ryans giving back', 'ryans donate', 'ryan cancer'],
  openGraph: {
    url: 'https://ryanmeetup.com/rcf',
    title: 'Donate to the Ryan Callahan Foundation',
    description: 'Ryan Meetup is partnering up with the Ryan Callahan Foundation to raise money for pediatric cancer care.',
    siteName: 'Ryan Meetup',
    images: [
      {
        url: 'https://ryanmeetup.com/RCF.png',
        width: 1350,
        height: 840,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const RCFPage = () => {
  redirect('https://us.givergy.com/rytoberfest');
};

export default RCFPage;
