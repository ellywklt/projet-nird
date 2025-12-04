const slides = document.querySelectorAll(".slide");
const total = slides.length;
let index = 0;

// On active la première image au départ
slides[index].classList.add("active");

// ===============================
// FONDU AUTOMATIQUE
// ===============================
setInterval(() => {
  slides[index].classList.remove("active");

  index = (index + 1) % total;

  slides[index].classList.add("active");
}, 5000); // ✅ 5 secondes (modifiable)
