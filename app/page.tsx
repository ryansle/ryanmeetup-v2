// Components
import { Layout } from '@/components/navigation';
import { Landing, FAQ } from '@/components/home';
import { Divider } from '@/components/global';

// Types
import type { FrequentlyAskedQuestion } from '@/lib/types';

// Utilities
import { fetchFAQs } from '@/actions/fetchContent';

const fetchData = async () => {
  const res = await fetchFAQs();

  return res;
};

const HomePage = async () => {
  const faqs = await fetchData();

  return (
    <Layout>
      <Landing />
      <Divider margins='xl' />
      <FAQ data={faqs as FrequentlyAskedQuestion[]} />
    </Layout>
  );
};

export default HomePage;