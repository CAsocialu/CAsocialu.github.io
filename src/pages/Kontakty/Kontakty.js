import './Kontakty.css';
import Title from '../../components/Title/Title';
import Instagram from '../../images/instagramLogo.svg';
import TwitterProfile from '../../components/TwitterProfile/TwitterProfile';
import InstagramProfile from '../../components/InstagramProfile/InstagramProfile';

export default function Kontakty() {
    return (
        <div id="contactsContent">
            <Title><em>Fuj, </em>Kontakty!</Title>
            <p>Můžete más kdykoliv kontaktovat přes email, Twitter, a Instagram.</p>
            <div id='contactsMain'>
                <span className="contactLine"><span className="material-symbols-outlined">alternate_email</span> <a href="mailto:ceskastrana.asocialu@gmail.com">ceskastrana.asocialu@gmail.com</a></span>
                <span className="contactLine"><span className="twitter"></span> <a href="https://x.com/CAsocialu">@CAsocialu</a></span>
                <span className="contactLine"><img src={ Instagram } height="24px" alt=''></img><a href="https://www.instagram.com/ceska_strana_asocialu/">@ceska_strana_asocialu</a></span>
            </div>
            <div id='profilesWrapper'>
                <TwitterProfile />
                <InstagramProfile />
            </div>
        </div>
    )
}