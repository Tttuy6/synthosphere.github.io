const elCount = document.querySelector('#count');
let rPressed = false;
let count = 0;

document.body.addEventListener('keydown', keyDown);
document.body.addEventListener('keyup', keyUp);

function setCount(newCount) {
  count = newCount;
  elCount.textContent = newCount;
}

function keyDown(event) {
  if (event.keyCode == 82) {
    setCount(count + 1);

    setTimeout(() => {
      setCount(0);
    }, 250);

    if (count === 2) {
      openTab();
    }
  }
}

function openTab() {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
}