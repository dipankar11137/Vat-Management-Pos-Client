import React, { useState } from 'react';
import { AiFillCamera } from 'react-icons/ai';
import { CgPushChevronUpR } from 'react-icons/cg';
import { QrReader } from 'react-qr-reader';

const QRCodeScanner = () => {
  const [data, setData] = useState(false);
  const [open, setOpen] = useState(false);
  const handleSubmit = () => {
    setData(false);
    setOpen(false);
  };
  return (
    <div className="mt-14">
      <div className="flex justify-center gap-10">
        <div className="w-[400px] h-[350px] bg--300 rounded-xl shadow-2xl shadow-blue-800">
          {' '}
          <h1 className="text-2xl text-center font-bold py-1">Scan Here</h1>
          {open ? (
            <>
              {data ? (
                <h1>{data}</h1>
              ) : (
                <div>
                  <QrReader
                    className="-mt-10 rounded-xl"
                    onResult={(result, error) => {
                      if (!!result) {
                        setData(result?.text);
                      }

                      if (!!error) {
                        console.info(error);
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
              <button onClick={handleSubmit} className="btn btn-primary">
                {' '}
                <CgPushChevronUpR className="mr-1 text-xl" />
                submit
              </button>
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
      <h1>{data}</h1>
    </div>
  );
};

export default QRCodeScanner;
