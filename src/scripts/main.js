document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const menuLinks = document.getElementById("menu-links");

  menuButton.addEventListener("click", () => {
    if (menuLinks.classList.contains("hidden")) {
      menuLinks.classList.remove("hidden");
      menuLinks.classList.add("flex");
    } else {
      menuLinks.classList.remove("flex");
      menuLinks.classList.add("hidden");
    }
  });
});
