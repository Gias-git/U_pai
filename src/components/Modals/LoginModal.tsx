"use client";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import Image from "next/image";
import { FC, Fragment } from "react";
import { FaGoogle, FaLinkedinIn, FaTimes } from "react-icons/fa";

interface LoginModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginModal: FC<LoginModalProps> = ({ isOpen, setIsOpen }) => {
  const close = (): void => {
    setIsOpen(false);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={close}>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <DialogPanel className="w-full max-w-4xl rounded-xl bg-white shadow-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Left Side */}
                    <div className="hidden md:flex flex-col items-center justify-center bg-gray-50 p-12 rounded-l-xl">
                      <Image
                        src="https://i.ibb.co/gMPYKwxr/flat-design-illustration-customer-support-23-2148887720.jpg"
                        alt="Instant Support"
                        width={192}
                        height={192}
                      />
                      <h3 className="mt-6 text-xl font-semibold text-gray-800">
                        Instant support & reply
                      </h3>
                      <p className="mt-2 text-center text-sm text-gray-500">
                        Arogga will receive your order and be able to reply to
                        you once you place an order and ask for help.
                      </p>
                      <div className="mt-6 flex space-x-2">
                        <span className="h-2 w-2 rounded-full bg-gray-300" />
                        <span className="h-2 w-2 rounded-full bg-teal-500" />
                        <span className="h-2 w-2 rounded-full bg-gray-300" />
                      </div>
                    </div>

                    {/* Right Side */}
                    <div className="relative flex flex-col justify-center p-8 md:p-12">
                      <button
                        onClick={close}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                        aria-label="Close Login Modal"
                      >
                        <FaTimes size={20} />
                      </button>

                      <DialogTitle
                        as="h3"
                        className="text-2xl font-bold text-gray-900"
                      >
                        Login
                      </DialogTitle>
                      <p className="mt-2 text-sm text-gray-600">
                        Login to make an order, access your orders, special
                        offers, health tips, and more!
                      </p>

                      <form className="mt-8 space-y-6">
                        <div>
                          <label
                            htmlFor="phone"
                            className="text-sm font-medium text-gray-700"
                          >
                            Phone Number
                          </label>
                          <div className="relative mt-1">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                              <span className="text-gray-500 sm:text-sm">
                                +88
                              </span>
                            </div>
                            <input
                              type="tel"
                              name="phone"
                              id="phone"
                              className="block w-full rounded-md border border-gray-300 pl-10 pr-4 py-2 text-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                              placeholder=""
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-teal-500 py-3 px-4 text-sm font-medium text-white shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                          >
                            Login
                          </button>
                        </div>

                        <div className="flex items-center">
                          <div className="flex-grow border-t border-gray-300" />
                          <span className="mx-4 text-sm text-gray-500">or</span>
                          <div className="flex-grow border-t border-gray-300" />
                        </div>

                        <div className="flex items-center space-x-4">
                          <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                          >
                            <FaGoogle size={20} />
                          </button>
                          <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                          >
                            <FaLinkedinIn size={20} />
                          </button>
                        </div>

                        <p className="text-center text-xs text-gray-500">
                          By continuing you agree to{" "}
                          <a
                            href="#"
                            className="font-medium text-gray-900 hover:underline"
                          >
                            Terms & Conditions
                          </a>
                          ,{" "}
                          <a
                            href="#"
                            className="font-medium text-gray-900 hover:underline"
                          >
                            Privacy Policy
                          </a>{" "}
                          &{" "}
                          <a
                            href="#"
                            className="font-medium text-gray-900 hover:underline"
                          >
                            Refund-Return Policy
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default LoginModal;
