document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("carouselContainer");
  const faces = container.querySelectorAll(".carouselFace");
  const totalFaces = faces.length;
  let currentIndex = 0;
  let intervalId; // Variable to hold the interval ID for auto-rotation

  function goToFace(index) {
    // Calculate translateX value based on index
    const translateValue = `translateX(${-index * 100}%)`;
    container.style.transform = translateValue;
    currentIndex = index;
  }

  function startAutoRotate() {
    // intervalId = setInterval(() => {
    //   goToFace(currentIndex < totalFaces - 1 ? currentIndex + 1 : 0);
    // }, 3000); // Change interval duration as needed (3000ms = 3 seconds)
  }

  function stopAutoRotate() {
    clearInterval(intervalId);
  }

  // Start auto-rotate when the carousel container is in view
  function checkCarouselInView() {
    const rect = container.getBoundingClientRect();
    const isVisible =
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight);
    if (isVisible) startAutoRotate();
    else stopAutoRotate();
  }

  // Initial check when the page loads
  checkCarouselInView();

  // Check periodically when scrolling
  window.addEventListener("scroll", checkCarouselInView);

  // Event listeners for manual navigation
  document
    .getElementById("arrowDivLeft")
    .addEventListener("click", function () {
      if (currentIndex > 0) goToFace(currentIndex - 1);
      else goToFace(totalFaces - 1);
    });

  document
    .getElementById("arrowDivRight")
    .addEventListener("click", function () {
      if (currentIndex < totalFaces - 1) goToFace(currentIndex + 1);
      else goToFace(0);
    });
});

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 767) {
    let contArr = document.querySelectorAll(".carouselFaceImageDiv");
    for (let cInd = 0; cInd < contArr.length; cInd++) {
      let cont = contArr[cInd];
      let img = cont.querySelector("img");
      let scrollStep = 2; // Scroll speed
      let maxScroll = img.offsetWidth - window.innerWidth;
      let scrollPosition = 0;
      scrollImage();
      function scrollImage() {
        scrollPosition += scrollStep;
        if (scrollPosition > maxScroll) scrollPosition = 0;
        cont.scrollLeft = scrollPosition;
        requestAnimationFrame(scrollImage);
      }
    }
  }
});
