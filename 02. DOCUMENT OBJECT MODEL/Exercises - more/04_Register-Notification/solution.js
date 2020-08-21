function register() {
  let userName = document.getElementById('username').value;

  let email = document.getElementById('email').value;
  let emailPattern = /(.+)@(.+).(com|bg)/gm;
  let emailValidation = email.match(emailPattern).join() === email;
  let password = document.getElementById('password').value;
  let result = document.getElementById('result');

  if (userName && emailValidation && password) {
    result.innerHTML = `<h1>Successful Registration!</h1>Username: ${userName}<br>Email: ${email}<br>Password: ${'*'.repeat(password.length)}`;

    setTimeout(function () { clearRegistrationConfirmation() }, 5000);

    function clearRegistrationConfirmation() {
      result.innerHTML = ``;
    }
  }
}

