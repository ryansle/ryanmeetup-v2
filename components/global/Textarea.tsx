import { forwardRef } from "react";

// Types
import type { ChangeEvent } from "react";

type TextareaProps = {
  id: string;
  label: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props: TextareaProps, ref) => {
    const {
      id,
      label,
      name,
      onChange,
      placeholder,
      required,
      rows = 5,
      ...rest
    } = props;

    return (
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold uppercase tracking-[0.3em] text-black/70 dark:text-white/70" htmlFor={name}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <textarea
          className="w-full rounded-lg border border-black/20 bg-white px-4 py-2.5 text-sm text-black shadow-sm transition placeholder:text-black/50 focus:border-black/40 focus:outline-none focus:ring-2 focus:ring-black/20 dark:border-white/20 dark:bg-white/10 dark:text-white dark:placeholder:text-white/50 dark:focus:border-white/50 dark:focus:ring-white/20"
          id={id}
          name={id}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          rows={rows}
          {...rest}
          ref={ref}
        />
      </div>
    );
  },
);

Textarea.displayName = "Textarea";

export { Textarea };
