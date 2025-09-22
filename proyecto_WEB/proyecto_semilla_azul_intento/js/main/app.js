import "../main/services.js/usuarios.js";
import "../main/services.js/ubicaciones.js";
import "../main/services.js/respuestas.js";
import "../main/services.js/preguntas.js";
import "../main/services.js/observaciones.js";
import "../main/services.js/indicadores.js";
import "../main/services.js/fuentesAgua.js";
import "../main/services.js/chat.js";
import "../main/services.js/config.js"
import "../main/services.js/centrosAsistencia.js";
import "../main/services.js/calidadAgua.js";
import "../main/services.js/busqueda.js";
import "../main/services.js/biomas.js";
import "../main/services.js/auditorias.js";
import "../main/services.js/reportes.js";
import "../main/services.js/accesibility.js";
import "../main/services.js/signup.js"
import "../main/services.js/login.js";

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