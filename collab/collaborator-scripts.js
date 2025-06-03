if(!localStorage.getItem("login-status")){
  alert("You must be logged in to access the collab page!");
  window.location.href = "/registration/register.html";
}

const addPeople = document.getElementById("add-button");
const collabOverlay = document.getElementById("collab-overlay");
const closeOverlay = document.getElementById("close-overlay");
addPeople.addEventListener("click", function(){
    
    collabOverlay.classList.add("overlay-open");
    
})

closeOverlay.addEventListener("click", function(){
    collabOverlay.classList.remove("overlay-open");
})

const collabOption = document.querySelectorAll("#select-collab-type ul li");
const collaboratorSection = document.getElementById("collaborators");
const sharedWithMe = document.getElementById("shared-with-me");

collabOption.forEach((option) =>{
    option.addEventListener("click", function(){
        console.log("test")
        const point = option.getAttribute("point");

        if(point === "sharedWithMe"){
            collaboratorSection.classList.remove("onScreen");
            sharedWithMe.classList.add("onScreen2");
        }else if(point === "collaborators"){
            collaboratorSection.classList.add("onScreen");
            sharedWithMe.classList.remove("onScreen2");
        }



        collabOption.forEach((li) =>
            li.classList.remove("selected")
        );

        option.classList.add("selected")
    })
})