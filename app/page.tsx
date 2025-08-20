// Components
import { Layout } from '@/components/navigation';
import { Landing, FAQ, TestimonyContainer } from '@/components/home';
import { Divider, Heading } from '@/components/global';

// Types
import type { 
  FrequentlyAskedQuestion, 
  Sponsor, 
  Testimonial 
} from '@/lib/types';

// Utilities
import { 
  fetchFAQs, 
  fetchSponsors, 
  fetchTestimonies 
} from '@/actions/fetchContent';
import { SponsorCarousel } from '@/components/sponsors';

const HomePage = async () => {
  const faqs = await fetchFAQs();
  const sponsors = await fetchSponsors();
  const testimonies = await fetchTestimonies();

  const homeFaqs = faqs.filter((faq) => faq.type === 'home');

  return (
    <Layout fullscreen>
      <div className='py-8 px-4 lg:px-32 2xl:px-56 3xl:px-[350px] 4xl:px-[500px]'>
        <Landing />

        <Divider margins='xl' />

        <Heading className='text-center text-4xl title' size='h4'>
          Ryan Meetup has been supported by Ryans at:
        </Heading>
      </div>

      <SponsorCarousel sponsors={sponsors as Sponsor[]} />

      <div className='px-4 lg:px-32 2xl:px-56 3xl:px-[350px] 4xl:px-[500px]'>
        <Divider margins='xl' />

        <TestimonyContainer testimonies={testimonies as Testimonial[]} />

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

export const revalidate = 300;