// Components
import { Layout } from '@/components/navigation';
import { Landing, FAQ } from '@/components/home';
import { Divider } from '@/components/global';

// Utilities
import { fetchFAQs } from '@/data/fetch';

async function fetchData() {
  const res = await fetchFAQs();
  console.log(res);

  return res;
};

const HomePage = () => {
  const faqs = fetchFAQs();

  return (
    <Layout>
      <Landing />
      <Divider margins='xl' />
      {/* <FAQ /> */}
    </Layout>
  );
};

export default HomePage;