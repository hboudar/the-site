import React, { useState } from 'react';

function SellerFields({ onSubmit }) {
  const [sellerData, setSellerData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    duration: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSellerData({ ...sellerData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(sellerData);
  };

  return (
    <div className="form-group">
      <label htmlFor="seller-name">Name:</label>
      <input type="text" id="seller-name" name="name" value={sellerData.name} onChange={handleChange} required />

      <label htmlFor="seller-email">Email:</label>
      <input type="email" id="seller-email" name="email" value={sellerData.email} onChange={handleChange} required />

      <label htmlFor="seller-date">Date:</label>
      <input type="date" id="seller-date" name="date" value={sellerData.date} onChange={handleChange} required />

      <label htmlFor="seller-time">Time:</label>
      <input type="time" id="seller-time" name="time" value={sellerData.time} onChange={handleChange} required />

      <label htmlFor="seller-duration">Duration (in hours):</label>
      <input type="number" id="seller-duration" name="duration" value={sellerData.duration} onChange={handleChange} required />

      <label htmlFor="seller-price">Price Per Place (in dh):</label>
      <input type="number" id="seller-price" name="price" value={sellerData.price} onChange={handleChange} required />

      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default SellerFields;