function coverPage(url) {
    // Remove all of the contents of the current page.
    document.body.innerHTML = '';
  
    // Create a fullscreen iframe.
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
  
    // Append the iframe to the document body.
    document.body.appendChild(iframe);
  }

function openInNewTab(url) {

    win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';

    var icon = win.document.createElement('link')
    icon.rel = "shortcut icon"
    icon.href = link + "/Media/gcl.png"
    icon.type = "image/png"
    win.document.head.appendChild(icon)

    /*
    var arc = win.document.createElement('script')
    arc.async = true
    arc.src = "https://arc.io/widget.min.js#RqQiAHK7"
    win.document.head.appendChild(arc)*/

    var title = win.document.createElement('title')
    title.innerText = "Classroom"
    win.document.head.appendChild(title)

    /*
    var home = win.document.createElement('a')
    home.style.display = "block"
    home.style.position = "absolute"
    home.style.fontFamily = "'Courier New', Courier, monospace";
    home.style.color = "rgb(76, 160, 55)"
    home.href="#"
    home.onclick = 'return console.log("hi") && false'
    home.innerText = "home"
    win.document.body.appendChild(home);
    */

    var iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.id = 'content';
    iframe.src = url;
    win.document.body.appendChild(iframe);

}

let link = 'https://synthosphere.github.io'