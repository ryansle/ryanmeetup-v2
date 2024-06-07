import { forwardRef } from 'react';

// Types
import type { ChangeEvent } from 'react';

type InputProps = {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'url' | 'number';
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  ignoreColorMode?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
  const {
    label,
    name,
    type = 'text',
    onChange,
    placeholder,
    required = false,
    ignoreColorMode = false,
  } = props;

  return (
    <div className='flex flex-col'>
      <label
        className={`font-medium mb-1 ${!ignoreColorMode && 'text-black dark:text-white'}`}
        htmlFor={name}
      >
        {label} {required && <span className='text-red-500'>*</span>}
      </label>
      <input
        className='border bg-white dark:bg-black border-gray-700 dark:text-white text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 ring-inset placeholder-gray-700 shadow-lg'
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        type={type}
        ref={ref}
      />
    </div>
  );
});

Input.displayName = 'Input';

export { Input };
