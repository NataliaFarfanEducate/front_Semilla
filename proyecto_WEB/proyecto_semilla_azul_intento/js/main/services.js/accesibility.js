
document.addEventListener('DOMContentLoaded', () => {
  const btnAumentar = document.querySelector("#aumentarFuente");
  const btnDisminuir = document.querySelector("#disminuirFuente");
  const btnContraste = document.querySelector("#contraste");

  if (!btnAumentar || !btnDisminuir) {
    console.error("Botones aumentar/disminuir no encontrados. Asegúrate de que existan #aumentarFuente y #disminuirFuente en el DOM.");
  }

  // configuración
  const ROOT = document.documentElement;
  const STORAGE_KEY = 'semilla_font_size';
  const CONTRASTE_KEY = 'semilla_contraste';
  const MIN_ROOT_PX = 14;
  const MAX_ROOT_PX = 26;
  const STEP_PX = 1;

  const baseRootPx = parseFloat(getComputedStyle(ROOT).fontSize) || 16;

  // cargar tamaño y aplicarlo dentro de límites
  let currentRootPx = (function() {
    const saved = parseFloat(localStorage.getItem(STORAGE_KEY));
    if (!isNaN(saved)) {
      return Math.min(MAX_ROOT_PX, Math.max(MIN_ROOT_PX, saved));
    }
    // si no hay guardado, tomar el valor actual del root como punto inicial
    return Math.min(MAX_ROOT_PX, Math.max(MIN_ROOT_PX, baseRootPx));
  })();

  // aplicar inmediatamente el tamaño actual al root (y al body como respaldo)
  function applyRoot(px) {
    ROOT.style.fontSize = px + "px";
    // también aplico a body por si usan body{font-size:...} en px
    document.body.style.fontSize = px + "px";

    // Escalar elementos que usan px originalmente (para aumentar también los que no usan rem)
    const textSelector = "p,span,a,h1,h2,h3,h4,h5,h6,li,button,label,small";
    document.querySelectorAll(textSelector).forEach(el => {
      // si no guardamos original, guardarlo
      if (!el.dataset.originalFontSize) {
        el.dataset.originalFontSize = parseFloat(getComputedStyle(el).fontSize) || null;
      }
      const orig = parseFloat(el.dataset.originalFontSize);
      if (orig) {
        const scale = px / baseRootPx;
        el.style.fontSize = (orig * scale) + "px";
      }
    });

    localStorage.setItem(STORAGE_KEY, px);
    console.log(`Tamaño de fuente aplicado: ${px}px`);
  }

  // inicializa (aplica restauración)
  applyRoot(currentRootPx);

  // listeners
  if (btnAumentar) {
    btnAumentar.addEventListener("click", () => {
      if (currentRootPx + STEP_PX <= MAX_ROOT_PX) {
        currentRootPx += STEP_PX;
        applyRoot(currentRootPx);
      } else {
        console.log("Ya alcanzaste el tamaño máximo.");
      }
    });
  }

  if (btnDisminuir) {
    btnDisminuir.addEventListener("click", () => {
      if (currentRootPx - STEP_PX >= MIN_ROOT_PX) {
        currentRootPx -= STEP_PX;
        applyRoot(currentRootPx);
      } else {
        console.log("Ya alcanzaste el tamaño mínimo.");
      }
    });
  }

  // contraste (restauración incluida)
  if (btnContraste) {
    let contrasteActivo = localStorage.getItem(CONTRASTE_KEY) === "1";
    if (contrasteActivo) document.body.classList.add("modo-contraste");

    btnContraste.addEventListener("click", () => {
      contrasteActivo = !contrasteActivo;
      document.body.classList.toggle("modo-contraste", contrasteActivo);
      localStorage.setItem(CONTRASTE_KEY, contrasteActivo ? "1" : "0");
    });
  }
});
