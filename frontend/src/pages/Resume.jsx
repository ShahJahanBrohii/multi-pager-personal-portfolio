import { useState, useEffect, useRef } from 'react';
import { getContentOverview } from '../api/client';
import './Resume.css';

const RESUME_URL = import.meta.env.VITE_RESUME_URL || '';

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

const TABS = ['Skills', 'Experience', 'Education', 'Timeline'];

export default function Resume() {
  const [tab, setTab] = useState('Skills');
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    getContentOverview()
      .then((res) => {
        if (mounted) setContent(res.data || null);
      })
      .catch(() => {
        if (mounted) setContent(null);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const skills = content?.skills || {};
  const resume = content?.resume || { experience: [], education: [] };
  const timeline = content?.timeline || [];

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
          {RESUME_URL && (
            <a
              href={RESUME_URL}
              download
              className="btn btn-amber fu d3"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download PDF
            </a>
          )}
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
              {loading && <p style={{ color: 'var(--text2)' }}>Loading skills...</p>}
              {Object.entries(skills).map(([cat, items]) => (
                <div key={cat} className="skills-group">
                  <h3 className="skills-group__hd">{cat}</h3>
                  <div className="skills-group__grid">
                    {items.map(({ name, level }) => (
                      <SkillBar key={name} name={name} level={level} />
                    ))}
                  </div>
                </div>
              ))}
              {!loading && Object.keys(skills).length === 0 && <p style={{ color: 'var(--text2)' }}>No skills data available yet.</p>}
            </div>
          )}

          {/* ─ Experience panel ─ */}
          {tab === 'Experience' && (
            <div className="res-panel fi">
              {loading && <p style={{ color: 'var(--text2)' }}>Loading experience...</p>}
              {resume.experience.map((ex, i) => (
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
              {!loading && resume.experience.length === 0 && <p style={{ color: 'var(--text2)' }}>No experience data available yet.</p>}
            </div>
          )}

          {/* ─ Education panel ─ */}
          {tab === 'Education' && (
            <div className="res-panel fi">
              {loading && <p style={{ color: 'var(--text2)' }}>Loading education...</p>}
              {resume.education.map((ed, i) => (
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
              {!loading && resume.education.length === 0 && <p style={{ color: 'var(--text2)' }}>No education data available yet.</p>}
            </div>
          )}

          {/* ─ Timeline panel ─ */}
          {tab === 'Timeline' && (
            <div className="res-panel fi">
              {loading && <p style={{ color: 'var(--text2)' }}>Loading timeline...</p>}
              <div className="timeline">
                {timeline.map((item, i) => (
                  <div key={i} className="timeline__item">
                    <div className="timeline__marker" style={{ backgroundColor: item.color }} />
                    <div className="timeline__content card">
                      <div className="timeline__header">
                        <span className="timeline__year" style={{ color: item.color }}>{item.year}</span>
                        <span className="timeline__tag" style={{ borderColor: item.color, color: item.color }}>{item.tag}</span>
                      </div>
                      <h3 className="timeline__title">{item.title}</h3>
                      <p className="timeline__body">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              {!loading && timeline.length === 0 && <p style={{ color: 'var(--text2)' }}>No timeline data available yet.</p>}
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
