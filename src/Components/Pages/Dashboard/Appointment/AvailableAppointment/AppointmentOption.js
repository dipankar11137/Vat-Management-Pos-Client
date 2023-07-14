import React from "react";
import "../../../../CSS/PicStyle.css";
import "../../../../CSS/Button.css";

const AppointmentOption = ({ option, setCounseling }) => {
  const { name, slots } = option;

  return (
    <div
      style={{
        boxShadow: "5px 5px 20px blue",
      }}
      className="card w-96 bg-base-100 shadow-2xl text-black hover:bg-red-100"
    >
      <div
        // style={{ marginTop: "-145px" }}
        className="w-full  mb-8 rounded-lg cursor-pointer "
      >
        {option?.img ? (
          <img className="rounded-lg pic-style h-72" src={option?.img} alt="" />
        ) : (
          <img
            className="rounded-lg pic-style"
            src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-141628,resizemode-1,msid-87023044/news/economy/infrastructure/govt-to-spend-around-rs-50000-cr-to-create-500-multi-modal-cargo-terminals-in-4-5-yrs.jpg"
            alt=""
          />
        )}
      </div>

      <div className="p-4">
        <h2 className="card-title ">{name}</h2>

        <p className="text-xl font-bold text-blue-600 text-center">
          {slots.length > 0 ? (
            slots[0]
          ) : (
            <span className="text-red-500">Try Another Day</span>
          )}
        </p>
        <p className="text-lg text-green-900 font-semibold text-center">
          {slots.length}{" "}
          {slots.length > 1 ? "spaces available" : "space available"}
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            onClick={() => setCounseling(option)}
            htmlFor="booking-modal"
            className="button1 btn text-xl bg-indigo-700 text-white font-bold mt-3 "
          >
            Book Terminal
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
