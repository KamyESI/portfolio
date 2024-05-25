/* main button: allows to show the nav menu and the about page */
document.getElementById("home_btn").addEventListener("click", function () {
  document.getElementById("header").style.display = "block";
});

/* humburger button: allows to show the humburger menu */
document
  .getElementById("humburger-wrapper")
  .addEventListener("click", function () {
    document.getElementById("humburger-menu").style.display = "block";
  });

/* clicking on home link on the nav menu allows to hide the nav menu */
document.getElementById("nav_link_home").addEventListener("click", function () {
  document.getElementById("nav-menu").style.display = "none";
});
