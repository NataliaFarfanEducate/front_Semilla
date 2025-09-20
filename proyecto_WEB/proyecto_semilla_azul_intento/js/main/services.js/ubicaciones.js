// ===== UBICACIONES =====
import { BASE_URL } from "../config.js";

async function crearUbicacion(ubicacion) {
  const res = await fetch(`${BASE_URL}/ubicaciones/crear`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ubicacion)
  });
  return res.json();
}

async function actualizarUbicacion(ubicacion) {
  const res = await fetch(`${BASE_URL}/ubicaciones/actualizar`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ubicacion)
  });
  return res.json();
}

async function listarUbicaciones() {
  const res = await fetch(`${BASE_URL}/ubicaciones/listar`);
  return res.json();
}

async function buscarUbicacionPorId(id) {
  const res = await fetch(`${BASE_URL}/ubicaciones/buscar-id?id=${id}`);
  return res.ok ? res.json() : null;
}

export { crearUbicacion, actualizarUbicacion, listarUbicaciones, buscarUbicacionPorId };