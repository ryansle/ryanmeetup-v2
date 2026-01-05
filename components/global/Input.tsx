import { forwardRef } from "react";

// Types
import type { ChangeEvent, ReactNode } from "react";

type InputProps = {
  label: string;
  name: string;
  type?: "text" | "email" | "url" | "number";
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  ignoreColorMode?: boolean;
  value?: string;
  leadingIcon?: ReactNode;
  trailingAction?: ReactNode;
  inputClassName?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    const {
      label,
      name,
      type = "text",
      onChange,
      placeholder,
      required = false,
      ignoreColorMode = false,
      leadingIcon,
      trailingAction,
      inputClassName,
      ...rest
    } = props;

    const iconPadding = leadingIcon ? "pl-10" : "";
    const actionPadding = trailingAction ? "pr-12" : "";

    return (
      <div className="flex flex-col gap-2">
        <label
          className={`inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] ${
            !ignoreColorMode ? "text-black/70 dark:text-white/70" : ""
          }`}
          htmlFor={name}
        >
          <span>{label}</span>
          {required && <span className="shrink-0 text-red-500">*</span>}
        </label>
        <div className="relative">
          {leadingIcon && (
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-black/50 dark:text-white/50">
              {leadingIcon}
            </span>
          )}
          {trailingAction && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              {trailingAction}
            </div>
          )}
          <input
            className={`w-full rounded-lg border border-black/20 bg-white px-4 py-2.5 text-sm text-black shadow-sm transition placeholder:text-black/50 focus:border-black/40 focus:outline-none focus:ring-2 focus:ring-black/20 dark:border-white/20 dark:bg-white/10 dark:text-white dark:placeholder:text-white/50 dark:focus:border-white/50 dark:focus:ring-white/20 ${iconPadding} ${actionPadding} ${inputClassName ?? ""}`}
            id={name}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            required={required}
            type={type}
            ref={ref}
            {...rest}
          />
        </div>
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
