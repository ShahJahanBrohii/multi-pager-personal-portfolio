import { NavLink } from 'react-router-dom';
import './Footer.css';

const RESUME_URL = import.meta.env.VITE_RESUME_URL || '';

const NAV = ['/', '/about', '/portfolio', '/resume', '/certifications', '/contact'];
const LABELS = ['Home', 'About', 'Portfolio', 'Resume', 'Certifications', 'Contact'];

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/ShahJahanBrohii', target: '_blank' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/shah-jahan-abdul-latif-a00a74280', target: '_blank' },
  { label: 'Kaggle', href: 'https://www.kaggle.com/shahjahanabdullatif', target: '_blank' },
  { label: 'Email', href: 'mailto:shahjahanbrohii@gmail.com', target: '_self' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer__inner">

        <div className="footer__section footer__brand">
          <p className="footer__logo">
            <span style={{ color: 'var(--amber)' }}>[</span>
            Shah.Jahan
            <span style={{ color: 'var(--amber)' }}>]</span>
          </p>
          <p className="footer__tagline">Backend Developer & ML Enthusiast</p>
          <p className="footer__copy">© {currentYear} Shah Jahan Brohii. All rights reserved.</p>
          <p className="footer__built">Built with React & Vite</p>
        </div>

        <nav className="footer__section footer__nav">
          <h4 className="footer__section-title">Navigation</h4>
          <ul className="footer__links-list">
            {NAV.map((to, i) => (
              <li key={to}>
                <NavLink to={to} end={to === '/'} className="footer__link">
                  {LABELS[i]}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__section footer__resources">
          <h4 className="footer__section-title">Resources</h4>
          <ul className="footer__links-list">
            <li><a href="https://github.com/ShahJahanBrohii" target="_blank" rel="noreferrer" className="footer__link">GitHub ↗</a></li>
            <li><a href="https://www.kaggle.com/shahjahanabdullatif" target="_blank" rel="noreferrer" className="footer__link">Kaggle ↗</a></li>
            {RESUME_URL && <li><a href={RESUME_URL} className="footer__link">Resume</a></li>}
          </ul>
        </div>

        <div className="footer__section footer__socials-col">
          <h4 className="footer__section-title">Connect</h4>
          <div className="footer__socials">
            {LINKS.map(({ label, href, target }) => (
              <a key={label} href={href} target={target} rel={target === '_blank' ? 'noreferrer' : ''} className="footer__soc" title={label} aria-label={label}>
                {label === 'GitHub' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                )}
                {label === 'LinkedIn' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )}
                {label === 'Kaggle' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="6" y1="4" x2="6" y2="20"/>
                    <line x1="18" y1="4" x2="10" y2="12"/>
                    <line x1="18" y1="20" x2="10" y2="12"/>
                  </svg>
                )}
                {label === 'Email' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2 4 12 13 22 4"/>
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
