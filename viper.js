// Change the background color to black
document.body.style.backgroundColor = "black";

// Remove all the content in the <body> and <html> tag
document.body.innerHTML = "";
document.documentElement.innerHTML = "";

// Change the title to "hello"
document.title = "Error 404: Repository not found.";

// Remove the favicon
document.querySelector("[rel='icon']").remove();

// Create a new p element
var p = document.createElement("p");
p.textContent = "Error 404: Repository not found.";

// Add the new p element to the <body> tag
document.body.appendChild(p);
