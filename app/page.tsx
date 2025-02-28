// Components
import { Layout } from '@/components/navigation';
import { Landing, FAQ } from '@/components/home';
import { Divider } from '@/components/global';

// Types
import type { FrequentlyAskedQuestion } from '@/lib/types';

// Utilities
import { fetchFAQs } from '@/actions/fetchContent';

const HomePage = async () => {
  const faqs = await fetchFAQs();

  const homeFaqs = faqs.filter((faq) => faq.type === 'home');

  return (
    <Layout>
      <Landing />
      <Divider margins='xl' />
      <FAQ
        showTitle
        data={homeFaqs as FrequentlyAskedQuestion[]}
      />
    </Layout>
  );
};

export default HomePage;

export const revalidate = 30;