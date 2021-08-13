const form = document.querySelector('form');
const firstName = document.querySelector('#fname');
const lastName = document.querySelector('#lname');
const email = document.querySelector('#email');
const country = document.querySelector('#country');
const password = document.querySelector('#password');
const passwordRepeat = document.querySelector('#password2');
const submitButton = document.querySelector('#submit-btn');



form.addEventListener('submit', e => {
    e.preventDefault();

    checkFirstName();
    checkLastName();

    form.reset();
})


const checkFirstName = () => {
    const reg = new RegExp(/^[A-Za-z]+$/);
    if (firstName.value.trim() === '') {
        console.log('first name: cannot be empty')
    } else if (!firstName.value.match(reg)) {
        console.log('first name: letters only!')
    }
    
    if (firstName.value.length > 15) {
        console.log('first name: must be under 15 characters')
    }
}

const checkLastName = () => {
    const reg = new RegExp(/^[A-Za-z]+$/);
    if (lastName.value.trim() === '') {
        console.log('last name: cannot be empty')
    } else if (!lastName.value.match(reg)) {
        console.log('last name: letters only!')
    }
    
    if (lastName.value.length > 15) {
        console.log('last name: must be under 15 characters')
    }
}

const checkEmail = () => {
    console.log('test');
}

const checkPassword = () => {
    console.log('test');
}