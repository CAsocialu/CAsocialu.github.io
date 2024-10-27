import './Kontakty.css';
import { Helmet } from 'react-helmet';
import Title from '../../components/Title/Title';
import Instagram from '../../images/instagramLogo.svg';
import TwitterProfile from '../../components/TwitterProfile/TwitterProfile';
import InstagramProfile from '../../components/InstagramProfile/InstagramProfile';

export default function Kontakty() {
    return (
        <div id="contactsContent">
            <Helmet>
                <title>Kontakty · ČSA</title>
                <meta name="description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta property="og:title" content="Kontakty · ČSA" />
                <meta property="og:description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta property="og:image" content="/assets/banner.png" />
                <meta property="og:url" content="https://www.ceskastranaasocialu.cz/#/path" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Kontakty · ČSA" />
                <meta name="twitter:description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta name="twitter:image" content="/assets/banner.png" />
            </Helmet>
            <Title><em>Fuj, </em>Kontakty!</Title>
            <p>Můžete más kdykoliv kontaktovat přes email, Twitter, a Instagram.</p>
            <div id='contactsMain'>
                <span className="contactLine"><span className="material-symbols-outlined">alternate_email</span> <a href="mailto:ceskastrana.asocialu@gmail.com">ceskastrana.asocialu@gmail.com</a></span>
                <span className="contactLine"><span className="twitter"></span> <a href="https://x.com/CAsocialu">@CAsocialu</a></span>
                <span className="contactLine"><img src={ Instagram } height="24px" alt='' draggable="false"></img><a href="https://www.instagram.com/ceska_strana_asocialu/">@ceska_strana_asocialu</a></span>
            </div>
            <div id='profilesWrapper'>
                <TwitterProfile />
                <InstagramProfile />
            </div>
        </div>
    )
}