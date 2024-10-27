import './Pomoc.css'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Title from "../../components/Title/Title"
import Sisina from "../../images/help/jů hele, Sisina(výkřičník) (dvojtečka tři).jpg"

export default function Pomoc() {
    return (
        <div id="helpContent">
            <Helmet>
                <title>Chci pomoci · ČSA</title>
                <meta name="description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta property="og:title" content="Chci pomoci · ČSA" />
                <meta property="og:description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta property="og:image" content="/assets/banner.png" />
                <meta property="og:url" content="https://www.ceskastranaasocialu.cz/#/path" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Chci pomoci · ČSA" />
                <meta name="twitter:description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta name="twitter:image" content="/assets/banner.png" />
            </Helmet>
            <Title>Chci pomoci</Title>
            <p>Pokud nám chcete pomoci, můžete pomoci sbírat podpisy. Napište nám email či do soukromých zpráv na <Link to="/kontakty">Instagramu nebo Twitteru</Link>, pak vám více řekne zástupce (správci sociálních sítí).<br />Pokud se chcete stát členem, na to si budete muset ještě chvíli počkat, dokud nenasbíráme alespoň 1000 podpisů :3</p>
            <p>Později tu přibude dotazník na členství a kam poslat peníze na podporu, prozatím si vychutnej obrázek kočičky :3</p>
            <img id="juHeleSisina" src={Sisina} alt='Sisina v její plné kráse' />
        </div>
    )
}