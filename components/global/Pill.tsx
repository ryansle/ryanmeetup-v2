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
      className={`inline-flex items-center justify-center rounded-full border border-black/10 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-black/70 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white/70 ${className ?? ""}`}
    >
      {children}
    </span>
  );
};

export { Pill };
