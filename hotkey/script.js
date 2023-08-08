window.addEventListener('DOMContentLoaded', () => {
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
    if (event.keyCode == 72) {
        setCount(count + 1);
        console.log("H Pressed.");
  
        setTimeout(() => {
        setCount(0);
        }, 300);
  
        if (count === 3) {
        openTab();
        }
    }
    }
  
    function openTab() {
    window.location.replace('https://stackoverflow.com/');
    }
  });