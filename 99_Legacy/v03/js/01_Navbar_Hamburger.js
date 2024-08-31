let hamburger = document.querySelector("#hamburger");
let navSect = document.querySelector("#navBarSection");
let navbar = document.querySelector(".navBar_links");
let logo = document.querySelector(".navBar_logo");

hamburger.onclick = toggleHamburger;

document.addEventListener("click", function (event) {
  let isNavSect = navSect.contains(event.target);
  let menuIsOpen = hamburger.classList.contains("open");
  if (!isNavSect && menuIsOpen) toggleHamburger();
});

window.onresize = toggleNavbarElementVisibiliy;
function toggleNavbarElementVisibiliy() {
  if (window.innerWidth <= 999) {
    if (hamburger.classList.contains("open")) {
      logo.style.display = "none";
      navbar.style.display = "block";
      navSect.style.height = "325px";
    } else {
      logo.style.display = "block";
      navbar.style.display = "none";
      navSect.style.height = "80px";
    }
  } else {
    logo.style.display = "block";
    navbar.style.display = "block";
    navSect.style.height = "80px";
  }
}
function toggleHamburger() {
  hamburger.classList.toggle("open");
  toggleNavbarElementVisibiliy();
}
