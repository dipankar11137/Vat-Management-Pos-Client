import React, { useEffect, useState } from 'react';
import BuyProduct from './BuyProduct';

const BuyProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/buys')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [products]);
  console.log(products[0]);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-xs w-full text-xs text-black">
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
            {products.map(product => (
              <BuyProduct key={product._id} product={product}></BuyProduct>
            ))}
          </tbody>
        </table>
      </div>
      <BuyProduct />
    </div>
  );
};

export default BuyProducts;
