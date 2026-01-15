// Components
import { Heading, Text } from "@/components/global";
import { RegionGrid } from "@/components/name-change/RegionGrid";

// Types
import type { RegionItem } from "@/components/name-change/regions";

type RegionSectionProps = {
  title: string;
  subtitle: string;
  items: RegionItem[];
  id?: string;
};

const RegionSection = (props: RegionSectionProps) => {
  const { title, subtitle, items, id } = props;

  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-4 flex items-center justify-between">
        <Heading className="text-2xl title sm:text-3xl" size="h2">
          {title}
        </Heading>
        <Text className="text-xs uppercase tracking-[0.2em] text-black/50 dark:text-white/50">
          {subtitle}
        </Text>
      </div>
      <RegionGrid items={items} />
    </section>
  );
};

export { RegionSection };
