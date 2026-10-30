const API = import.meta.env.VITE_API_URL || "http://localhost:3001/api";

async function request(path, options = {}) {
  try {
    const response = await fetch(`${API}${path}`, {
      headers: { "Content-Type": "application/json", ...(options.headers || {}) },
      ...options
    });
    if (!response.ok) throw new Error("API request failed");
    return await response.json();
  } catch {
    return null;
  }
}

export const api = {
  health: () => request("/health"),
  jobs: () => request("/jobs"),
  students: () => request("/students"),
  applications: () => request("/applications"),
  createJob: (job) => request("/jobs", { method: "POST", body: JSON.stringify(job) }),
  updateApplication: (id, status) => request(`/applications/${id}`, { method: "PATCH", body: JSON.stringify({ status }) }),
  createNotice: (notice) => request("/notices", { method: "POST", body: JSON.stringify(notice) }),
  match: (studentSkills, requiredSkills) =>
    request("/ai/match", { method: "POST", body: JSON.stringify({ studentSkills, requiredSkills }) })
};
