document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const menuLinks = document.getElementById("menu-links");

  // Alternar el estado del menú al hacer clic en el botón
  menuButton.addEventListener("click", () => {
    menuLinks.classList.toggle("hidden"); // Muestra/oculta el menú
  });
});
