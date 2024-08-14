document.addEventListener("DOMContentLoaded", () => {
  let contColFirst = document.querySelector(".updatesContainer_Col");
  console.log("contColFirst : contColFirst");
  console.log(contColFirst);
  let clsX = "updatesContainer_Col_Min";
  if (window.innerWidth <= 749) contColFirst.classList.add(clsX);
  else contColFirst.classList.remove(clsX);
});
