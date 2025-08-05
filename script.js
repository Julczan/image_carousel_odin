const nextArrow = document.querySelector(".next");
const prevArrow = document.querySelector(".previous");
const slider = document.querySelector("#slider");

function next() {
  switch (getSliderPosition()) {
    case "slider-start":
      slider.classList.remove("slider-start");
      slider.classList.add("slider-second");
      break;
    case "slider-second":
      slider.classList.remove("slider-second");
      slider.classList.add("slider-third");
      break;
    case "slider-third":
      slider.classList.remove("slider-third");
      slider.classList.add("slider-last");
      break;
    case "slider-last":
      slider.classList.remove("slider-last");
      slider.classList.add("slider-start");
      break;
  }
}

function previous() {
  switch (getSliderPosition()) {
    case "slider-start":
      slider.classList.remove("slider-start");
      slider.classList.add("slider-last");
      break;
    case "slider-last":
      slider.classList.remove("slider-last");
      slider.classList.add("slider-third");
      break;
    case "slider-third":
      slider.classList.remove("slider-third");
      slider.classList.add("slider-second");
      break;
    case "slider-second":
      slider.classList.remove("slider-second");
      slider.classList.add("slider-start");
      break;
  }
}

function getSliderPosition() {
  const sliderPosition = slider.className;

  return sliderPosition;
}

nextArrow.addEventListener("click", () => next());
prevArrow.addEventListener("click", () => previous());
