import React, { useState } from "react";
import DashboardLayout from "../Layout/DashboardLayout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {BiTransferAlt} from "react-icons/bi"

const History = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const historyData = [
    {
      date: '28 March 2022',
      beneficiary: "John Bloke",
      amount: "$150",
      status: "transfer"
    },
    {
      date: '23 March 2022',
      beneficiary: "Salome Bloke",
      amount: "$50",
      status: 'deposit'
    },
    {
      date: '18 March 2022',
      beneficiary: "Joe Bloke",
      amount: "$20",
      status: 'transfer'
    },
    {
      date: '14 March 2022',
      beneficiary: "Jane Doe",
      amount: "$220",
      status: 'deposit'
    },
    {
      date: '1 March 2022',
      beneficiary: "John Bloke",
      amount: "$350",
      status: 'deposit'
    }
  ]

  return (
    <DashboardLayout>
      <div className="flex sidebar-section w-full justify-between relative bg-[#f5f5f5]">
        <div className="flex flex-col px-6 py-5 mx-auto w-2/3 border my-4 rounded-md bg-[#e5e5e5] h-auto">
          <h2 className="text-center mt-8 text-lg">Transaction History</h2>
          <div className="flex flex-col py-4 w-full">
            <div className="w-2/4 py-2 px-2 flex flex-col content-between">
              <span className="text-[14px] block w-48 mt-2">Select Range</span>
              <DatePicker
                className="w-48 text-center text-[12px] p-2 focus:outline-none focus:ring-0 mt-2"
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={onChange}
                maxDate={new Date()}
                dateFormat="dd/MM/yyyy"
              />
              <button className="bg-skyblue p-2 rounded-md shadow-sm w-20 text-white mt-3 text-[12px]">Search</button>
            </div>
            <div className="w-full mt-4"> 
            <ul className="flex flex-col items-center">
            {historyData.map((data, index) => (
              <li key={index} className='bg-white w-3/4 mb-[0.9px] px-4 py-2 rounded-lg flex items-center justify-between'> 
              <div className="flex items-center">
              <span className={`icon mr-6 ${data.status === 'transfer' ? "text-red-500" : "text-green-400"} text-[20px]`}>
                <BiTransferAlt />
              </span>
               <span className="flex flex-col">
               <span className="text-[12px] mb-2 ">{data.date}</span>
                <span>{data.beneficiary} </span>
               </span>
              </div>

              <span className={`justify-self-end ${data.status === 'transfer' ? "text-red-500" : "text-green-400"}`}>
                {data.status === "transfer" ? "-" : "+" } 
                {data.amount}
              </span>
              </li>
))}
            </ul>
            
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default History;
