import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';
import './Portfolio.css';

const TAG_COLORS = {
  AI: 'var(--accent)',
  ML: 'var(--accent)',
  CV: 'var(--accent)',
  Data: 'var(--accent)',
};

export default function Portfolio() {
  // Static data — no useState needed
  const projects = projectsData;
  const [cat, setCat] = useState('All');
  const [visible, setVisible] = useState(true);

  const CATS_DYNAMIC = ['All', ...new Set(projects.map((p) => p.tag))];
  const filtered = cat === 'All' ? projects : projects.filter(p => p.tag === cat);

  // When category changes: fade out → swap items → fade in
  const handleCatChange = (newCat) => {
    if (newCat === cat) return;
    setVisible(false);
    setTimeout(() => {
      setCat(newCat);
      setVisible(true);
    }, 180); // must match CSS transition duration
  };

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
              { label: 'Total', n: projects.length, c: 'var(--accent)' },
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
            <div className="port-filter__btns" role="group" aria-label="Filter projects by category">
              {CATS_DYNAMIC.map(c => (
                <button
                  key={c}
                  className={`port-filter__btn${cat === c ? ' active' : ''}`}
                  onClick={() => handleCatChange(c)}
                  aria-pressed={cat === c}
                >
                  {c}
                </button>
              ))}
            </div>
            <span className="port-showing">
              Showing <strong>{filtered.length}</strong> project{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* project grid — animated on category switch */}
          <div className={`port-grid${visible ? ' port-grid--visible' : ' port-grid--hidden'}`}>
            {filtered.map((p, i) => (
              <div
                key={p.id}
                className="port-card-wrap"
                style={{ transitionDelay: visible ? `${i * 0.04}s` : '0s' }}
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
