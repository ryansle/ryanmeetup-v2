"use client";

// Components
import { Heading, Text } from "@/components/global";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { FaChevronDown as ChevronDown } from "react-icons/fa";

// Types
import type { FrequentlyAskedQuestion } from "@/lib/types";

type FAQProps = {
  data: FrequentlyAskedQuestion[];
  toggleable?: boolean;
  showTitle?: boolean;
};

const FAQ = (props: FAQProps) => {
  const { data, toggleable = false, showTitle = false } = props;

  return (
    <section className="relative overflow-hidden p-6 dark:bg-black">
      <div className="relative">
        {showTitle && (
          <div className="mx-auto mb-8 text-center">
            <Heading className="mt-4 text-4xl title sm:text-5xl">
              Frequently asked questions
            </Heading>
            <Text className="mt-3 text-base text-black/70 dark:text-white/70">
              Everything you&apos;re probably wondering before meeting up with other Ryans.
            </Text>
          </div>
        )}

        <div className="space-y-4">
          {data?.map((pair, index) =>
            toggleable ? (
              <Disclosure
                as="div"
                className="rounded-2xl border border-black/10 bg-white/80 p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
                key={index}
              >
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex w-full items-center justify-between gap-4 text-left text-lg font-semibold tracking-wider text-black transition hover:opacity-80 dark:text-white">
                      <span>{pair.question}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition ${open && "-rotate-180"}`}
                      />
                    </DisclosureButton>
                    <div className="overflow-hidden">
                      <Transition
                        enter="duration-200 ease-in-out"
                        enterFrom="opacity-0 -translate-y-4"
                        enterTo="opacity-100 translate-y-0"
                        leave="duration-200 ease-in-out"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-4"
                      >
                        <DisclosurePanel className="origin-top pt-3">
                          <Text className="text-sm text-black/70 dark:text-white/70">
                            {pair.answer}
                          </Text>
                        </DisclosurePanel>
                      </Transition>
                    </div>
                  </>
                )}
              </Disclosure>
            ) : (
              <div
                key={index}
                className="rounded-2xl border border-black/10 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
              >
                <div className="text-xl font-semibold tracking-wider text-black dark:text-white">
                  {pair.question}
                </div>
                <div className="mt-2 text-lg text-black/70 dark:text-white/70">
                  {pair.answer}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export { FAQ };
