// Components
import { Heading } from '@/components/global';

// Types
import type { FrequentlyAskedQuestion } from '@/lib/types';

type FAQProps = {
  data: FrequentlyAskedQuestion[];
};

const FAQ = (props: FAQProps) => {
  const { data } = props;

  return (
    <div>
      <Heading className='mb-4'>Frequently Asked Questions</Heading>

      <div>
        {data?.map((pair, index) => (
          <div key={index}>
            <>
              <div className='text-xl font-semibold tracking-wider mb-2 text-black dark:text-white'>
                {pair.question}
              </div>
              <div className='text-lg mb-10 text-gray-600 dark:text-gray-400'>
                {pair.answer}
              </div>
            </>
          </div>
        ))}
      </div>
    </div>
  );
};

export { FAQ };
