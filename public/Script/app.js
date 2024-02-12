const contactForm = document.querySelector('.contact-form');
let name = document.getElementById('from_name');
let email = document.getElementById('email_id');
let subject = document.getElementById('subject');
let message = document.getElementById('message');
let contactMessage = document.getElementById('contactMessage');
let MessageText = document.querySelector('#contactMessage p');
let colseBtn = document.getElementById('colseBtn');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function () {
        console.log(xhr.responseText);
        if (xhr.responseText == 'success') {
            MessageText.innerHTML = "Thank you for contacting me.'👋' I will respond as soon as possible";
            contactMessage.style.display = "flex";
            name.value = '';
            email.value = '';
            subject.value = '';
            message.value = "";
        }else {
            MessageText.innerHTML = "Sorry, there was an error.'😔' Please try again later";
            contactMessage.style.display = "flex";
        }
    }

    xhr.send(JSON.stringify(formData));
});