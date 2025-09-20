// ===== USUARIOS =====
import { BASE_URL } from "../config.js";
async function crearUsuario(usuario) {
  const res = await fetch(`${BASE_URL}/usuarios/crear`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario)
  });
  return res.json();
}

async function listarUsuarios() {
  const res = await fetch(`${BASE_URL}/usuarios/listar`);
  return res.json();
}

async function actualizarUsuario(usuario) {
  const res = await fetch(`${BASE_URL}/usuarios/actualizar`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario)
  });
  return res.json();
}

async function buscarUsuarioPorId(id) {
  const res = await fetch(`${BASE_URL}/usuarios/buscar-id?id=${id}`);
  return res.ok ? res.json() : null;
}

async function buscarUsuarioPorCorreo(correo) {
  const res = await fetch(`${BASE_URL}/usuarios/buscar-correo?correo=${correo}`);
  return res.ok ? res.json() : null;
}
export { crearUsuario, listarUsuarios, actualizarUsuario, buscarUsuarioPorId, buscarUsuarioPorCorreo };