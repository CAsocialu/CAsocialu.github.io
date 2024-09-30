import { useEffect } from "react";
import './Zdroj.css'
export default function Zdroj() {
    useEffect(() => {
        // Set a 3-second delay before redirecting
        const timer = setTimeout(() => {
            document.querySelector("body").innerHTML = `<img id="číčaspí" src="/číčaspí.png" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; z-index: 99999;">`
            setTimeout(() => {
                window.location.replace('https://github.com/CAsocialu/CAsocialu.github.io');
            }, 500);
        }, 1000);

        return () => clearTimeout(timer); // Clean up the timer if the component unmounts
    }, []);

    return (
        <div id="sourceContent">
            <h1>Dejte nám sekundu :3</h1>
            <p>Sisina tvrdě spí, a JavaScript pracuje na tom, aby ste se dostali na náš GitHub.</p>
        </div>
    );
}