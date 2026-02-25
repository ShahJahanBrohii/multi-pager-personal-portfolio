import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar  from './components/Navbar';
import Home from './pages/Home';
import About   from './pages/About';
import Portfolio      from './pages/Portfolio';
import Resume from './pages/Resume'
import Certifications from './pages/Certifications';
import Contact        from './pages/Contact';
import Footer  from './components/Footer';

/* Scroll to top on every route change */
function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
       <Navbar />

       <Routes>
        <Route path="/"               element={<Home />}           />
        <Route path="/about"          element={<About />}        />
        <Route path="/portfolio"      element={<Portfolio />}      />
        <Route path="/resume"         element={<Resume />}         />
                <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact"        element={<Contact />}        />
        <Route path="*" element={
          <div style={{
            minHeight:'100vh', display:'flex', flexDirection:'column',
            alignItems:'center', justifyContent:'center',
            gap:'18px', paddingTop:'var(--nav-h)'
          }}>
            <p style={{ fontFamily:'var(--font-head)', fontSize:'80px', color:'var(--amber)', lineHeight:1 }}>404</p>
            <p style={{ color:'var(--text2)' }}>Page not found.</p>
            <a href="/" className="btn btn-outline">← Back Home</a>
          </div>
        } />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}
