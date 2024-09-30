import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import { Domov, Členové, Kontakty, Fotogalerie, Historie, Pomoc, Zdroj } from './pages/pages.js';

function App() {
  return (
    <div id="App">
      <Router basename='/'>
        <Header />
        <div id='content'>
        <Routes>
          <Route path="/" element={ <Domov /> } />
          <Route path="clenove" element={ <Členové /> } />
          <Route path="kontakty" element={ <Kontakty /> } />
          <Route path="foto" element={ <Fotogalerie /> } />
          <Route path="historie" element={ <Historie /> } />
          <Route path="pomoc" element={ <Pomoc /> } />
          <Route path='source' element={ <Zdroj /> } />
          <Route path="*" element={ <Navigate to="/" replace /> } />
          </Routes>
          </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
