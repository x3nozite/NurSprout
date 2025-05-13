const form = document.getElementById("form-register");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    let usernameError = document.getElementById("username-error")
    let passwordError = document.getElementById("password-error")

    usernameError.innerHTML = "";
    passwordError.innerHTML = "";

    let errorFlag = false;

    if(username == ""){
        usernameError.innerHTML = "* Email is empty";
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
        location.href = "/home.html";
    }
})