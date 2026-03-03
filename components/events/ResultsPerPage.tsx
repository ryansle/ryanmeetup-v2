"use client";

type ResultsPerPageProps = {
  value: number;
  options: number[];
  onChange: (value: number) => void;
};

const ResultsPerPage = (props: ResultsPerPageProps) => {
  const { value, options, onChange } = props;

  return (
    <label className="inline-flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/70 dark:text-white/70">
      Results per page
      <select
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-9 rounded-full border border-black/20 bg-white/80 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/70 shadow-sm transition hover:border-black/40 dark:border-white/20 dark:bg-white/10 dark:text-white/70 dark:hover:border-white/40"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
};

export { ResultsPerPage };
