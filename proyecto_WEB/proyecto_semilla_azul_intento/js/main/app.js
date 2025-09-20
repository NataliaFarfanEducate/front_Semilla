import "../main/services.js/usuarios";
import "../main/services.js/ubicaciones";
import "../main/services.js/respuestas";
import "../main/services.js/preguntas.js";
import "../main/services.js/observaciones.js";
import "../main/services.js/indicadores";
import "../main/services.js/fuentesAgua";
import "../main/services.js/config";
import "../main/services.js/chat";
import "../main/services.js/centrosAsistencia.js";
import "../main/services.js/calidadAgua.js";
import "../main/services.js/busqueda.js";
import "../main/services.js/biomas.js";
import "../main/services.js/auditorias.js";
import "../main/services.js/reportes.js";
import "../main/services.js/accesibility.js";

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
