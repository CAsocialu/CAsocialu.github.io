import Title from '../../../components/Title/Title';
import './Vznikáme.css';
import { Helmet } from 'react-helmet-async';

export function VznikámeTitle() {
    return (<></>)
}

export function VznikámeNotifikace() {
    return (
        <></>
    )
}

export default function Vznikáme() {
    return (
        <div id='beginningContent'>
            <Helmet>
                <title>Chci být součástí! · ČSA</title>
                <meta name="description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta property="og:title" content="Chci být součástí! · ČSA" />
                <meta property="og:description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta property="og:image" content={`${process.env.PUBLIC_URL}/assets/bannerNECHCETEMIPODEPSATPETICI.png`} />
                <meta property="og:url" content="https://www.ceskastranaasocialu.cz/pomoc/vznikame" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Chci být součástí! · ČSA" />
                <meta name="twitter:description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/assets/bannerNECHCETEMIPODEPSATPETICI.png`} />
            </Helmet>
            <div id="beginningContentWrapper">
                <div>
                    <Title>Chci být součástí!</Title>
                </div>
	        <span className="sectionTitle">Přihláška do Strany</span>
                <iframe src="https://socializace.asocialove.cz/embed/membership" allowTransparency="true" title="Přihlašovací formulář do České Strany Asociálů"/> 
            </div>
        </div>
    )
}
