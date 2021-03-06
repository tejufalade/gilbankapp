import React, { Fragment, useState } from "react";
import DashboardLayout from "../Layout/DashboardLayout";
import { Dialog, Transition } from "@headlessui/react";


const SendLocal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };
  return (
    <DashboardLayout>
      <div className="flex sidebar-section w-full justify-between relative">
        <div className="flex flex-col px-6 py-4 mx-auto w-[600px] border my-4 rounded-lg">
          <h2 className="mt-8 text-center">Local Transfer</h2>
          <form
            className="flex flex-col py-4 px-8 self-center"
            onSubmit={handleSubmit}
          >
            <label className="flex flex-col mt-2">
              <span className="text-[12px] flex flex-col">
                <span className="text-black mt-2">Enter Amount</span>
                <span className="text-stone-400 mt-2">
                  Amount entered is in Great British Poundsterling &#40;GBP&#41;
                </span>
              </span>
              <input
                required
                name="amount"
                type="text"
                className="border-none p-2 mt-2 rounded-md w-96 focus:border focus:ring-0  focus:outline-none focus:border-grey bg-grey shadow-md"
              />
            </label>
            <label className="flex flex-col mt-2">
              <span className="text-[12px] flex flex-col">
                <span className="text-black mt-2">Recipient name</span>
              </span>
              <input
                required
                name="recipient-name"
                type="text"
                className="border-none p-2 mt-2 rounded-md w-96 focus:border focus:ring-0  focus:outline-none focus:border-grey bg-grey shadow-md"
              />
            </label>
            <label className="flex flex-col mt-2">
              <span className="text-[12px] flex flex-col">
                <span className="text-black mt-2">
                  Recipient account number
                </span>
              </span>
              <input
                required
                name="recipient_account_number"
                type="text"
                className="border-none p-2 mt-2 rounded-md w-96 focus:border focus:ring-0  focus:outline-none focus:border-grey bg-grey shadow-md"
              />
            </label>
            <label className="flex flex-col mt-2">
              <span className="text-[12px] flex flex-col">
                <span className="text-black mt-2">Sort code</span>
              </span>
              <input
                required
                name="sort_code"
                type="text"
                className="border-none p-2 mt-2 rounded-md w-96 focus:border focus:ring-0  focus:outline-none focus:border-grey bg-grey shadow-md"
              />
            </label>

            <button
              type="submit"
              className="self-center bg-skyblue px-8 py-2 text-white mt-16 w-80 rounded-md shadow-md"
            >
              Transfer
            </button>
          </form>
        </div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={() => {
              setIsOpen(false);
            }}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Transfer successful
                  </Dialog.Title>
                  <div className="mt-4">
                    <p>
                      go back to{" "}
                      <span
                        className="text-skyblue cursor-pointer"
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        home
                      </span>
                    </p>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    </DashboardLayout>
  );
};

export default SendLocal;
