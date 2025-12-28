// Components
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { MdClose as Close } from "react-icons/md";

// Types
import type { ReactNode } from "react";

type ModalProps = {
  open: boolean;
  setIsOpen: (open: boolean) => void;
  title: string;
  closable: boolean;
  children: ReactNode;
  cancelButtonText: string;
  continueButtonText: string;
  isContinueDisabled: boolean;
  cancelAction: () => void;
  continueAction: () => void;
};

const Modal = (props: ModalProps) => {
  const {
    open,
    setIsOpen,
    title,
    closable,
    children,
    cancelButtonText,
    continueButtonText,
    isContinueDisabled,
    cancelAction,
    continueAction,
  } = props;

  return (
    <Dialog
      open={open}
      onClose={() => setIsOpen(false)}
      className="relative z-50 text-black border"
    >
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4 w-screen">
        <DialogPanel className="mx-auto w-[500px] rounded-2xl bg-white flex flex-col p-4 border border-gray-700 ">
          <div className="flex justify-between w-full mb-4">
            <DialogTitle className="font-semibold text-xl font-cooper md:text-2xl">
              {title}
            </DialogTitle>

            {closable && (
              <button className="w-6 h-6" onClick={() => setIsOpen(false)}>
                <Close className="w-6 h-6" />
              </button>
            )}
          </div>

          <div>
            {children}

            <div className="flex space-x-4 mt-4 font-cooper">
              <button
                className="border rounded-lg w-full py-2 border-gray-700 uppercase"
                onClick={cancelAction}
              >
                {cancelButtonText}
              </button>

              <button
                className="border rounded-lg w-full py-2 border-gray-700 uppercase bg-black text-white disabled:text-gray-400 disabled:cursor-not-allowed"
                disabled={isContinueDisabled}
                onClick={continueAction}
              >
                {continueButtonText}
              </button>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export { Modal };
