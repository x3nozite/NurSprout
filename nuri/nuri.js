function sidebar_open() {
    document.getElementById("closed-sidebar").style.display = "none";
    document.getElementById("opened-sidebar").style.display = "flex";
}

function sidebar_close(){
    document.getElementById("closed-sidebar").style.display = "flex";
    document.getElementById("opened-sidebar").style.display = "none";
}