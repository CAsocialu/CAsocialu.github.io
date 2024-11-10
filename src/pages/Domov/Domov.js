import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import Carousel from "../../components/Carousel/Carousel.js";
import HlavníBanner from "../../images/main-page-carousel/banner.png";
import Kája from "../../images/main-page-carousel/kaja.png";
import Konrád from "../../images/main-page-carousel/konrad.png"
import Filip from "../../images/main-page-carousel/filip.png"
import pepa from "../../images/main-page-carousel/pepa.png"
import hovno from "../../images/main-page-carousel/hovno.png"
import Sisina from "../../images/main-page-carousel/sisina.png"
import Československo from "../../images/main-page-carousel/ceskoslovensko.png"
import Ace from "../../images/main-page-carousel/asexualita.png"
import Title from "../../components/Title/Title.js";
import {default as Image} from "../../components/ImageWithText/ImageWithText.js";
import logoPainting from "../../images/home/logoPainting.png";
import předsedovéPainting from "../../images/home/předsedovéPainting.png";
import Vánoce from "../../images/main-page-carousel/vánoce.png";
import rozdělení from "../../images/main-page-carousel/rozdělení.png";
import './Domov.css'
import { CelebrationContext } from "../../App.js";

export default function Domov() {
    const celebrationStatus = useContext(CelebrationContext)
    return (
        <>
            <Helmet>
                <title>Česká Strana Asociálů</title>
                <meta name="description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta property="og:title" content="Česká Strana Asociálů" />
                <meta property="og:description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta property="og:image" content={`${process.env.PUBLIC_URL}/assets/banner.png`} />
                <meta property="og:url" content="https://www.ceskastranaasocialu.cz/#/path" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Česká Strana Asociálů" />
                <meta name="twitter:description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/assets/banner.png`} />
            </Helmet>
            <div id="Hero">
                <Carousel show={1}>
                    <img src={Vánoce} alt="" draggable="false" valid-from="2024-12-24" valid-until="2024-12-27" />
                    <img src={rozdělení} alt="" draggable="false" valid-from="2025-01-01" valid-until="2025-01-02" />
                    { celebrationStatus.aceCelebration && (<img src={Ace} alt="" draggable="false"/>) }
                    { celebrationStatus.czechoslovakIndependency && (<img src={Československo} alt="" draggable="false"/>) }
                    <img src={HlavníBanner} alt="" draggable="false"/>
                    <img src={Kája} alt="" draggable="false"/>
                    <img src={Konrád} alt="" draggable="false"/>
                    <img src={Filip} alt="" draggable="false"/>
                    <img src={pepa} alt="" draggable="false"/>
                    <img src={hovno} alt="" draggable="false"/>
                    <img src={Sisina} alt="" draggable="false"/>
                </Carousel>
            </div>
            <div id="mainContent">
                <Title>Co je ČSA?</Title>
                <div id="mainACTUALContent">
                    <Image src={logoPainting} alt="Logo ČSA" style={{gridColumn: "1", width: "100%"}} draggable="false"/>
                    <p style={{gridColumn: "2/4"}}><b>ČSA</b> je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy.</p>
                    <p style={{ gridColumn: "2/4" }}>Více než strana je ČSA <b>internetová mikrokomunita</b>, kde každý člověk náhodně z internetu může přispět svým dílem. Grafické výtvory se pak dávají na sítě <a className="twitter" href="https://x.com/CAsocialu" target="_blank" rel="noreferrer">𝕏</a> a <a href="https://www.instagram.com/ceska_strana_asocialu/" target="_blank" rel="noreferrer">Instagram</a>. Někteří členové natáčí i videa na <a href="https://www.youtube.com/@ceskastranaasocialu7353" target="_blank" rel="noreferrer">YouTube</a>.</p>
                    <Image src={předsedovéPainting} alt="Předsedové strany na tiskovce" style={{gridColumn: "3", width: "100%"}} draggable="false"/>
                    <p style={{gridColumn: "1/3", gridRow: "4"}}>Srdcem celé komunity je <a href="https://discord.gg/7TtJuwuCr9" target="_blank" rel="noreferrer">Discord server</a>, který je často aktivní a plný nadšenců do politiky. Cíl ČSA není vyhrávat volby, ale vytvořit platformu pro mladé lidi s <em><strong>neextrémistickými</strong></em> názory, kde mohou debatovat, zajímat se a dozvídat se o politice skrze vrstevníky s respektem a pro starší občany být platformou, kde mohou parodovat politiku a bavit se tím nebo dokonce dělat seriózní, <em>hlavně komunální</em>, politiku, pokud jim vadí všechny tradiční strany.</p>
                </div>
            </div>
        </>
    )
}