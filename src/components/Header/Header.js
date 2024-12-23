import { useEffect, useLayoutEffect, useContext, useRef } from 'react';
import "./Header.css"
import { Link, useLocation } from 'react-router-dom';
import { CelebrationContext } from '../../App';

export default function Header() {
    const location = useLocation(),
        celebrationStatus = useContext(CelebrationContext),
        headerMenuTriggerRef = useRef(null),
        headerLinksRef = useRef(null);
    
    useLayoutEffect(() => {  
        document.documentElement.setAttribute('data-location',  location.pathname.replace(/(?<!^)\/$/, ''));
        
        headerLinksRef.current?.querySelectorAll('a').forEach(link => {
            if (
                (link.getAttribute('href') === "/" && document.documentElement.getAttribute('data-location') === "/")
                ||
                (document.documentElement.getAttribute('data-location') !== "/" && link.getAttribute('href') !== "/" && document.documentElement.getAttribute('data-location').startsWith(link.getAttribute('href')))
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
          });
    }, [location]);

    useEffect(() => {
        function handleClickOutside(e) {
            const contentDiv = e.target.localName === 'div' && e.target.id === 'content';

            if (headerMenuTriggerRef.current.checked && contentDiv) {
                headerMenuTriggerRef.current.checked = false;
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
                <input type="checkbox" id="headerMenuTrigger" ref={headerMenuTriggerRef} />
                <label className='material-symbols-outlined' htmlFor="headerMenuTrigger">menu</label>
            </span>
            <div id="headerLinks" ref={headerLinksRef}>
                <Link to="/" onClick={() => headerMenuTriggerRef.current.checked = false}>Co je ČSA?</Link>
                <Link to="clenove" onClick={() => headerMenuTriggerRef.current.checked = false}>Členové</Link>
                <Link to="kontakty" onClick={() => headerMenuTriggerRef.current.checked = false}><em>Fuj, </em>Kontakt</Link>
                <Link to="historie" onClick={() => headerMenuTriggerRef.current.checked = false}>Historie</Link>
                <a href="/pravo" target="_blank" onClick={() => headerMenuTriggerRef.current.checked = false} className={process.env.NODE_ENV === "production" ? "" : "disabled"}>Právo</a>

                <Link to="pomoc" onClick={() => headerMenuTriggerRef.current.checked = false}>Chci pomoci</Link>
            </div>
        </div>
    )
}