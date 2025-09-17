// Inicializar i18next
i18next.init({
  lng: "es", // idioma inicial
  debug: true,
  resources: {
    es: {
      translation: {
        pageTitle: "¿Quiénes Somos? - Semilla Azul",
        login: "Iniciar Sesión",
        signup: "Crear Cuenta",
        language: "Idioma",
        nav: {
          home: "Inicio",
          pilot: "Zona Piloto",
          news: "¿Qué sucede hoy?",
          participate: "Participa",
          reports: "Boletines e Informes",
          about: "¿Quiénes Somos?",
          seedgame: "SeedGame"
        },
        about: {
          title: "¿Quiénes Somos?",
          intro: "Somos un equipo multidisciplinario comprometido con la protección y conservación del recurso hídrico. Nuestra misión es empoderar a las comunidades con tecnología accesible para el monitoreo de la calidad del agua.",
          goalTitle: "¿Qué buscamos?",
          goalText: "Un mundo donde todas las comunidades tengan acceso a agua limpia y segura, respaldado por sistemas de monitoreo transparentes y participativos.",
          wantTitle: "¿Qué queremos?",
          wantText: "Democratizar el acceso a información sobre la calidad del agua mediante tecnología de sensores y aplicaciones intuitivas que permitan a las comunidades tomar decisiones informadas."
        }
      }
    },
    en: {
      translation: {
        pageTitle: "Who We Are? - Blue Seed",
        login: "Login",
        signup: "Sign Up",
        language: "Language",
        nav: {
          home: "Home",
          pilot: "Pilot Zone",
          news: "What's happening today?",
          participate: "Participate",
          reports: "Reports & Bulletins",
          about: "About Us",
          seedgame: "SeedGame"
        },
        about: {
          title: "Who We Are?",
          intro: "We are a multidisciplinary team committed to the protection and conservation of water resources. Our mission is to empower communities with accessible technology for water quality monitoring.",
          goalTitle: "What do we seek?",
          goalText: "A world where all communities have access to clean and safe water, supported by transparent and participatory monitoring systems.",
          wantTitle: "What do we want?",
          wantText: "To democratize access to information on water quality through sensor technology and intuitive applications that enable communities to make informed decisions."
        }
      }
    }
  }
}, function(err, t) {
  updateContent();
});

// Función para actualizar el contenido traducido
function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = i18next.t(key);
  });
}

// Toggle de idioma (ES ↔ EN)
const btnToggle = document.getElementById("btn-toggle-lang");
btnToggle.addEventListener("click", () => {
  const newLang = i18next.language === "es" ? "en" : "es";
  i18next.changeLanguage(newLang, () => {
    updateContent();
    btnToggle.textContent = newLang.toUpperCase(); // cambia el texto del botón
  });
});
