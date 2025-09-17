// Configuración de idiomas
i18next.init({
  lng: "es", // idioma inicial
  debug: true,
  resources: {
    es: {
      translation: {
        login: "Iniciar Sesión",
        signup: "Crear Cuenta",
        menu: {
          home: "Inicio",
          pilot: "Zona Piloto",
          news: "¿Qué sucede hoy?",
          participate: "Participa",
          reports: "Boletines e Informes",
          about: "¿Quiénes Somos?",
          seedgame: "SeedGame"
        },
        info: {
          title: "¿De qué trata esto?",
          text: "Un sistema que permite monitorear en tiempo real la calidad del agua, usando sensores y una aplicación fácil de usar. Pensado para empoderar a las comunidades con información clara, alertas tempranas y herramientas para tomar decisiones que protejan su recurso más valioso: el agua."
        }
      }
    },
    en: {
      translation: {
        login: "Log In",
        signup: "Sign Up",
        menu: {
          home: "Home",
          pilot: "Pilot Zone",
          news: "What's happening today?",
          participate: "Participate",
          reports: "Reports & Bulletins",
          about: "About Us",
          seedgame: "SeedGame"
        },
        info: {
          title: "What is this about?",
          text: "A system that allows real-time monitoring of water quality, using sensors and an easy-to-use application. Designed to empower communities with clear information, early warnings, and tools to make decisions that protect their most valuable resource: water."
        }
      }
    }
  }
}, function(err, t) {
  updateContent();
});

// Función para actualizar textos según el idioma
function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = i18next.t(key);
  });
}

// Toggle entre español e inglés
document.getElementById("lang-toggle").addEventListener("click", () => {
  const newLang = i18next.language === "es" ? "en" : "es";
  i18next.changeLanguage(newLang, updateContent);
});
