function validate() {
    let error = true;

    if (document.getElementById('search').value === '') {
        document.getElementById('emailError').innerHTML = 'Enter an email';
        document.getElementById('emailError').style.color = "red";
        document.getElementById('email').style.border = 'red solid 2px';
        error = false;
    }
}