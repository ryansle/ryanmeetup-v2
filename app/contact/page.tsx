// Components
import { Layout } from '@/components/navigation';
import { Heading, Text } from '@/components/global';
import { ContactForm } from '@/components/contact';

const ContactPage = () => {
  return (
    <Layout className='space-y-6'>
      <Heading>Contact the Ryans</Heading>

      <Text size='lg'>
        One of our Ryans will get back to you as soon as we can.
      </Text>

      <ContactForm />
    </Layout>
  );
};

export default ContactPage;