import React, { Fragment, useState } from "react";
import DashboardLayout from "../Layout/DashboardLayout";
import { Dialog, Transition } from "@headlessui/react";

const TransferBetween = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };
  return (
    <DashboardLayout>
      <div className="flex sidebar-section w-full justify-between relative">
        <div className="flex flex-col px-6 py-4 mx-auto w-[600px] border-2 my-4 rounded-lg">
          <h2 className="text-center mt-8">Transfer between accounts</h2>
          <form
            className="flex flex-col self-center py-4 px-8"
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
            <label className="flex flex-col mt-4">
              <span className="text-[12px] flex flex-col">
                <span className="text-black mt-2">Choose currency</span>
                <span className="text-stone-400 mt-2">
                  Pick this option to convert GBP to USD or EUR
                </span>
              </span>
              <select
                name="currency"
                id="currency"
                className="border-none p-2 mt-2 rounded-md w-96 focus:border focus:ring-0  focus:outline-none focus:border-grey bg-neutral-100 shadow-sm"
              >
                <option value="USD">United State Dollar (USD)</option>
                <option value="EUR">Euro (EUR)</option>
              </select>
            </label>
            <label className="flex flex-col mt-4">
              <span className="text-[12px] flex flex-col">
                <span className="text-black mt-2">Currency converter</span>
                <span className="text-stone-400 mt-2">You will send</span>
              </span>
              <input
                required
                name="converter"
                type="text"
                className="border-none p-2 mt-2 rounded-md w-96 focus:border focus:ring-0  focus:outline-none focus:border-grey bg-grey shadow-md"
              />
            </label>
            <label className="flex flex-col mt-4 w-[500px] ">
              <span className="text-black mt-2 text-[12px]">
                Choose account to transfer from
              </span>

              <div className="flex justify-between items-center mt-3">
                <label className="flex items-center justify-between w-52 bg-grey py-3 px-4 rounded-md shadow-md text-black">
                  <span className="flex flex-col">
                    <span>Current Account</span>
                    <span>367.145</span>
                  </span>
                  <input
                    required
                    name="sender_account"
                    type="radio"
                    value="current-account"
                    className=""
                  />
                </label>
                <label
                  htmlFor="account"
                  className="flex items-center justify-between w-52 bg-grey py-3 px-4 rounded-md shadow-md text-black"
                >
                  <span className="flex flex-col">
                    <span>Savings Account</span>
                    <span>1967.20</span>
                  </span>
                  <input
                    required
                    name="sender_account"
                    type="radio"
                    value="savings-account"
                    className=""
                  />
                </label>
              </div>
            </label>
            <label className="flex flex-col mt-4 w-[500px]">
              <span className="text-black mt-2 text-[12px]">
                Choose account to transfer to
              </span>

              <div className="flex justify-between items-center mt-3">
                <label className="flex items-center justify-between w-52 bg-grey py-3 px-4 rounded-md shadow-md text-black">
                  <span className="flex flex-col">
                    <span>Current Account</span>
                    <span>367.145</span>
                  </span>
                  <input
                    required
                    name="account-to"
                    type="radio"
                    value="current-account"
                    className=""
                  />
                </label>
                <label
                  htmlFor="account"
                  className="flex items-center justify-between w-52 bg-grey py-3 px-4 rounded-md shadow-md text-black"
                >
                  <span className="flex flex-col">
                    <span>Savings Account</span>
                    <span>1967.20</span>
                  </span>
                  <input
                    required
                    name="account-to"
                    type="radio"
                    value="savings-account"
                    className=""
                  />
                </label>
              </div>
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

export default TransferBetween;
