import { useEffect } from 'react';
import "./Header.css"
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();

    useEffect(() => {
        // Get the <html> element
        const htmlElement = document.documentElement;
  
        // Update the data-location attribute with the current pathname
        htmlElement.setAttribute('data-location', location.pathname);
        
        document.querySelector("div#header").querySelectorAll('a').forEach(link => {
            if (link.getAttribute('href') === document.documentElement.getAttribute('data-location')) {
              link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
          });
    }, [location]);
    return (
        <div id="header">
            <span>Česká Strana Asociálů</span>
            <div id="headerLinks">
                <Link to="/">Co je ČSA?</Link>
                <Link to="clenove" className='disabled'>Členové</Link>
                <Link to="kontakty"><em>Fuj, </em>Kontakt</Link>
                <Link to="foto" className='disabled'>Fotogalerie</Link>
                <Link to="historie">Historie</Link>
                <Link to="pomoc" className='disabled'>Chci pomoci</Link>
            </div>
        </div>
    )
}