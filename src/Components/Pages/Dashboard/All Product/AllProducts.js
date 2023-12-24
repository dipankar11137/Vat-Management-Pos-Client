import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AllProduct from './AllProduct';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});
  useEffect(() => {
    fetch('https://vat-management-pos.onrender.com/allProduct')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [products]);

  const handleEdit = id => {
    fetch(`https://vat-management-pos.onrender.com/product/${id}`)
      .then(res => res.json())
      .then(data => setSingleProduct(data));
  };
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentDateTime(new Date());
      }, 1000);

      return () => clearInterval(intervalId);
    }, []); // Run effect once on mount

    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };

    const formattedDateTime = currentDateTime.toLocaleString(
      undefined,
      options
    );

    const updateDateAndProduct = updateProduct => {
      fetch(`https://vat-management-pos.onrender.com/updateProduct`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(updateProduct),
      })
        .then(res => res.json())
        .then(data => {
          toast.success('Restock Is Successfully');
        });
    };

    const handleRestock = event => {
      event.preventDefault();
      const newQuantity =
        parseInt(event.target.quantity.value) +
        parseInt(singleProduct?.quantity);
      // console.log(newQuantity);
      const updateQuantity = { quantity: newQuantity };
      const updateProduct = {
        singleProduct,
        updateQuantity: newQuantity,
        date: formattedDateTime,
        lastQuantityAdd: event.target.quantity.value,
      };
      fetch(
        `https://vat-management-pos.onrender.com/productId/${singleProduct?._id}`,
        {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(updateQuantity),
        }
      )
        .then(res => res.json())
        .then(data => {
          updateDateAndProduct(updateProduct);
          event.target.reset();
        });
    };

    const handleDecrease = event => {
      event.preventDefault();
      if (
        parseInt(singleProduct?.quantity) >=
        parseInt(event.target.quantity.value)
      ) {
        const newQuantity =
          parseInt(singleProduct?.quantity) -
          parseInt(event.target.quantity.value);
        const updateQuantity = { quantity: newQuantity };

        fetch(
          `https://vat-management-pos.onrender.com/productId/${singleProduct?._id}`,
          {
            method: 'PUT',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(updateQuantity),
          }
        )
          .then(res => res.json())
          .then(data => {
            toast.success('Decrease Is Successfully');
            event.target.reset();
          });
      } else {
        toast.error('The new value is greater than the previous value');
        event.target.reset();
      }
    };
    const handleDelete = id => {
      const proceed = window.confirm('Are You Sure ?');
      if (proceed) {
        const url = `https://vat-management-pos.onrender.com/product/${id}`;
        fetch(url, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            const remaining = products.filter(product => product._id !== id);
            setProducts(remaining);
            toast.success('Successfully Delete');
          });
      }
    };
    return (
      <div>
        <div className="overflow-x-auto p-2">
          <table className="table table-xs  text-white w-full  text-center">
            <thead>
              <tr>
                <th className="bg-blue-900"></th>
                <th className="bg-blue-900"></th>
                <th className="bg-blue-900">Name</th>
                <th className="bg-blue-900">Product Id</th>
                <th className="bg-blue-900">Quantity</th>
                <th className="bg-blue-900">Price</th>
                <th className="bg-blue-900">Increase Quantity </th>
                <th className="bg-blue-900">Decrease Quantity</th>
                <th className="bg-blue-900">Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <AllProduct
                  key={product._id}
                  product={product}
                  index={index + 1}
                  handleEdit={handleEdit}
                  singleProduct={singleProduct}
                  handleRestock={handleRestock}
                  handleDecrease={handleDecrease}
                  handleDelete={handleDelete}
                ></AllProduct>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllProducts;
