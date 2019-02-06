menu.onclick = function MyFunction() {
  var x = document.getElementById('my_nav_burger');

  if (x.className === "my_nav") {
    x.className += " responsive";
  } else {
    x.className = "my_nav";
  }
}
