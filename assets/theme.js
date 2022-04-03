// Toggle menu panel

window.addEventListener("load", () => {
  const $menu = document.querySelector("#menu");
  const $menuPanelOverlay = document.querySelector(".menu-panel_overlay");
  const $menuPanel = document.querySelector(".menu-panel");
  const $close = document.querySelector(".close-icon");

  if (!$menu || !$menuPanelOverlay || !$menuPanel || !$close) {
    console.error("element is missing");
    return;
  }

  $menu.addEventListener("click", () => {
    $menuPanelOverlay.classList.add("active");
    $menuPanel.classList.add("active");
  });

  $close.addEventListener("click", closeMenuPanel);
  $menuPanelOverlay.addEventListener("click", closeMenuPanel);

  function closeMenuPanel() {
    $menuPanelOverlay.classList.remove("active");
    $menuPanel.classList.remove("active");
  }
});

// Toggle checkbox

const $checkbox = document.querySelector("#checkbox");
const $checkbox_checked = document.querySelector("#checkbox-checked");

if ($checkbox) {
  $checkbox.addEventListener("click", () => {
    $checkbox.classList.remove("active");
    $checkbox_checked.classList.add("active");
  });

  $checkbox_checked.addEventListener("click", () => {
    $checkbox.classList.add("active");
    $checkbox_checked.classList.remove("active");
  });
}
