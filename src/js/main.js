import validateEmail from './utils/valid-email.js';

document.addEventListener(`DOMContentLoaded`, () => {
    //main components
    const form = document.getElementById(`email-form`);

    //error message
    const errorMessage = document.getElementById(`error-message`)


    // email input
    const emailInput = document.getElementById(`email-input`);

    //For added beauty, the error state is removed when the user enters new values.
    emailInput.addEventListener(`change`, () => {
        emailInput.classList.remove(`error-state`)
    });


    form.addEventListener('submit', (event) => {
        // Prevent the default form submission to handle validation manually
        event.preventDefault(); 
    });

    const submitButton = document.getElementById(`submit-button`);
    




    submitButton.addEventListener(`click`, () => {
        

            if(!validateEmail(emailInput.value)) {
                if(emailInput.value === "") {
                    errorMessage.textContent = `Whoops! It looks like you forgot to add your email.`
                } else {
                    errorMessage.textContent = `Please provide a valid email address`
                }
                errorMessage.classList.remove(`hidden`);
                emailInput.classList.add(`error-state`)

            } else {
                form.submit();
                alert(`You will be notified about the start!`)
                errorMessage.classList.add(`hidden`);
                emailInput.classList.remove(`error-state`)
            }
    })



});

