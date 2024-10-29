import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import './Zdroj.css';
import Title from "../../components/Title/Title";

export default function Zdroj() {
    useEffect(() => {
        // Set a 3-second delay before redirecting
        const timer = setTimeout(() => {
            document.querySelector("body").innerHTML = `<img id="číčaspí" src="/číčaspí.png" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; z-index: 99999;" draggable="false">`
            setTimeout(() => {
                window.location.replace('https://github.com/CAsocialu/CAsocialu.github.io');
            }, 500);
        }, 1000);

        return () => clearTimeout(timer); // Clean up the timer if the component unmounts
    }, []);

    return (
        <div id="sourceContent">
            <Helmet>
                <title>Zdroj · ČSA</title>
                <meta name="description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta property="og:title" content="Zdroj · ČSA" />
                <meta property="og:description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta property="og:image" content="/assets/banner.png" />
                <meta property="og:url" content="https://www.ceskastranaasocialu.cz/#/path" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Zdroj · ČSA" />
                <meta name="twitter:description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta name="twitter:image" content="/assets/banner.png" />
            </Helmet>
            <Title>Dejte nám sekundu :3</Title>
            <p>Sisina tvrdě spí, a JavaScript pracuje na tom, aby ste se dostali na náš GitHub.</p>
        </div>
    );
}