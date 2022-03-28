// Toggle menu panel

const menu = document.querySelector("#menu");
const menuPanelOverlay = document.querySelector(".menu-panel_overlay");
const menuPanel = document.querySelector(".menu-panel");
const close = document.querySelector(".close-icon");
const body = document.querySelector("body");

menu.addEventListener("click", () => {
  menuPanelOverlay.classList.add("active");
  menuPanel.classList.add("active");
});

close.addEventListener("click", () => {
  menuPanelOverlay.classList.remove("active");
  menuPanel.classList.remove("active");
});

menuPanelOverlay.addEventListener("click", () => {
  menuPanelOverlay.classList.remove("active");
  menuPanel.classList.remove("active");
});
