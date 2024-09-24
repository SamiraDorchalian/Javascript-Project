$(".js-rotating").Morphext({
  animation: "bounceIn",
  separator: ",",
  speed: 2000,
  complete: function () {},
});
document.addEventListener("mousemove", parallax);

function parallax(e) {
  this.querySelectorAll(".home-bg svg").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - e.pageX * position) / 300;
    const y = (window.innerHeight - e.pageY * position) / 300;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
window.addEventListener("scroll", () => {
  let about = document.querySelector(".about");
  if (window.pageYOffset > 317) {
    about.classList.add("active");

    const counters = document.querySelectorAll(".count");
    const speed = 1000;

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = parseInt(+counter.getAttribute("data-target"));
        const count = parseInt(+counter.innerText);
        const increment = Math.trunc(target / speed);

        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 100);
        } else {
          count.innerText = target;
        }
      };
      updateCount();
    });
  }
});

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

const tabs = document.querySelectorAll(".portfolio-filter li");

function changeColor() {
  tabs.forEach((tab) => {
    tab.classList.remove("current");
  });
  this.classList.add("current");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", changeColor);
});

let containerEl = document.querySelector(".work-items");
let mixer = mixitup(containerEl, {
  selectors: {
    target: ".work-item",
  },
  animation: {
    duration: 300,
  },
});

var swiper = new Swiper(".reviews-top", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

window.addEventListener("scroll", () => {
  function getClassActive() {
    let elements = document.querySelectorAll("section[id]");
    elements.forEach((element) => {
      let rect = element.getBoundingClientRect();
      let space = rect.y;
      if (space < 400) {
        let AttId = element.getAttribute("id");
        let menuItems = document.querySelectorAll(".menu-item");
        menuItems.forEach((menuItem) => {
          menuItem.classList.remove("active");
          if (menuItem.getAttribute("data-id") === AttId) {
            menuItem.classList.add("active");
          }
        });
      }
    });
  }
  getClassActive();
});
let menuToggle = document.querySelector(".menu-icon");
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  if (menuToggle.classList.contains("active")) {
    document.querySelector(".desktop-header").style.transform = "translateX(0)";
    menuToggle.style.transform = "translate(100px)";
  } else {
    document.querySelector(".desktop-header").style.transform =
      "translateX(-120px)";
    menuToggle.style.transform = "translate(0)";
  }
});
