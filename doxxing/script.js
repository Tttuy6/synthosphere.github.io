function animate() {
  // Find all elements with the class "prog"
  const progElements = document.querySelectorAll(".prog");

  // Add the class "animation" to each element
  for (const progElement of progElements) {
    progElement.classList.add("animation");
  }

  // setTimeout() will run the following code after 4 seconds
  setTimeout(() => {
    // Remove the class "animation" from each element
    for (const progElement of progElements) {
      progElement.classList.remove("animation");
    }
    beginClearingScreen();
  }, 4000);
}

function beginClearingScreen() {
  var wrapper = document.querySelector('.wrapper');
  wrapper.style.display = 'none';
  var iframe = document.querySelector("iframe");
  iframe.style.visibility = 'visible';
  var button = document.querySelector('button');
  button.style.display = 'none';
  var br = document.querySelector('br');
  br.style.display = 'none';
}

// Attach the animate() function to the click event of the button
const button = document.querySelector("button");
button.addEventListener("click", animate);
