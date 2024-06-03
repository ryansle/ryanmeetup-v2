// Types
import type { ChangeEvent } from 'react';

type InputProps = {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'url' | 'number';
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  required?: boolean;
};

const Input = (props: InputProps) => {
  const {
    label,
    name,
    type = 'text',
    onChange,
    value = '',
    placeholder,
    required = false,
    ...rest
  } = props;

  return (
    <div className='flex flex-col'>
      <label
        className='font-medium mb-1 text-base text-black dark:text-white'
        htmlFor={name}
      >
        {label} {required && <span className='text-red-500'>*</span>}
      </label>
      <input
        className='border h-10 bg-white dark:bg-black border-gray-700 dark:text-white text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 ring-inset placeholder-gray-700'
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required={required}
        type={type}
        {...rest}
      />
    </div>
  );
};

export { Input };
