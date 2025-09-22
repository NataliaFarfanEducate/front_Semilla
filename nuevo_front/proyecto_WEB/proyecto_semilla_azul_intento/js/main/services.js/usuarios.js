import { BASE_URL } from "../services.js/config.js";
async function crearUsuario(usuario) {
  const res = await fetch(`${BASE_URL}/usuarios/crear`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario)
  });
  return res.json();
}

async function listarUsuarios() {
  const res = await fetch(`${BASE_URL}/usuarios/listar`, {
    credentials: 'include'
  });
  return res.json();
}


async function loginUsuario(correo, password) {
    const res = await fetch('http://localhost:8090/usuarios/login', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: correo,      
            contrasena: password 
        })
    });
    
    if (!res.ok) {
        throw new Error('Error en login: ' + res.status);
    }
    
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
export { crearUsuario, listarUsuarios, actualizarUsuario, buscarUsuarioPorId, buscarUsuarioPorCorreo, loginUsuario };