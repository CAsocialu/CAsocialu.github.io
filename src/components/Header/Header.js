import { useEffect, useContext } from 'react';
import "./Header.css"
import { Link, useLocation } from 'react-router-dom';
import { CelebrationContext } from '../../App';

export default function Header() {
    const location = useLocation();
    const celebrationStatus = useContext(CelebrationContext)
    
    useEffect(() => {
        const htmlElement = document.documentElement;
  
        htmlElement.setAttribute('data-location',  location.pathname.replace(/(?<!^)\/$/, ''));
        
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
        <div id="header" className={celebrationStatus.aceCelebration ? 'ace' : ''}>
            <span>
                <span>Česká Strana Asociálů</span>
                <input type="checkbox" id="headerMenuTrigger" />
                <label className='material-symbols-outlined' htmlFor="headerMenuTrigger">menu</label>
            </span>
            <div id="headerLinks">
                <Link to="/" onClick={() => document.querySelector("div#header input#headerMenuTrigger").checked = false}>Co je ČSA?</Link>
                <Link to="clenove" onClick={() => document.querySelector("div#header input#headerMenuTrigger").checked = false}>Členové</Link>
                <Link to="kontakty" onClick={() => document.querySelector("div#header input#headerMenuTrigger").checked = false}><em>Fuj, </em>Kontakt</Link>
                <Link to="foto" className='disabled' onClick={() => document.querySelector("div#header input#headerMenuTrigger").checked = false}>Fotogalerie</Link>
                <Link to="historie" onClick={() => document.querySelector("div#header input#headerMenuTrigger").checked = false}>Historie</Link>
                <Link to="pomoc" onClick={() => document.querySelector("div#header input#headerMenuTrigger").checked = false}>Chci pomoci</Link>
            </div>
        </div>
    )
}