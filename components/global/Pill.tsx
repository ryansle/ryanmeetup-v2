// Types
import type { ReactNode } from "react";

type PillProps = {
  children: ReactNode;
  className?: string;
};

const Pill = (props: PillProps) => {
  const { children, className } = props;

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border border-black/20 bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-black/80 shadow-sm dark:border-white/25 dark:bg-white/15 dark:text-white/85 ${className ?? ""}`}
    >
      {children}
    </span>
  );
};

export { Pill };
