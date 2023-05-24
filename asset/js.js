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

function showToast() {
  var toast = document.getElementById("toast");
  toast.classList.remove("hide");
  toast.classList.add("show");

  setTimeout(function () {
    toast.classList.remove("show");
    toast.classList.add("hide");
  }, 7000); // Durasi tampilan toast dalam milidetik (misalnya, 3000ms untuk 3 detik)
}
