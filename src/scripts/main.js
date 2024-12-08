document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const menuLinks = document.getElementById("menu-links");

  menuButton.addEventListener("click", () => {
    menuLinks.classList.toggle("hidden"); // Muestra/oculta el menú
    menuLinks.classList.toggle("translate-y-0");
    menuLinks.classList.toggle("opacity-100");
  });
});
