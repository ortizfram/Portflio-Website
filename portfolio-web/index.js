const barToggle = document.querySelector(".bar-toggle");
const navMenu = document.querySelector(".bar-menu");

barToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});