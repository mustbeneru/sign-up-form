const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const error = document.querySelector('.error');
const submit = document.querySelector('button')
const form = document.querySelector('form')

submit.addEventListener('click', (e) => {
    console.log(password.value, confirmPassword.value)
    if (confirmPassword.value !== password.value) {
        error.textContent = 'Password does not match!'
    } else {
        error.textContent = ''
        form.submit();
    }
})