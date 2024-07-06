import React from 'react';

function Confirmation({ formData }) {
  const {
    name,
    email,
    date,
    time,
    duration,
    payment,
    paymentMethod,
    cihAccountName,
    cihTransactionAmount,
    cihTransactionId,
    price
  } = formData;

  return (
    <div className="confirmation">
      <h2>Reservation Confirmed!</h2>
      <p>
        Type: {price ? 'Seller' : 'Buyer'}<br />
        Name: {name}<br />
        Email: {email}<br />
        Date: {date}<br />
        Time: {time}<br />
        Duration: {duration} hours<br />
        {payment && <>
          Payment Amount: {payment} dh<br />
          Payment Method: {paymentMethod === 'cih' ? 'CIH Bank' : 'Cash'}<br />
          {paymentMethod === 'cih' && <>
            CIH Account Name: {cihAccountName}<br />
            Transaction Amount: {cihTransactionAmount} dh<br />
            Transaction ID: {cihTransactionId}<br />
          </>}
        </>}
        {price && <>
          Price Per Place: {price} dh<br />
        </>}
      </p>
    </div>
  );
}

export default Confirmation;