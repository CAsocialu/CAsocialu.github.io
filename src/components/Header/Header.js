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
        document.documentElement.setAttribute('data-location', location.pathname.replace(/(?<!^)\/$/, ''));

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
        <>
            <Link to="/sraz2025">
                <div id="extraHeaderNews" data-target-path="/sraz2025">
                    !!! INFORMACE K ČSA SRAZU !!!
                </div>
            </Link>
            <div id="header" className={`headerWithExtraNews${celebrationStatus.aceCelebration ? ' ace' : ''}`}>
                <span>
                    <span>česká strana asociálů</span>
                    <input type="checkbox" id="headerMenuTrigger" ref={headerMenuTriggerRef} />
                    <label className='material-symbols-outlined' htmlFor="headerMenuTrigger">menu</label>
                </span>
                <div id="headerLinks" ref={headerLinksRef}>
                    <Link to="/" onClick={() => headerMenuTriggerRef.current.checked = false}>co je to ČSA?</Link>
                    <Link to="/sraz2025" onClick={() => headerMenuTriggerRef.current.checked = false}>ČSA Sraz 2025</Link>
                    <Link to="clenove" onClick={() => headerMenuTriggerRef.current.checked = false}>členové</Link>
                    <Link to="program" onClick={() => headerMenuTriggerRef.current.checked = false}>program</Link>
                    <Link to="kontakty" onClick={() => headerMenuTriggerRef.current.checked = false}>kontakt</Link>
                    <Link to="historie" onClick={() => headerMenuTriggerRef.current.checked = false}>historie</Link>
                    <a href="/pravo" target="_blank" onClick={() => headerMenuTriggerRef.current.checked = false} className={process.env.NODE_ENV === "production" ? "" : "disabled"}>právo</a>
                    <Link to="pomoc" onClick={() => headerMenuTriggerRef.current.checked = false}>chci pomoci</Link>
                </div>
            </div>
        </>
    )
}