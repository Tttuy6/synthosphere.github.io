function myFunction() {
    const input = document.getElementById("myInput");
    const filter = input.value.toUpperCase();

    const listItems = document.querySelectorAll('a');
    listItems.forEach(item => {
      const txtValue = item.textContent || item.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    })
  }