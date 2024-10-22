import Carousel from "../../components/Carousel/Carousel.js";
import Kája from "../../images/main-page-carousel/kaja.png";
import Konrád from "../../images/main-page-carousel/konrad.png"
import Filip from "../../images/main-page-carousel/filip.png"
import pepa from "../../images/main-page-carousel/pepa.png"
import hovno from "../../images/main-page-carousel/hovno.png"
import Sisina from "../../images/main-page-carousel/sisina.png"
import Title from "../../components/Title/Title.js";
import './Domov.css'

export default function Domov() {
    return (
        <>
            <div id="Hero">
                <Carousel show={1}>
                    <img src={Kája} alt=""/>
                    <img src={Konrád} alt="" />
                    <img src={Filip} alt="" />
                    <img src={pepa} alt="" />
                    <img src={hovno} alt="" />
                    <img src={Sisina} alt="" />
                </Carousel>
            </div>
            <div id="mainContent">
                <Title>Co je ČSA</Title>
                <p><b>ČSA</b> je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy.</p>
                <p>Více než strana je ČSA <b>internetová mikrokomunita</b>, kde každý člověk náhodně z internetu může přispět svým dílem. Grafické výtvory se pak dávají na sítě <a className="twitter" href="https://x.com/CAsocialu" target="_blank" rel="noreferrer">𝕏</a> a <a href="https://www.instagram.com/ceska_strana_asocialu/" target="_blank" rel="noreferrer">Instagram</a>. Někteří členové natáčí i videa na <a href="https://www.youtube.com/@ceskastranaasocialu7353" target="_blank" rel="noreferrer">YouTube</a>.</p>
                <p>Srdcem celé komunity je <a href="https://discord.gg/7TtJuwuCr9" target="_blank" rel="noreferrer">Discord server</a>, který je často aktivní a plný nadšenců do politiky. Cíl ČSA není vyhrávat volby, ale vytvořit platformu pro mladé lidi s <em><strong>neextrémistickými</strong></em> názory, kde mohou debatovat, zajímat se a dozvídat se o politice skrze vrstevníky s respektem a pro starší občany být platformou, kde mohou parodovat politiku a bavit se tím nebo dokonce dělat seriózní, <em>hlavně komunální</em>, politiku, pokud jim vadí všechny tradiční strany.</p>
            </div>
        </>
    )
}