import { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { getProjects } from '../api/client';
import './Portfolio.css';

const TAG_COLORS = {
  ML: 'var(--rose)',
  Backend: 'var(--teal)',
};

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cat, setCat] = useState('All');

  useEffect(() => {
    let mounted = true;
    getProjects()
      .then((res) => {
        if (mounted) setProjects(res.data || []);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const CATS_DYNAMIC = ['All', ...new Set(projects.map((p) => p.tag))];
  const filtered = cat === 'All' ? projects : projects.filter(p => p.tag === cat);

  return (
    <div className="page">

      {/* ══ HEADER ════════════════════════════════════════════ */}
      <section className="section port-hero">
        <div className="container">
          <p className="sec-eyebrow fu">Work</p>
          <h1 className="sec-title fu d1">All <em>Projects</em></h1>
          <p className="sec-sub fu d2">
            {projects.length} projects across machine learning pipelines and backend systems.
          </p>

          {/* count pills */}
          <div className="port-counts fu d3">
            {[
              { label: 'Total', n: projects.length, c: 'var(--amber)' },
              ...CATS_DYNAMIC.filter((c) => c !== 'All').map((label) => ({
                label,
                n: projects.filter((p) => p.tag === label).length,
                c: TAG_COLORS[label] || 'var(--text2)',
              })),
            ].map(({ label, n, c }) => (
              <div key={label} className="port-count">
                <span style={{ color: c, fontFamily: 'var(--font-head)', fontSize: 28, fontWeight: 700, lineHeight: 1 }}>{n}</span>
                <span style={{ fontSize: 11, color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GRID ══════════════════════════════════════════════ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">

          {/* filter bar */}
          <div className="port-filter">
            <div className="port-filter__btns">
              {CATS_DYNAMIC.map(c => (
                <button
                  key={c}
                  className={`port-filter__btn${cat === c ? ' active' : ''}`}
                  onClick={() => setCat(c)}
                >
                  {c}
                </button>
              ))}
            </div>
            <span className="port-showing">
              Showing <strong>{filtered.length}</strong> project{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* project grid */}
          {loading && <p style={{ color: 'var(--text2)' }}>Loading projects...</p>}

          <div className="port-grid">
            {filtered.map((p, i) => (
              <div
                key={p._id || p.id}
                className="fu"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <ProjectCard project={p} />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--text2)', padding: '80px 0' }}>
              No projects in this category.
            </p>
          )}
        </div>
      </section>

    </div>
  );
}
