import React, { useEffect, useState } from 'react';

const BookProducts = () => {
  const [bookings, setBookings] = useState([]);

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
                    <th className="bg-slate-700">{product?.bookQuantity}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-slate-700 h-[200px] w-[300px]">
          <div>
            <h1>Price : {totalPrice}</h1>
            <h1>Vat : {vat}</h1>
            <hr />
            <h1>Total Price : {newTotalPrice}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookProducts;
