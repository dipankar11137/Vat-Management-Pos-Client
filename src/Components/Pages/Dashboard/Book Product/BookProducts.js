import React, { useEffect, useState } from 'react';

const BookProducts = () => {
  const [bookings, setBookings] = useState([]);

  const totalPrice = bookings.reduce(
    (acc, product) => acc + parseInt(product.price),
    0
  );

  useEffect(() => {
    fetch(`http://localhost:5000/booking`)
      .then(res => res.json())
      .then(data => setBookings(data));
  }, [bookings]);
  return (
    <div className="mb-20 mx-20">
      <h1>
        book {bookings.length} {totalPrice}
      </h1>

      <div className="flex gap-9">
        <div className=" ">
          <div className="overflow-x-auto">
            <table className="table table-xs w-[600px] text-center">
              <thead>
                <tr>
                  <th className="bg-blue-900"></th>
                  <th className="bg-blue-900"></th>
                  <th className="bg-blue-900">Name</th>
                  <th className="bg-blue-900">Price</th>
                  <th className="bg-blue-900">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map(product => (
                  <tr>
                    <th className="bg-slate-700">1</th>
                    <th className="bg-slate-700">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={product?.img}
                        alt=""
                      />
                    </th>
                    <th className="bg-slate-700">{product?.name}</th>
                    <th className="bg-slate-700">{product?.price}</th>
                    <th className="bg-slate-700">{product?.bookQuantity}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-red-500 h-[200px] w-[300px]"></div>
      </div>
    </div>
  );
};

export default BookProducts;
