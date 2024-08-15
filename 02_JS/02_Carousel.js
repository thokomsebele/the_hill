document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const container = document.getElementById("carouselContainer");
  const faces = container.querySelectorAll(".carouselFace");
  const totalFaces = faces.length;
  function goToFace(index) {
    const translateValue = `translateX(${-index * 100}%)`;
    container.style.transform = translateValue;
    currentIndex = index;
  }
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
  setInterval(function () {
    if (window.innerWidth <= 999) {
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
  }, 2500);
});
