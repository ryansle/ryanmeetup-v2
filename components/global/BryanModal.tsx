"use client";

import { useState } from "react";

// Components
import { Modal } from "@/components/global";

// Utilities
import { useRouter } from "next/navigation";
import useLocalStorage from "@/hooks/useLocalStorage";

const BryanModal = () => {
  const localStorageKey = "bryanCheck";
  const checkboxId = "bryan-check";

  const [isChecked, handleChange] = useLocalStorage(localStorageKey, false);
  const [showModal, setShowModal] = useState<boolean>(true);

  const router = useRouter();

  return (
    <Modal
      open={showModal}
      setIsOpen={setShowModal}
      title="Welcome to the Ryan Meetup."
      closable={false}
      cancelButtonText="Leave"
      continueButtonText="Continue"
      isContinueDisabled={!isChecked}
      cancelAction={() => router.push("/goodbye")}
      continueAction={() => setShowModal(false)}
    >
      <div className="flex items-start gap-3 rounded-xl border border-black/10 bg-white/80 p-4 text-black/80 dark:border-white/15 dark:bg-white/10 dark:text-white/80">
        <input
          id={checkboxId}
          className="mt-1 h-4 w-4 rounded border border-black/20 text-black accent-black focus:ring-2 focus:ring-black/20 dark:border-white/30 dark:accent-white dark:focus:ring-white/20"
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        <label className="text-sm font-semibold tracking-wide" htmlFor={checkboxId}>
          I certify my name is not Bryan or Brian.
        </label>
      </div>
    </Modal>
  );
};

export { BryanModal };
