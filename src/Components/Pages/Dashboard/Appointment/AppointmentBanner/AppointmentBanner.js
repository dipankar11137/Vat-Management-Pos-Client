import React from "react";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selectDate, setSelectDate }) => {
  return (
    <header>
      <h1 className="text-white text-center text-5xl mt-16 mr-16 font-bold ">
        Select Your Date
      </h1>
      <div className="hero mt-8 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div
            style={{
              boxShadow: "5px 5px 10px blue",
              height: "350px",
              width: "350px",
            }}
            className="mr-20  bg-white text-black rounded-2xl"
          >
            {/* Pick This day */}
            <DayPicker
              className="text-2xl font-semibold"
              mode="single"
              selected={selectDate}
              onSelect={setSelectDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
