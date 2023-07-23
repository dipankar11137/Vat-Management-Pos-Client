import React, { useEffect, useState } from 'react';
import ReactToPdf from 'react-to-pdf';
import { toast } from 'react-toastify';
const ref = React.createRef();

const BookProducts = () => {
  const [bookings, setBookings] = useState([]);
  const [name, setName] = useState([]);
  const [phone, setPhone] = useState([]);
  const currentDate = new Date();
  const currentTime = new Date();
  const date = currentDate.toDateString();
  const time = currentTime.toLocaleTimeString();

  const totalPrice = bookings.reduce(
    (acc, product) => acc + parseInt(product.price) * product.bookQuantity,
    0
  );
  const vat = totalPrice * 0.08;
  const newTotalPrice = totalPrice + vat;
  useEffect(() => {
    fetch(`http://localhost:5000/booking`)
      .then(res => res.json())
      .then(data => setBookings(data));
  }, [bookings]);
  const document = React.useRef();
  const pdfFilename = bookings?.name ? `${bookings.name}.pdf` : 'document.pdf';

  const handleRemove = id => {
    const proceed = window.confirm('Are You Sure ?');
    if (proceed) {
      const url = `http://localhost:5000/booking/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          const remaining = bookings.filter(product => product._id !== id);
          setBookings(remaining);

          toast.success('Successfully Remove');
        });
    }
  };
  const handleClear = () => {
    const proceed = window.confirm('Are You Sure ?');
    if (proceed) {
      const url = `http://localhost:5000/bookings`;
      fetch(url, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          toast.success('Successfully Clear');
        });
    }
  };
  // console.log(bookings);
  return (
    <>
      {bookings.length === 0 ? (
        <></>
      ) : (
        <div ref={document} className="flex ">
          <div className="mb-20 mx-20 mt-8 bg-white p-3 rounded-md">
            <div className="text-xl mb-3 text-black">
              <h1 className="text-center font-bold text-3xl">
                Vat Management System
              </h1>
              <h1 className="text-center font-semibold text-xl">
                Daffodil International University
              </h1>
              <p className="text-sm font-semibold text-center">
                Level # 03, Shop # 203, 204 Daffodil Tower, Dhanmondi
              </p>
              <p className="text-sm font-semibold text-center">Dhaka - 1205</p>
              <p className="text-sm font-semibold text-center">
                Government of the People's Republic Of Bangladesh
              </p>

              <p className="text-sm font-bold text-center">
                National Board of Revenue
              </p>
              <div className="flex justify-between text-lg font-semibold">
                <p>BIN: 111330010031</p>
                <p>Mushak -6.3</p>
              </div>
              <h1 className="text-center border-2 border-black text-lg font-semibold">
                Invoice No : 0123072200004
              </h1>
              <div className="flex justify-between text-lg font-semibold">
                <p>Date : {date}</p>
                <p>Time : {time}</p>
              </div>
              <div className="text-sm">
                <div className="flex">
                  <h1 className="w-28 font-bold">Name </h1>
                  <h1>: {name}</h1>
                </div>
                <div className="flex">
                  <h1 className="w-28 font-bold">Address </h1>
                  <h1>: </h1>
                </div>
                <div className="flex">
                  <h1 className="w-28 font-bold">Mobile </h1>
                  <h1>: {phone}</h1>
                </div>
                <div className="flex">
                  <h1 className="w-28 font-bold">Sales Exec </h1>
                  <h1>: Md Hasib Ahmed</h1>
                </div>
                <div className="flex">
                  <h1 className="w-28 font-bold">Served By </h1>
                  <h1>: Hasib</h1>
                </div>
              </div>
            </div>
            <div className=" gap-9">
              <div className=" ">
                <div className="overflow-x-auto">
                  <table className="table table-xs w-[600px] text-center">
                    <thead>
                      <tr>
                        <th className="bg-blue-900">Index</th>
                        <th className="bg-blue-900"></th>
                        <th className="bg-blue-900">Name</th>
                        <th className="bg-blue-900">Price</th>
                        <th className="bg-blue-900">Quantity</th>
                        <th className="bg-blue-900">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((product, index) => (
                        <tr>
                          <th className="bg-slate-700">{index + 1}</th>
                          <th className="bg-slate-700">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={product?.img}
                              alt=""
                            />
                          </th>
                          <th className="bg-slate-700">{product?.name}</th>
                          <th className="bg-slate-700">{product?.price}</th>
                          <th className="bg-slate-700">
                            {product?.bookQuantity}
                          </th>
                          <th className="bg-slate-700">
                            <button
                              onClick={() => handleRemove(product?._id)}
                              className="btn  btn-error btn-xs"
                            >
                              Remove
                            </button>
                          </th>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-slate-700 h-[170px] w-[300px] text-2xl p-4 rounded-xl mt-10">
                  <div className="flex">
                    <h1 className="w-36 font-bold">Price </h1>
                    <h1>: {totalPrice.toFixed(2)}</h1>
                  </div>
                  <div className="flex mt-2 mb-2">
                    <h1 className="w-36 font-bold">Vat </h1>
                    <h1>: {vat.toFixed(2)}</h1>
                  </div>
                  <hr />
                  <div className="flex mt-2">
                    <h1 className="w-36 font-bold">Total Price </h1>
                    <h1>: {newTotalPrice.toFixed(2)}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-8 ml-8">
              <h1>Name : </h1>{' '}
              <input
                onChange={e => setName(e.target.value)}
                className="rounded-md mb-2 pl-1 w-[250px] py-1 text-black"
                placeholder="Enter Name"
                type="text"
              />
              <h1>Phone</h1>
              <input
                onChange={e => setPhone(e.target.value)}
                className="rounded-md mb-2 pl-1 py-1 w-[250px] text-black"
                placeholder="Phone"
                type="number"
              />
            </div>
            <div className="flex justify-end mt-10 gap-6 ml-10">
              <button onClick={handleClear} className="btn btn-error ">
                Clear
              </button>{' '}
              <ReactToPdf targetRef={document} filename={pdfFilename}>
                {({ toPdf }) => (
                  <button
                    className="bg-green-400 py-1 px-3 h-10 rounded-2xl text-white font-semibold"
                    onClick={toPdf}
                  >
                    Download PDF
                  </button>
                )}
              </ReactToPdf>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookProducts;
