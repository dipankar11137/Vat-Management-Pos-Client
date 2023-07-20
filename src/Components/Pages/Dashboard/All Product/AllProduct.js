import React from 'react';

const AllProduct = ({ product, index }) => {
  return (
    <tr>
      <th>{index}</th>
      <th>
        <img className="h-14 w-14 rounded-full" src={product?.img} alt="" />
      </th>
      <td>{product?.name}</td>
      <td>{product?.pId}</td>
      <td>{product?.quantity}</td>
      <td>{product?.price}</td>
      <td>
        <button>Increase</button>
      </td>
      <td>
        <button>Decrease</button>
      </td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default AllProduct;
