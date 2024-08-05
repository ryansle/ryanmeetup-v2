// Components
import { Layout } from '@/components/navigation';
import { Landing, FAQ } from '@/components/home';
import { Divider } from '@/components/global';

// Types
import type { FrequentlyAskedQuestion, Ticket } from '@/lib/types';

// Utilities
import { fetchFAQs } from '@/actions/fetchContent';

const HomePage = async () => {
  const faqs = await fetchFAQs();

  return (
    <Layout>
      <Landing />
      <Divider margins='xl' />
      <FAQ data={faqs as FrequentlyAskedQuestion[]} />
    </Layout>
  );
};

export default HomePage;

export const revalidate = 30;