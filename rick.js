let rPressed = false;
let count = 0;

function inputs(){
    if(rPressed) {
      count = count + 1;
    }
  }

document.body.addEventListener('keydown', keyDown);
document.body.addEventListener('keyup', keyUp);

function keyDown(event) {
  if (event.keyCode == 82) {
    rPressed = true;
  }
}

function keyUp(event) {
  if (event.keyCode == 82) {
    rPressed = false;
  }
}

if (count == 2) {
    openTab();
}

function openTab() {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    }

