// ---------------- OBSERVACIONES ----------------
import { BASE_URL } from "../services.js/config.js";

async function crearObservacion(observacion) {
  return fetch(`${BASE_URL}/observaciones/crear`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(observacion)
  }).then(res => res.json());
}

async function listarObservaciones() {
  return fetch(`${BASE_URL}/observaciones/listar`).then(res => res.json());
}

async function actualizarObservacion(observacion) {
  return fetch(`${BASE_URL}/observaciones/actualizar`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(observacion)
  }).then(res => res.json());
}

async function buscarObservacionPorId(id) {
  return fetch(`${BASE_URL}/observaciones/buscar-id?id=${id}`).then(res => res.json());
}

async function cambiarEstadoObservacion(id, estado) {
  return fetch(`${BASE_URL}/observaciones/cambiar-estado?id=${id}&estado=${estado}`, {
    method: "PUT"
  }).then(res => res.text());
}

export { crearObservacion, listarObservaciones, actualizarObservacion, buscarObservacionPorId, cambiarEstadoObservacion };