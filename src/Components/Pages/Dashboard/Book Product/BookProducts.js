import React, { useEffect, useState } from 'react';

const BookProducts = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/booking`)
      .then(res => res.json())
      .then(data => setBookings(data));
  }, [bookings]);
  return (
    <div>
      <h1>book {bookings.length}</h1>
    </div>
  );
};

export default BookProducts;
