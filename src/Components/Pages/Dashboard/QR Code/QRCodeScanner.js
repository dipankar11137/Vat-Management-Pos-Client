import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const QRCodeScanner = () => {
  const [data, setData] = useState(false);
  return (
    <div>
      {data ? (
        <></>
      ) : (
        <div className="h-96 w-96">
          <QrReader
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
      <p>{data}</p>
    </div>
  );
};

export default QRCodeScanner;
