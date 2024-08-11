document.addEventListener("DOMContentLoaded", function () {
  let slides = document.getElementsByClassName("heroSlide");
  if (slides.length) slides[0].classList.add("heroSlide_displayed");
});

document.addEventListener(
  "click",
  function (e) {
    let slideSelBtn = e.target.closest(".slideSelectButton");
    if (slideSelBtn) {
      e.preventDefault();
      let slideId = slideSelBtn.dataset.slide_id;
      if (slideId) {
        document.querySelectorAll(".heroSlide").forEach((hs) => {
          hs.classList.remove("heroSlide_displayed");
        });
        document
          .querySelector(`.heroSlide.${slideId}`)
          .classList.add("heroSlide_displayed");
      }
    }
  },
  false
);
