function validate(form) {

    // document.getElementById('nameError').innerHTML = '';
    // document.getElementById('name').style.border = '';
    // document.getElementById('emailError').innerHTML = '';
    // document.getElementById('email').style.border = '';
    // document.getElementById('passwordError').innerHTML = '';
    // document.getElementById('password').style.border = '';



    let error = true;

    if (document.getElementById('email').value === '') {
        document.getElementById('emailError').innerHTML = 'Enter an email';
        document.getElementById('emailError').style.color = "red";
        document.getElementById('email').style.border = 'red solid 2px';
        error = false;

    }
    if (document.getElementById('password').value.trim() === '') {
        document.getElementById('passwordError').innerHTML = 'Enter your password';
        document.getElementById('passwordError').style.color = "red";
        document.getElementById('password').style.border = 'red solid 2px';
        error = false;

    }
    return false;
}