import React, { useEffect, useState } from 'react';
import AllProduct from './AllProduct';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/allProduct')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [products]);
  return (
    <div>
      <div className="overflow-x-auto p-2">
        <table className="table table-xs  text-white w-full  text-center">
          <thead>
            <tr>
              <th className="bg-blue-900"></th>
              <th className="bg-blue-900"></th>
              <th className="bg-blue-900">Name</th>
              <th className="bg-blue-900">Product Id</th>
              <th className="bg-blue-900">Quantity</th>
              <th className="bg-blue-900">Price</th>
              <th className="bg-blue-900">Increase Quantity </th>
              <th className="bg-blue-900">Decrease Quantity</th>
              <th className="bg-blue-900">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <AllProduct
                key={product._id}
                product={product}
                index={index + 1}
              ></AllProduct>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
