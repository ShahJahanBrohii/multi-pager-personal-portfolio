import { useEffect, useState } from 'react';
import { getContentOverview } from '../api/client';
import './About.css';

export default function About() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    let mounted = true;
    getContentOverview()
      .then((res) => {
        if (mounted) setContent(res.data || null);
      })
      .catch(() => {
        if (mounted) setContent(null);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const topTags = content?.highlights?.topTags || [];
  const topIssuers = content?.highlights?.issuers || [];
  const stack = content?.stack || [];
  const timeline = content?.timeline || [];

  return (
    <div className="page">

      {/* ══ HEADER ════════════════════════════════════════════ */}
      <section className="section about-hero">
        <div className="container">
          <p className="sec-eyebrow fu">About</p>
          <h1 className="sec-title fu d1">The <em>Story</em> So Far</h1>
          <p className="sec-sub fu d2">
            This page now reflects live backend data for skills, tags, certifications, and timeline milestones.
          </p>
        </div>
      </section>

      {/* ══ BIO + PHILOSOPHY ══════════════════════════════════ */}
      <section className="section about-main" style={{ paddingTop: 0 }}>
        <div className="container about-main__grid">

          {/* left */}
          <div className="about-bio">
            <div className="about-avatar">
              <div className="about-avatar__ring" />
              <div className="about-avatar__inner">SJB</div>
            </div>

            <h2 className="about-name">Shah Jahan </h2>
            <p className="about-role">{content?.heroRoles?.[0] || 'Backend Developer'}</p>

            <div className="about-body">
              <p>
                This portfolio is powered by a live backend API. It currently tracks
                <strong> {content?.stats?.projects || 0} projects</strong> and
                <strong> {content?.stats?.certificates || 0} certifications</strong>.
              </p>
              <p>
                Top domains from the database include
                <strong> {topTags.length ? topTags.join(', ') : 'no tags yet'}</strong>, with
                <strong> {content?.stats?.technologies || 0} technologies</strong> mapped from
                project records.
              </p>
              <p>
                As new projects and certificates are created in the backend, this page updates
                automatically without editing frontend arrays.
              </p>
            </div>

            <div className="about-meta">
              {[
                ['Projects', String(content?.stats?.projects || 0)],
                ['Certificates', String(content?.stats?.certificates || 0)],
                ['Domains', String(content?.stats?.tags || 0)],
                ['Technologies', String(content?.stats?.technologies || 0)],
              ].map(([k, v]) => (
                <div key={k} className="about-meta__row">
                  <span className="about-meta__key">{k}</span>
                  <span className="about-meta__val">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* right */}
          <div className="about-philo">
            {[
              { icon: '⚡', title: 'Top Domains', body: topTags.length ? topTags.join(', ') : 'No domains available yet.' },
              { icon: '🧠', title: 'Tech Coverage', body: stack.length ? `${stack.slice(0, 8).join(', ')}${stack.length > 8 ? '...' : ''}` : 'No technologies available yet.' },
              { icon: '🔒', title: 'Credential Sources', body: topIssuers.length ? topIssuers.slice(0, 3).join(', ') : 'No certification issuers available yet.' },
              { icon: '📐', title: 'Live Data Mode', body: 'Projects, certifications, skills, and timeline are now backend-driven in real time.' },
            ].map(({ icon, title, body }) => (
              <div key={title} className="philo-card card">
                <span className="philo-icon">{icon}</span>
                <div>
                  <h4 className="philo-title">{title}</h4>
                  <p className="philo-body">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TECH MARQUEE ══════════════════════════════════════ */}
      <div className="about-marquee">
        <p className="sec-eyebrow" style={{ justifyContent: 'center', marginBottom: 16 }}>Tech Stack</p>
        <div className="about-marquee__track">
          <div className="about-marquee__inner">
            {[...stack, ...stack].map((s, i) => (
              <span key={i} className="marquee-item">{s}</span>
            ))}
            {stack.length === 0 && <span className="marquee-item">No technologies available yet</span>}
          </div>
        </div>
      </div>

      {/* ══ TIMELINE ══════════════════════════════════════════ */}
      <section className="section about-timeline">
        <div className="container">
          <p className="sec-eyebrow">Journey</p>
          <h2 className="sec-title">ML <em>Timeline</em></h2>
          <p className="sec-sub" style={{ marginBottom: 60 }}>
            A live timeline generated from recent projects and certifications in MongoDB.
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
            {timeline.length === 0 && <p style={{ color: 'var(--text2)' }}>No timeline data available yet.</p>}
          </div>
        </div>
      </section>

    </div>
  );
}
