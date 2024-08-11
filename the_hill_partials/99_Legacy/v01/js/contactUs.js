window.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contactUsForm");
  var button = document.getElementById("contactUsSubmitBtn");
  var status = document.getElementById("contactUsStatusBtn");
  var formInput = document.querySelectorAll(".formInput");
  function success() {
    form.reset();
    formInput.forEach((input) => {
      input.style.display = "none";
    });
    button.style.display = "none";
    status.style.display = "block";
  }
  function error() {
    button.style.display = "none";
    status.style.display = "block";
    status.innerHTML = "Oops! There was a problem.";
  }
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});
function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
