const userIdInput = document.getElementById('userId');
const passwordInput = document.getElementById('password');
const nameInput = document.getElementById('name');
const addressInput = document.getElementById('address');
const countrySelect = document.getElementById('country');
const zipCodeInput = document.getElementById('zipCode');
const emailInput = document.getElementById('email');
const maleRadio = document.getElementById('maleRadio');
const femaleRadio = document.getElementById('femaleRadio');
const englishCheckbox = document.getElementById('englishCheckbox');
const nonEnglishCheckbox = document.getElementById('nonEnglishCheckbox');
const aboutInput = document.getElementById('about');

const errorSpans = document.querySelectorAll('span');

const userIdError = document.getElementById('userIdError');
const passwordError = document.getElementById('passwordError');
const nameError = document.getElementById('nameError');
const addressError = document.getElementById('addressError');
const countryError = document.getElementById('countryError');
const zipCodeError = document.getElementById('zipCodeError');
const emailError = document.getElementById('emailError');
const genderError = document.getElementById('genderError');
const languageError = document.getElementById('languageError');
const aboutError = document.getElementById('aboutError');

const form = document.getElementById('registrationForm');

const alphaRegex = /^[a-zA-Z()]+$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const validate = () => {
    errorSpans.forEach(span => span.textContent = '');

    if (!userIdInput.value) {
        userIdError.textContent = "User ID is required";
        userIdInput.focus();
        return false;
    }
    if (userIdInput.value.length < 5 || userIdInput.value.length > 12) {
        userIdError.textContent = "User ID must be between 5 and 12";
        userIdInput.focus();
        return false
    }
    if (!passwordInput.value) {
        passwordError.textContent = "Password is required";
        passwordInput.focus();
        return false;
    }
    if (passwordInput.value.length < 7 || passwordInput.value.length > 12) {
        passwordError.textContent = "Password must be between 7 and 12";
        passwordInput.focus();
        return false
    }
    if (!nameInput.value) {
        nameError.textContent = "Name is required";
        nameInput.focus();
        return false;
    }
    if (!alphaRegex.test(nameInput.value)) {
        nameError.textContent = "Name must contain only alphabetic characters";
        nameInput.focus();
        return false;
    }
    if (!countrySelect.value) {
        countryError.textContent = "Country is required";
        countrySelect.focus();
        return false;
    }
    if (!zipCodeInput.value) {
        zipCodeError.textContent = "ZIP Code is required";
        zipCodeInput.focus();
        return false;
    }
    if (isNaN(zipCodeInput.value)) {
        zipCodeError.textContent = "ZIP Code must be numeric";
        zipCodeInput.focus();
        return false;
    }
    if (!emailInput.value) {
        emailError.textContent = "Email is required";
        emailInput.focus();
        return false;
    }
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "Invalid Email";
        emailInput.focus();
        return false;
    }
    if (!(maleRadio.checked || femaleRadio.checked)) {
        genderError.textContent = "You have to specify gender";
        maleRadio.focus();
        return false;
    }
    if (!(englishCheckbox.checked || nonEnglishCheckbox.checked)) {
        languageError.textContent = "You have to choose at least one language";
        englishCheckbox.focus();
        return false;
    }
    return true;
}

form.onsubmit = validate;