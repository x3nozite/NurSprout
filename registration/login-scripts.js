const form = document.getElementById("form-register");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let emailError = document.getElementById("email-error")
    let passwordError = document.getElementById("password-error")

    emailError.innerHTML = "";
    passwordError.innerHTML = "";

    let errorFlag = false;

    if(email == ""){
        emailError.innerHTML = "* Email is empty";
        errorFlag = true;
    }

    if(password == ""){
        passwordError.innerHTML = "* Password is empty";
        errorFlag = true;
    }else if(password.length < 8){
        passwordError.innerHTML = "* Password must be at least 8 characters long";
        errorFlag = true;
    }


    if(!errorFlag){
        localStorage.setItem("login-status", true);
        location.href = "/home.html";
    }
})