import React, { useState } from "react";
import DashboardLayout from "../Layout/DashboardLayout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
      amount: "$150"
    }
  ]

  return (
    <DashboardLayout>
      <div className="flex sidebar-section w-full justify-between relative">
        <div className="flex flex-col px-6 py-4 mx-auto w-[600px] border my-4 rounded-md">
          <h2 className="text-center mt-8">Transaction History</h2>
          <div className="flex flex-col py-4 px-8 self-center">
            <div className="w-96 py-2 px-2">
              <span className="text-[10px] block">Select Range</span>
              <DatePicker
                className="w-48 text-center text-[12px] p-2 focus:outline-none focus:ring-0"
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={onChange}
                maxDate={new Date()}
                dateFormat="dd/MM/yyyy"
              />
              <button className="bg-skyblue p-2 ml-3 rounded-md shadow-sm">Search</button>
            </div>
            <div className="w-full"> 
            {}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default History;
