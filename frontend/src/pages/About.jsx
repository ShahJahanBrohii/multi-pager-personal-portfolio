import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { contentOverviewData } from '../data/content';
import './About.css';

const PILLARS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/>
      </svg>
    ),
    accent: 'var(--amber)',
    title: 'Applied AI & Computer Vision',
    tags: ['YOLO', 'PyTorch', 'OpenCV'],
    body: 'Developing accurate object detection pipelines, image segmentation models, and real-time vision algorithms with deep learning frameworks.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    ),
    accent: 'var(--teal)',
    title: 'Backend Systems & APIs',
    tags: ['FastAPI', 'Flask', 'Node.js', 'MongoDB'],
    body: 'Architecting fast, modular REST APIs, scalable service endpoints, database schemas, and data ingestion services.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--violet)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
    accent: 'var(--violet)',
    title: 'Modern Web Engineering',
    tags: ['React 19', 'Vite', 'Modern CSS', 'SPA'],
    body: 'Building fluid, accessible, high-performance web applications with modular component architecture and responsive design systems.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--rose)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    accent: 'var(--rose)',
    title: 'Data Pipelines & Analytics',
    tags: ['Pandas', 'Power BI', 'Tableau'],
    body: 'Transforming raw unstructured data into actionable insights through robust preprocessing, feature engineering, and interactive dashboards.',
  },
];

export default function About() {
  const content = contentOverviewData;
  const stack = content?.stack || [];
  const timeline = content?.timeline || [];
  const internships = content?.internships || [];

  const [previewCert, setPreviewCert] = useState(null);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setPreviewCert(null);
    };
    if (previewCert) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
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
          <p className="sec-eyebrow fu">Profile & Experience</p>
          <h1 className="sec-title fu d1">
            Engineering <em>Trajectory</em> & Impact
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
            <p className="about-role">Machine Learning Engineer • Computer Science Graduate</p>

            <div className="about-body">
              <p>
                I am a Computer Science graduate from <strong>Sukkur IBA University</strong> with a deep passion for
                applied artificial intelligence, computer vision, and high-performance software engineering.
              </p>
              <p>
                My background spans <strong>three industry internships</strong> across Machine Learning Engineering at 
                <strong> FlyRank Corp USA</strong>, AI/ML development at <strong>SafeX Solutions</strong>, and responsive web development 
                at <strong>High Tech Software House</strong>.
              </p>
              <p>
                I focus on translating complex machine learning models into practical, deployable tools—ranging from 
                real-time object detection systems to full-stack web applications.
              </p>
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
                <span className="about-meta__key">Industry Internships</span>
                <span className="about-meta__val" style={{ color: 'var(--amber)', fontWeight: 600 }}>3 Completed Roles</span>
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
              <Link to="/portfolio" className="btn btn-amber">
                Explore Projects →
              </Link>
              <Link to="/certifications" className="btn btn-outline">
                All Certifications ↗
              </Link>
            </div>
          </div>

          {/* Right: Technical Pillars */}
          <div className="about-philo">
            <h3 className="about-philo__heading">Technical Pillars</h3>
            <div className="about-philo__grid">
              {PILLARS.map((p) => (
                <div key={p.title} className="philo-card card">
                  <div className="philo-card__head">
                    <span className="philo-icon">{p.icon}</span>
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
                Three Industry <em>Internships</em>
              </h2>
              <p className="sec-sub">
                Verified professional internships across applied Machine Learning, AI engineering, and modern web development.
              </p>
            </div>
            <Link to="/certifications" className="btn btn-outline hide-sm">
              View All Credentials ↗
            </Link>
          </div>

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

      {/* ══ TECH MARQUEE ══════════════════════════════════════ */}
      <div className="about-marquee">
        <p className="sec-eyebrow" style={{ justifyContent: 'center', marginBottom: 16 }}>Core Technologies & Tooling</p>
        <div className="about-marquee__track">
          <div className="about-marquee__inner">
            {[...stack, ...stack, ...stack].map((s, i) => (
              <span key={i} className="marquee-item">{s.name}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ══ TIMELINE ══════════════════════════════════════════ */}
      <section className="section about-timeline">
        <div className="container">
          <p className="sec-eyebrow">Academic & Career Growth</p>
          <h2 className="sec-title">Career <em>Timeline</em></h2>
          <p className="sec-sub" style={{ marginBottom: 60 }}>
            Chronological milestones spanning university studies, technical skill building, and industry internships.
          </p>

          <div className="timeline">
            <div className="timeline__spine" />
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`tl-item${i % 2 === 0 ? ' tl-item--left' : ' tl-item--right'}`}
              >
                <div
                  className="tl-dot"
                  style={{ background: item.color, boxShadow: `0 0 14px ${item.color}55` }}
                />
                <div className="tl-card card">
                  <div className="tl-card__top">
                    <span className="tl-year" style={{ color: item.color }}>{item.year}</span>
                    <span
                      className="chip"
                      style={{ color: item.color, borderColor: `${item.color}40`, background: `${item.color}14` }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="tl-title">{item.title}</h4>
                  <p className="tl-body">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CERTIFICATE LIGHTBOX MODAL ═════════════════════════ */}
      {previewCert && (
        <div
          className="about-modal"
          onClick={() => setPreviewCert(null)}
          role="dialog"
          aria-modal="true"
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
                <h3 className="about-modal__title">{previewCert.role || previewCert.title}</h3>
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
