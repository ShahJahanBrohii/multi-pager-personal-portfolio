import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const LINKS = [
  { to: '/',            label: 'Home'           },
  { to: '/about',       label: 'About'          },
  { to: '/portfolio',   label: 'Portfolio'      },
  { to: '/resume',      label: 'Resume'         },
  { to: '/certifications', label: 'Certifications' },
  { to: '/contact',     label: 'Contact'        },
];

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/ShahJahanBrohii',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shah-jahan-abdul-latif-a00a74280',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>
      </svg>
    ),
  },
  {
    label: 'Kaggle',
    href: 'https://www.kaggle.com/shahjahanabdullatif',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 3v18M17 4l-8.5 8.5M10.5 11.5L18 20"/>
      </svg>
    ),
  },
];

export default function Navbar() {
  const [solid,  setSolid]  = useState(false);
  const [open,   setOpen]   = useState(false);
  const location = useLocation();

  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setOpen(false);
  }

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    if (!open) return undefined;

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <nav className={`nav${solid ? ' nav--solid' : ''}`}>
        <div className="container nav__row">

          {/* Logo */}
          <NavLink to="/" className="nav__logo">
            <span className="nav__logo-bracket">[</span>
            Shah<span className="nav__logo-dot">.</span>Jahan
            <span className="nav__logo-bracket">]</span>
          </NavLink>

          {/* Desktop links */}
          <ul className="nav__links">
            {LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) => `nav__link${isActive ? ' active' : ''}`}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Social CTAs */}
          <div className="nav__actions hide-sm">
            {SOCIALS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank" rel="noreferrer"
                className="nav__icon"
                title={label}
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Hamburger */}
          <button
            type="button"
            className={`nav__ham${open ? ' open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation-drawer"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-navigation-drawer"
        className={`nav__drawer${open ? ' nav__drawer--open' : ''}`}
        aria-hidden={!open}
      >
        {LINKS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => `nav__drawer-link${isActive ? ' active' : ''}`}
            onClick={() => setOpen(false)}
          >
            {label}
          </NavLink>
        ))}
        
        <div className="nav__drawer-socials">
          {SOCIALS.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank" rel="noreferrer"
              className="nav__icon"
              aria-label={label}
              onClick={() => setOpen(false)}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
      {open && <div className="nav__overlay" onClick={() => setOpen(false)} aria-hidden="true" />}
    </>
  );
}