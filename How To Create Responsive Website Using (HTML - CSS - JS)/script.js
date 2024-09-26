let searchIcon = document.querySelector(".search-icon");
let pageSearch = document.querySelector(".top-search-row");
let closeIcon = document.querySelector(".close");

searchIcon.addEventListener("click", () => {
  pageSearch.classList.add("open");
});
closeIcon.addEventListener("click", () => {
  pageSearch.classList.remove("open");
});

function scrollHeader() {
  const header = document.querySelector(".header");
  if (this.scrollY >= 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}
window.addEventListener("scroll", scrollHeader);

window.addEventListener("scroll", () => {
  function getSpaceBetweenTopAndElement() {
    let elements = document.querySelectorAll(".section-title");
    elements.forEach((element) => {
      let rect = element.getBoundingClientRect();
      let space = rect.y;
      if (space < 600) {
        element.style.opacity = "1";
        element.classList.add("animate__bounceInLeft");
      }
    });
  }
  getSpaceBetweenTopAndElement();
});

window.addEventListener("scroll", () => {
  function addClassAnimation() {
    let elements = document.querySelectorAll(".services-boxs .box");
    elements.forEach((element) => {
      let rect = element.getBoundingClientRect();
      let space = rect.y;
      if (space < 600) {
        element.style.opacity = "1";
        element.classList.add("animate__bounceInUp");
      }
    });
  }
  addClassAnimation();
});

window.addEventListener("scroll", () => {
  function getClassAction() {
    let elements = document.querySelectorAll("section[id]");
    elements.forEach((element) => {
      let rect = element.getBoundingClientRect();
      let space = rect.y;
      if (space < 400) {
        let attId = element.getAttribute("id");
        let menuItems = document.querySelectorAll(".menu-item");
        menuItems.forEach((menuItem) => {
          menuItem.classList.remove("current");
          if (menuItem.getAttribute("data-id") === attId) {
            menuItem.classList.add("current");
          }
        });
      }
    });
  }
  getClassAction();
});

let swiper = new Swiper(".project-container", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

let swiper2 = new Swiper(".reviews-container", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});
