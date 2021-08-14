// Get elements from DOM
const form = document.querySelector('form');
const firstName = document.querySelector('#fname');
const lastName = document.querySelector('#lname');
const email = document.querySelector('#email');
const country = document.querySelector('#country');
const password = document.querySelector('#password');
const passwordRepeat = document.querySelector('#password2');
const submitButton = document.querySelector('#submit-btn');

// Populate "Country" field with all the options on page load
window.addEventListener('load', () => getCountries());

// Get data from json file with all the countries and load it into the countries list
const getCountries = async () => {
    const response = await fetch('./countries.json');

    if (!response.ok) {
        const message = `Something went wrong: ${response.status}`;
        throw new Error(message);
    };

    const countries = await response.json();
    for (let i = 0; i < countries.length; i++) {
        const newOption = document.createElement('option');
        newOption.value = countries[i].code;
        newOption.innerText = countries[i].name;
        country.appendChild(newOption);
    };
};

// Check all form fields before submitting
form.addEventListener('submit', e => {
    e.preventDefault();

    checkFirstName();
    checkLastName();
    checkEmail();
    checkCountry();

    form.reset();
});

password.addEventListener('keyup', () => checkPassword());

passwordRepeat.addEventListener('keyup', () => checkPasswordRepeat());


const checkFirstName = () => {
    const reg = new RegExp(/^[A-Za-z]+$/);
    
    if (firstName.value.trim() === '') {
        console.log('first name: cannot be empty')
    } else if (!firstName.value.match(reg)) {
        console.log('first name: letters only!')
    };
    
    if (firstName.value.length > 15) {
        console.log('first name: must be under 15 characters')
    };
};

const checkLastName = () => {
    const reg = new RegExp(/^[A-Za-z]+$/);

    if (lastName.value.trim() === '') {
        console.log('last name: cannot be empty')
    } else if (!lastName.value.match(reg)) {
        console.log('last name: letters only!')
    };
    
    if (lastName.value.length > 15) {
        console.log('last name: must be under 15 characters')
    };
};

const checkEmail = () => {
    const reg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if (!email.value.match(reg)) {
        console.log('must be email')
    };
};

const checkPassword = () => {
    const reg = new RegExp(/^(?=.*[a-z]).{6,16}$/);

    if (!password.value.match(reg)) {
        console.log('pass conditions here')
    };
};

const checkPasswordRepeat = () => {
    if (passwordRepeat.value.trim() === '') {
        console.log('repeat password')
    } else if (passwordRepeat.value !== password.value) {
        console.log('passwords do not match')
    };
};

const checkCountry = () => {
    if (country.value === 'country') {
        console.log('please select country')
    };
};