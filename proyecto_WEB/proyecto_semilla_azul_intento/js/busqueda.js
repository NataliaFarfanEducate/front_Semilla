const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

function buscar() {
    const query = searchInput.value.trim();
    if (!query) return;
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}
    // Buscar con la lupa
searchBtn.addEventListener("click", buscar);
   // Buscar con Enter
searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault(); // evita que se recargue la página
        buscar();
    }
});