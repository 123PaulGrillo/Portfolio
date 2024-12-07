document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const menuLinks = document.getElementById("menu-links");
  
    menuButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation(); // Detiene la propagación del clic
      menuLinks.classList.toggle("hidden");
    });
  
    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener("click", (event) => {
      if (!menuLinks.contains(event.target) && !menuButton.contains(event.target)) {
        menuLinks.classList.add("hidden");
      }
    });
  });
  