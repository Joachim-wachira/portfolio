document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple feedback for submission
    const successMessage = `Thank you, ${name}. Your message has been received!`;
    document.getElementById('successMessage').innerText = successMessage;

    // Here, you can add an API call or save the data to a backend for further processing
});
