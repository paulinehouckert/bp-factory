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
const $checkbox_input = document.querySelector("#terms");

if ($checkbox) {
  $checkbox.addEventListener("click", () => {
    $checkbox.classList.remove("active");
    $checkbox_checked.classList.add("active");
    $checkbox_input.checked = true;
  });

  $checkbox_checked.addEventListener("click", () => {
    $checkbox.classList.add("active");
    $checkbox_checked.classList.remove("active");
  });
}

// Check if the checkbox is checked

const $newsletter_form = document.querySelector("#newsletter-form");

if ($newsletter_form) {
  $newsletter_form.addEventListener("submit", (e) => {
    if (!$checkbox_input.checked) {
      e.preventDefault();
      alert("Please accept the terms and conditions");
    }
  });
}

// init homepage grid slider on mobile
const home_slider = new Swiper(".product-grid .swiper-container", {
  speed: 800,
  loop: false,
  lazy: true,
  autoplay: false,
  slidesPerView: "auto",
  spaceBetween: 15,
});

// add to cart
const $addToCart = document.querySelectorAll(".product-card_icon");

$addToCart.forEach((el) => {
  el.addEventListener("click", async () => {
    const variantID = Number(el.dataset.id);
    const requestObj = {
      items: [
        {
          id: variantID,
          quantity: 1,
        },
      ],
    };
    const request = await fetch("/cart/add.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestObj),
    });
  });
});
