const nextArrow = document.querySelector(".next");
const prevArrow = document.querySelector(".previous");

function next() {
  const slider = document.querySelector(".slider");
  slider.classList.remove("slider");
  slider.classList.add("slider-second");
}

nextArrow.addEventListener("click", () => next());
