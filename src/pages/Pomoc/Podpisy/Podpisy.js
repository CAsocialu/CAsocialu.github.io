import Title from '../../../components/Title/Title';
import './Podpisy.css';
import { Helmet } from 'react-helmet-async';
import Sisina from '../../../images/Koček.jpg'

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
                <div>
                    <Title>Chci být součástí!</Title>
                </div>
                <div id="signaturesNote">Zatím být nemůžeš, protože zlý stát nás pořád neschválil<br /> Zatím se však můžes podívat na Sisinu </div>
                <div className='koček'>
                <img src={Sisina} draggable="false"  alt="" />
                </div>
            </div>
        </div>
    )
}