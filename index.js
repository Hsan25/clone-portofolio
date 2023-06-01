// toggle side bar
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const clos = document.querySelector(".close");
const links = document.querySelectorAll("ul li a");

menu.onclick = (e) => {
  e.preventDefault();
  nav.classList.toggle("active");
};

clos.onclick = (e) => {
  e.preventDefault();
  nav.classList.remove("active");
};

links.forEach((a) => {
  a.onclick = (e) => {
    nav.classList.remove("active");
  };
});

document.addEventListener("click", function (e) {});
