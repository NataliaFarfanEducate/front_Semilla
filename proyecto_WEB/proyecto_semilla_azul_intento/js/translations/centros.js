// js/translations/centros.js
const resources = {
  es: {
    translation: {
      login: "Iniciar Sesión",
      signup: "Crear Cuenta",
      menu: {
        home: "Inicio",
        centros: "Centros de Asistencia",
        happening: "¿Qué sucede hoy?",
        participate: "Participa",
        reports: "Boletines e Informes",
        about: "¿Quiénes Somos?",
        game: "SeedGame"
      },
      centrosTitle: "Centros de Asistencia Hídrica"
    }
  },
  en: {
    translation: {
      login: "Login",
      signup: "Sign Up",
      menu: {
        home: "Home",
        centros: "Assistance Centers",
        happening: "What's happening today?",
        participate: "Participate",
        reports: "Reports & Bulletins",
        about: "About Us",
        game: "SeedGame"
      },
      centrosTitle: "Water Assistance Centers"
    }
  }
};
// Función para actualizar los textos
function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = i18next.t(key);
  });
  // Cambiar el botón de idioma
  document.getElementById("btn-lang").textContent = i18next.language === "es" ? "EN" : "ES";
}

// Botón toggle idioma
document.getElementById("btn-lang").addEventListener("click", () => {
  const newLang = i18next.language === "es" ? "en" : "es";
  i18next.changeLanguage(newLang, updateContent);
});
