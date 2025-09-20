
import { listarObservaciones } from "./services/observaciones.js";
import { listarPreguntas } from "./services/preguntas.js";
import { listarRespuestas } from "./services/respuestas.js";

const generarInformeBtn = document.getElementById("generar-informe-btn");
const reportContainer = document.getElementById("report-container");

// Función principal para generar y mostrar el informe
async function generarYMostrarInforme() {
    try {
        // 1. Obtener los datos necesarios
        const observaciones = await listarObservaciones();
        const preguntas = await listarPreguntas();
        const respuestas = await listarRespuestas();

        // 2. Procesar y organizar los datos
        const informeDatos = procesarDatosParaInforme(observaciones, preguntas, respuestas);
        
        // 3. Renderizar el informe en el DOM
        renderizarInforme(informeDatos);
        
        // Muestra el contenedor del informe
        reportContainer.style.display = "block";
        
        // Dispara la ventana de impresión del navegador
        window.print();

    } catch (error) {
        console.error("Error al generar el informe:", error);
        alert("Ocurrió un error al generar el informe. Por favor, intente de nuevo.");
    }
}

// Función que procesa los datos brutos de la API y los organiza
function procesarDatosParaInforme(observaciones, preguntas, respuestas) {
    const reporte = {
        fecha: new Date().toLocaleDateString("es-ES"),
        observaciones: observaciones.map(obs => ({
            titulo: obs.titulo,
            descripcion: obs.descripcion,
            bioma: obs.bioma ? obs.bioma.nombre : 'N/A'
        })),
        preguntasYRespuestas: preguntas.map(pregunta => {
            const respuestasRelacionadas = respuestas.filter(respuesta => respuesta.pregunta.id === pregunta.id);
            return {
                pregunta: pregunta.texto,
                respuestas: respuestasRelacionadas.map(res => res.texto)
            };
        })
    };

    return reporte;
}

// Función que toma los datos procesados y los inyecta en el HTML
function renderizarInforme(datos) {
    document.getElementById("report-date-value").textContent = datos.fecha;
    
    // Renderizar observaciones
    const obsList = document.getElementById("observaciones-list");
    obsList.innerHTML = "";
    datos.observaciones.forEach(obs => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${obs.titulo}</strong>: ${obs.descripcion} (Bioma: ${obs.bioma})`;
        obsList.appendChild(li);
    });

    // Renderizar preguntas y respuestas
    const pyRContainer = document.getElementById("preguntas-respuestas-container");
    pyRContainer.innerHTML = "";
    datos.preguntasYRespuestas.forEach(item => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h4>${item.pregunta}</h4>
            <ul>
                ${item.respuestas.map(res => `<li>- ${res}</li>`).join("")}
            </ul>
        `;
        pyRContainer.appendChild(div);
    });
}

// Añadir el evento al botón
generarInformeBtn.addEventListener("click", generarYMostrarInforme);
export { generarYMostrarInforme };