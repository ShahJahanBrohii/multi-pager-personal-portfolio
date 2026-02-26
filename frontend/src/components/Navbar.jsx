import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
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

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

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
          <div className="nav__actions hide-sm" style={{ display: 'flex', gap: '10px' }}>
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
          </div>

          {/* Hamburger */}
          <button
            className={`nav__ham${open ? ' open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav__drawer${open ? ' nav__drawer--open' : ''}`}>
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
        </div>
      </div>
      {open && <div className="nav__overlay" onClick={() => setOpen(false)} />}
    </>
  );
}