document.addEventListener("DOMContentLoaded", () => {
  // Referencias a los elementos
  const menuButton = document.getElementById("menu-button");
  const menuLinks = document.getElementById("menu-links");

  // Asegurarse de que los elementos existen antes de añadir eventos
  if (menuButton && menuLinks) {
    menuButton.addEventListener("click", () => {
      // Alternar clases para mostrar/ocultar el menú
      menuLinks.classList.toggle("hidden");
      menuLinks.classList.toggle("flex");
    });
  } else {
    console.error("No se encontró el botón de menú o el contenedor de enlaces");
  }
});
