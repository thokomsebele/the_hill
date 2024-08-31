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
  const scrollStep = 1; // Scroll speed
  let scrollPositions = {};
  startScrolling();
  window.addEventListener("resize", startScrolling);
  function startScrolling() {
    if (window.innerWidth <= 499) scrollImage("horizontal");
    else scrollImage("vertical");
  }
  function scrollImage(direction) {
    let contArr = document.querySelectorAll(".carouselFaceImageDiv");
    contArr.forEach((cont, cInd) => {
      let img = cont.querySelector("img");
      if (!scrollPositions[cInd]) scrollPositions[cInd] = 0;
      let maxScroll, scrollProperty;
      if (direction === "horizontal") {
        maxScroll = img.offsetWidth - window.innerWidth;
        scrollProperty = "scrollLeft";
      } else {
        maxScroll = img.offsetHeight - window.innerHeight;
        scrollProperty = "scrollTop";
      }
      scrollPositions[cInd] += scrollStep;
      if (scrollPositions[cInd] > maxScroll) scrollPositions[cInd] = 0;
      cont[scrollProperty] = scrollPositions[cInd];
    });
    requestAnimationFrame(() => scrollImage(direction));
  }
});
