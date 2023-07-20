import React from 'react';
import { FaEdit } from 'react-icons/fa';
const AllProduct = ({
  product,
  index,
  handleEdit,
  singleProduct,
  handleRestock,
  handleDecrease,
  handleDelete,
}) => {
  return (
    <tr>
      <th className="bg-slate-800">{index}</th>
      <th className="bg-slate-800">
        <img className="h-10 w-10  rounded-full" src={product?.img} alt="" />
      </th>
      <td className="bg-slate-800">{product?.name}</td>
      <td className="bg-slate-800">{product?.pId}</td>
      <td className="bg-slate-800">{product?.quantity}</td>
      <td className="bg-slate-800">{product?.price}</td>
      <td className="bg-slate-800">
        {/* <button className="btn btn-primary btn-sm">Increase</button> */}
        <label
          onClick={() => handleEdit(product?._id)}
          for="my-modal-3"
          className="btn btn-primary text-white  modal-button"
        >
          <FaEdit className="text-2xl" />
        </label>

        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div
            style={{
              backgroundImage: `url(${singleProduct?.img})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              width: '100%',
            }}
            className="modal-box relative "
          >
            <label
              for="my-modal-3"
              className="btn btn-primary  text-white  btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div>
              <div className="card w-96  ">
                <div className="card-body appleProducts-center text-center">
                  <h1 className="text-2xl font-bold ">
                    Name : {singleProduct?.name}
                  </h1>
                  <img
                    className="mask mask-hexagon-2 shadow-2xl"
                    src={singleProduct?.img}
                    alt=""
                  />
                  <form onSubmit={handleRestock}>
                    <input
                      type="number"
                      name="quantity"
                      id=""
                      placeholder="Enter a Number"
                      className="input input-bordered input-error hover:border-lime-500 text-black"
                    />

                    <input
                      type="submit"
                      className=" ml-3 btn mt-2 btn-primary pt-1 text-white  font-bold rounded-lg"
                      value="Restock"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td className="bg-slate-800">
        {/* <button className="btn btn-accent btn-sm">Decrease</button> */}
        <label
          onClick={() => handleEdit(product?._id)}
          for="my-modal-4"
          className="btn btn-accent btn-sm text-white  modal-button"
        >
          Decrease
        </label>

        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <div className="modal">
          <div
            style={{
              backgroundImage: `url(${singleProduct?.img})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              backdropFilter: 'blur(5px)',
              WebkitBackdropFilter: 'blur(5px)',
            }}
            className="modal-box relative  "
          >
            <label
              for="my-modal-4"
              className="btn btn-accent  text-white  btn-sm btn-circle absolute right-2 top-2 "
            >
              ✕
            </label>
            <div>
              <div className="card w-96  ">
                <div className="card-body appleProducts-center text-center">
                  <h1 className="text-2xl font-bold">
                    Name : {singleProduct?.name}
                  </h1>
                  <div className="shadow-blue-900 shadow-2xl">
                    <form onSubmit={handleDecrease}>
                      <input
                        type="number"
                        name="quantity"
                        id=""
                        placeholder="Enter a Number"
                        className="input input-bordered input-error hover:border-lime-500 text-black"
                      />

                      <input
                        type="submit"
                        className=" ml-3 btn mt-2 btn-accent pt-1 text-white  font-bold rounded-lg"
                        value="Decrease"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td className="bg-slate-800">
        <button
          onClick={() => handleDelete(product?._id)}
          className="btn btn-secondary btn-sm"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default AllProduct;
