import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import AppointmentOption from "./AppointmentOption";
import Loading from "../../../../Share/Loading";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointment = ({ selectDate }) => {
  const [counseling, setCounseling] = useState(null);
  const date = format(selectDate, "PP");
  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: () =>
      fetch(`http://localhost:5000/appointments?date=${date}`).then((res) =>
        res.json()
      ),
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="mt-6 mx-40 mb-20">
      <p className="text-3xl text-center mt-10 font-semibold mb-16">
        Available Terminal on {format(selectDate, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-36 mt-40">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            option={option}
            setCounseling={setCounseling}
          ></AppointmentOption>
        ))}
      </div>
      {counseling && (
        <BookingModal
          key={counseling?._id}
          counseling={counseling}
          selectDate={selectDate}
          setCounseling={setCounseling}
          refetch={refetch}
        />
      )}
    </section>
  );
};

export default AvailableAppointment;
