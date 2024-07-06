import React, { useState } from 'react';

function BuyerFields({ onSubmit }) {
  const [buyerData, setBuyerData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    duration: '',
    payment: '50',
    customAmount: '',
    paymentMethod: '',
    cihAccountName: '',
    cihTransactionAmount: '',
    cihTransactionId: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyerData({ ...buyerData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(buyerData);
  };

  return (
    <div className="form-group">
      <label htmlFor="buyer-name">Name:</label>
      <input type="text" id="buyer-name" name="name" value={buyerData.name} onChange={handleChange} required />

      <label htmlFor="buyer-email">Email:</label>
      <input type="email" id="buyer-email" name="email" value={buyerData.email} onChange={handleChange} required />

      <label htmlFor="buyer-date">Date:</label>
      <input type="date" id="buyer-date" name="date" value={buyerData.date} onChange={handleChange} required />

      <label htmlFor="buyer-time">Time:</label>
      <input type="time" id="buyer-time" name="time" value={buyerData.time} onChange={handleChange} required />

      <label htmlFor="buyer-duration">Duration (in hours):</label>
      <input type="number" id="buyer-duration" name="duration" value={buyerData.duration} onChange={handleChange} required />

      <label htmlFor="buyer-payment">Payment Amount:</label>
      <select id="buyer-payment" name="payment" value={buyerData.payment} onChange={handleChange} required>
        <option value="50">One place for 50dh</option>
        <option value="80">Two places for 80dh</option>
        <option value="other">Other</option>
      </select>

      {buyerData.payment === 'other' && (
        <div>
          <label htmlFor="buyer-custom-amount">Custom Amount (in dh):</label>
          <input type="number" id="buyer-custom-amount" name="customAmount" value={buyerData.customAmount} onChange={handleChange} required />
        </div>
      )}

      <label htmlFor="buyer-payment-method">Payment Method:</label>
      <select id="buyer-payment-method" name="paymentMethod" value={buyerData.paymentMethod} onChange={handleChange} required>
        <option value="" disabled>Select payment method</option>
        <option value="cash">Cash</option>
        <option value="cih">CIH Bank</option>
      </select>

      {buyerData.paymentMethod === 'cih' && (
        <div>
          <label htmlFor="cih-account-name">CIH Account Name:</label>
          <input type="text" id="cih-account-name" name="cihAccountName" value={buyerData.cihAccountName} onChange={handleChange} required />

          <label htmlFor="cih-transaction-amount">Transaction Amount (in dh):</label>
          <input type="number" id="cih-transaction-amount" name="cihTransactionAmount" value={buyerData.cihTransactionAmount} onChange={handleChange} required />

          <label htmlFor="cih-transaction-id">Transaction ID:</label>
          <input type="text" id="cih-transaction-id" name="cihTransactionId" value={buyerData.cihTransactionId} onChange={handleChange} required />
        </div>
      )}

      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default BuyerFields;