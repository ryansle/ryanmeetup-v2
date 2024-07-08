// Components
import { Layout } from '@/components/navigation';
import { Landing, FAQ } from '@/components/home';
import { Divider } from '@/components/global';

// Types
import type { FrequentlyAskedQuestion, Ticket } from '@/lib/types';

// Utilities
import { fetchFAQs, fetchRyanTickets } from '@/actions/fetchContent';

const HomePage = async () => {
  const faqs = await fetchFAQs();
  const tickets = await fetchRyanTickets();

  return (
    <Layout tickets={tickets as Ticket}>
      <Landing />
      <Divider margins='xl' />
      <FAQ data={faqs as FrequentlyAskedQuestion[]} />
    </Layout>
  );
};

export default HomePage;