// Components
import NextLink from "next/link";
import NextImage from "next/image";
import { Text } from "@/components/global";

// Types
import type { Charity } from "@/lib/types";

// Utilities
import { convertImageUrl } from "@/utils/convert";

type DonationProps = {
  donation: Charity;
  color: string;
};

const Donation = (props: DonationProps) => {
  const { donation, color } = props;

  const { title, amount, href, avatars, hrefs } = donation;

  const parseCurrency = (amount: string) => {
    return parseFloat(amount.replace(/[^0-9.-]+/g, ""));
  };

  const fmt = (n: number) =>
    n.toLocaleString(undefined, {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });

  return (
    <article className="relative h-full overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 sm:p-6 md:p-8 flex flex-col">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `conic-gradient(from_140deg, ${color}33, transparent 65%)`,
        }}
      />
      <div className="relative flex h-full flex-col">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight">
          {title}
        </h2>
        <div className="flex flex-1 items-center">
          <Text
            className={`flex flex-wrap items-baseline gap-x-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tabular-nums ${color}`}
          >
            <span className="whitespace-nowrap">
              {fmt(parseCurrency(amount))}
            </span>
            <span className="text-white/70 text-sm font-normal text-lg whitespace-nowrap mt-4 xl:mt-0">
              Raised to date
            </span>
          </Text>
        </div>
        <div className="mt-5 sm:mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <NextLink
            href={href}
            target="_blank"
            rel="noreferrer"
            className="order-2 sm:order-none w-full sm:w-auto text-center rounded-lg bg-white text-neutral-900 px-4 py-2.5 font-semibold hover:bg-white/90 transition"
          >
            See organization
          </NextLink>

          {avatars && hrefs && (
            <div className="order-1 sm:order-none flex flex-wrap justify-start gap-2 sm:flex-nowrap sm:justify-end gap-0 -space-x-2">
              {avatars.map((avatar, index) => (
                <NextLink
                  key={index}
                  href={hrefs[index]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="w-8 h-8 rounded-full ring-2 relative overflow-hidden timing hover:scale-110 ring-white/20">
                    <NextImage
                      src={convertImageUrl(avatar) || "/ryanavatar.png"}
                      alt={avatar.fields.title}
                      className="object-cover"
                      fill
                      sizes="(min-width: 640px) 40px, 36px"
                    />
                  </div>
                </NextLink>
              ))}
            </div>
          )}  
        </div>
      </div>
    </article>
  );
};

export { Donation };
