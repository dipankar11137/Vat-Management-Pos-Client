import React, { useState } from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";
import "../../../../CSS/Style.css";

const Appointment = () => {
  const [selectDate, setSelectDate] = useState(new Date());
  return (
    <div className="text-white ">
      <AppointmentBanner
        selectDate={selectDate}
        setSelectDate={setSelectDate}
      />
      <AvailableAppointment selectDate={selectDate} />
    </div>
  );
};

export default Appointment;
