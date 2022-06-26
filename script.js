var sidebar
var menuIcon
window.onload = init

function init(){
    sidebar = document.getElementsByClassName("sidebar-container")
    menuIcon = document.getElementById("menu")
    console.log(menuIcon)
    
}

function menu(element){
    sidebar[0].classList.toggle("hide")
    if (sidebar[0].classList.contains("hide")) {
        menuIcon.src = "assets/icons/menu.png"
    } else {
        menuIcon.src = "assets/icons/menu-open.png"

    }
}


