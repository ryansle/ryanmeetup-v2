// Types
import type { ReactNode } from "react";

type BadgeVariant = "primary" | "secondary";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  variant?: BadgeVariant;
};

const baseTextStyles = "text-[10px] uppercase tracking-[0.35em]";

const variantStyles: Record<BadgeVariant, string> = {
  primary: "border-white/30 bg-black/60 text-white",
  secondary: "border-white/20 bg-black/50 text-white/90",
};

const Badge = (props: BadgeProps) => {
  const { children, className, variant = "primary" } = props;

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 ${baseTextStyles} ${variantStyles[variant]} ${className ?? ""}`}
    >
      {children}
    </span>
  );
};

export { Badge };
