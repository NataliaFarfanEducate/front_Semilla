// ---------------- CENTROS ASISTENCIA ----------------

import { BASE_URL } from "../config.js";

async function crearCentro(centro) {
  return fetch(`${BASE_URL}/centros-asistencia/crear`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(centro)
  }).then(res => res.json());
}

async function listarCentros() {
  return fetch(`${BASE_URL}/centros-asistencia/listar`).then(res => res.json());
}

async function actualizarCentro(centro) {
  return fetch(`${BASE_URL}/centros-asistencia/actualizar`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(centro)
  }).then(res => res.json());
}

async function buscarCentroPorId(id) {
  return fetch(`${BASE_URL}/centros-asistencia/buscar-id?id=${id}`).then(res => res.json());
}

async function cambiarEstadoCentro(id, estado) {
  return fetch(`${BASE_URL}/centros-asistencia/cambiar-estado?id=${id}&estado=${estado}`, {
    method: "PATCH"
  }).then(res => res.text());
}

export { crearCentro, listarCentros, actualizarCentro, buscarCentroPorId, cambiarEstadoCentro };