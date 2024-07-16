import React from 'react';
import "./Footer.css"
import logoWhite from "../../images/logo-white.png"

export default function Footer() {
    return (
        <div id="footer">
            <span>© Česká Strana Asociálů 2024</span>
            <img alt='Logo České Strany Asociálů' src={logoWhite} id='footerLogo'></img>
        </div>
    )
}