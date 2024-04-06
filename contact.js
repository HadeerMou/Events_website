const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputBox = element.parentElement;
    const errorDisplay = inputBox.querySelector('.error');

    errorDisplay.innerText = message;
    inputBox.classList.add('error');
    inputBox.classList.remove('success');
}

const setSuccess = element => {
    const inputBox = element.parentElement;
    const errorDisplay = inputBox.querySelector('.error');

    errorDisplay.innerText = '';
    inputBox.classList.add('success');
    inputBox.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
    
const validateInputs = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();

    if(nameValue === '') {
        setError(name, 'name is required');
    } else {
        setSuccess(name);
    }
    
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(subjectValue === '') {
        setError(subject, 'Subject is required');
    } else {
        setSuccess(subject);
    }

    if(messageValue === '') {
        setError(message, 'message is required');
    } else if (messageValue.length < 4 ) {
        setError(message, 'message must be at least 4 character.');
    } else {
        setSuccess(message);
    }
};