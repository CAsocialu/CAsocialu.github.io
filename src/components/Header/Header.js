import { useLayoutEffect, useRef, useEffect, useState } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation(),
        headerLinksRef = useRef(null);

    const [themeMode, setThemeMode] = useState(() => {
        return localStorage.getItem("themeMode") || "default";
    });

    useLayoutEffect(() => {
        document.documentElement.setAttribute("data-location", location.pathname.replace(/(?<!^)\/$/, ""));
        headerLinksRef.current?.querySelectorAll("a").forEach((link) => {
            if ((link.getAttribute("href") === "/" && document.documentElement.getAttribute("data-location") === "/") || (document.documentElement.getAttribute("data-location") !== "/" && link.getAttribute("href") !== "/" && document.documentElement.getAttribute("data-location").startsWith(link.getAttribute("href")))) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }, [location]);

    useEffect(() => {
        if (themeMode === "dark") {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        } else if (themeMode === "light") {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
        } else {
            // default
            document.documentElement.classList.remove("dark", "light");
        }
        localStorage.setItem("themeMode", themeMode);
    }, [themeMode]);

    return (
        <div id="header">
            <div className="tlačítka">
                <button type="button" aria-label="Set theme to default" title="Set theme to default" className={`theme-default ${themeMode === "default" ? "active" : ""}`} onClick={() => setThemeMode("default")}></button>
                <button type="button" aria-label="Set theme to light" title="Set theme to light" className={`theme-light ${themeMode === "light" ? "active" : ""}`} onClick={() => setThemeMode("light")}></button>
                <button type="button" aria-label="Set theme to dark" title="Set theme to dark" className={`theme-dark ${themeMode === "dark" ? "active" : ""}`} onClick={() => setThemeMode("dark")}></button>
            </div>
            <div id="headerLinks" ref={headerLinksRef}>
                <Link to="/">o straně</Link>
                <Link to="clenove">členové</Link>
                <Link to="pomoc">chci být součástí</Link>
                <Link to="program">program</Link>
            </div>
        </div>
    );
}
