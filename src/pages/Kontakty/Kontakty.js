import './Kontakty.css';
import Instagram from '../../images/instagramLogo.svg';

export default function Kontakty() {
    return (
        <div id="contactsContent">
            <h1><em>Fuj, </em>Kontakty!</h1>
            <p>Můžete más kdykoliv kontaktovat přes email, <span className='twitter'>𝕏</span>, a Instagram.</p>
            <div id='contactsMain'>
                <span className="contactLine"><span className="material-symbols-outlined">alternate_email</span> <a href="mailto:ceskastrana.asocialu@gmail.com">ceskastrana.asocialu@gmail.com</a></span>
                <span className="contactLine"><span className="twitter">𝕏</span> <a href="https://x.com/CAsocialu">@CAsocialu</a></span>
                <span className="contactLine"><img src={ Instagram } height="24px" alt=''></img><a href="https://www.instagram.com/ceska_strana_asocialu/">@ceska_strana_asocialu</a></span>
            </div>
        </div>
    )
}