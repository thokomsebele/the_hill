let heroButtons = document.querySelectorAll("#heroMenu li");
let featureBtn = document.querySelector("#features");
let FAQsBtn = document.querySelector("#FAQs");
let features = document.querySelector("#featuresDoc");
let FAQs = document.querySelector("#FAQsDoc");

heroButtons.forEach(
  (button) =>
    (button.onclick = function () {
      if (this.id == "features") {
        featureBtn.classList.add("currentFeature");
        FAQsBtn.classList.remove("currentFeature");
        features.style.display = "block";
        FAQs.style.display = "none";
      } else if (this.id == "FAQs") {
        featureBtn.classList.remove("currentFeature");
        FAQsBtn.classList.add("currentFeature");
        features.style.display = "none";
        FAQs.style.display = "block";
      }
    })
);
