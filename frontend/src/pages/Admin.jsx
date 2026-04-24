import { useEffect, useMemo, useState } from "react";
import {
  createCertificate,
  createProject,
  deleteCertificate,
  deleteProject,
  getCertificates,
  getProjects,
  loginAdmin,
} from "../api/client";
import "./Admin.css";

const TOKEN_KEY = "portfolio_admin_token";

const projectBlank = {
  title: "",
  desc: "",
  tag: "ML",
  tech: "",
  github: "",
  kaggleNotebook: "",
  difficulty: "Medium",
};

const certBlank = {
  title: "",
  issuer: "",
  year: "",
  tag: "",
  desc: "",
};

export default function Admin() {
  const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY) || "");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authErr, setAuthErr] = useState("");

  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  const [projectForm, setProjectForm] = useState(projectBlank);
  const [projectImage, setProjectImage] = useState(null);
  const [certForm, setCertForm] = useState(certBlank);
  const [certImage, setCertImage] = useState(null);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState("");

  const isAuthed = useMemo(() => Boolean(token), [token]);

  async function refreshData() {
    setLoading(true);
    try {
      const [p, c] = await Promise.all([getProjects(), getCertificates()]);
      setProjects(p.data || []);
      setCertificates(c.data || []);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refreshData();
  }, []);

  async function onLogin(e) {
    e.preventDefault();
    setAuthErr("");
    try {
      const res = await loginAdmin(email, password);
      localStorage.setItem(TOKEN_KEY, res.data.token);
      setToken(res.data.token);
      setNotice("Admin login successful.");
      setPassword("");
    } catch (err) {
      setAuthErr(err.message);
    }
  }

  function onLogout() {
    localStorage.removeItem(TOKEN_KEY);
    setToken("");
    setNotice("Logged out.");
  }

  async function onCreateProject(e) {
    e.preventDefault();
    if (!isAuthed) return;
    setBusy(true);
    setNotice("");
    try {
      const fd = new FormData();
      Object.entries(projectForm).forEach(([k, v]) => fd.append(k, v));
      if (projectImage) fd.append("image", projectImage);
      await createProject(token, fd);
      setProjectForm(projectBlank);
      setProjectImage(null);
      await refreshData();
      setNotice("Project created.");
    } catch (err) {
      setNotice(err.message);
    } finally {
      setBusy(false);
    }
  }

  async function onCreateCertificate(e) {
    e.preventDefault();
    if (!isAuthed) return;
    setBusy(true);
    setNotice("");
    try {
      const fd = new FormData();
      Object.entries(certForm).forEach(([k, v]) => fd.append(k, v));
      if (certImage) fd.append("image", certImage);
      await createCertificate(token, fd);
      setCertForm(certBlank);
      setCertImage(null);
      await refreshData();
      setNotice("Certificate created.");
    } catch (err) {
      setNotice(err.message);
    } finally {
      setBusy(false);
    }
  }

  async function onDeleteProject(id) {
    if (!isAuthed) return;
    if (!window.confirm("Delete this project?")) return;
    setBusy(true);
    try {
      await deleteProject(token, id);
      await refreshData();
      setNotice("Project deleted.");
    } catch (err) {
      setNotice(err.message);
    } finally {
      setBusy(false);
    }
  }

  async function onDeleteCertificate(id) {
    if (!isAuthed) return;
    if (!window.confirm("Delete this certificate?")) return;
    setBusy(true);
    try {
      await deleteCertificate(token, id);
      await refreshData();
      setNotice("Certificate deleted.");
    } catch (err) {
      setNotice(err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="page admin-page">
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container admin-wrap">
          <h1 className="sec-title">Admin <em>Dashboard</em></h1>
          <p className="sec-sub">Manage projects and certificates from the backend API.</p>

          {!isAuthed ? (
            <form className="card admin-card" onSubmit={onLogin}>
              <h3>Admin Login</h3>
              <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" required />
              <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" required />
              {authErr && <p className="admin-err">{authErr}</p>}
              <button className="btn btn-amber" type="submit">Login</button>
            </form>
          ) : (
            <div className="admin-actions">
              <button className="btn btn-outline" onClick={onLogout}>Logout</button>
            </div>
          )}

          {notice && <p className="admin-note">{notice}</p>}

          {isAuthed && (
            <div className="admin-grid">
              <form className="card admin-card" onSubmit={onCreateProject}>
                <h3>Create Project</h3>
                <input value={projectForm.title} onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })} placeholder="Title" required />
                <textarea value={projectForm.desc} onChange={(e) => setProjectForm({ ...projectForm, desc: e.target.value })} placeholder="Description" rows={4} required />
                <input value={projectForm.tag} onChange={(e) => setProjectForm({ ...projectForm, tag: e.target.value })} placeholder="Tag" required />
                <input value={projectForm.tech} onChange={(e) => setProjectForm({ ...projectForm, tech: e.target.value })} placeholder="Tech comma separated" />
                <input value={projectForm.github} onChange={(e) => setProjectForm({ ...projectForm, github: e.target.value })} placeholder="GitHub URL" />
                <input value={projectForm.kaggleNotebook} onChange={(e) => setProjectForm({ ...projectForm, kaggleNotebook: e.target.value })} placeholder="Kaggle Notebook URL" />
                <select value={projectForm.difficulty} onChange={(e) => setProjectForm({ ...projectForm, difficulty: e.target.value })}>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
                <input type="file" accept="image/*" onChange={(e) => setProjectImage(e.target.files?.[0] || null)} />
                <button disabled={busy} className="btn btn-amber" type="submit">Save Project</button>
              </form>

              <form className="card admin-card" onSubmit={onCreateCertificate}>
                <h3>Create Certificate</h3>
                <input value={certForm.title} onChange={(e) => setCertForm({ ...certForm, title: e.target.value })} placeholder="Title" required />
                <input value={certForm.issuer} onChange={(e) => setCertForm({ ...certForm, issuer: e.target.value })} placeholder="Issuer" required />
                <input value={certForm.year} onChange={(e) => setCertForm({ ...certForm, year: e.target.value })} placeholder="Year" required />
                <input value={certForm.tag} onChange={(e) => setCertForm({ ...certForm, tag: e.target.value })} placeholder="Tag" required />
                <textarea value={certForm.desc} onChange={(e) => setCertForm({ ...certForm, desc: e.target.value })} placeholder="Short description" rows={4} />
                <input type="file" accept="image/*" onChange={(e) => setCertImage(e.target.files?.[0] || null)} required />
                <button disabled={busy} className="btn btn-amber" type="submit">Save Certificate</button>
              </form>
            </div>
          )}

          <div className="admin-lists">
            <div className="card admin-card">
              <h3>Projects ({projects.length})</h3>
              {loading ? <p>Loading...</p> : projects.map((p) => (
                <div key={p._id} className="admin-item">
                  <span>{p.title}</span>
                  {isAuthed && <button className="btn btn-outline" onClick={() => onDeleteProject(p._id)}>Delete</button>}
                </div>
              ))}
            </div>

            <div className="card admin-card">
              <h3>Certificates ({certificates.length})</h3>
              {loading ? <p>Loading...</p> : certificates.map((c) => (
                <div key={c._id} className="admin-item">
                  <span>{c.title}</span>
                  {isAuthed && <button className="btn btn-outline" onClick={() => onDeleteCertificate(c._id)}>Delete</button>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
