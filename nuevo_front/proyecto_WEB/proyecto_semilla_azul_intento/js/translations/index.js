// index.js - Archivo unificado de traducciones con i18next

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
        },
        location: "Coyaima - Tolima",
        description: "El 65% de los habitantes son jóvenes menores de 30 años y más del 50% de los hogares no cuentan con acceso regular al agua potable. El agua que consumen proviene de fuentes naturales como quebradas, que en temporadas secas disminuyen considerablemente.",
        
        // Textos dinámicos del HTML
        happeningTitle: "¿Qué sucede hoy?",
        alertsTitle: "Alertas Recientes",
        alertsText: "Mantente informado sobre cambios en la calidad del agua.",
        reportsTitle: "Reportes Diarios",
        reportsText: "Consulta los datos más recientes de los sensores.",
        newsTitle: "Noticias",
        newsText: "Últimas noticias sobre conservación del agua.",

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
        },

        about: {
          title: "¿Quiénes Somos?",
          intro: "Somos un equipo multidisciplinario comprometido con la protección y conservación del recurso hídrico. Nuestra misión es empoderar a las comunidades con tecnología accesible para el monitoreo de la calidad del agua.",
          goalTitle: "¿Qué buscamos?",
          goalText: "Un mundo donde todas las comunidades tengan acceso a agua limpia y segura, respaldado por sistemas de monitoreo transparentes y participativos.",
          wantTitle: "¿Qué queremos?",
          wantText: "Democratizar el acceso a información sobre la calidad del agua mediante tecnología de sensores y aplicaciones intuitivas que permitan a las comunidades tomar decisiones informadas."
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
        },
        location: "Coyaima - Tolima",
        description: "65% of the inhabitants are young people under 30 years old and more than 50% of households do not have regular access to drinking water. The water they consume comes from natural sources such as streams, which decrease considerably during dry seasons.",
        
        happeningTitle: "What's happening today?",
        alertsTitle: "Recent Alerts",
        alertsText: "Stay informed about changes in water quality.",
        reportsTitle: "Daily Reports",
        reportsText: "Check the most recent sensor data.",
        newsTitle: "News",
        newsText: "Latest news about water conservation.",

        section: {
          title: "How can you be part of this?"
        },
        step1: {
          title: "1. Tell us your story",
          text: "This can be anonymous if you wish. These testimonies help us get to know the community better and improve for you."
        },
        step2: {
          title: "2. Complete our surveys",
          text: "Through these, we can improve every day thanks to your feedback, not only about this page but about the entire monitoring system."
        },
        step3: {
          title: "3. Educate yourself right here",
          text: "Discover different ways you can filter this important resource at home."
        },

        reports: {
          title: "Reports & Bulletins",
          monthly: "Monthly Report - January 2025",
          monthlyDesc: "Summary of water quality during January, including trend analysis and recommendations.",
          download: "Download PDF",
          weekly: "Weekly Bulletin",
          weeklyDesc: "Weekly updates on sensor status and important community alerts.",
          viewOnline: "View Online",
          technical: "Technical Analysis",
          technicalDesc: "Detailed technical reports on water quality parameters and measurement methodologies.",
          access: "Access",
          guides: "Educational Guides",
          guidesDesc: "Educational material on water conservation and best practices for protecting water resources.",
          explore: "Explore"
        },

        about: {
          title: "About Us",
          intro: "We are a multidisciplinary team committed to protecting and conserving water resources. Our mission is to empower communities with accessible technology for water quality monitoring.",
          goalTitle: "What are we looking for?",
          goalText: "A world where all communities have access to clean and safe water, supported by transparent and participatory monitoring systems.",
          wantTitle: "What do we want?",
          wantText: "To democratize access to water quality information through sensor technology and intuitive applications that enable communities to make informed decisions."
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
            text: "Visualize the impact of your decisions on the aquatic ecosystem."
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
}, function (err, t) {
  updateContent();
});

// Función para actualizar textos según idioma
function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = i18next.t(key);
  });
}

// Botón toggle idioma
document.getElementById("lang-toggle").addEventListener("click", () => {
  const newLang = i18next.language === "es" ? "en" : "es";
  i18next.changeLanguage(newLang, updateContent);
});
