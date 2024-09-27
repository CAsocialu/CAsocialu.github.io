import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
// eslint-disable-next-line no-unused-vars
import { Domov, Členové, Kontakty, Fotogalerie, Historie, Pomoc } from './pages/pages.js'

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
      {/* <Route path="foto" element={ <Fotogalerie /> } /> */}
          <Route path="historie" element={ <Historie /> } />
      {/* <Route path="pomoc" element={ <Pomoc /> } />      */}
          <Route path="*" element={ <Navigate to="/" replace /> } />
          </Routes>
          </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
