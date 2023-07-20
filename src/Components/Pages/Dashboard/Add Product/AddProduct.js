import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
  // const [user] = useAuthState(auth);
  // const email = user?.email;
  const [service, setService] = useState('');
  const imageHostKey = 'c70a5fc10619997bd7315f2bf28d0f3e';

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = data => {
    console.log(data);
    // const image = data.image[0];

    // const formData = new FormData();
    // formData.append('image', image);
    // const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
    // fetch(url, {
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then(res => res.json())
    //   .then(imageData => {
    //     const image = imageData.data.url;
    //     const changeUrl = { ...data, service: service, img: image };
    //     console.log(changeUrl);

    //     fetch(`http://localhost:5000/allServices`, {
    //       method: 'POST',
    //       headers: {
    //         'content-type': 'application/json',
    //       },
    //       body: JSON.stringify(changeUrl),
    //     })
    //       .then(res => res.json())
    //       .then(data => {
    //         toast.success('Successfully Add This ');
    //         reset();
    //       });
    //   });
  };
  return (
    <div className=" pb-20">
      {/* <h2 className="mt-5 ml-10 font-bold text-4xl text-center text-orange-500 uppercase">
        Please Add A Technician
      </h2> */}
      <div className=" p-5 rounded-2xl w-11/12 mt-5 ml-5 ">
        <form
          className=" flex justify-center gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label className="label">
              <span className="label-text text-xl font-semibold text-white">
                Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Service name"
              className="input input-bordered bg-white text-black lg:w-96 sm:w-full max-w-xs hover:shadow-xl shadow-inner border-blue-900 h-[35px]"
              {...register('name', {
                required: {
                  value: true,
                  message: 'Name is Required',
                },
              })}
            />
            <label className="label">
              {errors.name?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors?.name?.message}
                </span>
              )}
            </label>
            {/* product id */}
            <label className="label">
              <span className="label-text text-xl font-semibold text-white">
                Product Id
              </span>
            </label>
            <input
              type="text"
              placeholder="Product Id"
              className="input input-bordered bg-white text-black lg:w-96 sm:w-full max-w-xs hover:shadow-xl shadow-inner border-blue-900 h-[35px]"
              {...register('pId', {
                required: {
                  value: true,
                  message: 'Product Id is Required',
                },
              })}
            />
            <label className="label">
              {errors.pId?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors?.pId?.message}
                </span>
              )}
            </label>

            {/* image */}
            <label className="label">
              <span className="label-text text-xl font-semibold text-white">
                Input Image{' '}
              </span>
            </label>
            <input
              type="file"
              className="input input-bordered text-black w-96 pt-1 sm:w-full   hover:shadow-xl shadow-inner h-[40px]"
              {...register('image', {
                required: {
                  value: true,
                  message: 'Image is Required',
                },
              })}
            />

            <label className="label">
              {errors.image?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors?.image?.message}
                </span>
              )}
            </label>
            <label className="label">
              <span className="label-text text-xl font-semibold text-white">
                Quantity
              </span>
            </label>
            <input
              type="number"
              placeholder="Input Product Quantity"
              className="input input-bordered bg-white h-[35px] text-black w-full max-w-xs hover:shadow-xl shadow-inner border-blue-900"
              {...register('quantity', {
                required: {
                  value: true,
                  message: 'Quantity is Required',
                },
              })}
            />

            <label className="label">
              {errors.quantity?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors?.quantity?.message}
                </span>
              )}
            </label>

            {/* Price */}
            <label className="label">
              <span className="label-text text-xl font-semibold text-white">
                Price
              </span>
            </label>
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered bg-white text-black h-[35px] w-full max-w-xs  hover:shadow-xl shadow-inner border-blue-900"
              {...register('price', {
                required: {
                  value: true,
                  message: 'Price is Required',
                },
              })}
            />
            <label className="label">
              {errors.price?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors?.price?.message}
                </span>
              )}
            </label>

            <input
              className="btn btn-primary mt-5 w-full disable text-white"
              type="submit"
              value="ADD"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
