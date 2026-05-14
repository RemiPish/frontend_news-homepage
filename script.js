const menuButton = document.querySelector(".site-header__menu-button");
const closeButton = document.querySelector(".site-nav__close");
const nav = document.querySelector(".site-nav");
const overlay = document.querySelector(".site-overlay");

function openMenu() {
  nav.hidden = false;
  overlay.hidden = false;
  menuButton.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  nav.hidden = true;
  overlay.hidden = true;
  menuButton.setAttribute("aria-expanded", "false");
}

menuButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
