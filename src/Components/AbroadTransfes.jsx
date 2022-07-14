import React, { Fragment, useState, useEffect} from "react";
import DashboardLayout from "../Layout/DashboardLayout";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";

const AbroadTransfes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [currency, setCurrency] = useState('USD');
  //const [currency2, setCurrency2] = useState('EUR');
  const [recepient, setRecepient] = useState('')
  const [rates, setRates] = useState([])

  const APIKEY = '0e8494c17aae6d5eb2f70ab5'

  useEffect(() => {
    try {
      axios.get(`https://v6.exchangerate-api.com/v6/${APIKEY}/latest/GBP`)
      .then(res =>{console.log(res.data.conversion_rates) 
        setRates(res.data.conversion_rates)
      })
    } catch (error) {
      console.log(error)
    }
  }, [currency, amount, convertedAmount]);

  const onAmountChange = (amountInput) => {
    setConvertedAmount((amountInput * rates[currency]).toFixed(4))
    setAmount(amountInput)
  }

  const onConvertedAmountChange = (value) => {
    setAmount((value / rates[currency] * rates['GBP']).toFixed(3))
    setConvertedAmount(value)
  }

  const onCurrencyChange = (currencyValue) => {
    setCurrency(currencyValue)
    setConvertedAmount(amount * rates[currencyValue])
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };
  return (
    <DashboardLayout>
     
      <div className="flex sidebar-section w-full justify-between relative">
      <div className="flex flex-col px-6 py-4 mx-auto w-[600px] border-2 my-4 rounded-lg">
          <h2 className="text-center mt-8">International Transfer</h2>
          <form className="flex flex-col self-center py-4 px-8" onSubmit={handleSubmit}>
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
                value={amount}
                onChange={(e) => onAmountChange(e.target.value)}
              />
            </label>
            <label className="flex flex-col mt-4">
              <span className="text-[12px] flex flex-col">
                <span className="text-black mt-3">Choose currency</span>
                <span className="text-stone-400 mt-2">
                  Pick this option to convert GBP to USD or EUR
                </span>
              </span>
              <select
                name="currency"
                id="currency"
                className="border-none p-2 mt-2 rounded-md w-96 focus:border focus:ring-0  focus:outline-none focus:border-grey bg-neutral-100 shadow-sm"
                onChange={(e)=> onCurrencyChange(e.target.value)}
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
                value={convertedAmount}
                onChange={(e) => onConvertedAmountChange(e.target.value)}
              />
            </label>
            <label className="flex flex-col mt-3">
              <span className="text-[12px] flex flex-col">
                <span className="text-black mt-2">Choose country</span>
              </span>
              <input
                required
                name="country"
                type="text"
                className="border-none p-2 mt-2 rounded-md w-96 focus:border focus:ring-0  focus:outline-none focus:border-grey bg-grey shadow-md"
              />
            </label>
            <label className="flex flex-col mt-2">
              <span className="text-[12px] flex flex-col">
                <span className="text-black mt-3">Recipient's full name</span>
              </span>
              <input
                required
                name="recipient_fullName"
                type="text"
                className="border-none p-2 mt-2 rounded-md w-96 focus:border focus:ring-0  focus:outline-none focus:border-grey bg-grey shadow-md"
                onChange={(e) => setRecepient(e.target.value)}
              />
            </label>
            <label className="flex flex-col mt-3">
              <span className="text-[12px] flex flex-col">
                <span className="text-black mt-2">Recipient's address</span>
              </span>
              <input
                required
                name="address"
                type="text"
                className="border-none p-2 mt-2 rounded-md w-96 focus:border focus:ring-0  focus:outline-none focus:border-grey bg-grey shadow-md"
              />
            </label>
            <label className="flex flex-col mt-3">
              <span className="text-[12px] flex flex-col">
                <span className="text-black mt-2">
                  International Bank account number
                </span>
              </span>
              <input
                required
                name="intl_bank_accountNumber"
                type="text"
                className="border-none p-2 mt-2 rounded-md w-96 focus:border focus:ring-0  focus:outline-none focus:border-grey bg-grey shadow-md"
              />
            </label>
            <label className="flex flex-col mt-3">
              <span className="text-[12px] flex flex-col">
                <span className="text-black mt-2">
                  Bank Identification Code
                </span>
              </span>
              <input
                required
                name="intl_BIC"
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

export default AbroadTransfes;
