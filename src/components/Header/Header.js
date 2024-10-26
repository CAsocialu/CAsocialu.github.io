import { useState, useEffect } from 'react';
import "./Header.css"
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
          const newDate = new Date();
          // Check if the date has changed
          if (newDate.toDateString() !== currentDate.toDateString()) {
            setCurrentDate(newDate);
          }
        }, 1000);
    

        return () => clearInterval(intervalId);
      }, [currentDate]);
    

    useEffect(() => {
        const htmlElement = document.documentElement;
  
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

    const [isAceCelebration, setIsAceCelebration] = useState(false);

    useEffect(() => {
        const today = new Date(),
            lastDayOfOctober = new Date(today.getFullYear(), 9, 31),
            lastDayOfAceWeek = new Date(lastDayOfOctober.getFullYear(), 9, lastDayOfOctober.getDay() === 6 ? lastDayOfOctober.getDate() : lastDayOfOctober.getDate() - (lastDayOfOctober.getDay() + 1), 23, 59, 59, 999),
            firstDayOfAceWeek = new Date(lastDayOfAceWeek.getFullYear(), 9, lastDayOfAceWeek.getDate() - 6, 0, 0, 0, 0);
        
        if (today >= firstDayOfAceWeek && today <= lastDayOfAceWeek) {
            setIsAceCelebration(true);
        } else if (today.getMonth() === 3 && today.getDate() === 6) {
            setIsAceCelebration(true)
        } else {
            setIsAceCelebration(false);
        }
    }, [currentDate])

    return (
        <div id="header" className={isAceCelebration ? 'ace' : ''}>
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