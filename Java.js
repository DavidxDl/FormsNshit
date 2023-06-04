const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

function validatePassword() {
    if (password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords Don't Match");
        confirmPassword.style.border = "1px solid red";

    } else {
        confirmPassword.setCustomValidity("");
        confirmPassword.style.border = "1px solid blue";
    }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;

