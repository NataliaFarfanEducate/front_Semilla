
// ===== PREGUNTAS =====
import { BASE_URL } from "../services.js/config.js";

async function crearPregunta(pregunta) {
  const res = await fetch(`${BASE_URL}/preguntas/crear`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pregunta)
  });
  return res.json();
}

async function actualizarPregunta(pregunta) {
  const res = await fetch(`${BASE_URL}/preguntas/actualizar`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pregunta)
  });
  return res.json();
}

async function listarPreguntas() {
  const res = await fetch(`${BASE_URL}/preguntas/listar`);
  return res.json();
}

async function buscarPreguntaPorId(id) {
  const res = await fetch(`${BASE_URL}/preguntas/buscar-id?id=${id}`);
  return res.ok ? res.json() : null;
}

async function cambiarEstadoPregunta(id, activa) {
  const res = await fetch(`${BASE_URL}/preguntas/cambiar-activa?id=${id}&activa=${activa}`, {
    method: "PUT"
  });
  return res.ok;
}
// ===== Helper para debug rápido =====
function mostrarEnConsola(promise) {
  promise.then(data => console.log("📌 Respuesta:", data))
         .catch(err => console.error("❌ Error:", err));
}

export { crearPregunta, actualizarPregunta, listarPreguntas, buscarPreguntaPorId, cambiarEstadoPregunta, mostrarEnConsola };