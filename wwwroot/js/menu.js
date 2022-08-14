//Elements
let navbarMenu = document.getElementById("navbar-menu");
let navbarMenuButton = document.getElementById("navbar-menu-button");
let navbarMenuClose = document.getElementById("navbar-menu-close");

//Add on listeners
navbarMenuButton.addEventListener("click", () => {
    //Remove the "hidden" class from navbarMenu
    navbarMenu.classList.remove("hidden");
});

navbarMenuClose.addEventListener("click", () => {
    //Add the "hidden" class to navbarMenu
    navbarMenu.classList.add("hidden");
});