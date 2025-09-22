// ===== AUDITORÍAS =====
import { BASE_URL } from "../services.js/config.js";
async function crearAuditoria(auditoria) {
  const res = await fetch(`${BASE_URL}/auditorias/crear`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(auditoria)
  });
  if (!res.ok) {
    throw new Error(`Error HTTP: ${res.status}`);
  }
  return res.json();
}

async function listarAuditorias() {
  const res = await fetch(`${BASE_URL}/auditorias/listar`);
  return res.json();
}

async function buscarAuditoriaPorId(id) {
  const res = await fetch(`${BASE_URL}/auditorias/buscar-id?id=${id}`);
  return res.ok ? res.json() : null;
}
export { crearAuditoria, listarAuditorias, buscarAuditoriaPorId };