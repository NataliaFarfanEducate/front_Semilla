// Inicialización de i18next
i18next.init({
  lng: "es", // idioma inicial
  debug: true,
  resources: {
    es: {
      translation: {
        page_title: "Crear Cuenta - Semilla Azul",
        site_title: "SEMILLA AZUL",
        menu_home: "Inicio",
        menu_pilot: "Zona Piloto",
        menu_today: "¿Qué sucede hoy?",
        menu_participate: "Participa",
        menu_reports: "Boletines e Informes",
        menu_about: "¿Quiénes Somos?",
        menu_game: "SeedGame",
        form_title: "Crear Cuenta",
        label_user: "Ingresa tu Usuario *",
        label_fullname: "Ingresa tu Nombre Completo *",
        label_email: "Ingresa tu Correo *",
        label_password: "Crea tu Contraseña *",
        label_role: "Ingresa tu Rol *",
        select_role: "Selecciona tu Rol",
        role_citizen: "Ciudadano",
        role_researcher: "Investigador",
        role_admin: "Administrador",
        label_location: "Ingresa tu Ubicación *",
        telefono: "Ingresa tu Número de Teléfono *",
        btn_submit: "Crear Cuenta",
        link_login: "¿Ya tienes una cuenta?"
      }
    },
    en: {
      translation: {
        page_title: "Create Account - Semilla Azul",
        site_title: "BLUE SEED",
        menu_home: "Home",
        menu_pilot: "Pilot Zone",
        menu_today: "What's happening today?",
        menu_participate: "Participate",
        menu_reports: "Reports & Bulletins",
        menu_about: "About Us",
        menu_game: "SeedGame",
        form_title: "Create Account",
        label_user: "Enter your Username *",
        label_fullname: "Enter your Full Name *",
        label_email: "Enter your Email *",
        label_password: "Create your Password *",
        label_role: "Enter your Role *",
        select_role: "Select your Role",
        role_citizen: "Citizen",
        role_researcher: "Researcher",
        role_admin: "Administrator",
        label_location: "Enter your Location *",
        telefono: "Enter your Phone Number *",
        btn_submit: "Create Account",
        link_login: "Already have an account?"
      }
    }
  }
}, function(err, t) {
  updateContent();
});

// Función para actualizar todos los textos
function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = i18next.t(key);
  });

  // Cambiar texto del botón toggle
  document.getElementById("toggle-lang").textContent =
    i18next.language === "es" ? "🌐 Español" : "🌐 English";
}

// Toggle idioma con un solo botón
document.getElementById("toggle-lang").addEventListener("click", () => {
  const newLang = i18next.language === "es" ? "en" : "es";
  i18next.changeLanguage(newLang, updateContent);
});
