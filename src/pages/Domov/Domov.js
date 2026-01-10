import { Helmet } from "react-helmet-async";
/* import Carousel from "../../components/Carousel/Carousel.js";
import HlavníBanner from "../../images/main-page-carousel/banner.png";
import Kája from "../../images/main-page-carousel/kaja.png";
import Konrád from "../../images/main-page-carousel/konrad.png"
import Filip from "../../images/main-page-carousel/filip.png"
import pepa from "../../images/main-page-carousel/pepa.png" */
import logo from "../../images/home/logo.webp";
import './Domov.css'

import RandomPic0 from "../../images/home/randompics/0.jpg";
import RandomPic1 from "../../images/home/randompics/1.jpg";
import RandomPic2 from "../../images/home/randompics/2.jpg";
import RandomPic3 from "../../images/home/randompics/3.jpg";
import RandomPic4 from "../../images/home/randompics/4.jpg";
import RandomPic5 from "../../images/home/randompics/5.png";
import RandomPic6 from "../../images/home/randompics/6.png";
import RandomPic7 from "../../images/home/randompics/7.jpg";
import RandomPic8 from "../../images/home/randompics/8.jpg";
import RandomPic9 from "../../images/home/randompics/9.jpg";
import RandomPic10 from "../../images/home/randompics/10.png";
import RandomPic11 from "../../images/home/randompics/11.jpg";
import RandomPic12 from "../../images/home/randompics/12.png";
import RandomPic13 from "../../images/home/randompics/13.jpg";
import RandomPic14 from "../../images/home/randompics/14.jpg";
import RandomPic15 from "../../images/home/randompics/15.jpg";
import RandomPic16 from "../../images/home/randompics/16.jpg";
import RandomPic17 from "../../images/home/randompics/17.jpg";
import RandomPic18 from "../../images/home/randompics/18.jpg";
import RandomPic19 from "../../images/home/randompics/19.jpg";
import RandomPic20 from "../../images/home/randompics/20.png";
import RandomPic21 from "../../images/home/randompics/21.png";
import RandomPic22 from "../../images/home/randompics/22.png";
import RandomPic23 from "../../images/home/randompics/23.jpg";
import RandomPic24 from "../../images/home/randompics/24.png";
import RandomPic25 from "../../images/home/randompics/25.png";
import RandomPic26 from "../../images/home/randompics/26.jpg";
import RandomPic27 from "../../images/home/randompics/27.jpg";
import RandomPic28 from "../../images/home/randompics/28.jpg";
import RandomPic29 from "../../images/home/randompics/29.jpg";
import Hafík from "../../images/home/ČSApes.jpg"
import Vozík from "../../images/home/web_onas_dobyvanicernehomostu.png"
import Agenti from "../../images/home/web_onas_agentiGRU.png"
import Title from "../../components/Title/Title";

const randomPics = [RandomPic0, RandomPic1, RandomPic2, RandomPic3, RandomPic4, RandomPic5, RandomPic6, RandomPic7, RandomPic8, RandomPic9, RandomPic10, RandomPic11, RandomPic12, RandomPic13, RandomPic14, RandomPic15, RandomPic16, RandomPic17, RandomPic18, RandomPic19, RandomPic20, RandomPic21, RandomPic22, RandomPic23, RandomPic24, RandomPic25, RandomPic26, RandomPic27, RandomPic28, RandomPic29,]


export default function Domov() {
    let usedImageIndexes = [];
    let randomPicsArray = [];
    for (let i = 0; i < 2; i++) {
        let randomIndex = Math.floor(Math.random() * randomPics.length);
        while (usedImageIndexes.includes(randomIndex)) {
            randomIndex = Math.floor(Math.random() * randomPics.length);
        }
        usedImageIndexes.push(randomIndex);
        randomPicsArray.push(randomPics[randomIndex]);
    }
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
            {/* <div id="Hero">
                <Carousel show={1}>
                    <img src={HlavníBanner} alt="" draggable="false"/>
                    <img src={Kája} alt="" draggable="false"/>
                    <img src={Konrád} alt="" draggable="false"/>
                    <img src={Filip} alt="" draggable="false"/>
                    <img src={pepa} alt="" draggable="false"/>
                </Carousel>
            </div> */}
            <div id="mainContent">
                    <Title>O straně </Title>
                
                <div id="mainACTUALContent">
                    <div className="mainACTUALContentContainer">
                        <div className="mainACTUALContentTextContainer">
                            <p>Česká strana asociálů je 100% skutečná strana, která vše rozhodně bere vážně fr fr. Hlavní aktivita je na discordu, protože chodit ven je SOCIALIZACE. Je chronicky aktivní, můžete tam najít zastání každého politického smýšlení. Taky má sociální sítě, instagram a twitter, kde nás sledují skuteční lidé včetně politiků se smyslem pro humor. Stranu aktivně podporuje Židovsko-zednářské spiknutí, Ilumináti, Hamás, Izrael, tajný BDSM klubík pana Zeleného a taky vláda Kepleru-22b.</p>
                        </div>
                        <img src={logo} alt="Logo ČSA" className="logocsa" draggable="false"/>
                    </div>
                    <div className="mainACTUALContentContainer">
                        <div className="mainACTUALContentImageContainer"><img src={Vozík} draggable="false" alt="" /></div>
                        <div className="mainACTUALContentTextContainer">
                            <p>Všechno začalo roku -5 před naším letopočtem, kdy svět byl ještě v pořádku. Nikdo nechodil ven, svět byl bez válek... Ale poté vstal Ježíš Kristus a nutil lidi se mít rádi. To se nelíbilo mnoha lidem, a tak vzniká Odboj proti socializaci (tzv. <i>Antikristi</i>), tímto též vzniká první předchůdce ČSA, což z nás dělá nejstarší stranu.</p>
                        </div>
                    </div>
                    <div className="mainACTUALContentContainer"> 
                        <div className="mainACTUALContentTextContainer">
                            <p>Přesuneme se do 24. května 2022, kdy se třem lidem před očima zjevili předchozí antikristi a řekli: „Nyní je Váš úkol bojovat proti socializaci!"<br />Hned se udělali účty na sociálních sítích na šíření asocialismu a po dvou měsících mínus deset dní i Discord.</p>
                        </div>
                        <div className="mainACTUALContentImageContainer"><img src={Agenti} draggable="false" alt="" /></div>
                    </div>
                    <div className="mainACTUALcontentStanovy">
                        <div className="stanovy">
                        <a download={true} className="časnovýroman" href="/assets/ČSA Stanovy, times new roman.pdf">stanovy v times new roman</a>
                        <a download={true} className="komickýsans" href="/assets/ČSA Stanovy, ale comic sans.pdf">stanovy v comic sans</a>
                        <a download={true} className="třetífont" href="/assets/ČSA Stanovy, ale s fontem, který nezvládá česká písmenka.pdf">stanovy v tom třetím fontu</a>
                        </div>
                        <div className="pravýtext">
                        <p>Jelikož nás stát nemá rád, jsme zákonem povinni na naše webovky dát stanovy. Nebylo ale nikým řečeno, jak musí vypadat, takže si můžete vybrat ze tří oku lahodících designů. </p>
                        </div>
                    </div>
                    <div className="mainContactsContainer" style={{backgroundImage: `url(${Hafík})`, backgroundSize: 'cover', backgroundPosition: 'center 50%', backgroundRepeat: 'no-repeat'}}>
                        <div className="mainACTUALContactsContainer">
                            <Title>KONTAKTY</Title>
                            <a href="https://www.instagram.com/ceska_strana_antisocialni/" target="_blank" rel="noreferrer noopener">stranický instagram</a>
                            <a href="https://twitter.com/CAsocialu" target="_blank" rel="noreferrer noopener">stranický twitter</a>
                            <a href="https://www.facebook.com/people/%C4%8Cesk%C3%A1-Strana-Asoci%C3%A1l%C5%AF/61582914953606/" target="_blank" rel="noreferrer noopener">koho zajímá facebook</a>
                            <a href="https://discord.gg/E5RK8VKpyT" target="_blank" rel="noreferrer noopener">chronicky on-line dyskord</a>
                            <a href="https://www.youtube.com/@ceskastranaasocialu7353" target="_blank" rel="noreferrer noopener">mrtvý youtube</a>
                            <a href="mailto:ceskastrana.asocialu@gmail.com" target="_blank" rel="noreferrer noopener">ceskastrana.asocialu@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}