// Inicialización de i18next con los idiomas
i18next.init({
  lng: "es", // idioma inicial
  debug: true,
  resources: {
    es: {
      translation: {
        menu: {
          home: "Inicio",
          pilot: "Zona Piloto",
          news: "¿Qué sucede hoy?",
          participate: "Participa",
          reports: "Boletines e Informes",
          about: "¿Quiénes Somos?",
          seedgame: "SeedGame"
        },
        login: {
          title: "Iniciar Sesión",
          username: "Ingresa tu Usuario",
          password: "Ingresa tu Contraseña",
          forgot: "¿Olvidaste tu contraseña?",
          button: "Iniciar Sesión",
          noAccount: "¿Aún no tienes una cuenta?"
        }
      }
    },
    en: {
      translation: {
        menu: {
          home: "Home",
          pilot: "Pilot Zone",
          news: "What's happening today?",
          participate: "Participate",
          reports: "Reports & Bulletins",
          about: "About Us",
          seedgame: "SeedGame"
        },
        login: {
          title: "Login",
          username: "Enter your Username",
          password: "Enter your Password",
          forgot: "Forgot your password?",
          button: "Log In",
          noAccount: "Don't have an account yet?"
        }
      }
    }
  }
}, function(err, t) {
  // Traducciones iniciales
  updateContent();
});

// 🔹 Función que actualiza los textos según el idioma
function updateContent() {
  // Sidebar (menú)
  document.querySelector('[data-i18n="menu.home"]').textContent = i18next.t("menu.home");
  document.querySelector('[data-i18n="menu.pilot"]').textContent = i18next.t("menu.pilot");
  document.querySelector('[data-i18n="menu.news"]').textContent = i18next.t("menu.news");
  document.querySelector('[data-i18n="menu.participate"]').textContent = i18next.t("menu.participate");
  document.querySelector('[data-i18n="menu.reports"]').textContent = i18next.t("menu.reports");
  document.querySelector('[data-i18n="menu.about"]').textContent = i18next.t("menu.about");
  document.querySelector('[data-i18n="menu.seedgame"]').textContent = i18next.t("menu.seedgame");

  // Login form
  document.querySelector(".form-title").textContent = i18next.t("login.title");
  document.querySelector("label[for='username']").innerHTML = i18next.t("login.username") + ' <span class="required">*</span>';
  document.querySelector("label[for='password']").innerHTML = i18next.t("login.password") + ' <span class="required">*</span>';
  document.querySelector(".forgot-password").textContent = i18next.t("login.forgot");
  document.querySelector(".form-button").textContent = i18next.t("login.button");
  document.querySelector(".form-link a").textContent = i18next.t("login.noAccount");
}

// 🔹 Toggle de idioma con un solo botón
let currentLang = "es";
document.getElementById("btn-lang-toggle").addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es";
  i18next.changeLanguage(currentLang, updateContent);
});
