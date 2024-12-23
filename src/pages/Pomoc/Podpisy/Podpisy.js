import './Podpisy.css';
import { Helmet } from 'react-helmet-async';
import Title from '../../../components/Title/Title';

export default function Podpisy() {
    return (
        <div id='signaturesContent'>
            <Helmet>
                <title>Sbíráme podpisy! · ČSA</title>
                <meta name="description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta property="og:title" content="Sbíráme podpisy! · ČSA" />
                <meta property="og:description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta property="og:image" content={`${process.env.PUBLIC_URL}/assets/bannerDEJTENÁMVŠECHNYVAŠEPRACHY.png`} />
                <meta property="og:url" content="https://www.ceskastranaasocialu.cz/pomoc/podpisy" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Sbíráme podpisy! · ČSA" />
                <meta name="twitter:description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/assets/bannerDEJTENÁMVŠECHNYVAŠEPRACHY.png`} />
            </Helmet>
            <Title>Sbíráme podpisy!</Title>
            <div id="signaturesContentWrapper">
                <h3>PROČ BÝT DOBROVOLNÍKEM</h3>
                <p>POMŮŽETE STRANĚ! To by měl být hlavní důvod proč do toho jít. Potkáte nové lidi, což není motivace... Potkáte nové lidi s těžkou sociální úzkostí, takže mluvení s lidmi bude méně bolestivé! To už je motivace! A samozřejmě další motivací je, že nebudete jen doma sedět na prdeli, budete v osmdesáti pravnoučatům vyprávět, jak vás zbili bezdomovci před nádražím, protože chtěli z podpisových archů ubalit brka...</p>

                <h3>JAK TO PROBÍHÁ</h3>
                <p>U nás na discordu se domlouvají data a místa kde podpisy sbírat, ve stanoveném datumu prostě můžete, ale nemusíte, přijet na místo a sbírat podpisy. Skvělé je, že my jako strana vám nebudeme kecat do toho kdy, kde a jak podpisy sbírat. To si domlouváte jako místní mezi sebou.</p>

                <h3>JAK SE PŘIHLÁSIT</h3>
                <p>Na webu i v linktree máme → <a href="https://docs.google.com/forms/d/e/1FAIpQLScR7vYZjbuzH8do5-OYTCfQR18WmnuNvie-u3Z9aqAW41R71A/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">odkaz na přihlášku</a> ←. Sami se ozveme po tom, co ji vyplníte. Pozveme vás na discord a dáme vám roli, díky které potom budete moct komunikovat ve speciálních kanálech.</p>

                <h3>CO DOSTANETE?</h3>
                <p>NIC! <em>Počkej, jakože ani dobrý poc-</em><strong>NIC!</strong> DOBRÝ POCIT SI NECHÁVÁME PRO SEBE! SAMI MÁME MÁLO! Nic nedostanete!</p>

                <h3>V JAKÉM ČASOVÉM ROZMEZÍ SE BUDOU SBÍRAT PODPISY</h3>
                <p>Od prakticky nyní do dubna. Nemusíte sbírat všude a nemusíte být všude. Vše záleží na domluvě a na vás.</p>

                <h3>JAK SE DOVÍM, ŽE SE BUDE SBÍRAT V MÉM MĚSTĚ?</h3>
                <p>Pokud chcete pomoci straně ale je hrozně těžký dojít na místo a sbírat je, můžete se prostě jen dostavit, podepsat petici a odejít! Budeme stále rádi! Všechny datumy budou na našem webu a budeme je sdílet i na všech sociálních sítích</p>

            </div>
        </div>
    )
}