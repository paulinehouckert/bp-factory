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
