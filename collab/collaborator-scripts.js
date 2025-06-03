const addPeople = document.getElementById("add-button");
const collabOverlay = document.getElementById("collab-overlay");
const closeOverlay = document.getElementById("close-overlay");
addPeople.addEventListener("click", function(){
    
    collabOverlay.classList.add("overlay-open");
    
})

closeOverlay.addEventListener("click", function(){
    collabOverlay.classList.remove("overlay-open");
})