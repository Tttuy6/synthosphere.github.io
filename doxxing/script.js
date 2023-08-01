var animationCount = 0;
var isAnimating = false;

function animateElement() {
  if (isAnimating) {
    return;
  }

  let bang = new Audio('/Media/boom.mp3')
  bang.play()

  isAnimating = true;
  document.querySelector(".element").classList.add("animation");

  setTimeout(() => {
    isAnimating = false;
    document.querySelector(".element").classList.remove("animation");
  }, 4000);
}

document.querySelector(".button").addEventListener("click", animateElement);