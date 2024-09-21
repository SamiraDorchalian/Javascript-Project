const button = document.querySelector("button");

button.addEventListener("click", () => {
  const currentState = button.getAttribute("data-state");

  if (!currentState || currentState === "closed") {
    button.setAttribute("data-state", "opened");
    button.setAttribute("aria-expanded", "true");
  } else {
    button.setAttribute("data-state", "closed");
    button.setAttribute("aria-expanded", "false");
  }
});

let hamburger = document.querySelector(".button");
let menu = document.querySelector(".menu");
let links = document.querySelectorAll(".menu li a");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

links.forEach(function (link) {
  link.onclick = function () {
    menu.classList.remove("active");
    hamburger.setAttribute("data-state", "closed");
    hamburger.setAttribute("aria-expanded", "false");
  };
});

let swiper = new Swiper(".testimonial_container", {
  slidesPerView: 1,
  spaceBetween: 20,
  initialSlide: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breackpoints: {
    992: {
      slidesPerView: 3,
    },
    586: {
      slidesPerView: 2,
    },
  },
});
