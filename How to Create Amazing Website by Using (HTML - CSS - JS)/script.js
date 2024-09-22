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
