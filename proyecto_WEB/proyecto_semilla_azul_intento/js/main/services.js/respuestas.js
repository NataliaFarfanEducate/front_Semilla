// ===== RESPUESTAS =====
import { BASE_URL } from "../config.js";

async function crearRespuesta(respuesta) {
  const res = await fetch(`${BASE_URL}/respuestas/crear`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(respuesta)
  });
  return res.json();
}

async function actualizarRespuesta(respuesta) {
  const res = await fetch(`${BASE_URL}/respuestas/actualizar`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(respuesta)
  });
  return res.json();
}

async function listarRespuestas() {
  const res = await fetch(`${BASE_URL}/respuestas/listar`);
  return res.json();
}

async function buscarRespuestaPorId(id) {
  const res = await fetch(`${BASE_URL}/respuestas/buscar-id?id=${id}`);
  return res.ok ? res.json() : null;
}

export { crearRespuesta, actualizarRespuesta, listarRespuestas, buscarRespuestaPorId };