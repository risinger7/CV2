// hamburger-menu

const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".navmenu");

hamburger.addEventListener("click", toggleActive);

function toggleActive() {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
    console.log("clicked");
}

const links = document.querySelectorAll(".navlink");
links.forEach((link) => link.addEventListener("click", removeClass));

function removeClass() {
    navmenu.classList.remove("active");
}

// window.onscroll = function () {
//     scrollRemove();
// };
// function scrollRemove() {
//     null;
// }
