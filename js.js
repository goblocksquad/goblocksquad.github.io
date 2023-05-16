// POPUP
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("popup").style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});

// SPINNER
window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});
