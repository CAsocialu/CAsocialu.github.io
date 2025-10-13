import './Podpisy.css';
import { Helmet } from 'react-helmet-async';
import Step1 from "../../../images/help/signatures1.webp";
import Step2 from "../../../images/help/signatures2.webp";
import Step3 from "../../../images/help/signatures3.webp";
import Step4 from "../../../images/help/signatures4.webp";

export function PodpisyTitle() {
    return (<></>)
}
export function PodpisyNotifikace() {
    return (
        <></>
    )
}
export default function Podpisy() {
    return (
        <div id='signaturesContent'>
            <Helmet>
                <title>Sbíráme podpisy! · ČSA</title>
                <meta name="description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta property="og:title" content="Sbíráme podpisy! · ČSA" />
                <meta property="og:description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta property="og:image" content={`${process.env.PUBLIC_URL}/assets/bannerNECHCETEMIPODEPSATPETICI.png`} />
                <meta property="og:url" content="https://www.ceskastranaasocialu.cz/pomoc/podpisy" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Sbíráme podpisy! · ČSA" />
                <meta name="twitter:description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/assets/bannerNECHCETEMIPODEPSATPETICI.png`} />
            </Helmet>
            <div id="signaturesContentWrapper">
                <div id="signaturesNote">Aktuálně nám nejlépe pomůžete podepsáním petice na vznik.<br/>Níže naleznete odkaz na stažení a pokyny k jejímu vyplnění.<br/>O sběrech dáváme předem vědět na našem Twitteru a Instagramu.</div>
                <a download={true} id="petitionDL" href="/assets/Petice.pdf" target="_blank" rel="noreferrer noopener" style={{marginBottom: "12px"}} contentStyle={{background: 'var(--asocial-green-dark)', border: '2px var(--asocial-green) solid'}}>[kliknutím na tento odkaz stáhnete petici]</a>
                <div id="signaturesInstructionsWrapper">
                    <div className="signaturesInstructionWrapper">
                        <img src={Step1} alt=""/>
                        <span>Stačí kliknout akorát na tlačítko stáhnutí petice, nic na tom není, pokud jste pokazili toto, jste dementi.</span>
                    </div>
                    <div className="signaturesInstructionWrapper">
                        <img src={Step2} style={{transform: 'scale(1.25) translateY(-10px)'}} alt=""/>
                        <span>Nyní otevřete soubor PDF a dejte tisknout. Snad víte, jak se tisknout soubory, ne?</span>
                    </div>
                    <div className="signaturesInstructionWrapper">
                        <img src={Step3} alt=""/>
                        <span>Když petici vytisknete, musíte ji vyplnit (nejlépe čitelně).</span>
                        <ul>
                            <li>Do kolonky jméno napište vaše jméno. Pokud máte jména dvě, napište to první.</li>
                            <li>Do kolonky příjmení napište vaše aktuální příjmení.</li>
                            <li>Do kolonky dat. narození vyplňte vaše datum narození.</li>
                            <li>Do kolonky bydliště napište vaše trvalé bydliště, nejlépe napište ulici, číslo popisné a město.</li>
                            <li>Do kolonky podpis udělejte váš podpis.</li>
                            <li>ZAŠLETE!</li>
                        </ul>
                    </div>
                    <div className="signaturesInstructionWrapper">
                        <img src={Step4} alt=""/>
                        <span>Kontaktujte nás ohledně vyplněné petice, my vám poté dáme adresu, kam petici zaslat.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}