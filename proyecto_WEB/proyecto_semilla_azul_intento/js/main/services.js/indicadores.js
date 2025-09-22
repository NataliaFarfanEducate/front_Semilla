// ---------------- INDICADORES ----------------
import { BASE_URL } from "../services.js/config.js";

async function crearIndicador(indicador) {
  return fetch(`${BASE_URL}/indicadores/crear`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(indicador)
  }).then(res => res.json());
}

async function listarIndicadores() {
  return fetch(`${BASE_URL}/indicadores/listar`).then(res => res.json());
}

async function actualizarIndicador(indicador) {
  return fetch(`${BASE_URL}/indicadores/actualizar`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(indicador)
  }).then(res => res.json());
}

async function buscarIndicadorPorId(id) {
  return fetch(`${BASE_URL}/indicadores/buscar-id?id=${id}`).then(res => res.json());
}
export { crearIndicador, listarIndicadores, actualizarIndicador, buscarIndicadorPorId };