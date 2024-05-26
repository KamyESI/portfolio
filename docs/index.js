/* main button: allows to show the header and the about page */
document.getElementById("home_btn").addEventListener("click", function () {
  document.getElementById("header").style.display = "block";
});

/* hamburger button: allows to show the hamburger menu */
document
  .getElementById("hamburger-wrapper")
  .addEventListener("click", function () {
    document.getElementById("hamburger-menu").style.display = "block";
  });

/* humburger links allow to hide the hamburger menu */
document.getElementById("nav_link_home").addEventListener("click", function () {
  document.getElementById("hamburger-menu").style.display = "none";
  document.getElementById("header").style.display = "none";
});

document
  .getElementById("nav_link_about")
  .addEventListener("click", function () {
    document.getElementById("hamburger-menu").style.display = "none";
  });

document
  .getElementById("nav_link_portfolio")
  .addEventListener("click", function () {
    document.getElementById("hamburger-menu").style.display = "none";
  });

document.getElementById("nav_link_blog").addEventListener("click", function () {
  document.getElementById("hamburger-menu").style.display = "none";
});

document
  .getElementById("nav_link_contact")
  .addEventListener("click", function () {
    document.getElementById("hamburger-menu").style.display = "none";
  });

/* home link in the nav menu allows to hide the header */
document
  .getElementById("nav_link_home_menu")
  .addEventListener("click", function () {
    document.getElementById("header").style.display = "none";
  });
