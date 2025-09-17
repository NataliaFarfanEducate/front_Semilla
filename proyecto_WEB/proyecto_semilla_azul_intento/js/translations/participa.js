// Configuración de idiomas
i18next.init({
  lng: "es", // Idioma inicial
  debug: true,
  resources: {
    es: {
      translation: {
        pageTitle: "Participa - Semilla Azul",
        brand: "SEMILLA <span class='highlight'>AZUL</span>",
        login: "Iniciar Sesión",
        signup: "Crear Cuenta",
        menu: {
          home: "Inicio",
          zone: "Zona Piloto",
          today: "¿Qué sucede hoy?",
          participate: "Participa",
          reports: "Boletines e Informes",
          about: "¿Quiénes Somos?",
          game: "SeedGame"
        },
        section: {
          title: "¿Cómo puedes ser parte de esto?"
        },
        step1: {
          title: "1. Cuéntanos tu historia",
          text: "Esto puede ser de forma anónima si el usuario lo desea, estos testimonios nos ayudan a conocer más la comunidad y a mejorar para ustedes."
        },
        step2: {
          title: "2. Completa nuestras encuestas",
          text: "Por medio de estas nosotros podemos mejorar día a día por medio de sus opiniones no solo de esta página sino del sistema completo de monitoreo."
        },
        step3: {
          title: "3. Edúcate aquí mismo",
          text: "Conoce por medio de nuestra página diferentes formas en las que, desde tu casa puedes filtrar este recurso tan importante."
        }
      }
    },
    en: {
      translation: {
        pageTitle: "Participate - Blue Seed",
        brand: "BLUE <span class='highlight'>SEED</span>",
        login: "Login",
        signup: "Sign Up",
        menu: {
          home: "Home",
          zone: "Pilot Zone",
          today: "What's happening today?",
          participate: "Participate",
          reports: "Reports & Newsletters",
          about: "About Us",
          game: "SeedGame"
        },
        section: {
          title: "How can you be part of this?"
        },
        step1: {
          title: "1. Tell us your story",
          text: "This can be anonymous if the user wishes; these testimonies help us better understand the community and improve for you."
        },
        step2: {
          title: "2. Complete our surveys",
          text: "Through these, we can improve day by day thanks to your opinions, not only about this page but about the entire monitoring system."
        },
        step3: {
          title: "3. Learn here",
          text: "Discover different ways on our website in which, from your home, you can filter this vital resource."
        }
      }
    }
  }
}, function (err, t) {
  updateContent();
});

// Función para refrescar textos
function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.innerHTML = i18next.t(key);
  });
}

// Toggle de idioma
document.getElementById("lang-toggle").addEventListener("click", () => {
  const newLang = i18next.language === "es" ? "en" : "es";
  i18next.changeLanguage(newLang, updateContent);
});
