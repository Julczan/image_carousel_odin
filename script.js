const nextArrow = document.querySelector(".next");
const prevArrow = document.querySelector(".previous");
const slider = document.querySelector("#slider");
const startBtn = document.querySelector("#btn-start");
const secondBtn = document.querySelector("#btn-second");
const thirdBtn = document.querySelector("#btn-third");
const lastBtn = document.querySelector("#btn-last");
const btnContainer = document.querySelector(".navigation");

function sliderPosition() {
  const setStart = () => {
    slider.className = "slider-start";
  };

  const setSecond = () => {
    slider.className = "slider-second";
  };

  const setThird = () => {
    slider.className = "slider-third";
  };

  const setLast = () => {
    slider.className = "slider-last";
  };

  return { setStart, setSecond, setThird, setLast };
}

function getSliderPosition() {
  const sliderPosition = slider.className;

  return sliderPosition;
}

const position = sliderPosition();

function next() {
  switch (getSliderPosition()) {
    case "slider-start":
      position.setSecond();
      break;
    case "slider-second":
      position.setThird();
      break;
    case "slider-third":
      position.setLast();
      break;
    case "slider-last":
      position.setStart();
      break;
  }
}

function previous() {
  switch (getSliderPosition()) {
    case "slider-start":
      position.setLast();
      break;
    case "slider-last":
      position.setThird();
      break;
    case "slider-third":
      position.setSecond();
      break;
    case "slider-second":
      position.setStart();
      break;
  }
}

setInterval(next, 5000);

startBtn.addEventListener("click", () => position.setStart());
secondBtn.addEventListener("click", () => position.setSecond());
thirdBtn.addEventListener("click", () => position.setThird());
lastBtn.addEventListener("click", () => position.setLast());

nextArrow.addEventListener("click", () => next());
prevArrow.addEventListener("click", () => previous());
