import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import OneProduct from './OneProduct';

const BuyProduct = ({ product, index }) => {
  const [open, setOpen] = useState(false);
  console.log(product);

  return (
    <tr>
      <th className="bg-slate-800">{index}</th>
      <td className="bg-slate-800">{product?.name || 'NAN'}</td>
      <td className="bg-slate-800">
        <div className="flex ml-10">
          {product?.bookings.length}{' '}
          {open ? (
            <IoIosArrowUp
              onClick={() => setOpen(false)}
              className="text-xl ml-5 hover:cursor-pointer"
            />
          ) : (
            <IoIosArrowDown
              onClick={() => setOpen(true)}
              className="text-xl ml-5 hover:cursor-pointer"
            />
          )}
        </div>
        {open && (
          <div>
            <div className="overflow-x-auto">
              <table className="table text-center ">
                <thead>
                  <tr>
                    <th className="bg-blue-600">Index</th>
                    <th className="bg-blue-600">Image</th>
                    <th className="bg-blue-600">Name</th>
                    <th className="bg-blue-600">Price</th>
                    <th className="bg-blue-600">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {product.bookings.map((singleProduct, index) => (
                    <OneProduct
                      key={singleProduct?._id}
                      singleProduct={singleProduct}
                      index={index + 1}
                      subTotal={product?.totalPrice}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </td>
      <td className="bg-slate-800">{product?.date}</td>
      <td className="bg-slate-800">{product?.time}</td>
      <td className="bg-slate-800">{product?.discount}</td>
      <td className="bg-slate-800">{product?.specialDiscount}</td>
      <td className="bg-slate-800">{product?.totalPrice}</td>
      <td className="bg-slate-800">{product?.vats}</td>
      <td className="bg-slate-800">{product?.vat}</td>
      <td className="bg-slate-800">{product?.newTotalPrice}</td>
    </tr>
  );
};

export default BuyProduct;
