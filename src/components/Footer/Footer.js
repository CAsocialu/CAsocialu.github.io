import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"
import logoWhite from "../../images/logo-white.png"

export default function Footer() {
    useLayoutEffect(() => {
        const linkUniSans = document.createElement('link');
        linkUniSans.rel = 'stylesheet';
        linkUniSans.href = 'https://deadcode.is-a.dev/fonts/Uni%20Sans/stylesheet.css';
      
        const linkMontserrat = document.createElement('link');
        linkMontserrat.rel = 'stylesheet';
        linkMontserrat.href = 'https://deadcode.is-a.dev/fonts/Montserrat/stylesheet.css';
      
        document.head.appendChild(linkUniSans);
        document.head.appendChild(linkMontserrat);
      
        // Optional: Cleanup when the component unmounts
        return () => {
          document.head.removeChild(linkUniSans);
          document.head.removeChild(linkMontserrat);
        };
      }, []);
    return (
        <div id="footer">
            <div id='footerInfo'>
                <span>© Česká Strana Asociálů 2024<span id="footerDevInfo"> · Vyvinuto a udržováno Richardem z týmu <a id='footerDevInfoDEADCODELogo' href='https://deadcode.is-a.dev' target='_blank' rel='noreferrer'>DEADCODE</a> uwu</span></span>
                <span>Tento web je open-source! Více najdete na <Link to="source">našem GitHubu</Link>  :3</span>
            </div>
            <img alt='Logo České Strany Asociálů' src={logoWhite} id='footerLogo' draggable="false" />
        </div>
    )
}