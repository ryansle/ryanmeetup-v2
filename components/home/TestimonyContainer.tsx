// Components
import { Testimony } from "@/components/home";
import { Heading } from "@/components/global";

// Types
import { Testimonial } from "@/lib/types";

type TestimonyContainerProps = {
  testimonies: Testimonial[];
};

const TestimonyContainer = (props: TestimonyContainerProps) => {
  const { testimonies } = props;

  return (
    <section>
      <Heading className="text-center text-4xl mb-8 title" size="h4">
        Hear what Ryans have to say about the Ryan Meetup:
      </Heading>

      <div className="columns-1 sm:columns-2 xl:columns-3">
        {testimonies.map((item) => (
          <Testimony key={item.lastName} testimony={item} />
        ))}
      </div>
    </section>
  );
};

export { TestimonyContainer };
