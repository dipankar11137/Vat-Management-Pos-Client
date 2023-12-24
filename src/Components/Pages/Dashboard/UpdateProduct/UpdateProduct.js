import React from 'react';

const UpdateProduct = ({ index, product }) => {
  console.log(product);
  return (
    <tr>
      <th className="bg-slate-800">{index}</th>
      <th className="bg-slate-800">
        <img
          className="h-10 w-10  rounded-full"
          src={product?.singleProduct?.img}
          alt=""
        />
      </th>
      <td className="bg-slate-800">{product?.singleProduct?.name}</td>
      <td className="bg-slate-800">{product?.date}</td>
      <td className="bg-slate-800">{product?.lastQuantityAdd}</td>
      <td className="bg-slate-800">{product?.singleProduct?.price}</td>
      <td className="bg-slate-800">
        {product?.lastQuantityAdd * product?.singleProduct?.price}
      </td>
    </tr>
  );
};

export default UpdateProduct;
