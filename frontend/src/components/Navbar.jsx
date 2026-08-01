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

export default function Navbar() {
  const [solid,  setSolid]  = useState(false);
  const [open,   setOpen]   = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

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
          <div className="nav__actions hide-sm" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <a
              href="https://github.com/ShahJahanBrohii"
              target="_blank" rel="noreferrer"
              className="btn btn-amber nav__cta"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/shah-jahan-abdul-latif-a00a74280"
              target="_blank" rel="noreferrer"
              className="btn btn-blue nav__cta" 
              style={{ backgroundColor: '#0077b5', color: 'white' }}
            >
              LinkedIn ↗
            </a>
            <a
              href="https://www.kaggle.com/shahjahanabdullatif"
              target="_blank" rel="noreferrer"
              className="btn btn-outline nav__cta"
            >
              Kaggle ↗
            </a>
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
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px' }}>
            <a
              href="https://github.com/ShahJahanBrohii"
              target="_blank" rel="noreferrer"
              className="btn btn-amber"
              onClick={() => setOpen(false)}
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/shah-jahan-abdul-latif-a00a74280"
              target="_blank" rel="noreferrer"
              className="btn"
              style={{ backgroundColor: '#0077b5', color: 'white', textAlign: 'center' }}
              onClick={() => setOpen(false)}
            >
              LinkedIn ↗
            </a>
            <a
              href="https://www.kaggle.com/shahjahanabdullatif"
              target="_blank" rel="noreferrer"
              className="btn btn-outline"
              onClick={() => setOpen(false)}
            >
              Kaggle ↗
            </a>
        </div>
      </div>
      {open && <div className="nav__overlay" onClick={() => setOpen(false)} aria-hidden="true" />}
    </>
  );
}