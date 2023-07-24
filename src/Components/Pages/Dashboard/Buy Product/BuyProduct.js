import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import OneProduct from './OneProduct';

const BuyProduct = ({ product, index }) => {
  const [open, setOpen] = useState(false);
  console.log(product);

  return (
    <tr>
      <th>{index}</th>
      <td>{product?.name || 'NAN'}</td>
      <td>
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
              <table className="table text-center">
                <thead>
                  <tr>
                    <th>Index</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
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
            ;
          </div>
        )}
      </td>
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
