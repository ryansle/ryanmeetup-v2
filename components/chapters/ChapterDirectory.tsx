"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { Input, Text } from "@/components/global";
import { FaMagnifyingGlass as Search } from "react-icons/fa6";
import { ChapterTile } from "@/components/chapters";
import type { RyanChapter } from "@/lib/types";

type ChapterDirectoryProps = {
  chapters: RyanChapter[];
  upcomingCities: string[];
};

const ChapterDirectory = (props: ChapterDirectoryProps) => {
  const { chapters, upcomingCities } = props;
  const [query, setQuery] = useState("");
  const [stateFilter, setStateFilter] = useState("all");
  const [onlyUpcoming, setOnlyUpcoming] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    if (!isPending) {
      setShowSkeleton(false);
      return;
    }

    const timer = window.setTimeout(() => {
      setShowSkeleton(true);
    }, 150);

    return () => window.clearTimeout(timer);
  }, [isPending]);

  const normalizedUpcoming = useMemo(
    () => new Set(upcomingCities.map((city) => city.toLowerCase())),
    [upcomingCities],
  );

  const stateOptions = useMemo(() => {
    const unique = new Set(
      chapters.map((chapter) => chapter.state).filter(Boolean),
    );
    return Array.from(unique).sort();
  }, [chapters]);

  const filteredChapters = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return chapters.filter((chapter) => {
      if (stateFilter !== "all" && chapter.state !== stateFilter) {
        return false;
      }

      if (
        onlyUpcoming &&
        !normalizedUpcoming.has((chapter.city ?? "").toLowerCase())
      ) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const city = chapter.city ?? "";
      const state = chapter.state ?? "";
      const combined = state ? `${city}, ${state}` : city;
      const haystack = [city, state, combined, chapter.slug]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [chapters, normalizedUpcoming, onlyUpcoming, query, stateFilter]);

  const handleClear = () => {
    startTransition(() => {
      setQuery("");
      setStateFilter("all");
      setOnlyUpcoming(false);
    });
  };

  return (
    <div className="space-y-6">
      <div className="mx-auto flex w-full flex-col gap-4 lg:flex-row lg:items-end">
        <div className="flex-1">
          <Input
            label="Search chapters"
            name="chapter-search"
            placeholder="Search by city or state..."
            leadingIcon={<Search className="h-4 w-4" />}
            onChange={(event) => {
              const value = event.target.value;
              startTransition(() => {
                setQuery(value);
              });
            }}
            value={query}
          />
        </div>
        <div className="flex flex-wrap items-end gap-3">
          <div className="flex flex-col gap-2">
            <label
              className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.2em] text-black/70 dark:text-white/70"
              htmlFor="chapter-state"
            >
              State
            </label>
            <select
              id="chapter-state"
              name="chapter-state"
              value={stateFilter}
              onChange={(event) => {
                const value = event.target.value;
                startTransition(() => {
                  setStateFilter(value);
                });
              }}
              className="h-11 rounded-lg border border-black/20 bg-white px-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/70 shadow-sm transition focus:border-black/40 focus:outline-none focus:ring-2 focus:ring-black/20 dark:border-white/20 dark:bg-white/10 dark:text-white/70 dark:focus:border-white/50 dark:focus:ring-white/20"
            >
              <option value="all">All states</option>
              {stateOptions.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            onClick={() =>
              startTransition(() => setOnlyUpcoming((value) => !value))
            }
            aria-pressed={onlyUpcoming}
            className={`h-11 rounded-lg border px-4 text-[11px] font-semibold uppercase tracking-[0.2em] transition ${
              onlyUpcoming
                ? "border-black/50 bg-black text-white dark:border-white/30 dark:bg-white dark:text-black"
                : "border-black/20 bg-white text-black/70 hover:border-black/40 hover:bg-black/5 dark:border-white/20 dark:bg-white/10 dark:text-white/70 dark:hover:border-white/40 dark:hover:bg-white/10"
            }`}
          >
            Has Upcoming Event(s)
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="h-11 rounded-lg border border-black/20 bg-white px-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/70 transition hover:border-black/40 hover:bg-black/5 dark:border-white/20 dark:bg-white/10 dark:text-white/70 dark:hover:border-white/40 dark:hover:bg-white/10"
          >
            Clear
          </button>
        </div>
      </div>

      {showSkeleton ? (
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={`chapter-skeleton-${index}`}
              className="h-32 rounded-2xl border border-black/10 bg-black/5 animate-pulse dark:border-white/10 dark:bg-white/10"
            />
          ))}
        </div>
      ) : filteredChapters.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-black/20 p-6 text-center dark:border-white/20">
          <Text className="text-sm uppercase tracking-[0.2em] text-black/60 dark:text-white/60">
            No chapters match your search.
          </Text>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-3 xl:grid-cols-4">
          {filteredChapters.map((chapter, index) => (
            <ChapterTile
              key={index}
              chapter={chapter}
              showBanner={normalizedUpcoming.has(chapter.city.toLowerCase())}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export { ChapterDirectory };
