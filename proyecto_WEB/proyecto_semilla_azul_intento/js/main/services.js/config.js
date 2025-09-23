export const BASE_URL = "http://localhost:8090";

const API_EXTERNA = "http://localhost:8080/api/v1";

async function apiGet(endpoint) {
  const res = await fetch(`${API_EXTERNA}${endpoint}`);
  if (!res.ok) {
    throw new Error(`Error en la petición GET: ${res.statusText}`);
  }
  return res.json();
}

async function apiPost(endpoint, data) {
  const res = await fetch(`${API_EXTERNA}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    throw new Error(`Error en la petición POST: ${res.statusText}`);
  }
  return res.json();
}

async function apiPut(endpoint, data) {
  const res = await fetch(`${API_EXTERNA}${endpoint}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    throw new Error(`Error en la petición PUT: ${res.statusText}`);
  }
  return res.json();
}

async function apiDelete(endpoint) {
  const res = await fetch(`${API_EXTERNA}${endpoint}`, { method: "DELETE" });
  if (!res.ok) {
    throw new Error(`Error en la petición DELETE: ${res.statusText}`);
  }
}
export { apiGet, apiPost, apiPut, apiDelete };