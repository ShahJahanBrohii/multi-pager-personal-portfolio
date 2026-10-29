import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import TechMarquee from '../components/TechMarquee';
import HeroConsole from '../components/HeroConsole';
import { projectsData } from '../data/projects';
import { contentOverviewData } from '../data/content';
import './Home.css';

const RESUME_URL = import.meta.env.VITE_RESUME_URL || '';

/* ── Typewriter hook — fixed deps array so effect re-runs only when words change ── */
function useTypewriter(words, speed = 78, pause = 2100) {
  const [text,  setText]  = useState('');
  const [wIdx,  setWIdx]  = useState(0);
  const [cIdx,  setCIdx]  = useState(0);
  const [del,   setDel]   = useState(false);

  const tick = useCallback(() => {
    if (!words.length) return;
    const cur = words[wIdx];
    if (!del) {
      const next = cur.slice(0, cIdx + 1);
      setText(next);
      if (cIdx + 1 === cur.length) {
        setTimeout(() => setDel(true), pause);
      } else {
        setCIdx((c) => c + 1);
      }
    } else {
      const next = cur.slice(0, cIdx - 1);
      setText(next);
      if (cIdx - 1 === 0) {
        setDel(false);
        setWIdx((i) => (i + 1) % words.length);
        setCIdx(0);
      } else {
        setCIdx((c) => c - 1);
      }
    }
  }, [words, wIdx, cIdx, del, pause]);

  useEffect(() => {
    const ms = del ? speed * 0.5 : speed;
    const id = setTimeout(tick, ms);
    return () => clearTimeout(id);
  }, [tick, speed, del]);

  return text;
}

export default function Home() {
  // Static data — no useState needed, these never change
  const projects = projectsData;
  const content  = contentOverviewData;

  const words = content?.heroRoles?.length ? content.heroRoles : ['Backend Developer', 'ML Enthusiast'];
  const typed = useTypewriter(words);
  const top3  = projects.slice(0, 3);
  const stats = [
    { v: String(content?.stats?.projects     || 0), l: 'Projects'     },
    { v: String(content?.stats?.certificates || 0), l: 'Certificates' },
    { v: String(content?.stats?.tags         || 0), l: 'Domains'      },
    { v: String(content?.stats?.technologies || 0), l: 'Technologies' },
  ];

  return (
    <div className="page">

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="hero">
        {/* glow blobs */}
        <div className="hero__blob hero__blob--a" />
        <div className="hero__blob hero__blob--b" />

        <div className="hero__grid-bg" aria-hidden="true" />

        <div className="container hero__layout">
        <div className="hero__inner">
          {/* status pill */}
          <div className="hero__pill fu d1">
            <span className="hero__pill-dot" />
            Junior AI Engineer @ Reactive Space
          </div>

          {/* name */}
          <h1 className="hero__name fu d2">
            Shah Jahan<br />
          </h1>

          {/* typewriter */}
          <p className="hero__typed fu d3">
            <span className="hero__prefix">// </span>
            <span>{typed}</span>
            <span className="hero__cursor">|</span>
          </p>

          {/* bio */}
          <p className="hero__bio fu d4">
            Computer Science graduate and Junior AI Engineer building real-time speech AI: speech recognition,
            voice activity detection, and text-to-speech, alongside computer vision and deep learning work. Featuring <strong>{content?.stats?.projects || 0} projects</strong>
            {' '}and <strong>{content?.stats?.certificates || 0} certifications</strong>.
          </p>

          {/* cta row */}
          <div className="hero__cta fu d5">
            <Link to="/portfolio" className="btn btn-primary">
              View Projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
            {RESUME_URL && (
              <a href={RESUME_URL} download className="btn btn-ghost hide-xs">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Resume
              </a>
            )}
          </div>

          {/* stats */}
          <div className="hero__stats fu d5">
            {stats.map(({ v, l }) => (
              <div key={l} className="hero__stat">
                <span className="hero__stat-v">{v}</span>
                <span className="hero__stat-l">{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual fu d4">
          <HeroConsole />
        </div>
        </div>

        {/* scroll hint */}
        <div className="hero__scroll" aria-hidden="true">
          <div className="hero__scroll-bar" />
          <span>scroll</span>
        </div>
      </section>

      {/* ══ TECH MARQUEE ══════════════════════════════════════ */}
      <TechMarquee stack={content?.stack || []} />

      {/* ══ FEATURED PROJECTS ════════════════════════════════════ */}
      <section className="section home-projects">
        <div className="container">
          <div className="home-projects__hd">
            <div>
              <p className="sec-eyebrow">Featured Work</p>
              <h2 className="sec-title">Top <em>Projects</em></h2>
              <p className="sec-sub">Hand-picked highlights from machine learning pipelines and production backends.</p>
            </div>
            <Link to="/portfolio" className="btn btn-outline hp__all hide-sm">
              View All
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>

          <div className="home-projects__grid">
            {top3.map(p => (
              <ProjectCard key={p.id} project={p} featured />
            ))}
          </div>

          <div className="home-projects__mob-cta">
            <Link to="/portfolio" className="btn btn-outline">View All Projects →</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
