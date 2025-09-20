// ---------------- FUENTES DE AGUA ----------------
import { BASE_URL } from "../config.js";
async function crearFuente(fuente) {
  return fetch(`${BASE_URL}/fuentes-agua/crear`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fuente)
  }).then(res => res.json());
}

async function listarFuentes() {
  return fetch(`${BASE_URL}/fuentes-agua/listar`).then(res => res.json());
}

async function actualizarFuente(fuente) {
  return fetch(`${BASE_URL}/fuentes-agua/actualizar`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fuente)
  }).then(res => res.json());
}

async function buscarFuentePorId(id) {
  return fetch(`${BASE_URL}/fuentes-agua/buscar-id?id=${id}`).then(res => res.json());
}

async function cambiarEstadoFuente(id, estado) {
  return fetch(`${BASE_URL}/fuentes-agua/cambiar-estado?id=${id}&estado=${estado}`, {
    method: "PATCH"
  }).then(res => res.text());
}

export { crearFuente, listarFuentes, actualizarFuente, buscarFuentePorId, cambiarEstadoFuente };