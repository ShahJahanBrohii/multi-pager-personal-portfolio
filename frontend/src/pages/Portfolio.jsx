import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../assets/data';
import './Portfolio.css';

const CATS = ['All', 'ML', 'Backend'];

export default function Portfolio() {
  const [cat, setCat] = useState('All');

  const filtered = cat === 'All' ? PROJECTS : PROJECTS.filter(p => p.tag === cat);

  return (
    <div className="page">

      {/* ══ HEADER ════════════════════════════════════════════ */}
      <section className="section port-hero">
        <div className="container">
          <p className="sec-eyebrow fu">Work</p>
          <h1 className="sec-title fu d1">All <em>Projects</em></h1>
          <p className="sec-sub fu d2">
            {PROJECTS.length} projects across machine learning pipelines and backend systems.
          </p>

          {/* count pills */}
          <div className="port-counts fu d3">
            {[
              { label: 'Total',   n: PROJECTS.length,                             c: 'var(--amber)' },
              { label: 'ML',      n: PROJECTS.filter(p=>p.tag==='ML').length,     c: 'var(--rose)'  },
              { label: 'Backend', n: PROJECTS.filter(p=>p.tag==='Backend').length,c: 'var(--teal)'  },
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
              {CATS.map(c => (
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
          <div className="port-grid">
            {filtered.map((p, i) => (
              <div
                key={p.id}
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
