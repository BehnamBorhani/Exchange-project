/* preloader starts */
const preloaderElem = document.querySelector(".preloader");

window.addEventListener("load", function () {
   preloaderElem.classList.add("hidden");
});
/* preloader ends */

/* navbar starts */
const navbar = document.querySelector("#navbar");
const logoImg = document.querySelector(".logo img");
let customScroll = document.querySelector("#scroll");

document.addEventListener("scroll", function () {
   let scrollTop = window.scrollY;
   let documentHeight = document.body.clientHeight;
   let windowHeight = window.innerHeight;
   let scrollPercent = scrollTop / (documentHeight - windowHeight);
   let scrollPercentRounded = Math.round(scrollPercent * 100);
   customScroll.style.width = scrollPercentRounded + "%";

   if (document.documentElement.scrollTop > 0) {
      logoImg.style.height = "30px";
      /* navbar.classList.add("bg-black");
      navbar.classList.add("txt-white"); */
   } else {
      logoImg.style.height = "30px";
      /* navbar.classList.remove("bg-black");
      navbar.classList.remove("txt-white"); */
   }
});
/* navbar ends */

/* dark mode starts */
const switchElement = document.querySelector(".switch");

switchElement.addEventListener("click", function () {
   document.body.classList.toggle("dark");

   if (document.body.className.includes("dark")) {
      localStorage.setItem("theme", "dark");
   } else {
      localStorage.setItem("theme", "light");
   }
});

window.onload = function () {
   let localStorageTheme = localStorage.getItem("theme");

   if (localStorageTheme === "dark") {
      document.body.classList.add("dark");
   }
};
/* dark mode ends */

/* dynamic theme setting starts */
const themeBtns = document.querySelectorAll(".theme");
themeBtns.forEach(function (themeBtn) {
   themeBtn.addEventListener("click", function (event) {
      let themeColor = event.target.dataset.color;
      document.documentElement.style.setProperty("--color-secondary", themeColor);
   });
});
/* dynamic theme setting ends */
