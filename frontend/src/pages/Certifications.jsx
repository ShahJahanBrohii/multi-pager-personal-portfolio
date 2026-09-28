import { useState, useEffect } from 'react';
import { certificatesData } from '../data/certificates';
import './Certifications.css';

const RESUME_URL = import.meta.env.VITE_RESUME_URL || '';

// Define certificate categories in display priority order
const CERT_CATEGORIES = [
  'Internships',
  'Workshops',
  'Webinars/Sessions',
  'Courses & Training',
  'Events & Hackathons',
  'Volunteering',
  'Writing',
];

function getCertImageSrc(cert) {
  if (cert.imageUrl) return cert.imageUrl;
  if (cert.imagePath) return cert.imagePath;
  if (cert.image) return cert.image;
  return '';
}

export default function Certifications() {
  const [certs] = useState(certificatesData);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [previewCert, setPreviewCert] = useState(null);

  // Close lightbox on Escape key
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

  // Extract unique categories present in data, preserving desired order
  const presentCategories = [...new Set(certs.map(c => c.category).filter(Boolean))];
  const orderedCategories = [
    ...CERT_CATEGORIES.filter(cat => presentCategories.includes(cat)),
    ...presentCategories.filter(cat => !CERT_CATEGORIES.includes(cat)),
  ];
  const categoriesWithCount = ['All', ...orderedCategories];

  // Filter certificates based on selected category
  const filteredCerts = selectedCategory === 'All'
    ? certs
    : certs.filter(c => (c.category || 'Courses & Training') === selectedCategory);

  return (
    <div className="page">

      {/* ══ HEADER ════════════════════════════════════════════ */}
      <section className="section certs-hero">
        <div className="container">
          <p className="sec-eyebrow fu">Credentials</p>
          <h1 className="sec-title fu d1">
            Certifications & <em>Internships</em>
          </h1>
          <p className="sec-sub fu d2">
            Verified industry internships, technical workshops, machine learning training, and academic honors.
          </p>
        </div>
      </section>

      {/* ══ CERT CATEGORIES ═══════════════════════════════════ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {!certs || certs.length === 0 ? (
            <p style={{ color: 'var(--text2)' }}>No certifications added yet.</p>
          ) : (
            <>
              {/* filter bar */}
              <div className="cert-filter">
                <div className="cert-filter__btns">
                  {categoriesWithCount.map(cat => (
                    <button
                      key={cat}
                      className={`cert-filter__btn${selectedCategory === cat ? ' active' : ''}`}
                      onClick={() => setSelectedCategory(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                <span className="cert-showing">
                  Showing <strong>{filteredCerts.length}</strong> credential{filteredCerts.length !== 1 ? 's' : ''}
                </span>
              </div>

              {/* certificates grid */}
              <div className="certs-grid">
                {filteredCerts.map((c, i) => {
                  const imageSrc = getCertImageSrc(c);
                  return (
                    <div
                      key={c._id || i}
                      className="cert-card card fu"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      {imageSrc && (
                        <div
                          className="cert-card__thumb"
                          onClick={() => setPreviewCert(c)}
                          role="button"
                          tabIndex={0}
                          aria-label={`Preview ${c.title} certificate`}
                        >
                          <img
                            src={imageSrc}
                            alt={`${c.title} certificate`}
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.closest('.cert-card__thumb').style.display = 'none';
                            }}
                          />
                          <div className="cert-card__zoom-hint">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                            </svg>
                            <span>Click to Zoom</span>
                          </div>
                        </div>
                      )}

                      <div className="cert-card__bar" style={{ background: c.color }} />

                      <div className="cert-card__body">
                        <div className="cert-card__top">
                          <span
                            className="chip"
                            style={{ color: c.color, borderColor: `${c.color}40`, background: `${c.color}12` }}
                          >
                            {c.tag}
                          </span>
                          <span className="cert-card__year">{c.period || c.year}</span>
                        </div>

                        <div className="cert-card__main">
                          <h3 className="cert-card__title">{c.title}</h3>
                          <p className="cert-card__issuer">{c.issuer}</p>
                          {c.certId && (
                            <span className="cert-card__id">
                              Ref: <code>{c.certId}</code>
                            </span>
                          )}
                        </div>

                        {c.desc && <p className="cert-card__desc">{c.desc}</p>}

                        {imageSrc && (
                          <button
                            type="button"
                            className="cert-card__view-btn"
                            onClick={() => setPreviewCert(c)}
                          >
                            View Full Certificate ↗
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {/* CTA */}
          <div className="certs-cta">
            <a
              href="https://github.com/ShahJahanBrohii"
              target="_blank" rel="noreferrer"
              className="btn btn-outline"
            >
              View GitHub Profile ↗
            </a>
            <a
              href="https://www.linkedin.com/in/shah-jahan-abdul-latif-a00a74280"
              target="_blank" rel="noreferrer"
              className="btn btn-outline"
            >
              Connect on LinkedIn ↗
            </a>
            {RESUME_URL && (
              <a href={RESUME_URL} download className="btn btn-amber">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Full Resume
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ══ CERTIFICATE LIGHTBOX MODAL ═════════════════════════ */}
      {previewCert && (
        <div
          className="cert-modal"
          onClick={() => setPreviewCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="cert-modal__content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="cert-modal__close"
              onClick={() => setPreviewCert(null)}
              aria-label="Close certificate preview"
            >
              ✕
            </button>
            <div className="cert-modal__img-wrap">
              <img
                src={getCertImageSrc(previewCert)}
                alt={previewCert.title}
                className="cert-modal__img"
              />
            </div>
            <div className="cert-modal__info">
              <div>
                <span className="chip" style={{ color: previewCert.color, borderColor: `${previewCert.color}40`, background: `${previewCert.color}15` }}>
                  {previewCert.category}
                </span>
                <h3 className="cert-modal__title">{previewCert.title}</h3>
                <p className="cert-modal__issuer">{previewCert.issuer} • {previewCert.period || previewCert.year}</p>
              </div>
              {previewCert.certId && (
                <div className="cert-modal__id">
                  <span>Certificate ID / Code:</span>
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
