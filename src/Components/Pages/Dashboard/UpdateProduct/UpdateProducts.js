import React, { useEffect, useState } from 'react';
import UpdateProduct from './UpdateProduct';

const UpdateProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://vat-management-pos.onrender.com/updateProduct')
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
              <th className="bg-blue-900">Update Date Id</th>
              <th className="bg-blue-900">Quantity</th>
              <th className="bg-blue-900">Unit Price</th>
              <th className="bg-blue-900">Total Price </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <UpdateProduct
                key={product._id}
                product={product}
                index={index + 1}
              ></UpdateProduct>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpdateProducts;
