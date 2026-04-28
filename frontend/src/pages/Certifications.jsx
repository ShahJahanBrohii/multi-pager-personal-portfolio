import { useEffect, useState } from 'react';
import { API_ORIGIN, getCertificates } from '../api/client';
import './Certifications.css';
const RESUME_URL = import.meta.env.VITE_RESUME_URL || '';

function getCertImageSrc(cert) {
  if (cert.imageUrl) return cert.imageUrl;
  if (cert.image) return cert.image;
  if (cert.imagePath) {
    const cleanPath = String(cert.imagePath).replace(/^\/+/, '');
    return `${API_ORIGIN}/${cleanPath}`;
  }
  return '';
}

export default function Certifications() {
  const [certs, setCerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    getCertificates()
      .then((res) => {
        if (mounted) setCerts(res.data || []);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

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

      {/* ══ CERT GRID ═════════════════════════════════════════ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="certs-grid">
            {loading && <p style={{ color: 'var(--text2)' }}>Loading certifications...</p>}
            {certs.map((c, i) => {
              const imageSrc = getCertImageSrc(c);
              return (
                <div
                  key={c._id || i}
                  className="cert-card card fu"
                  style={{ animationDelay: `${i * 0.07}s` }}
                >
                  {imageSrc ? (
                    <img src={imageSrc} alt={c.title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                  ) : (
                    <>
                      {/* left accent */}
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
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

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
