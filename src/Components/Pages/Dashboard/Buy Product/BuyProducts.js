import React, { useEffect, useState } from 'react';
import BuyProduct from './BuyProduct';

const BuyProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/buys')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [products]);
  // // console.log(products[0]);

  const totalPrice = products.reduce(
    (acc, product) => acc + product.newTotalPrice,
    0
  );
  const totalVat = products.reduce((acc, product) => acc + product.vat, 0);
  const totalQuantity = products.reduce(
    (acc, product) => acc + product.bookings.length,
    0
  );
  // pdf
  const document = React.useRef();
  const pdfFilename = products?.name ? `${products.name}.pdf` : 'document.pdf';
  return (
    <div>
      <div className="text-3xl my-5 text-center font-semibold">
        <h1>Buy Product</h1>
      </div>
      <div ref={document} className="overflow-x-auto p-2 ">
        <table className="table table-xs w-full text-xs text-white text-center">
          <thead>
            <tr>
              <th className="bg-blue-900"></th>
              <th className="bg-blue-900">Name</th>
              <th className="bg-blue-900">Product Quantity</th>
              <th className="bg-blue-900">Date</th>
              <th className="bg-blue-900">Time</th>
              <th className="bg-blue-900">DIscount</th>
              <th className="bg-blue-900">Spacial Discount</th>
              <th className="bg-blue-900">Sub Amount</th>
              <th className="bg-blue-900">Vat % </th>
              <th className="bg-blue-900">Vat</th>
              <th className="bg-blue-900">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {products
              .slice(0, 10)
              .reverse()
              .map((product, index) => (
                <BuyProduct
                  key={product._id}
                  product={product}
                  index={index + 1}
                ></BuyProduct>
              ))}
          </tbody>
        </table>
        <h1 className="bg-blue-700 text-white pt-3 text-end pr-52 font-bold text-xl underline">
          Total Amount :
        </h1>
        <div className="flex justify-end">
          <div className="bg-blue-900 text-white pt-4 pb-5 rounded-b-sm">
            <div className="flex">
              <h1 className="w-40 text-end font-semibold">Total Sel Item : </h1>
              <h1 className="w-52 font-thin  text-end pr-2">
                {<h1>{totalQuantity}</h1>}
              </h1>
            </div>
            <div className="flex">
              <h1 className="w-40 text-end font-semibold">Total Vat : </h1>
              <h1 className="w-52 font-thin  text-end pr-2">
                <h1>{parseFloat(totalVat).toFixed(2)}</h1>
              </h1>
            </div>
            <div className="flex">
              <h1 className="w-40 text-end font-semibold">Total Price : </h1>
              <h1 className="w-52 font-thin  text-end pr-2">
                <h1>{parseFloat(totalPrice).toFixed(2)}</h1>
              </h1>
            </div>
            {/* <ReactToPdf targetRef={document} filename={pdfFilename}>
              {({ toPdf }) => (
                <button
                  className="bg-green-300 py-1 px-3 h-10 rounded-2xl text-black font-semibold"
                  onClick={toPdf}
                >
                  Download PDF
                </button>
              )}
            </ReactToPdf> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyProducts;
