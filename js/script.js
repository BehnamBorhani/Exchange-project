/* preloader starts */
const preloaderElem = document.querySelector(".preloader");

window.addEventListener("load", function () {
   preloaderElem.classList.add("hidden");
});
/* preloader ends */

/* navbar starts */
const navbar = document.querySelector("#navbar");
const logoImg = document.querySelector(".logo img");

document.addEventListener("scroll", function () {
   if (document.documentElement.scrollTop > 0) {
      logoImg.style.height = "30px";
      navbar.classList.add("bg-black");
      navbar.classList.add("txt-white");
   } else {
      logoImg.style.height = "30px";
      navbar.classList.remove("bg-black");
      navbar.classList.remove("txt-white");
   }
});
/* navbar ends */
