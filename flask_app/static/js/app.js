const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const total = slides.length;

let index = 0;
let startX = 0;

// Souris (desktop)
window.addEventListener("mousedown", (e) => {
  startX = e.clientX;
});

window.addEventListener("mouseup", (e) => {
  let delta = e.clientX - startX;

  if (delta < -80 && index < total - 1) index++;
  if (delta > 80 && index > 0) index--;

  slider.style.transform = `translateX(-${index * 100}vw)`;
});

// Tactile (mobile)
window.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

window.addEventListener("touchend", (e) => {
  let delta = e.changedTouches[0].clientX - startX;

  if (delta < -80 && index < total - 1) index++;
  if (delta > 80 && index > 0) index--;

  slider.style.transform = `translateX(-${index * 100}vw)`;
});
