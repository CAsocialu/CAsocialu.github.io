import './Sraz2025.css';
import Liberec from '../../images/sraz2025/liberec.png';
import Praha from '../../images/sraz2025/praha.png';
import { Helmet } from 'react-helmet-async';
import Title from '../../components/Title/Title';
import Notification from '../../components/Notification/Notification';

export function Sraz2025Title() {
    return (<Title>ČSA Sraz 2025</Title>);
}

export function Sraz2025Notification() {
    return (
        <div className="notificationsStack">
            <Notification title="VSTUP ZDARMA, TAK PŘIJĎTE!" message="Oficiální sraz ČSA v Praze a Liberci. Těšíme se na vás!" />
        </div>
    );
}

export default function Sraz2025() {
    return (
        <div id='sraz2025Content'>
            <Helmet>
                <title>ČSA Sraz 2025 · ČSA</title>
                <meta name="description" content="Oficiální sraz České Strany Asociálů v roce 2025. Přijďte na přednášku, divadlo, pokec, nebo jen koukat do zdi!" />
                <meta property="og:title" content="ČSA Sraz 2025 · ČSA" />
                <meta property="og:description" content="Oficiální sraz České Strany Asociálů v roce 2025. Přijďte na přednášku, divadlo, pokec, nebo jen koukat do zdi!" />
                <meta property="og:image" content={`${process.env.PUBLIC_URL}/assets/bannerSRAZ2025.png`} />
                <meta property="og:url" content="https://www.ceskastranaasocialu.cz/sraz2025" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="ČSA Sraz 2025 · ČSA" />
                <meta name="twitter:description" content="Oficiální sraz České Strany Asociálů v roce 2025. Přijďte na přednášku, divadlo, pokec, nebo jen koukat do zdi!" />
                <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/assets/bannerSRAZ2025.png`} />
            </Helmet>
            <div id="sraz2025ContentWrapper">
                <div className="sraz2025-events">
                    <div className="sraz2025-event">
                        <img src={Praha} alt="Plakát Praha 2025" className="sraz2025-poster" />
                        <div className="sraz2025-event-info">
                            <h2>PRAHA</h2>
                            <p><strong>19. ČERVENEC</strong></p>
                            <p>ŠLIKOVA ULICE 402/15</p>
                        </div>
                    </div>
                    <div className="sraz2025-details">
                        <h3>CO VŠE BUDE MOŽNÉ DĚLAT NA SRAZU?</h3>
                        <ul>
                            <li>🗣️ Poslouchat cimrmanovskou přednášku</li>
                            <li>🏛️ Dívat se na činohru dělanou asociálním hereckým sborem</li>
                            <li>🫂 Bavit se s lidmi</li>
                            <li>🍻 Opít se (18+)</li>
                            <li>🚷 Koukat do zdi bez jediného řečeného slova</li>
                        </ul>
                        <p className="sraz2025-term-note"><em>máme dva termíny!</em></p>
                        <p className="sraz2025-program-note">*program zveřejníme v průběhu června*</p>
                    </div>
                    <div className="sraz2025-event">
                        <img src={Liberec} alt="Plakát Liberec 2025" className="sraz2025-poster" />
                        <div className="sraz2025-event-info">
                            <h2>LIBEREC</h2>
                            <p><strong>16. SRPEN</strong></p>
                            <p>CHRASTAVSKÁ ULICE 513/16a</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 