// Configuración de traducciones
i18next.init({
  lng: "es", // idioma inicial
  debug: true,
  resources: {
    es: {
      translation: {
        pageTitle: "¿Qué sucede hoy? - Semilla Azul",
        login: "Iniciar Sesión",
        signup: "Crear Cuenta",
        menu: {
          home: "Inicio",
          pilot: "Zona Piloto",
          happening: "¿Qué sucede hoy?",
          participate: "Participa",
          reports: "Boletines e Informes",
          about: "¿Quiénes Somos?",
          game: "SeedGame"
        },
        happeningTitle: "¿Qué sucede hoy?",
        searchPlaceholder: "¿Qué te interesa saber hoy?",
        alertsTitle: "Alertas Recientes",
        alertsText: "Mantente informado sobre cambios en la calidad del agua.",
        reportsTitle: "Reportes Diarios",
        reportsText: "Consulta los datos más recientes de los sensores.",
        newsTitle: "Noticias",
        newsText: "Últimas noticias sobre conservación del agua."
      }
    },
    en: {
      translation: {
        pageTitle: "What's happening today? - Blue Seed",
        login: "Login",
        signup: "Sign Up",
        menu: {
          home: "Home",
          pilot: "Pilot Zone",
          happening: "What's happening today?",
          participate: "Participate",
          reports: "Reports & Bulletins",
          about: "About Us",
          game: "SeedGame"
        },
        happeningTitle: "What's happening today?",
        searchPlaceholder: "What do you want to know today?",
        alertsTitle: "Recent Alerts",
        alertsText: "Stay informed about changes in water quality.",
        reportsTitle: "Daily Reports",
        reportsText: "Check the latest data from the sensors.",
        newsTitle: "News",
        newsText: "Latest news about water conservation."
      }
    }
  }
}, function () {
  updateContent();
});

// Función que actualiza todos los textos
function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = i18next.t(key);
  });

  // Para los placeholders (ej: buscador)
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.placeholder = i18next.t(key);
  });
}

// Toggle de idioma (ES ↔ EN)
document.getElementById("lang-toggle").addEventListener("click", () => {
  const newLang = i18next.language === "es" ? "en" : "es";
  i18next.changeLanguage(newLang, updateContent);
});
