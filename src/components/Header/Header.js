import { useLayoutEffect, useRef, useEffect } from 'react';
import "./Header.css"
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation(),
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
        if (localStorage.getItem("isDark") === "true") {
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("isDark", document.documentElement.classList.contains("dark"));
    };

    return (
        <>
            <div id="header">
                <div id="headerLinks" ref={headerLinksRef}>
                    <Link to="/">o straně</Link>
                    <Link to="clenove">členové</Link>
                    <Link to="pomoc">chci být součástí</Link>
                    <Link to="program">program</Link>
                </div>
                <button className="material-symbols-outlined" onClick={toggleTheme}> dark_mode
                    </button>
            </div>
        </>
    )
}