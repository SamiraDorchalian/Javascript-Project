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
