document.addEventListener("DOMContentLoaded", () => {
  setInterval(function () {
    let contColFirst = document.querySelector(".updatesContainer_Col");
    let clsX = "updatesContainer_Col_Min";
    if (window.innerWidth <= 749) contColFirst.classList.add(clsX);
    else contColFirst.classList.remove(clsX);
  }, 2500);
});
