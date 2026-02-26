import { TIMELINE, STACK } from '../assets/data';
import './About.css';

export default function About() {
  return (
    <div className="page">

      {/* ══ HEADER ════════════════════════════════════════════ */}
      <section className="section about-hero">
        <div className="container">
          <p className="sec-eyebrow fu">About</p>
          <h1 className="sec-title fu d1">The <em>Story</em> So Far</h1>
          <p className="sec-sub fu d2">
            A curious CS student turning mathematical intuition into real-world software —
            one API and one model at a time.
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
            <p className="about-role">Backend Developer & ML Enthusiast</p>

            <div className="about-body">
              <p>
                I'm a Computer Science undergraduate at <strong>Sukkur IBA University</strong>,
                Pakistan, with a CGPA of <strong>3.27 / 4.0</strong>. I'm deeply passionate about
                two disciplines that turn out to share a lot of DNA: building robust backend systems
                and training deep learning models.
              </p>
              <p>
                My path started with simple HTML pages, evolved through the full MERN stack, and is
                now converging on a specialization in <strong>deep learning</strong> — CNNs, LSTMs,
                and NLP. I believe great backend code and great ML pipelines share the same values:
                clean abstractions, measurable outputs, and an obsession with correctness.
              </p>
              <p>
                When I'm not writing code I'm reading papers, experimenting on Kaggle, or building
                something I can show people. I'm actively looking for internship opportunities where I
                can contribute to real products and grow fast.
              </p>
            </div>

            <div className="about-meta">
              {[
                ['Location',    'Sukkur, Sindh, PK'],
                ['University',  'Sukkur IBA University'],
                ['Focus',       'Backend · Deep Learning'],
                ['CGPA',        '3.27 / 4.0'],
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
              { icon: '⚡', title: 'Performance First',    body: 'Optimised queries, caching strategies, and lean inference — speed is a feature, not an afterthought.' },
              { icon: '🧠', title: 'Data-Driven Decisions', body: 'Every architectural decision backed by measurement. Build, benchmark, iterate.' },
              { icon: '🔒', title: 'Security by Default',  body: 'Auth, rate limiting, validation — baked in from day one, not retrofitted later.' },
              { icon: '📐', title: 'Clean Architecture',   body: 'SOLID principles and separation of concerns. Code that reads like intentional prose.' },
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
            {[...STACK, ...STACK].map((s, i) => (
              <span key={i} className="marquee-item">{s}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ══ TIMELINE ══════════════════════════════════════════ */}
      <section className="section about-timeline">
        <div className="container">
          <p className="sec-eyebrow">Journey</p>
          <h2 className="sec-title">ML <em>Timeline</em></h2>
          <p className="sec-sub" style={{ marginBottom: 60 }}>
            From HTML basics to neural networks — the milestones that shaped me as a developer.
          </p>

          <div className="timeline">
            <div className="timeline__spine" />
            {TIMELINE.map((item, i) => (
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

    </div>
  );
}
