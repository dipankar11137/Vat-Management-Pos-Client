import React, { useEffect, useState } from 'react';
import { AiFillCamera } from 'react-icons/ai';
import { CgPushChevronUpR } from 'react-icons/cg';
import { QrReader } from 'react-qr-reader';
import { toast } from 'react-toastify';
import BookProducts from '../Book Product/BookProducts';

const QRCodeScanner = () => {
  const [data, setData] = useState(false);
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(false);
  // const [getData, setGetData] = useState(false);
  const [bookProduct, setBookProduct] = useState({});
  const quantityOptions = Array.from(
    { length: parseInt(bookProduct?.quantity) },
    (_, index) => index + 1
  );

  useEffect(() => {
    fetch(`http://localhost:5000/allProducts/${data}`)
      .then(res => res.json())
      .then(data => setBookProduct(data));
  }, [data]);
  const handleUpdateQuantity = id => {
    console.log(id);
  };
  const handleSubmit = () => {
    if (bookProduct?.name) {
      const bookData = {
        name: bookProduct?.name,
        pId: bookProduct?.pId,
        price: bookProduct?.price,
        img: bookProduct?.img,
        bookQuantity: quantity || 1,
      };
      // console.log(bookData);

      fetch(`http://localhost:5000/bookings`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(bookData),
      })
        .then(res => res.json())
        .then(data => {
          setOpen(false);

          toast.success('Successfully Add This ');
          setData(false);
          window.location.reload(false);
        });
    } else {
      setOpen(false);

      window.location.reload(false);
    }
  };

  console.log(bookProduct);
  return (
    <div className="mt-14">
      <div className="flex justify-center gap-10">
        <div className="w-[400px] h-[350px] bg--300 rounded-xl shadow-2xl shadow-blue-800">
          {' '}
          <h1 className="text-2xl text-center font-bold py-1">
            {' '}
            {bookProduct?.name || 'Scan Here'}
          </h1>
          {open ? (
            <>
              {data ? (
                <>
                  {bookProduct?.name ? (
                    <div>
                      <img
                        className="w-full h-[300px] rounded-xl mt-2"
                        src={bookProduct?.img}
                        alt=""
                      />
                    </div>
                  ) : (
                    <div className=" flex justify-center mt-20 text-red-500">
                      <h1 className="text-3xl font-bold  animate-bounce">
                        Please Provide a valid qr
                      </h1>
                    </div>
                  )}
                </>
              ) : (
                <div>
                  <QrReader
                    className="-mt-10 rounded-xl"
                    onResult={(result, error) => {
                      if (!!result) {
                        setData(result?.text);
                        // console.log(result);
                        // console.log(result?.text);
                      }

                      if (!!error) {
                        // console.info(error);
                      }
                    }}
                    style={{ width: '100%' }}
                  />
                </div>
              )}
            </>
          ) : (
            <div>
              <img
                className="w-[400px] h-[306px] rounded-b-xl"
                src="https://i.gifer.com/3bHf.gif"
                alt=""
              />
            </div>
          )}{' '}
        </div>
        <div className="flex justify-center items-center w-[350px] h-[300px]  rounded-xl shadow-2xl shadow-blue-800 mt-10">
          <div>
            {data ? (
              <>
                {' '}
                <button onClick={handleSubmit} className="btn btn-primary">
                  {' '}
                  <CgPushChevronUpR className="mr-1 text-xl" />
                  submit
                </button>
              </>
            ) : (
              <button onClick={() => setOpen(true)} className="btn btn-primary">
                {' '}
                <AiFillCamera className="mr-1 text-xl" />
                Scan For Click
              </button>
            )}
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center mt-14">
        {data && (
          <div className="w-[300px] h-[180px] shadow-2xl shadow-blue-800 bg-red-500 rounded-xl">
            <h1>{data}</h1>
          </div>
        )}
      </div> */}
      <div>
        {data && (
          <div className="flex justify-center ml-96">
            <select
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
              className="select select-primary max-w-xs text-white bg-slate-700 w-52"
            >
              <option disabled selected>
                Select your quantity
              </option>
              {quantityOptions.map(quantity => (
                <option key={quantity} value={quantity}>
                  {quantity}
                </option>
              ))}
            </select>
          </div>
        )}

        <BookProducts />
      </div>
    </div>
  );
};

export default QRCodeScanner;
