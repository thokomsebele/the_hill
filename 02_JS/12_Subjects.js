document.addEventListener("DOMContentLoaded", function () {
  adjustSubjectColumns();
  window.addEventListener("resize", adjustSubjectColumns);
  function adjustSubjectColumns() {
    let wStr = "16.6%";
    let w = window.innerWidth;
    if (w <= 249) wStr = "100%";
    else if (w > 249 && w <= 399) wStr = "50%";
    else if (w > 399 && w <= 499) wStr = "33%";
    else if (w > 499 && w <= 699) wStr = "25%";
    else if (w > 699 && w <= 799) wStr = "20%";
    const elements = document.querySelectorAll(".subjectDiv");
    elements.forEach((element) => {
      element.style.width = wStr;
    });
  }
});
