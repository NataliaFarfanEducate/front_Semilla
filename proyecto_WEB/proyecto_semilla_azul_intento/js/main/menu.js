// Seleccionar elementos
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("sidebar-nav");

// Abrir/cerrar menú al hacer clic
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Detectar si es móvil o escritorio
function checkScreen() {
  if (window.innerWidth <= 768) {
    console.log("Vista móvil");
  } else {
    console.log("Vista escritorio");
    nav.classList.remove("active"); // Asegura que se cierre al cambiar tamaño
  }
}

// Escuchar cambios de tamaño
window.addEventListener("resize", checkScreen);

// Ejecutar al cargar
checkScreen();
