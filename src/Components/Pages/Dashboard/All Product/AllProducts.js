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
      <div className="overflow-x-auto ">
        <table className="table table-xs bg-blue-500 text-black w-full">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Name</th>
              <th>Product Id</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Increase Quantity </th>
              <th>Decrease Quantity</th>
              <th>Delete</th>
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
