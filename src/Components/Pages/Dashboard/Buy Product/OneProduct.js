import React from 'react';

const OneProduct = ({ singleProduct, index, subTotal }) => {
  return (
    <tr>
      <th>{index}</th>
      <td>
        <img className="w-8 h-8 rounded-full" src={singleProduct?.img} alt="" />
      </td>
      <td>{singleProduct?.name}</td>
      <td>{singleProduct?.price}</td>
      <td>{singleProduct?.bookQuantity}</td>
    </tr>
  );
};

export default OneProduct;
