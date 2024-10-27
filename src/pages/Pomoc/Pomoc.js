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
            </Helmet>
            <Title>Chci pomoci</Title>
            <p>Pokud nám chcete pomoci, můžete pomoci sbírat podpisy. Napište nám email či do soukromých zpráv na <Link to="/kontakty">Instagramu nebo Twitteru</Link>, pak vám více řekne zástupce (správci sociálních sítí).<br />Pokud se chcete stát členem, na to si budete muset ještě chvíli počkat, dokud nenasbíráme alespoň 1000 podpisů :3</p>
            <p>Později tu přibude dotazník na členství a kam poslat peníze na podporu, prozatím si vychutnej obrázek kočičky :3</p>
            <img id="juHeleSisina" src={Sisina} alt='Sisina v její plné kráse' />
        </div>
    )
}