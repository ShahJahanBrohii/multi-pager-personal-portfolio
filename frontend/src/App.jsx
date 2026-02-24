import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar  from './components/Navbar';
import Home from './pages/Home';

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
        
      </Routes>

    </BrowserRouter>
  );
}
