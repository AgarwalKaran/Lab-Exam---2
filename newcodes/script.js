document.getElementById('fetch-btn').addEventListener('click', fetchCatImage);
//Adding event listener to check if fetch button is pressed
async function fetchCatImage() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        //fetching from thecatapi
        const data = await response.json();
        displayCatImage(data[0].url);
    } catch (error) {
        //error message if something goes wrong
        console.error('Error fetching the cat image:', error);
    }
}

//displaying the cat image after fetching it
function displayCatImage(url) {
    const container = document.getElementById('cat-image-container');
    container.innerHTML = `<br> Here's your cat meoww: <br><img src="${url}" alt="Random Cat">`;
}

// Form validation to make sure user enters correct details
const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (e) => {
    if (!validateInputs()) {
        e.preventDefault(); // Prevent form submission if validation fails
    }
});

//Adding validations for all three fields
function validateInputs() {
    const isValidName = checkInput(nameInput, 'Name is required.');
    const isValidEmail = checkInput(emailInput, 'Email is required.');
    const isValidPassword = checkInput(passwordInput, 'Password must be at least 6 characters long.', 6);

    return isValidName && isValidEmail && isValidPassword;
}

//checking if each input is of min length and validated
function checkInput(input, message, minLength = 1) {
    if (input.value.trim().length < minLength) {
        setError(input, message);
        return false;
    } else {
        setSuccess(input);
        return true;
    }
}


//setError and setSuccess to annotate valid or invalid inputs to user
function setError(input, message) {
    const small = input.nextElementSibling;
    small.innerText = message;
    small.style.visibility = 'visible';
    input.style.borderColor = 'red';
}

function setSuccess(input) {
    const small = input.nextElementSibling;
    small.style.visibility = 'hidden';
    input.style.borderColor = 'green';
}
