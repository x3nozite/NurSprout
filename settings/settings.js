if(!localStorage.getItem("login-status")){
  alert("You must be logged in to access the settings!");
  window.location.href = "/registration/register.html";
}

const displayName = localStorage.getItem("username");

document.getElementById("display-name").innerHTML = displayName;