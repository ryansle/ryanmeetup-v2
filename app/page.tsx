// Components
import { Layout } from '@/components/navigation';
import { Landing, FAQ } from '@/components/home';
import { Divider } from '@/components/global';
import { FeaturedIn } from '@/components/press';

// Types
import type { FrequentlyAskedQuestion } from '@/lib/types';

// Utilities
import { fetchFAQs } from '@/actions/fetchContent';

const HomePage = async () => {
  const faqs = await fetchFAQs();

  const homeFaqs = faqs.filter((faq) => faq.type === 'home');

  return (
    <Layout fullscreen>
      <div className='py-8 px-4 lg:px-32 2xl:px-56 3xl:px-[350px] 4xl:px-[500px]'>
        <Landing />
      </div>

      <FeaturedIn />

      <div className='px-4 lg:px-32 2xl:px-56 3xl:px-[350px] 4xl:px-[500px]'>
        <Divider margins='xl' />

        <FAQ
          showTitle
          data={homeFaqs as FrequentlyAskedQuestion[]}
        />
      </div>
    </Layout>
  );
};

export default HomePage;

export const revalidate = 30;