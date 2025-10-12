// Utilities
import clsx from "clsx";

// Types
import type { ReactNode } from "react";

type TextProps = {
  className?: string;
  children: ReactNode;
};

const Text = (props: TextProps) => {
  const { className, children } = props;

  return <p className={`${className} tracking-wide font-medium`}>{children}</p>;
};

export { Text };
