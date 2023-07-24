import React, { useEffect, useState } from 'react';
import ReactToPdf from 'react-to-pdf';
import { toast } from 'react-toastify';
const ref = React.createRef();

const BookProducts = () => {
  const [bookings, setBookings] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [vats, setVat] = useState(8);
  const [discount, setDiscount] = useState(0);
  const [specialDiscount, sentSDiscount] = useState(0);
  const [paid, setPaid] = useState(false);

  const currentDate = new Date();
  const currentTime = new Date();
  const date = currentDate.toDateString();
  const time = currentTime.toLocaleTimeString();

  const totalPrice = bookings.reduce(
    (acc, product) => acc + parseInt(product.price) * product.bookQuantity,
    0
  );
  const vat = totalPrice * (vats / 100);
  const newTotalPrice = totalPrice + vat - specialDiscount - discount;
  const changeAmount = paid - newTotalPrice;
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
    // console.log(bookings);
    const changeUrl = { bookings, totalPrice, newTotalPrice, vat };
    console.log(changeUrl);

    // fetch(`http://localhost:5000/allProduct`, {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   body: JSON.stringify(changeUrl),
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     toast.success('Successfully Add This ');

    //   });

    // const proceed = window.confirm('Are You Sure ?');
    // if (proceed) {
    //   const url = `http://localhost:5000/bookings`;
    //   fetch(url, {
    //     method: 'DELETE',
    //   })
    //     .then(res => res.json())
    //     .then(data => {
    //       toast.success('Successfully Clear');
    //     });
    // }
  };
  // console.log(bookings);
  return (
    <>
      {bookings.length === 0 ? (
        <></>
      ) : (
        <div ref={document} className="flex text-black">
          <div className="mb-20 mx-20 mt-8 bg-white p-3 rounded-md pb-10">
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
              <div className="text-sm mb-2">
                <div className="flex">
                  <h1 className="w-28 font-bold">Name </h1>
                  <h1>: {name}</h1>
                </div>
                <div className="flex">
                  <h1 className="w-28 font-bold">Address </h1>
                  <h1>: {address}</h1>
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
            <hr />
            <div className=" gap-9">
              <div className=" ">
                <div className="overflow-x-auto">
                  <table className="table table-xs w-[600px] text-center text-black">
                    <thead>
                      <tr>
                        <th className="bg-white">Index</th>
                        <th className="bg-white"></th>
                        <th className="bg-white">Name</th>
                        <th className="bg-white">Quantity</th>
                        <th className="bg-white">Price</th>
                        <th className="bg-white">Amount</th>
                      </tr>
                      <hr />
                    </thead>

                    <tbody>
                      {bookings.map((product, index) => (
                        <tr>
                          <th className="bg-white font-thin">{index + 1}</th>
                          <th className="bg-white ">
                            <img
                              className="h-8 w-8 rounded-full"
                              src={product?.img}
                              alt=""
                            />
                          </th>
                          <th className="bg-white font-thin">
                            {product?.name}
                          </th>
                          <th className="bg-white font-thin">
                            {product?.bookQuantity}
                          </th>
                          <th className="bg-white font-thin">
                            {product?.price}
                          </th>
                          <th className="bg-white font-thin text-end">
                            {product?.bookQuantity * product?.price}.00
                          </th>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="text-black uppercase text-lg font-thin">
                    {' '}
                    puple 5- bisque -slimfit- knitted- sqled
                  </p>
                </div>
              </div>
              <div>
                <hr />
                <div className="flex justify-end">
                  <div className="flex">
                    <h1 className="w-40 text-end">Sub Total : </h1>
                    <h1 className="w-36 font-thin text-end ">
                      {totalPrice}.00
                    </h1>
                  </div>
                </div>
                {/* <h1 className="text-end">Sub Total : {totalPrice}</h1> */}
                <hr />
              </div>
              <div className="flex justify-end text-black mt-2">
                <div>
                  <div className="flex">
                    <h1 className="w-40 text-end">Discount : </h1>
                    <h1 className="w-36 font-thin  text-end">{discount}.00 </h1>
                  </div>
                  <div className="flex">
                    <h1 className="w-40 text-end">Special Discount : </h1>
                    <h1 className="w-36 font-thin  text-end">
                      {' '}
                      {specialDiscount}.00
                    </h1>
                  </div>
                  <div className="flex">
                    <h1 className="w-40 text-end">Vat : </h1>
                    <h1 className="w-36 font-thin  text-end">
                      {' '}
                      {vat.toFixed(2)}
                    </h1>
                  </div>
                  <div className="flex">
                    <h1 className="w-40 text-end">Net Amount : </h1>
                    <h1 className="w-36 font-thin  text-end">
                      {newTotalPrice.toFixed(2)}{' '}
                    </h1>
                  </div>
                  <div className="flex">
                    <h1 className="w-40 text-end">Paid Amount : </h1>
                    <h1 className="w-36 font-thin  text-end"> {paid}.00</h1>
                  </div>
                  {paid && (
                    <div className="flex">
                      <h1 className="w-40 text-end">Change Amount : </h1>
                      <h1 className="w-36 font-thin  text-end">
                        {changeAmount.toFixed(2)}{' '}
                      </h1>
                    </div>
                  )}
                  <hr className="mt-1" />
                  <div className="flex">
                    <h1 className="w-40 text-end font-semibold">
                      Description{' '}
                    </h1>
                    <h1 className="w-36 font-semibold  text-end"> Amount</h1>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <hr />
              <div className="flex justify-end">
                <h1 className="w-40 text-end font-semibold">Cash </h1>
                <h1 className="w-36 font-semibold  text-end">
                  {' '}
                  {newTotalPrice.toFixed(2)}{' '}
                </h1>
              </div>
              <hr />
            </div>
            <div>
              <h1 className="text-xl text-center uppercase font-semibold">
                Product exchange policy
              </h1>
              <div className="text-sm mt-2">
                <p>
                  1. Products can be exchanged within 7 days from the date of
                  purchase.
                </p>
                <p>
                  2. Wrong product: If the product received is not the one that
                  was ordered.
                </p>
                <p>3. Perishable items such as food and beverages.</p>
                <p>
                  4. Personal hygiene products like cosmetics, toiletries, and
                  undergarments.
                </p>
                <p>
                  5. Products that have been used, altered, or damaged by the
                  customer.
                </p>
              </div>
            </div>
            <hr className="mt-7" />
            <h1 className="text-center font-semibold">
              System By : Daffodil Pos Ltd . Tel : 0353981
            </h1>
          </div>
          <div>
            <div className="mt-8 ml-8 text-white">
              <div>
                <h1>Name : </h1>{' '}
                <input
                  onChange={e => setName(e.target.value)}
                  className="rounded-md mb-2 pl-1 w-[250px] py-1 text-black"
                  placeholder="Enter Name"
                  type="text"
                />
              </div>
              <div>
                <h1>Address : </h1>{' '}
                <input
                  onChange={e => setAddress(e.target.value)}
                  className="rounded-md mb-2 pl-1 w-[250px] py-1 text-black"
                  placeholder="Enter Address"
                  type="text"
                />
              </div>
              <div>
                <h1>Phone :</h1>
                <input
                  onChange={e => setPhone(e.target.value)}
                  className="rounded-md mb-2 pl-1 py-1 w-[250px] text-black"
                  placeholder="Phone"
                  type="number"
                />
              </div>
              <div>
                <h1>Vat :</h1>
                <input
                  onChange={e => setVat(e.target.value)}
                  className="rounded-md mb-2 pl-1 py-1 w-[250px] text-black"
                  placeholder="Vat Amount"
                  type="number"
                />
              </div>
              <div>
                <h1>Discount :</h1>
                <input
                  onChange={e => setDiscount(e.target.value)}
                  className="rounded-md mb-2 pl-1 py-1 w-[250px] text-black"
                  placeholder="Discount Amount"
                  type="number"
                />
              </div>
              <div>
                <h1>Special Discount :</h1>
                <input
                  onChange={e => sentSDiscount(e.target.value)}
                  className="rounded-md mb-2 pl-1 py-1 w-[250px] text-black"
                  placeholder="Enter  Special Discount"
                  type="number"
                />
              </div>
              <div className="mt-5">
                <h1 className="text-xl font-bold text-center mb-2">Paid </h1>
                <input
                  onChange={e => setPaid(e.target.value)}
                  className="rounded-md mb-2 pl-1 py-1 w-[250px] text-black"
                  placeholder="Enter Paid Amount"
                  type="number"
                />
              </div>
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
