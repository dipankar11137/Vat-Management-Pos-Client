import React from 'react';

const OneProduct = ({ singleProduct, index, subTotal }) => {
  return (
    <tr>
      <th className="bg-blue-800">{index}</th>
      <td className="bg-blue-800">
        <img className="w-8 h-8 rounded-full" src={singleProduct?.img} alt="" />
      </td>
      <td className="bg-blue-800">{singleProduct?.name}</td>
      <td className="bg-blue-800">{singleProduct?.price}</td>
      <td className="bg-blue-800">{singleProduct?.bookQuantity}</td>
    </tr>
  );
};

export default OneProduct;
