let toggle = document.getElementById("toggle-icon");
let overlay = document.querySelector(".menu-overlay");

toggle.addEventListener("click", () => {
  overlay.classList.toggle("active");
});