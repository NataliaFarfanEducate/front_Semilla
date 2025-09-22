// ---------------- CALIDAD AGUA ----------------
import { BASE_URL } from "../services.js/config.js";

async function crearCalidadAgua(registro) {
  return fetch(`${BASE_URL}/calidad-agua/crear`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(registro)
  }).then(res => res.json());
}

async function listarCalidadAgua() {
  return fetch(`${BASE_URL}/calidad-agua/listar`).then(res => res.json());
}

async function actualizarCalidadAgua(registro) {
  return fetch(`${BASE_URL}/calidad-agua/actualizar`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(registro)
  }).then(res => res.json());
}

async function buscarCalidadAguaPorId(id) {
  return fetch(`${BASE_URL}/calidad-agua/buscar-id?id=${id}`).then(res => res.json());
}
export { crearCalidadAgua, listarCalidadAgua, actualizarCalidadAgua, buscarCalidadAguaPorId };