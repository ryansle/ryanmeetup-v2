"use client";

import { useState, useEffect } from "react";

// Components
import { Input, Text, Textarea, Button } from "@/components/global";
import { BiMailSend as Send } from "react-icons/bi";
import { Loader } from "@/components/contact";
import toast, { Toaster } from "react-hot-toast";
import { FaCheckCircle as Check } from "react-icons/fa";

// Types
import type { ReactNode } from "react";
import type { ContactFormFields } from "@/lib/types";

// Utilities
import { useForm } from "react-hook-form";
import { validateEmail } from "@/utils/validate";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  const [loading, setLoading] = useState<boolean>(false);
  const isTestMode = process.env.NEXT_PUBLIC_E2E_TESTS === "true";

  const send = (form: ContactFormFields) => {
    setLoading(true);

    const completeSend = () => {
      sendSuccessAlert();
      setLoading(false);
      reset();
      toggleErrorFlags();
    };

    if (isTestMode) {
      completeSend();
      return;
    }

    setTimeout(() => {
      const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
      const userId = process.env.NEXT_PUBLIC_EMAIL_USER_ID;
      const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;

      emailjs.send(serviceId as string, templateId as string, form, userId);
      completeSend();
    }, 1000);
  };

  const checkEmail = (email: string) => {
    const valid = validateEmail(email);

    if (valid) clearErrors("email");
    else setError("email", { message: "Error: invalid email address" });
  };

  const toggleErrorFlags = () => {
    setError("firstName", { message: "Error: must provide a first name" });
    setError("lastName", { message: "Error: must provide a last name" });
    setError("subject", { message: "Error: must provide a subject" });
    setError("message", { message: "Error: must provide a message" });
  };

  useEffect(() => {
    toggleErrorFlags();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendSuccessAlert = () =>
    toast((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 text-black grid grid-cols-12 p-4 -pb-1`}
      >
        <div className="col-span-1 flex items-center justify-center">
          <Check className="h-8 w-8 fill-green-500 shrink-0" />
        </div>
        <div className="col-span-10 pl-4 pr-6">
          <h1 className="text-lg text-semibold font-cooper">Email sent!</h1>
          <Text className="text-sm tracking-wide">
            Expect an email back from Ryan soon!
          </Text>
        </div>
      </div>
    ));

  return (
    <>
      <form className="w-full grid grid-cols-2 gap-x-8 gap-y-8 mb-4 border border-gray-700 p-8 rounded-xl bg-white dark:bg-black col-span-2 md:col-span-1">
        <div className="col-span-1">
          <Input
            label="First Name"
            placeholder="Ryan"
            required
            {...register("firstName", {
              onBlur: (event) =>
                event.target.value === ""
                  ? setError("firstName", {
                      message: "Error: must provide a first name",
                    })
                  : clearErrors("firstName"),
            })}
          />
        </div>

        <div className="col-span-1">
          <Input
            label="Last Name"
            placeholder="Smith"
            required
            {...register("lastName", {
              onBlur: (event) =>
                event.target.value === ""
                  ? setError("lastName", {
                      message: "Error: must provide a last name",
                    })
                  : clearErrors("lastName"),
            })}
          />
        </div>

        <div className="col-span-2 sm:col-span-1">
          <Input
            label="Email Address"
            placeholder="ryan@ryanmeetup.com"
            type="text"
            required
            {...register("email", {
              onBlur: (event) => checkEmail(event.target.value),
            })}
          />
          {errors.email && (
            <Text className="mt-2 text-red-500 text-sm">
              {errors.email.message as ReactNode}
            </Text>
          )}
        </div>

        <div className="col-span-2 sm:col-span-1">
          <Input
            label="Subject"
            placeholder="Official Ryan Business"
            required
            {...register("subject", {
              onBlur: (event) =>
                event.target.value === ""
                  ? setError("subject", {
                      message: "Error: must provide a subject",
                    })
                  : clearErrors("subject"),
            })}
          />
        </div>

        <div className="col-span-2">
          <Textarea
            id="message"
            label="Message"
            required
            {...register("message", {
              onBlur: (event) =>
                event.target.value === ""
                  ? setError("message", {
                      message: "Error: must provide a message",
                    })
                  : clearErrors("message"),
            })}
          />
        </div>

        <div className="col-span-2">
          <Button
            className="w-full"
            leftIcon={loading ? <Loader /> : <Send />}
            onClick={handleSubmit((data) => send(data as ContactFormFields))}
            disabled={Object.keys(errors).length !== 0}
          >
            {loading ? "Sending..." : "Send"}
          </Button>
        </div>
      </form>

      <Toaster position="bottom-center" />
    </>
  );
};

export { ContactForm };
