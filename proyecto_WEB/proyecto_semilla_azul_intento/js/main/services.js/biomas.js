// ---------------- BIOMAS ----------------
import { BASE_URL } from "../services.js/config.js";

async function crearBioma(bioma) {
  return fetch(`${BASE_URL}/biomas/crear`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bioma)
  }).then(res => res.json());
}

async function listarBiomas() {
  return fetch(`${BASE_URL}/biomas/listar`).then(res => res.json());
}

async function actualizarBioma(bioma) {
  return fetch(`${BASE_URL}/biomas/actualizar`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bioma)
  }).then(res => res.json());
}

async function buscarBiomaPorId(id) {
  return fetch(`${BASE_URL}/biomas/buscar-id?id=${id}`).then(res => res.json());
}

export { crearBioma, listarBiomas, actualizarBioma, buscarBiomaPorId };