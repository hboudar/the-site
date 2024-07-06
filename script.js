document.getElementById('payment').addEventListener('change', function() {
    const paymentValue = this.value;
    const customAmountContainer = document.getElementById('custom-amount-container');

    if (paymentValue === 'other') {
        customAmountContainer.classList.remove('hidden');
    } else {
        customAmountContainer.classList.add('hidden');
    }
});

document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const duration = document.getElementById('duration').value;
    let payment = document.getElementById('payment').value;

    if (payment === 'other') {
        payment = document.getElementById('custom-amount').value;
    }

    const confirmationDetails = `
        Name: ${name}<br>
        Email: ${email}<br>
        Date: ${date}<br>
        Time: ${time}<br>
        Duration: ${duration} hours<br>
        Payment Amount: ${payment} dh
    `;

    document.getElementById('confirmation-details').innerHTML = confirmationDetails;
    document.getElementById('confirmation').classList.remove('hidden');
    document.getElementById('reservation-form').classList.add('hidden');
});