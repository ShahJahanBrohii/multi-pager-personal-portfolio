import { useState } from 'react';
import { certificatesData } from '../data/certificates';
import './Certifications.css';
const RESUME_URL = import.meta.env.VITE_RESUME_URL || '';

// Define certificate categories in order
const CERT_CATEGORIES = [
  'Courses',
  'Workshops',
  'Webinars/Sessions',
  'Writing',
  'Internships',
  'Volunteering'
];

function getCertImageSrc(cert) {
  if (cert.imageUrl) return cert.imageUrl;
  if (cert.imagePath) return cert.imagePath;
  if (cert.image) return cert.image;
  return '';
}

function groupCertsByCategory(certs) {
  const grouped = {};
  CERT_CATEGORIES.forEach(cat => {
    grouped[cat] = [];
  });
  
  certs.forEach(cert => {
    const category = cert.category || 'Courses';
    if (grouped[category]) {
      grouped[category].push(cert);
    } else {
      grouped[category] = [cert];
    }
  });
  
  return grouped;
}

export default function Certifications() {
  const [certs] = useState(certificatesData);
  const groupedCerts = groupCertsByCategory(certs);

  return (
    <div className="page">

      {/* ══ HEADER ════════════════════════════════════════════ */}
      <section className="section certs-hero">
        <div className="container">
          <p className="sec-eyebrow fu">Credentials</p>
          <h1 className="sec-title fu d1">
            <em>Certifications</em>
          </h1>
          <p className="sec-sub fu d2">
            Formal credentials earned across machine learning, backend development, and cloud.
          </p>
        </div>
      </section>

      {/* ══ CERT CATEGORIES ═══════════════════════════════════ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {!certs || certs.length === 0 ? (
            <p style={{ color: 'var(--text2)' }}>No certifications added yet.</p>
          ) : (
            CERT_CATEGORIES.map((category) => {
              const categoryCerts = groupedCerts[category] || [];
              
              // Only show categories that have certificates
              if (categoryCerts.length === 0) return null;
              
              return (
                <div key={category} className="cert-category">
                  <h2 className="cert-category__title">{category}</h2>
                  <div className="certs-grid">
                    {categoryCerts.map((c, i) => {
                      const imageSrc = getCertImageSrc(c);
                      return (
                        <div
                          key={c._id || i}
                          className="cert-card card fu"
                          style={{ animationDelay: `${i * 0.07}s` }}
                        >
                          {imageSrc && (
                            <div className="cert-card__thumb">
                              <img
                                src={imageSrc}
                                alt={`${c.title} certificate`}
                                loading="lazy"
                                onError={(e) => {
                                  e.currentTarget.closest('.cert-card__thumb').style.display = 'none';
                                }}
                              />
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
                              <span className="cert-card__year">{c.year}</span>
                            </div>

                            <div className="cert-card__icon" style={{ borderColor: `${c.color}40`, background: `${c.color}10` }}>
                              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="8" r="6"/>
                                <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                              </svg>
                            </div>

                            <h3 className="cert-card__title">{c.title}</h3>
                            <p className="cert-card__issuer">{c.issuer}</p>
                            {c.desc && <p className="cert-card__desc">{c.desc}</p>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
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

    </div>
  );
}
