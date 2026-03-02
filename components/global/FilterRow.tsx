import type { ReactNode } from "react";

type FilterRowProps = {
  children: ReactNode;
  className?: string;
};

const FilterRow = (props: FilterRowProps) => {
  const { children, className } = props;

  return (
    <div className={`flex w-full flex-col gap-4 lg:flex-row lg:items-end ${className ?? ""}`}>
      {children}
    </div>
  );
};

export { FilterRow };
