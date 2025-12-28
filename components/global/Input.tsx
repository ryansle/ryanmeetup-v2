import { forwardRef } from "react";

// Types
import type { ChangeEvent } from "react";

type InputProps = {
  label: string;
  name: string;
  type?: "text" | "email" | "url" | "number";
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  ignoreColorMode?: boolean;
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
      ...rest
    } = props;

    return (
      <div className="flex flex-col gap-2">
        <label
          className={`text-xs font-semibold uppercase tracking-[0.3em] ${
            !ignoreColorMode ? "text-black/70 dark:text-white/70" : ""
          }`}
          htmlFor={name}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
          className="w-full rounded-lg border border-black/10 bg-white/80 px-4 py-2.5 text-sm text-black shadow-sm transition placeholder:text-black/40 focus:border-black/40 focus:outline-none focus:ring-2 focus:ring-black/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40 dark:focus:border-white/50 dark:focus:ring-white/10"
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
    );
  },
);

Input.displayName = "Input";

export { Input };
