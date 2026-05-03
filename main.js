const signUpForm = document.getElementById('sign-up-form');
const emailInput = document.getElementById('email');
const emailErrorMessage = document.getElementById('email-error');
const successMessage = document.querySelector('dialog');
const dismissBtn = document.getElementById('dismiss-btn');
const userEmailDisplay = document.getElementById('user-email')

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function handleSubmit(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    const userEmail = data.email;

    if(validateEmail(userEmail)){
        signUpForm.classList.remove('error');
        emailErrorMessage.innerHTML = '';
        userEmailDisplay.innerHTML = userEmail;
        successMessage.show()

    } else {
        signUpForm.classList.add('error');
        emailErrorMessage.innerHTML = "Valid email required";
        emailInput.focus()

    };
}

function handleDismiss(){
    successMessage.close()
}


signUpForm.addEventListener('submit' , handleSubmit);
dismissBtn.addEventListener('click', handleDismiss)