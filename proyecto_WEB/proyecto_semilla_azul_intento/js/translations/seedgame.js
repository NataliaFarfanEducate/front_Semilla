// Idioma actual (por defecto español)
let currentLang = "es";

i18next.init({
  lng: currentLang,
  debug: false,
  resources: {
    es: {
      translation: {
        title: "SEMILLA <span class='highlight'>AZUL</span>",
        login: "Iniciar Sesión",
        signup: "Crear Cuenta",
        nav: {
          home: "Inicio",
          pilot: "Zona Piloto",
          today: "¿Qué sucede hoy?",
          participate: "Participa",
          reports: "Boletines e Informes",
          about: "¿Quiénes Somos?",
          seedgame: "SeedGame"
        },
        game: {
          title: "¡Juega y Aprende con SeedGame!",
          description: "SeedGame es una herramienta lúdica y educativa que te permite explorar la calidad del agua de una manera interactiva y divertida. ¡Ayuda a la comunidad virtual a mantener su agua limpia!"
        },
        features: {
          minigames: {
            title: "Mini-juegos",
            text: "Desafíos de lógica y agilidad para resolver problemas de contaminación."
          },
          simulation: {
            title: "Simulación",
            text: "Visualiza el impacto de tus decisiones en el ecosistema acuático."
          },
          ranking: {
            title: "Ranking",
            text: "Compite con otros jugadores y sube en la tabla de clasificación."
          }
        },
        cta: {
          play: "Empezar a Jugar"
        }
      }
    },
    en: {
      translation: {
        title: "SEED <span class='highlight'>BLUE</span>",
        login: "Login",
        signup: "Sign Up",
        nav: {
          home: "Home",
          pilot: "Pilot Zone",
          today: "What's happening today?",
          participate: "Participate",
          reports: "Reports & Newsletters",
          about: "About Us",
          seedgame: "SeedGame"
        },
        game: {
          title: "Play and Learn with SeedGame!",
          description: "SeedGame is a fun and educational tool that lets you explore water quality in an interactive way. Help the virtual community keep their water clean!"
        },
        features: {
          minigames: {
            title: "Mini-games",
            text: "Logic and agility challenges to solve pollution problems."
          },
          simulation: {
            title: "Simulation",
            text: "See the impact of your decisions on the aquatic ecosystem."
          },
          ranking: {
            title: "Ranking",
            text: "Compete with other players and climb the leaderboard."
          }
        },
        cta: {
          play: "Start Playing"
        }
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
    el.innerHTML = i18next.t(key);
  });
}

// Botón para alternar idioma 🌐
document.getElementById("btn-lang").addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es";
  i18next.changeLanguage(currentLang, updateContent);
});
