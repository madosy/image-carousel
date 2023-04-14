const imageReel = document.querySelector(".image-reel");
const right_carouselButton = document.querySelector(
  ".carousel-container > .right.button"
);
const left_carouselButton = document.querySelector(
  ".carousel-container > .left.button"
);

const totalWidth = imageReel.scrollWidth;
const imageCount = imageReel.querySelectorAll(".image").length;
const scrollAmount = totalWidth / imageCount;

const positionIndicator = document.querySelector(
  ".carousel-container > .position-indicator"
);
const getPosition = () => Math.floor(imageReel.scrollLeft / scrollAmount);

function addCircles(container) {
  container.innerHTML = "";
  const imageCount = imageReel.querySelectorAll(".image").length;
  const currentPosition = getPosition();

  for (let i = 0; i < imageCount; i++) {
    if (i == currentPosition) {
      const circleFilled = document.createElement("div");
      circleFilled.classList.add("circle");
      circleFilled.classList.add("filled");
      container.appendChild(circleFilled);
    } else {
      const circle = document.createElement("div");
      circle.classList.add("circle");
      container.appendChild(circle);
    }
  }
}

addCircles(positionIndicator);

right_carouselButton.addEventListener("click", () => {
  imageReel.scrollLeft += scrollAmount;
});
left_carouselButton.addEventListener("click", () => {
  imageReel.scrollLeft -= scrollAmount;
});

imageReel.addEventListener("scroll", () => {
  setTimeout(() => {
    addCircles(positionIndicator);
  }, 300);
});
