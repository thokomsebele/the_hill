//*
let hamburger = document.querySelector("#hamburger");
let header = document.querySelector("#header");
let navbar = document.querySelector("#navbar");
let logo = document.querySelector("#logo");

//*
hamburger.onclick = toggleHamburger;

//*
document.addEventListener("click", function (event) {
  let isHeaderClick = header.contains(event.target);
  let menuIsOpen = hamburger.classList.contains("open");
  if (!isHeaderClick && menuIsOpen) {
    toggleHamburger();
  }
});

//*
window.onresize = () => {
  if (window.innerWidth > 999) {
    logo.style.display = "block";
    navbar.style.display = "block";
  } else if (window.innerWidth <= 999) {
    if (hamburger.classList.contains("open")) {
      logo.style.display = "none";
      navbar.style.display = "block";
    } else {
      logo.style.display = "block";
      navbar.style.display = "none";
    }
  }
};

//*
function toggleHamburger() {
  hamburger.classList.toggle("open");
  if (hamburger.classList.contains("open")) {
    navbar.style.display = "block";
    logo.style.display = "none";
  } else {
    navbar.style.display = "none";
    logo.style.display = "block";
  }
}
