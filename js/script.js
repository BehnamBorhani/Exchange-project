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
const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', function () {
  document.body.classList.toggle('dark')

  if (document.body.className.includes('dark')) {
    localStorage.setItem('theme', 'dark')
  } else {
    localStorage.setItem('theme', 'light')
  }
})


window.onload = function () {
  let localStorageTheme = localStorage.getItem('theme')

  if (localStorageTheme === 'dark') {
    document.body.classList.add('dark')
  }

}
/* dark mode ends */