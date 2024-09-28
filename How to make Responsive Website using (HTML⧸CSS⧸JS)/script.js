let swiper = new Swiper(".hero_container", {
  loop: true,
  slidePerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  speed: 900,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let header = document.querySelector("header");

function scrollHeader() {
  let scrollY = window.pageYOffset;

  if (scrollY > 30) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

window.addEventListener("scroll", scrollHeader);
