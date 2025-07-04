import { Helmet } from "react-helmet-async";
import Carousel from "../../components/Carousel/Carousel.js";
import HlavníBanner from "../../images/main-page-carousel/banner.png";
import Kája from "../../images/main-page-carousel/kaja.png";
import Konrád from "../../images/main-page-carousel/konrad.png"
import Filip from "../../images/main-page-carousel/filip.png"
import pepa from "../../images/main-page-carousel/pepa.png"
import Title from "../../components/Title/Title.js";
import logoPainting from "../../images/home/logoPainting.png";
import předsedovéPainting from "../../images/home/předsedovéPainting.png";
import './Domov.css'

export default function Domov() {
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
                    <img src={HlavníBanner} alt="" draggable="false"/>
                    <img src={Kája} alt="" draggable="false"/>
                    <img src={Konrád} alt="" draggable="false"/>
                    <img src={Filip} alt="" draggable="false"/>
                    <img src={pepa} alt="" draggable="false"/>
                </Carousel>
            </div>
            <div id="mainContent">
                <Title>Co je to ČSA?!?</Title>
                <div id="mainACTUALContent">
                    <div className="mainACTUALContentContainer">
                        <img src={logoPainting} alt="Logo ČSA" draggable="false"/>
                        <div className="mainACTUALContentTextContainer">
                            <p><b>ČSA</b> je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy.</p>
                            <p>Více než strana je ČSA <b>internetová mikrokomunita</b>, kde každý člověk náhodně z internetu může přispět svým dílem. Grafické výtvory se pak dávají na sítě <a className="twitter" href="https://x.com/CAsocialu" target="_blank" rel="noreferrer">𝕏</a> a <a href="https://www.instagram.com/ceska_strana_asocialu/" target="_blank" rel="noreferrer">Instagram</a>. Někteří členové natáčí i videa na <a href="https://www.youtube.com/@ceskastranaasocialu7353" target="_blank" rel="noreferrer">YouTube</a>.</p>
                        </div>
                    </div>
                    <div className="mainACTUALContentContainer">
                        <img src={předsedovéPainting} alt="Předsedové strany na tiskovce" draggable="false"/>
                        <p>Srdcem celé komunity je <a href="https://discord.gg/7TtJuwuCr9" target="_blank" rel="noreferrer">Discord server</a>, který je často aktivní a plný nadšenců do politiky. Cíl ČSA není vyhrávat volby, ale vytvořit platformu pro mladé lidi s <em><strong>neextrémistickými</strong></em> názory, kde mohou debatovat, zajímat se a dozvídat se o politice skrze vrstevníky s respektem a pro starší občany být platformou, kde mohou parodovat politiku a bavit se tím nebo dokonce dělat seriózní, <em>hlavně komunální</em>, politiku, pokud jim vadí všechny tradiční strany.</p>
                    </div>
                </div>
            </div>
        </>
    )
}