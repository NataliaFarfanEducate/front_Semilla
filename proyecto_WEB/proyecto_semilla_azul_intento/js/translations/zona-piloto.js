// Diccionario de traducciones
const resources = {
  es: {
    translation: {
      title: "Semilla Azul - Zona Piloto",
      siteName: "SEMILLA <span class='highlight'>AZUL</span>",
      login: "Iniciar Sesión",
      signup: "Crear Cuenta",
      nav: {
        home: "Inicio",
        pilotZone: "Zona Piloto",
        today: "¿Qué sucede hoy?",
        participate: "Participa",
        reports: "Boletines e Informes",
        about: "¿Quiénes Somos?",
        seedgame: "SeedGame"
      },
      location: "Coyaima - Tolima",
      description: "El 65% de los habitantes son jóvenes menores de 30 años y más del 50% de los hogares no cuentan con acceso regular al agua potable. El agua que consumen proviene de fuentes naturales como quebradas, que en temporadas secas disminuyen considerablemente."
    }
  },
  en: {
    translation: {
      title: "Semilla Azul - Pilot Zone",
      siteName: "BLUE <span class='highlight'>SEED</span>",
      login: "Log In",
      signup: "Sign Up",
      nav: {
        home: "Home",
        pilotZone: "Pilot Zone",
        today: "What's happening today?",
        participate: "Participate",
        reports: "Reports & Bulletins",
        about: "About Us",
        seedgame: "SeedGame"
      },
      location: "Coyaima - Tolima",
      description: "65% of the inhabitants are young people under 30 years old and more than 50% of households do not have regular access to drinking water. The water they consume comes from natural sources such as streams, which decrease considerably during dry seasons."
    }
  }
};

// Inicializar i18next
i18next.init({
  lng: "es",
  debug: false,
  resources
}, function(err, t) {
  updateContent();
});

// Función para actualizar los textos
function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.innerHTML = i18next.t(key);
  });
}

// Toggle de idioma
const btnToggle = document.getElementById("lang-toggle");
btnToggle.addEventListener("click", () => {
  const newLang = i18next.language === "es" ? "en" : "es";
  i18next.changeLanguage(newLang, () => {
    updateContent();
    btnToggle.textContent = newLang === "es" ? "EN" : "ES"; // Texto del botón cambia
  });
});
