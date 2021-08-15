// Get elements from DOM
const form = document.querySelector('form');
const firstName = document.querySelector('#fname');
const lastName = document.querySelector('#lname');
const email = document.querySelector('#email');
const country = document.querySelector('#country');
const password = document.querySelector('#password');
const passwordRepeat = document.querySelector('#password2');
const submitButton = document.querySelector('#submit-btn');

const approvedColor = 'rgb(50, 240, 123)';
const rejectedColor = 'rgb(240, 88, 50)';

const firstNameInfoMin = document.querySelector('[data-fname="min"]');
const firstNameInfoLetters = document.querySelector('[data-fname="letters"]');
const firstNameInfoMax = document.querySelector('[data-fname="max"]');

const lastNameInfoMin = document.querySelector('[data-lname="min"]');
const lastNameInfoLetters = document.querySelector('[data-lname="letters"]');
const lastNameInfoMax = document.querySelector('[data-lname="max"]');

const emailInfo = document.querySelector('[data-email]');

const countryInfo = document.querySelector('[data-country]');

const passwordInfoMin = document.querySelector('[data-password="min"]');
const passwordInfoChar = document.querySelector('[data-password="char"]');
const passwordInfoMax = document.querySelector('[data-password="max"]');
const passwordInfoMatch = document.querySelector('[data-password="match"]')


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

    // form.reset();
});

firstName.addEventListener('keyup', () => checkFirstName());

lastName.addEventListener('keyup', () => checkLastName());

email.addEventListener('keyup', () => checkEmail());

country.addEventListener('change', () => checkCountry());

password.addEventListener('keyup', () => checkPassword());

passwordRepeat.addEventListener('keyup', () => checkPasswordRepeat());


const checkFirstName = () => {
    const reg = new RegExp(/^[A-Za-z]+$/);

    firstName.style.border = `1px solid ${approvedColor}`;
    firstNameInfoMin.style.color = approvedColor;
    firstNameInfoLetters.style.color = approvedColor;
    firstNameInfoMax.style.color = approvedColor;
    
    if (firstName.value.length < 3) {
        firstName.style.border = `1px solid ${rejectedColor}`;
        firstNameInfoMin.style.color = rejectedColor;
    }
    
    if (!firstName.value.match(reg)) {
        firstName.style.border = `1px solid ${rejectedColor}`;
        firstNameInfoLetters.style.color = rejectedColor;
    }

    if (firstName.value.length > 15) {
        firstName.style.border = `1px solid ${rejectedColor}`;
        firstNameInfoMax.style.color = rejectedColor;
    }
};

const checkLastName = () => {
    const reg = new RegExp(/^[A-Za-z]+$/);

    lastName.style.border = `1px solid ${approvedColor}`;
    lastNameInfoMin.style.color = approvedColor;
    lastNameInfoLetters.style.color = approvedColor;
    lastNameInfoMax.style.color = approvedColor;

    if (lastName.value.length < 3) {
        lastName.style.border = `1px solid ${rejectedColor}`;
        lastNameInfoMin.style.color = rejectedColor;
    }
    
    if (!lastName.value.match(reg)) {
        lastName.style.border = `1px solid ${rejectedColor}`;
        lastNameInfoLetters.style.color = rejectedColor;
    }

    if (lastName.value.length > 15) {
        lastName.style.border = `1px solid ${rejectedColor}`;
        lastNameInfoMax.style.color = rejectedColor;
    }
};

const checkEmail = () => {
    const reg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    email.style.border = `1px solid ${approvedColor}`;
    emailInfo.style.color = approvedColor;

    if (!email.value.match(reg)) {
        email.style.border = `1px solid ${rejectedColor}`;
        emailInfo.style.color = rejectedColor;
    }
};

const checkCountry = () => {
    country.style.border = `1px solid ${rejectedColor}`;
    countryInfo.style.color = rejectedColor;

    if (country.value !== 'country') {
        countryInfo.style.color = approvedColor;
        country.style.border = `1px solid ${approvedColor}`;
    };
};

const checkPassword = () => {
    const reg = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{1,16}$/);

    password.style.border = `1px solid ${approvedColor}`;
    passwordInfoMin.style.color = approvedColor;
    passwordInfoChar.style.color = approvedColor;
    passwordInfoMax.style.color = approvedColor;

    if (password.value.length < 6) {
        password.style.border = `1px solid ${rejectedColor}`;
        passwordInfoMin.style.color = rejectedColor;
    }

    if (!password.value.match(reg)) {
        password.style.border = `1px solid ${rejectedColor}`;
        passwordInfoChar.style.color = rejectedColor;
    }

    if (password.value.length > 16) {
        password.style.border = `1px solid ${rejectedColor}`;
        passwordInfoMax.style.color = rejectedColor;
    }
};

const checkPasswordRepeat = () => {
    passwordRepeat.style.border = `1px solid ${rejectedColor}`;
    passwordInfoMatch.style.color = rejectedColor;

    if (passwordRepeat.value === password.value) {
        passwordRepeat.style.border = `1px solid ${approvedColor}`;
        passwordInfoMatch.style.color = approvedColor;
    }
};

