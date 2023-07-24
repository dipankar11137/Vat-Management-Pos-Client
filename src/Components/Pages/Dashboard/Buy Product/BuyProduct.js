import React from 'react';

const BuyProduct = ({ product, index }) => {
  return (
    <tr>
      <th>{index}</th>
      <td>{product?.name || 'NAN'}</td>
      <td>{product?.bookings.length}</td>
      <td>{product?.date}</td>
      <td>{product?.time}</td>
      <td>{product?.discount}</td>
      <td>{product?.specialDiscount}</td>
      <td>{product?.totalPrice}</td>
      <td>{product?.vats}</td>
      <td>{product?.vat}</td>
      <td>{product?.newTotalPrice}</td>
    </tr>
  );
};

export default BuyProduct;
