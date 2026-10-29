import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { contentOverviewData, bioParagraphs, technicalPillars } from '../data/content';
import TechMarquee from '../components/TechMarquee';
import Timeline from '../components/Timeline';
import './About.css';

/* SVG icons for each pillar — keyed by iconPath from content.js */
const PILLAR_ICONS = {
  'applied-ai': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/>
    </svg>
  ),
  backend: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
    </svg>
  ),
  web: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--violet)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
    </svg>
  ),
  data: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--rose)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  ),
};

export default function About() {
  const content     = contentOverviewData;
  const stack       = content?.stack || [];
  const timeline    = content?.timeline || [];
  const internships = content?.internships || [];
  const current     = content?.currentRole;

  const [previewCert, setPreviewCert] = useState(null);
  const modalTitleId = 'about-modal-title';

  // Close modal on Escape
  useEffect(() => {
    if (!previewCert) return;
    const handleKeyDown = (e) => { if (e.key === 'Escape') setPreviewCert(null); };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [previewCert]);

  return (
    <div className="page">

      {/* ══ HERO ════════════════════════════════════════════ */}
      <section className="section about-hero">
        <div className="container">
          <p className="sec-eyebrow fu">Profile &amp; Experience</p>
          <h1 className="sec-title fu d1">
            Engineering <em>Trajectory</em> &amp; Impact
          </h1>
          <p className="sec-sub fu d2">
            Computer Science graduate combining applied machine learning research, computer vision pipelines,
            and production web engineering.
          </p>
        </div>
      </section>

      {/* ══ BIO + PILLARS ════════════════════════════════════ */}
      <section className="section about-main" style={{ paddingTop: 0 }}>
        <div className="container about-main__grid">

          {/* Left: Bio card */}
          <div className="about-bio">
            <div className="about-avatar">
              <div className="about-avatar__ring" />
              <div className="about-avatar__inner">SJB</div>
            </div>

            <h2 className="about-name">Shah Jahan Abdul Latif</h2>
            <p className="about-role">Junior AI Engineer @ Reactive Space • Computer Science Graduate</p>

            {/* Bio paragraphs from data layer */}
            <div className="about-body">
              {bioParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Quick Metrics */}
            <div className="about-meta">
              <div className="about-meta__row">
                <span className="about-meta__key">Education</span>
                <span className="about-meta__val">BSc Computer Science (Sukkur IBA)</span>
              </div>
              <div className="about-meta__row">
                <span className="about-meta__key">GPA</span>
                <span className="about-meta__val">3.27 / 4.00</span>
              </div>
              <div className="about-meta__row">
                <span className="about-meta__key">Current Role</span>
                <span className="about-meta__val">Junior AI Engineer, Reactive Space</span>
              </div>
              <div className="about-meta__row">
                <span className="about-meta__key">Industry Internships</span>
                <span className="about-meta__val" style={{ color: 'var(--accent)', fontWeight: 600 }}>3 Completed Roles</span>
              </div>
              <div className="about-meta__row">
                <span className="about-meta__key">Projects Shipped</span>
                <span className="about-meta__val">{content.stats.projects}+ Repositories</span>
              </div>
              <div className="about-meta__row">
                <span className="about-meta__key">Credentials</span>
                <span className="about-meta__val">{content.stats.certificates} Verified Certifications</span>
              </div>
            </div>

            <div className="about-bio__actions">
              <Link to="/portfolio" className="btn btn-primary">
                Explore Projects →
              </Link>
              <Link to="/certifications" className="btn btn-outline">
                All Certifications ↗
              </Link>
            </div>
          </div>

          {/* Right: Technical Pillars from data layer */}
          <div className="about-philo">
            <h3 className="about-philo__heading">Technical Pillars</h3>
            <div className="about-philo__grid">
              {technicalPillars.map((p) => (
                <div key={p.title} className="philo-card card">
                  <div className="philo-card__head">
                    <span className="philo-icon">{PILLAR_ICONS[p.iconPath]}</span>
                    <h4 className="philo-title">{p.title}</h4>
                  </div>
                  <p className="philo-body">{p.body}</p>
                  <div className="philo-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="chip chip--sm">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══ FEATURED INTERNSHIPS SECTION ══════════════════════ */}
      <section className="section about-internships">
        <div className="container">
          <div className="about-internships__header">
            <div>
              <p className="sec-eyebrow">Practical Track Record</p>
              <h2 className="sec-title">
                Industry <em>Experience</em>
              </h2>
              <p className="sec-sub">
                A current speech AI engineering role, built on three verified internships across applied Machine Learning,
                AI engineering, and modern web development.
              </p>
            </div>
            <Link to="/certifications" className="btn btn-outline hide-sm">
              View All Credentials ↗
            </Link>
          </div>

          {/* Current full-time role */}
          {current && (
            <article className="intern-card intern-card--current card fu">
              <div className="intern-card__stripe" style={{ background: current.color }} />
              <div className="intern-card__body">
                <div className="intern-card__top">
                  <span className="current-pill">
                    <span className="current-pill__dot" />
                    Current Role
                  </span>
                  <span className="intern-card__period">{current.period}</span>
                </div>

                <h3 className="intern-card__role">{current.role}</h3>
                <div className="intern-card__company-row">
                  <span className="intern-card__company">{current.company}</span>
                  <span className="intern-card__loc">• {current.location}</span>
                  <span
                    className="chip chip--sm"
                    style={{ color: current.color, borderColor: `${current.color}40`, background: `${current.color}12` }}
                  >
                    {current.badge}
                  </span>
                </div>
                <p className="current-role__summary">{current.summary}</p>

                <div className="current-role__areas">
                  {current.areas.map((a) => (
                    <div key={a.title} className="current-role__area">
                      <h4>{a.title}</h4>
                      <p>{a.body}</p>
                    </div>
                  ))}
                </div>

                <ul className="intern-card__bullets current-role__bullets">
                  {current.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                <div className="intern-card__skills">
                  {current.skills.map((s) => (
                    <span key={s} className="chip chip--sm">{s}</span>
                  ))}
                </div>
              </div>
            </article>
          )}

          <div className="internships-grid">
            {internships.map((item, idx) => (
              <div
                key={item.id}
                className="intern-card card fu"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                {/* Accent top stripe */}
                <div className="intern-card__stripe" style={{ background: item.color }} />

                <div className="intern-card__body">
                  {/* Top row: badge + period */}
                  <div className="intern-card__top">
                    <span
                      className="chip"
                      style={{ color: item.color, borderColor: `${item.color}40`, background: `${item.color}12` }}
                    >
                      {item.badge}
                    </span>
                    <span className="intern-card__period">{item.period}</span>
                  </div>

                  {/* Role and Company */}
                  <h3 className="intern-card__role">{item.role}</h3>
                  <div className="intern-card__company-row">
                    <span className="intern-card__company">{item.company}</span>
                    <span className="intern-card__loc">• {item.location}</span>
                  </div>

                  {/* Certificate preview thumbnail */}
                  {item.certImage && (
                    <div
                      className="intern-card__cert-thumb"
                      onClick={() => setPreviewCert(item)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && setPreviewCert(item)}
                      aria-label={`Preview ${item.role} certificate`}
                    >
                      <img
                        src={item.certImage}
                        alt={`${item.company} internship certificate`}
                        loading="lazy"
                      />
                      <div className="intern-card__cert-overlay">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                        </svg>
                        <span>Verified Certificate</span>
                      </div>
                    </div>
                  )}

                  {/* Bullets */}
                  <ul className="intern-card__bullets">
                    {item.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>

                  {/* Footer: Cert ID & Skills */}
                  <div className="intern-card__footer">
                    <div className="intern-card__skills">
                      {item.skills.map((s) => (
                        <span key={s} className="chip chip--sm">{s}</span>
                      ))}
                    </div>

                    <div className="intern-card__actions">
                      {item.certId && (
                        <span className="intern-card__cert-id">
                          Ref: <code>{item.certId}</code>
                        </span>
                      )}
                      <button
                        type="button"
                        className="btn-cert-preview"
                        onClick={() => setPreviewCert(item)}
                      >
                        Inspect Certificate ↗
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TECH MARQUEE — shared component ═══════════════════ */}
      <TechMarquee stack={stack} label="Core Technologies & Tooling" />

      {/* ══ TIMELINE — shared component ══════════════════════ */}
      <section className="section about-timeline">
        <div className="container">
          <p className="sec-eyebrow">Academic &amp; Career Growth</p>
          <h2 className="sec-title">Career <em>Timeline</em></h2>
          <p className="sec-sub" style={{ marginBottom: 60 }}>
            Chronological milestones spanning university studies, technical skill building, and industry internships.
          </p>
          <Timeline items={timeline} variant="zigzag" />
        </div>
      </section>

      {/* ══ CERTIFICATE LIGHTBOX MODAL ══════════════════════════ */}
      {previewCert && (
        <div
          className="about-modal"
          onClick={() => setPreviewCert(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby={modalTitleId}
        >
          <div className="about-modal__content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="about-modal__close"
              onClick={() => setPreviewCert(null)}
              aria-label="Close certificate preview"
            >
              ✕
            </button>
            <div className="about-modal__img-wrap">
              <img
                src={previewCert.certImage || previewCert.imageUrl}
                alt={`${previewCert.role || previewCert.title} certificate`}
                className="about-modal__img"
              />
            </div>
            <div className="about-modal__info">
              <div>
                <span
                  className="chip"
                  style={{ color: previewCert.color, borderColor: `${previewCert.color}40`, background: `${previewCert.color}15` }}
                >
                  {previewCert.badge || previewCert.tag || 'Internship'}
                </span>
                <h3 id={modalTitleId} className="about-modal__title">{previewCert.role || previewCert.title}</h3>
                <p className="about-modal__sub">{previewCert.company || previewCert.issuer} • {previewCert.period || previewCert.year}</p>
              </div>

              {previewCert.certId && (
                <div className="about-modal__id">
                  <span>Certificate ID / Verification Code:</span>
                  <code>{previewCert.certId}</code>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
