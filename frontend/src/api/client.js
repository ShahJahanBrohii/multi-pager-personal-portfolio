const API_BASE = import.meta.env.VITE_API_URL || "https://multi-pager-personal-portfolio.onrender.com/api";
export const API_ORIGIN = API_BASE.replace(/\/api\/?$/, "");

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, options);
  const contentType = res.headers.get("content-type") || "";
  const payload = contentType.includes("application/json") ? await res.json() : await res.text();

  if (!res.ok) {
    const message = typeof payload === "object" && payload?.message ? payload.message : "Request failed";
    throw new Error(message);
  }

  return payload;
}

export function getProjects() {
  return request("/projects");
}

export function getCertificates() {
  return request("/certificates");
}

export function getContentOverview() {
  return request("/content/overview");
}

export function submitContactMessage(fields) {
  return request("/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });
}

export function loginAdmin(email, password) {
  return request("/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
}

export function createProject(token, formData) {
  return request("/projects", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });
}

export function updateProject(token, id, formData) {
  return request(`/projects/${id}`, {
    method: "PUT",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });
}

export function deleteProject(token, id) {
  return request(`/projects/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
}

export function createCertificate(token, formData) {
  return request("/certificates", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });
}

export function updateCertificate(token, id, formData) {
  return request(`/certificates/${id}`, {
    method: "PUT",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });
}

export function deleteCertificate(token, id) {
  return request(`/certificates/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
}
