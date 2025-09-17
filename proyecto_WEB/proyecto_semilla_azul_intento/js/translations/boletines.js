i18next.init({
  lng: "es", // Idioma inicial
  debug: true,
  resources: {
    es: {
      translation: {
        pageTitle: "Boletines e Informes - Semilla Azul",
        siteTitle: "SEMILLA AZUL",
        login: "Iniciar Sesión",
        signup: "Crear Cuenta",
        nav: {
          home: "Inicio",
          zone: "Zona Piloto",
          today: "¿Qué sucede hoy?",
          participate: "Participa",
          reports: "Boletines e Informes",
          about: "¿Quiénes Somos?",
          seedgame: "SeedGame"
        },
        reports: {
          title: "Boletines e Informes",
          monthly: "Informe Mensual - Enero 2025",
          monthlyDesc: "Resumen de la calidad del agua durante el mes de enero, incluyendo análisis de tendencias y recomendaciones.",
          download: "Descargar PDF",
          weekly: "Boletín Semanal",
          weeklyDesc: "Actualizaciones semanales sobre el estado de los sensores y alertas importantes para la comunidad.",
          viewOnline: "Ver Online",
          technical: "Análisis Técnico",
          technicalDesc: "Informes técnicos detallados sobre parámetros de calidad del agua y metodologías de medición.",
          access: "Acceder",
          guides: "Guías Educativas",
          guidesDesc: "Material educativo sobre conservación del agua y mejores prácticas para el cuidado del recurso hídrico.",
          explore: "Explorar"
        }
      }
    },
    en: {
      translation: {
        pageTitle: "Reports and Bulletins - Blue Seed",
        siteTitle: "BLUE SEED",
        login: "Login",
        signup: "Sign Up",
        nav: {
          home: "Home",
          zone: "Pilot Zone",
          today: "What's happening today?",
          participate: "Participate",
          reports: "Reports and Bulletins",
          about: "About Us",
          seedgame: "SeedGame"
        },
        reports: {
          title: "Reports and Bulletins",
          monthly: "Monthly Report - January 2025",
          monthlyDesc: "Summary of water quality during January, including trend analysis and recommendations.",
          download: "Download PDF",
          weekly: "Weekly Bulletin",
          weeklyDesc: "Weekly updates on sensor status and important alerts for the community.",
          viewOnline: "View Online",
          technical: "Technical Analysis",
          technicalDesc: "Detailed technical reports on water quality parameters and measurement methodologies.",
          access: "Access",
          guides: "Educational Guides",
          guidesDesc: "Educational material on water conservation and best practices for protecting water resources.",
          explore: "Explore"
        }
      }
    }
  }
}, function(err, t) {
  updateContent();
});

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
