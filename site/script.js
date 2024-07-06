document.getElementById('user-type').addEventListener('change', function() {
    const userType = this.value;
    const buyerFields = document.getElementById('buyer-fields');
    const sellerFields = document.getElementById('seller-fields');

    if (userType === 'buyer') {
        buyerFields.classList.remove('hidden');
        sellerFields.classList.add('hidden');
    } else if (userType === 'seller') {
        buyerFields.classList.add('hidden');
        sellerFields.classList.remove('hidden');
    } else {
        buyerFields.classList.add('hidden');
        sellerFields.classList.add('hidden');
    }
});

document.getElementById('buyer-payment').addEventListener('change', function() {
    const paymentValue = this.value;
    const customAmountContainer = document.getElementById('buyer-custom-amount-container');

    if (paymentValue === 'other') {
        customAmountContainer.classList.remove('hidden');
    } else {
        customAmountContainer.classList.add('hidden');
    }
});

document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userType = document.getElementById('user-type').value;
    let confirmationDetails = '';

    if (userType === 'buyer') {
        const name = document.getElementById('buyer-name').value;
        const email = document.getElementById('buyer-email').value;
        const date = document.getElementById('buyer-date').value;
        const time = document.getElementById('buyer-time').value;
        const duration = document.getElementById('buyer-duration').value;
        let payment = document.getElementById('buyer-payment').value;

        if (payment === 'other') {
            payment = document.getElementById('buyer-custom-amount').value;
        }

        confirmationDetails = `
            Type: Buyer<br>
            Name: ${name}<br>
            Email: ${email}<br>
            Date: ${date}<br>
            Time: ${time}<br>
            Duration: ${duration} hours<br>
            Payment Amount: ${payment} dh
        `;
    } else if (userType === 'seller') {
        const name = document.getElementById('seller-name').value;
        const email = document.getElementById('seller-email').value;
        const date = document.getElementById('seller-date').value;
        const time = document.getElementById('seller-time').value;
        const duration = document.getElementById('seller-duration').value;
        const price = document.getElementById('seller-price').value;

        confirmationDetails = `
            Type: Seller<br>
            Name: ${name}<br>
            Email: ${email}<br>
            Date: ${date}<br>
            Time: ${time}<br>
            Duration: ${duration} hours<br>
            Price Per Place: ${price} dh
        `;
    }

    document.getElementById('confirmation-details').innerHTML = confirmationDetails;
    document.getElementById('confirmation').classList.remove('hidden');
    document.getElementById('reservation-form').classList.add('hidden');
});