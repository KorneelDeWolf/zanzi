var sections = document.querySelectorAll("section[id]");
var navLinks = document.querySelectorAll(".menu-link");

function changeLinkState() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[index].classList.add("active");
}

changeLinkState();
window.addEventListener("scroll", changeLinkState);

for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function() {
        navLinks.forEach((link) => link.classList.remove("active"));
        this.classList.add("active");
    });
}

var header = document.querySelector("header");
var section = document.querySelector("#background-section");
var background = document.querySelector(".home-page-bg");
var sectionOffsetTop = section.offsetTop;

function setSectionPosition() {
  if (window.pageYOffset >= sectionOffsetTop - header.offsetHeight) {
    section.classList.add("sticky");
    background.style.top = header.offsetHeight + "px";
  } else {
    section.classList.remove("sticky");
    background.style.top = "0";
  }
}

window.addEventListener("scroll", setSectionPosition);
window.addEventListener("resize", function () {
  sectionOffsetTop = section.offsetTop;
  setSectionPosition();
});