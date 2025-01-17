import { useEffect, useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import "./App.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import { Domov, Členové, Kontakty, Fotogalerie, Historie, ZbírkaPack, PodpisyPack, Zdroj, Pomoc } from './pages/pages.js';

export const CelebrationContext = createContext()

function App() {
  const [celebrationStatus, setCelebrationStatus] = useState({
    aceCelebration: false,
    czechoslovakIndependency: false
  });

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
      const intervalId = setInterval(() => {
        const newDate = new Date();
        // Check if the date has changed
        if (newDate.toDateString() !== currentDate.toDateString()) {
          setCurrentDate(newDate);
        }
      }, 1000);
  

      return () => clearInterval(intervalId);
  }, [currentDate]);

  useEffect(() => {
      const today = new Date(),
          lastDayOfOctober = new Date(today.getFullYear(), 9, 31),
          lastDayOfAceWeek = new Date(lastDayOfOctober.getFullYear(), 9, lastDayOfOctober.getDay() === 6 ? lastDayOfOctober.getDate() : lastDayOfOctober.getDate() - (lastDayOfOctober.getDay() + 1), 23, 59, 59, 999),
          firstDayOfAceWeek = new Date(lastDayOfAceWeek.getFullYear(), 9, lastDayOfAceWeek.getDate() - 6, 0, 0, 0, 0);
      
      setCelebrationStatus({aceCelebration: (today >= firstDayOfAceWeek && today <= lastDayOfAceWeek) || (today.getMonth() === 3 && today.getDate() === 6) || (today.getMonth() === 4 && today.getDate() === 8), czechoslovakIndependency: (today.getMonth() === 9 && today.getDate() === 28)});
  }, [currentDate])

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
      <CelebrationContext.Provider value={celebrationStatus}>
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
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
            <Footer />
          </Router>
        </div>
        </CelebrationContext.Provider>
      </HelmetProvider>
  );
}

export default App;
