/* main button: allows to show the header and the about page */
document.getElementById("home_btn").addEventListener("click", function () {
  document.getElementById("header").style.display = "block";
});

/* main button: turns the arrow down when mouse enters */
document.getElementById("home_btn").addEventListener("mouseenter", function () {
  document.getElementById("arrow").style.transform = "rotate(90deg)";
});

/* main button: turns the arrow up when mouse leaves */
document.getElementById("home_btn").addEventListener("mouseleave", function () {
  document.getElementById("arrow").style.transform = "rotate(0deg)";
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

/* MOUSE ENTER AND LEAVE THE PROJECT CARD */

/*mouse enters */
document
  .getElementById("project-card-1")
  .addEventListener("mouseenter", function () {
    document.getElementById("overview-1").style.opacity = "100";
  });

document
  .getElementById("project-card-2")
  .addEventListener("mouseenter", function () {
    document.getElementById("overview-2").style.opacity = "100";
  });

document
  .getElementById("project-card-3")
  .addEventListener("mouseenter", function () {
    document.getElementById("overview-3").style.opacity = "100";
  });

document
  .getElementById("project-card-4")
  .addEventListener("mouseenter", function () {
    document.getElementById("overview-4").style.opacity = "100";
  });

document
  .getElementById("project-card-5")
  .addEventListener("mouseenter", function () {
    document.getElementById("overview-5").style.opacity = "100";
  });

/*mouse leaves */
document
  .getElementById("project-card-1")
  .addEventListener("mouseleave", function () {
    document.getElementById("overview-1").style.opacity = "0";
  });

document
  .getElementById("project-card-2")
  .addEventListener("mouseleave", function () {
    document.getElementById("overview-2").style.opacity = "0";
  });

document
  .getElementById("project-card-3")
  .addEventListener("mouseleave", function () {
    document.getElementById("overview-3").style.opacity = "0";
  });

document
  .getElementById("project-card-4")
  .addEventListener("mouseleave", function () {
    document.getElementById("overview-4").style.opacity = "0";
  });

document
  .getElementById("project-card-5")
  .addEventListener("mouseleave", function () {
    document.getElementById("overview-5").style.opacity = "0";
  });
