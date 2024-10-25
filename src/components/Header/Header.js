import { useEffect } from 'react';
import "./Header.css"
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();

    useEffect(() => {
        // Get the <html> element
        const htmlElement = document.documentElement;
  
        // Update the data-location attribute with the current pathname
        htmlElement.setAttribute('data-location', "#" + location.pathname);
        
        document.querySelector("div#header").querySelectorAll('a').forEach(link => {
            if (link.getAttribute('href') === document.documentElement.getAttribute('data-location')) {
              link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
          });
    }, [location]);

    useEffect(() => {
        function handleClickOutside(e) {
            const headerMenuTrigger = document.querySelector('input#headerMenuTrigger');
            const contentDiv = e.target.localName === 'div' && e.target.id === 'content';

            if (headerMenuTrigger?.checked && contentDiv) {
                headerMenuTrigger.checked = false;
            }
        }
    
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    return (
        <div id="header">
            <span>
                <span>Česká Strana Asociálů</span>
                <input type="checkbox" id="headerMenuTrigger" />
                <label className='material-symbols-outlined' htmlFor="headerMenuTrigger">menu</label>
            </span>
            <div id="headerLinks">
                <Link to="/" onClick={() => document.querySelector("div#header input#headerMenuTrigger").checked = false}>Co je ČSA?</Link>
                <Link to="clenove">Členové</Link>
                <Link to="kontakty"><em>Fuj, </em>Kontakt</Link>
                <Link to="foto" className='disabled'>Fotogalerie</Link>
                <Link to="historie">Historie</Link>
                <Link to="pomoc">Chci pomoci</Link>
            </div>
        </div>
    )
}