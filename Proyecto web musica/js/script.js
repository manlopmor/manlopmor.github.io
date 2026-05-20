const menuButton = document.querySelector("#menuButton");
const mainNav = document.querySelector("#mainNav");
const topButton = document.querySelector("#topButton");

menuButton.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => {
  topButton.classList.toggle("is-visible", window.scrollY > 500);
});

topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
