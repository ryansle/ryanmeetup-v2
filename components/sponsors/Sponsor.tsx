// Components
import NextImage from "next/image";
import NextLink from "next/link";

// Types
import type { Sponsor } from "@/lib/types";

// Utilities
import { convertImageUrl } from "@/utils/convert";
import { useTheme } from "next-themes";

type SponsorProps = {
  sponsor: Sponsor;
  className?: string;
};

const Sponsor = (props: SponsorProps) => {
  const { name, darkModeImage, lightModeImage, href } = props.sponsor;
  const { className } = props;

  const { theme } = useTheme();

  return (
    <NextLink
      href={href}
      className={`group flex w-full ${className}`}
    >
      <div className="w-full rounded-2xl border border-black/10 bg-white/80 p-6 text-center shadow-sm transition group-hover:-translate-y-1 group-hover:border-black/30 dark:border-white/10 dark:bg-white/5 dark:group-hover:border-white/40">
        <div className="relative mx-auto h-48 w-full max-w-[660px] sm:h-[216px]">
          <NextImage
            src={
              theme === "light"
                ? (convertImageUrl(lightModeImage) as string)
                : (convertImageUrl(darkModeImage) as string)
            }
            fill
            alt={name}
            className="object-contain"
            sizes="(min-width: 1280px) 660px, (min-width: 640px) 540px, 480px"
          />
        </div>
      </div>
    </NextLink>
  );
};

export { Sponsor };
