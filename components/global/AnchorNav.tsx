import type { ReactNode } from "react";

type AnchorNavItem = {
  href: string;
  icon: ReactNode;
  tooltip: string;
};

type AnchorNavProps = {
  items: AnchorNavItem[];
  className?: string;
};

const AnchorNav = (props: AnchorNavProps) => {
  const { items, className } = props;

  const anchorStyle =
    "group flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/90 text-black shadow-sm transition hover:-translate-y-1 hover:border-black/30 dark:border-white/15 dark:bg-black dark:text-white dark:hover:border-white/40";

  return (
    <div
      className={[
        "fixed bottom-4 right-1 z-50 flex flex-col gap-3 lg:bottom-8 lg:right-24",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {items.map((item) => (
        <div key={item.href} className="relative group">
          <a href={item.href} className={anchorStyle}>
            {item.icon}
          </a>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-black px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-white opacity-0 transition group-hover:opacity-100 dark:bg-white dark:text-black">
            {item.tooltip}
          </span>
        </div>
      ))}
    </div>
  );
};

export { AnchorNav };
