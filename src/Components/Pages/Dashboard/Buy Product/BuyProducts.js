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
  return (
    <div>
      <div className="overflow-x-auto p-2">
        <table className="table table-xs w-full text-xs text-black text-center">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Product Quantity</th>
              <th>Date</th>
              <th>Time</th>
              <th>DIscount</th>
              <th>Spacial Discount</th>
              <th>Sub Amount</th>
              <th>Vat % </th>
              <th>Vat</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <BuyProduct
                key={product._id}
                product={product}
                index={index + 1}
              ></BuyProduct>
            ))}
          </tbody>
        </table>
        <h1 className="bg-white text-black mt-3 text-end pr-40 font-bold text-xl underline">
          Total Amount :
        </h1>
        <div className="flex justify-end">
          <div className="bg-white text-black pt-4 pb-5 rounded-b-sm">
            <div className="flex">
              <h1 className="w-40 text-end font-semibold">Total Price : </h1>
              <h1 className="w-40 font-thin  text-end pr-2">
                {<h1>{totalPrice} .00</h1>}
              </h1>
            </div>
            <div className="flex">
              <h1 className="w-40 text-end font-semibold">Total Vat : </h1>
              <h1 className="w-40 font-thin  text-end pr-2">
                {<h1>{totalVat} .00</h1>}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyProducts;
