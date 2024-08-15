let hamburger = document.querySelector("#hamburger");
let header = document.querySelector("#navBarSection");
let navbar = document.querySelector("#navBar_links");
let logo = document.querySelector(".navBar_logo");

hamburger.onclick = toggleHamburger;

document.addEventListener("click", function (event) {
  let isHeaderClick = header.contains(event.target);
  let menuIsOpen = hamburger.classList.contains("open");
  if (!isHeaderClick && menuIsOpen) toggleHamburger();
});

window.onresize = toggleNavbarElementVisibiliy;
function toggleNavbarElementVisibiliy() {
  if (window.innerWidth <= 999) {
    if (hamburger.classList.contains("open")) {
      logo.style.display = "none";
      navbar.style.display = "block";
    } else {
      logo.style.display = "block";
      navbar.style.display = "none";
    }
  } else {
    logo.style.display = "block";
    navbar.style.display = "block";
  }
}
function toggleHamburger() {
  hamburger.classList.toggle("open");
  toggleNavbarElementVisibiliy();
}
