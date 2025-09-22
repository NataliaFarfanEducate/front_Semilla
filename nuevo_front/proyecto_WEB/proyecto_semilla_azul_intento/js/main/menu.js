// Menus
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("sidebar-nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Detectar si es móvil o escritorio
function checkScreen() {
  if (window.innerWidth <= 768) {
  } else {
    nav.classList.remove("active");
  }
}
window.addEventListener("resize", checkScreen);

// Ejecutar al cargar
checkScreen();
export {checkScreen};