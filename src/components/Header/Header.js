import { useLayoutEffect, useRef } from 'react';
import "./Header.css"
import { Link, useLocation } from 'react-router-dom';
// import { CelebrationContext } from '../../App';

export default function Header() {
    const location = useLocation(),
        // celebrationStatus = useContext(CelebrationContext),
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

    return (
        <>
            {/*
                <Link to="/sraz2025">
                    <div id="extraHeaderNews" data-target-path="/sraz2025">
                        !!! INFORMACE K ČSA SRAZU !!!
                    </div>
                </Link>
            */}
            <div id="header" className={`${/*headerWithExtraNews*/ ""}${/*celebrationStatus.aceCelebration*/ false ? ' ace' : ''}`}>
                <div id="headerLinks" ref={headerLinksRef}>
                    <Link to="/">o straně</Link>
                    {/* <Link to="/sraz2025" onClick={() => headerMenuTriggerRef.current.checked = false}>ČSA Sraz 2025</Link> */}
                    <Link to="clenove">členové</Link>
                    <Link to="pomoc">chci pomoci</Link>
                    <Link to="program">program</Link>
                    {/* <Link to="kontakty" onClick={() => headerMenuTriggerRef.current.checked = false}>kontakt</Link> */}
                    {/* <Link to="historie" onClick={() => headerMenuTriggerRef.current.checked = false}>historie</Link> */}
                    {/* <a href="/pravo" target="_blank" onClick={() => headerMenuTriggerRef.current.checked = false} className={process.env.NODE_ENV === "production" ? "" : "disabled"}>právo</a> */}
                </div>
            </div>
        </>
    )
}