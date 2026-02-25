import { useState, useEffect, useRef } from 'react';
import { SKILLS, RESUME } from '../assets/data';
import './Resume.css';

/* Animated progress bar — triggers on scroll intersection */
function SkillBar({ name, level }) {
  const [on, setOn] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setOn(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div className="sbar" ref={ref}>
      <div className="sbar__label">
        <span>{name}</span>
        <span className="sbar__pct">{level}%</span>
      </div>
      <div className="sbar__track">
        <div className="sbar__fill" style={{ width: on ? `${level}%` : '0%' }} />
      </div>
    </div>
  );
}

const TABS = ['Skills', 'Experience', 'Education'];

export default function Resume() {
  const [tab, setTab] = useState('Skills');

  return (
    <div className="page">

      {/* ══ HEADER ════════════════════════════════════════════ */}
      <section className="section res-hero">
        <div className="container res-hero__row">
          <div>
            <p className="sec-eyebrow fu">Resume</p>
            <h1 className="sec-title fu d1">Interactive <em>CV</em></h1>
            <p className="sec-sub fu d2">Skills, experience, and education at a glance.</p>
          </div>
          <a
            href="/resume.pdf"
            download
            className="btn btn-amber fu d3"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download PDF
          </a>
        </div>
      </section>

      {/* ══ TABS + PANELS ══════════════════════════════════════ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">

          {/* tab bar */}
          <div className="res-tabs">
            {TABS.map(t => (
              <button
                key={t}
                className={`res-tab${tab === t ? ' active' : ''}`}
                onClick={() => setTab(t)}
              >
                {t}
              </button>
            ))}
          </div>

          {/* ─ Skills panel ─ */}
          {tab === 'Skills' && (
            <div className="res-panel fi">
              {Object.entries(SKILLS).map(([cat, items]) => (
                <div key={cat} className="skills-group">
                  <h3 className="skills-group__hd">{cat}</h3>
                  <div className="skills-group__grid">
                    {items.map(({ name, level }) => (
                      <SkillBar key={name} name={name} level={level} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ─ Experience panel ─ */}
          {tab === 'Experience' && (
            <div className="res-panel fi">
              {RESUME.experience.map((ex, i) => (
                <div key={i} className="res-entry card">
                  <div className="res-entry__hd">
                    <div>
                      <h3 className="res-entry__role">{ex.role}</h3>
                      <p className="res-entry__co">{ex.company}</p>
                    </div>
                    <span className="res-entry__period">{ex.period}</span>
                  </div>
                  <ul className="res-entry__bullets">
                    {ex.bullets.map((b, j) => (
                      <li key={j}><span className="res-entry__dot" />{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* ─ Education panel ─ */}
          {tab === 'Education' && (
            <div className="res-panel fi">
              {RESUME.education.map((ed, i) => (
                <div key={i} className="res-entry card">
                  <div className="res-entry__hd">
                    <div>
                      <h3 className="res-entry__role">{ed.degree}</h3>
                      <p className="res-entry__co">{ed.institution}</p>
                    </div>
                    <span className="res-entry__period">{ed.period}</span>
                  </div>
                  <div className="res-entry__gpa">
                    <span>CGPA</span>
                    <strong style={{ color: 'var(--amber)' }}>{ed.gpa}</strong>
                  </div>
                  <ul className="res-entry__bullets">
                    {ed.notes.map((n, j) => (
                      <li key={j}><span className="res-entry__dot" />{n}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
