import { useEffect, useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import "./App.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import { Domov, Členové, Kontakty, Fotogalerie, Historie, ZbírkaPack, PodpisyPack, Zdroj, Pomoc, Program } from './pages/pages.js';

function App() {
  document.documentElement.style.setProperty('--scroll-level', '0px');
  useEffect(() => {
    const handleScroll = () => {
      const scrollLevel = window.scrollY;
      document.documentElement.style.setProperty('--scroll-level', `${scrollLevel}px`);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <HelmetProvider>
      <div id="App">
        <Router basename='/'>
          <Header />
          <div id='content'>
            <Routes>
              <Route path="/" element={<Domov />} />
              <Route path="clenove" element={<Členové />} />
              <Route path="kontakty" element={<Kontakty />} />
              <Route path="historie" element={<Historie />} />
              <Route path="foto" element={<Fotogalerie />} />
              <Route path="pomoc" element={<Pomoc />} />
              <Route path="pomoc/zbirka" element={<Pomoc page={ZbírkaPack} />} />
              <Route path="pomoc/podpisy" element={<Pomoc page={PodpisyPack} />} />
              <Route path='source' element={<Zdroj />} />
              <Route path="program" element={<Program />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;
