const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const categories = document.querySelectorAll('.category');

categories.forEach(category => {
    category.addEventListener('click', () => {
        const categoryName = category.getAttribute('data-category');
        alert(`You clicked on ${categoryName}!`);
    });
});

document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const emailInput = document.getElementById('email');
    const responseMessage = document.getElementById('response-message');

   
    if (emailInput.value) {
        responseMessage.textContent = `Thank you for subscribing with ${emailInput.value}!`;
        emailInput.value = '';
    } else {
        responseMessage.textContent = 'Please enter a valid email address.';
    }
});


