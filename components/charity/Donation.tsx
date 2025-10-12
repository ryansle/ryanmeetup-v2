// Components
import NextLink from "next/link";

// Types
import type { Charity } from "@/lib/types";

type DonationProps = {
  donation: Charity;
  color: string;
};

const Donation = (props: DonationProps) => {
  const { donation, color } = props;

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
    <article className="relative overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 md:p-8">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `conic-gradient(from_140deg, ${color}33, transparent 65%)`,
        }}
      />
      <div className="relative">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
          {donation.title}
        </h2>
        <p
          className={`mt-2 text-4xl md:text-5xl font-extrabold tabular-nums ${color}`}
        >
          {fmt(parseCurrency(donation.amount))}{" "}
          <span className="mt-1 text-white/70 text-sm font-normal">
            Raised to date
          </span>
        </p>
        <div className="mt-6 flex gap-3">
          <NextLink
            href={donation.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-white text-neutral-900 px-4 py-2.5 font-semibold hover:bg-white/90 transition"
          >
            See organization
          </NextLink>
        </div>
      </div>
    </article>
  );
};

export { Donation };
